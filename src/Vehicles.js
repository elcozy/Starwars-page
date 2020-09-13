import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [total, setTotal] = useState(0);
  const [range, setRange] = useState("0");
  const [page, setPage] = useState(1);
  const [hasPrevious, setHasPrevious] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = `https://swapi.dev/api/vehicles/?page=${page}`;
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((vehicle) => {
        setVehicles(vehicle.results);
        setTotal(vehicle.count);
        setHasPrevious(!!vehicle.previous);
        setHasNext(!!vehicle.next);
        const range = (page - 1) * 10 + 1;
        setRange(`${range} - ${range + vehicle.results.length}`);
        setLoading(false);
      });
  }, [page]);
  return (
    <div className="vehicles">
      <div className="sub-main">
        <div className="container-fluid main mainspace back justify-content-center justify-content-md-between">
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
              placeholder="Search for vehicles"
            />
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="table-card">
          <div className="" style={{ overflowX: "auto" }}>
            <table class="table table-borderless table-hover">
              <thead>
                <tr className="border-bottom">
                  <th scope="col"> </th>
                  <th scope="col">Vehicle Name</th>
                  <th scope="col">Vehicle Model</th>
                  <th scope="col">Vehicle Class</th>
                  <th scope="col">Vehicle Manufacturer</th>
                  <th scope="col">Vehicle Length</th>
                  <th scope="col">Crew</th>
                  <th scope="col">Passengers</th>
                  <th scope="col">Cargo Capacity</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle, i) => (
                  <tr key={i}>
                    <th scope="row">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id={`customCheck${i}`}
                        />
                        <label
                          class="custom-control-label"
                          for={`customCheck${i}`}
                        ></label>
                      </div>
                    </th>
                    <td>{vehicle.name}</td>
                    <td>{vehicle.model}</td>
                    <td>Wheeled</td>
                    <td>{vehicle.manufacturer}</td>
                    <td>{vehicle.length}</td>
                    <td>{vehicle.crew}</td>
                    <td>{vehicle.passenger}</td>
                    <td>{vehicle.cargo_capacity}</td>
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
