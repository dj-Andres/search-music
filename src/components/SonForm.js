import { useState } from "react";
import Swal from "sweetalert2";

const initialForm = {
  artista: "",
  musica: "",
};

const SonForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artista || !form.musica) {
      return Swal.fire("opps", "You must complete all the requested fields !", "error");
    } else {
      handleSearch(form);
      setForm(initialForm);
    }
  };
  return (
    <div className="mt-2">
      <div className="card bg-light mb-3">
        <div className="card-body">
          <h4 className="card-title">Music Finder</h4>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Artist"
                    className="form-control"
                    name="artista"
                    onChange={handleChange}
                    value={form.artista}
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Music Name"
                    className="form-control"
                    name="musica"
                    onChange={handleChange}
                    value={form.musica}
                  />
                  <span className="input-group-btn ml-2">
                    <button className="btn btn-primary" type="submit">
                      <span className="fas fa-search"></span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SonForm;
