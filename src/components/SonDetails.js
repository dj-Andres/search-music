import SonArtist from "./SonArtist";
import SonLyric from "./SonLiryc";
import Message from "./Message";

const SonDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;
  return (
    <>
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: No existe la canción ${search.musica}`}
          bgColor="#dc3545"
        />
      ) : (
        <SonLyric title={search.musica} lyric={lyric.lyrics} />
      )}
      {bio.artists ? (
        <SonArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: No existe el artista ${search.artista}`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SonDetails;
