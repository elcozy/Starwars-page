import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { starshipsB } from "./backupData";

export default function Starships() {
  const [starships, setStarships] = useState([]);
  const [total, setTotal] = useState(0);
  const [range, setRange] = useState("0");
  const [page, setPage] = useState(1);
  const [hasPrevious, setHasPrevious] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = `https://swapi.dev/api/starships/?page=${page}`;
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((starship) => {
        setStarships(starship.results);
        setTotal(starship.count);
        setHasPrevious(!!starship.previous);
        setHasNext(!!starship.next);
        const range = (page - 1) * 10 + 1;
        setRange(`${range} - ${range + starship.results.length}`);
        setLoading(false);
      })
      .catch((error) => {
        setStarships(starshipsB);
        setTotal(36);
        console.error("Error:", error);
      });
  }, [page]);
  return (
    <div className="starships">
      <div className="sub-main">
        <div className="container-fluid main mainspace back justify-content-center justify-content-md-between">
          <div className="cont">
            <Link
              className="d-flex align-items-center
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

          <div className="search">
            <input
              type="text"
              className="searchTerm pl-3"
              placeholder="Search for starship"
            />
            <button type="submit" className="searchButton">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="table-card">
          <div className="" style={{ overflowX: "auto" }}>
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col"> </th>
                  <th scope="col">Name </th>
                  <th scope="col">Model</th>
                  <th scope="col">Class</th>
                  <th scope="col">Cost (in GC)</th>
                  <th scope="col">Passengers</th>
                  <th scope="col">Length</th>
                  <th scope="col">Crew</th>
                </tr>
              </thead>
              <tbody>
                {starships.map((starship, i) => (
                  <tr key={i}>
                    <th scope="row">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id={`customCheck${i}`}
                        />
                        <label
                          className="custom-control-label"
                          for={`customCheck${i}`}
                        ></label>
                      </div>
                    </th>
                    <td>{starship.name}</td>
                    <td>{starship.model}</td>
                    <td>{starship.starship_class}</td>
                    <td>{starship.cost_in_credits} GC</td>
                    <td>{starship.passengers}</td>
                    <td>{starship.lenght} Metres</td>
                    <td>{starship.crew}</td>
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
