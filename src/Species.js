import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Species(params) {
  const [species, setSpecies] = useState([]);
  const [total, setTotal] = useState(0);
  const [range, setRange] = useState("0");
  const [page, setPage] = useState(1);
  const [hasPrevious, setHasPrevious] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = `https://swapi.dev/api/species/?page=${page}`;
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((specie) => {
        setSpecies(specie.results);
        setTotal(specie.count);
        setHasPrevious(!!specie.previous);
        setHasNext(!!specie.next);
        const range = (page - 1) * 10 + 1;
        setRange(`${range} - ${range + specie.results.length}`);
        setLoading(false);
      });
  }, [page]);
  return (
    <div className="species">
      <div className="sub-main">
        <div className="container-fluid main mainspace back">
          <div className="cont">
            <Link
              class="d-flex align-items-center
        "
              to="/dashboard"
            >
              &lt;&nbsp;<p>back</p>
            </Link>
            <h5>{total} Total</h5>
            <h5>
              Showing {range} of {total}
            </h5>
            <button
              disabled={loading || !hasPrevious}
              onClick={() => setPage(page - 1)}
            >
              &lt;
            </button>
            <button
              disabled={loading || !hasNext}
              onClick={() => setPage(page + 1)}
            >
              &gt;
            </button>
          </div>

          <div class="search">
            <input
              type="text"
              class="searchTerm pl-3"
              placeholder="Search for species"
            />
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>{" "}
      <div className="col">
        <div className="table-card">
          <div className="" style={{ overflowX: "auto" }}>
            <table class="table table-borderless table-hover">
              <thead>
                <tr className="border-bottom">
                  <th scope="col"> </th>

                  <th scope="col">Name</th>
                  <th scope="col">Classification</th>
                  <th scope="col">Designation</th>
                  <th scope="col">Average Height</th>
                  <th scope="col">Average Lifespan</th>
                  <th scope="col">Eye colors</th>
                  <th scope="col">Hair colors</th>
                  <th scope="col">Language</th>
                </tr>
              </thead>
              <tbody>
                {species.map((specie, i) => (
                  <tr key={i}>
                    <th scope="row">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customCheck1"
                        />
                        <label
                          class="custom-control-label"
                          for="customCheck1"
                        ></label>
                      </div>
                    </th>
                    <td>{specie.name}</td>
                    <td>{specie.classification}</td>
                    <td>{specie.designation}</td>
                    <td>{specie.average_height}</td>
                    <td>{specie.average_lifespan}</td>
                    <td>{specie.eye_colors}</td>
                    <td>{specie.hair_colors}</td>
                    <td>{specie.language}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
