import { useEffect, useState } from "react";
import { helpHttp } from "./../helpers/helpHttp";
import SonDetails from "./SonDetails";
import SonForm from "./SonForm";
import Loader from "./Loader";

const SonSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (data) => {
    setSearch(data);
  };

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artista, musica } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artista}/${musica}`;

      setLoading(true);

      const [artistRes, SongRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      setBio(artistRes);
      setLyric(SongRes);
      setLoading(false);
    };

    fetchData();
  }, [search]);

  return (
    <div className="container-fluid">
      <article>
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12">
            <SonForm handleSearch={handleSearch} />
          </div>
        </div>
      </article>
      {loading && <Loader />}
      {search && !loading && (
        <div className="row container-fluid">
          <SonDetails search={search} lyric={lyric} bio={bio} />
        </div>
      )}
    </div>
  );
};

export default SonSearch;
