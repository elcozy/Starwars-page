import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function People() {
  const [peoples, setPeoples] = useState([]);
  const [total, setTotal] = useState(0);
  const [range, setRange] = useState("0");
  const [page, setPage] = useState(1);
  const [hasPrevious, setHasPrevious] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = `https://swapi.dev/api/people/?page=${page}`;
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((people) => {
        setPeoples(people.results);
        setTotal(people.count);
        setHasPrevious(!!people.previous);
        setHasNext(!!people.next);
        const range = (page - 1) * 10 + 1;
        setRange(`${range} - ${range + people.results.length}`);
        setLoading(false);
      });
  }, [page]);
  return (
    <div className="people">
      <div className="sub-main">
        <div className="container-fluid main mainspace back">
          <div className="cont">
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
              placeholder="Search for people"
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
                  <th scope="col">Name </th>
                  <th scope="col">Birth year</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Eye color</th>
                  <th scope="col">Hair color</th>
                  <th scope="col">Height</th>
                  <th scope="col">Mass</th>
                  <th scope="col">Skin color</th>
                  <th scope="col">Created</th>
                </tr>
              </thead>
              <tbody>
                {peoples.map((people, i) => (
                  <tr key={i}>
                    <td>
                      <div>
                        <div className="img">
                          <object data="./images.jpeg" />
                        </div>
                        <span>{people.name}</span>
                      </div>
                    </td>
                    <td>{people.birthyear}</td>
                    <td>{people.gender}</td>
                    <td>{people.eye_color}</td>
                    <td>{people.hair_color}</td>
                    <td>{people.height}CM</td>
                    <td>{people.mass}KG</td>
                    <td>{people.skin_color}</td>
                    <td>{people.created}</td>
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
