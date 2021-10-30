const SonArtist = ({ artist }) => {
  return (
    <div className="col-md-6 col-sm-12">
      <div className="card bg-light border-primary">
        <img
          src={artist.strArtistThumb}
          className="card-img-top"
          alt={artist.strArtist}
        />
        <div className="card-body">
          <h3>{artist.strArtist}</h3>
          <p>
            {artist.intBornYear} - {artist.intFormedYear || "Present"}
          </p>
          <a
            href={`http://${artist.strWebsite}`}
            className="btn btn-block btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Website
          </a>
          <p>{artist.strBiographyEN}</p>
        </div>
      </div>
    </div>
  );
};

export default SonArtist;
