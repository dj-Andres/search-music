const SonLiryc = ({title,lyric}) => {
  return (
    <div className="col-md-6 col-sm-12 mb-2">
      <div className="card bg-light border-primary">
        <div className="card-body">
          <section>
            <h3>{title}</h3>
            <blockquote style={{ whiteSpace: "pre-wrap" }}>
              {lyric}
            </blockquote>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SonLiryc;
