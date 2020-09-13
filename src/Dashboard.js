import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [films, setFilms] = useState([]);
  const [filmsCount, setFilmsCount] = useState(0);
  const [speciesCount, setSpeciesCount] = useState(0);
  const [peopleCount, SetPeopleCount] = useState(0);
  const [vehiclesCount, setVehiclesCount] = useState(0);
  const [starshipCount, setStarshipCount] = useState(0);

  useEffect(() => {
    const url = `https://swapi.dev/api/films/`;
    const url_starship = `https://swapi.dev/api/starships/`;
    const url_vehicles = `https://swapi.dev/api/vehicles/`;
    const url_people = `https://swapi.dev/api/people/`;
    const url_species = `https://swapi.dev/api/species/`;
    fetch(url)
      .then((response) => response.json())
      .then((film) => {
        setFilmsCount(film.count);

        setFilms(film.results);
      });
    fetch(url_starship)
      .then((response) => response.json())
      .then((starship) => setStarshipCount(starship.count));
    fetch(url_vehicles)
      .then((response) => response.json())
      .then((vehicles) => {
        setVehiclesCount(vehicles.count);
      });
    fetch(url_people)
      .then((response) => response.json())
      .then((people) => {
        SetPeopleCount(people.count);
      });
    fetch(url_species)
      .then((response) => response.json())
      .then((species) => {
        setSpeciesCount(species.count);
      });
  }, []);

  return (
    <div>
      <div className="sub-main">
        <div className="container-fluid main maindash back">
          <div class="form-group mr-3 my-auto">
            <select
              class="form-control pr-5 select"
              id="exampleFormControlSelect1"
            >
              <option>Current Year</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group my-auto">
            <select
              class="form-control pr-5 select"
              id="exampleFormControlSelect1"
            >
              <option>Current Year</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container-fluid dashboard">
        <div className=""></div>
        <div className="card-container">
          <div className="col-6 col-md-6 col-lg-4 col-xl  wrapper-card">
            <div className="card-single">
              <div className="main">
                <span className="name">Films</span>
                <span className="icon">
                  <div className="pics">
                    <object data="./video-camera (1).svg" />
                  </div>
                </span>
              </div>
              <h5 className="number">{filmsCount}</h5>
              <h5 className="stats">
                &#8593; {Math.floor(filmsCount / 4)}&nbsp;
                <span className="">More than yesterday</span>
              </h5>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-4 col-xl  wrapper-card">
            <div className="card-single">
              <div className="main">
                <span className="name">Starships</span>
                <span className="icon">
                  <div className="pics star">
                    <object data="./ufo.svg" />
                  </div>
                </span>
              </div>
              <h5 className="number">{starshipCount}</h5>
              <h5 className="stats">
                &#8593; {Math.floor(starshipCount / 3)}&nbsp;
                <span className="">More than yesterday</span>
              </h5>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-4 col-xl  wrapper-card">
            <div className="card-single">
              <div className="main">
                <span className="name">People</span>
                <span className="icon">
                  <div className="pics peop">
                    <object data="./group-of-students.svg" />
                  </div>
                </span>
              </div>
              <h5 className="number">{peopleCount}</h5>
              <h5 className="stats">
                &#8593; {Math.floor(peopleCount / 5)}&nbsp;
                <span className="">More than yesterday</span>
              </h5>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-4 col-xl  wrapper-card">
            <div className="card-single">
              <div className="main">
                <span className="name">Vehicles</span>
                <span className="icon">
                  <div className="pics vehi">
                    <object data="./taxi.svg" />
                  </div>
                </span>
              </div>
              <h5 className="number">{vehiclesCount}</h5>
              <h5 className="stats">
                &#8593; {Math.floor(vehiclesCount / 3)}&nbsp;
                <span className="">More than yesterday</span>
              </h5>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-4 col-xl  wrapper-card">
            <div className="card-single">
              <div className="main">
                <span className="name">Species</span>
                <span className="icon">
                  <div className="pics spec">
                    <object data="./phylogenetics.svg" />
                  </div>
                </span>
              </div>
              <h5 className="number">{speciesCount}</h5>
              <h5 className="stats">
                &#8593; {Math.floor(speciesCount / 4)}&nbsp;
                <span className="">More than yesterday</span>
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="table-card">
            <h5 className="col">Films</h5>
            <div className="" style={{ overflowX: "auto" }}>
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Film Title</th>
                    <th scope="col">Director</th>
                    <th scope="col">Producer</th>
                    <th scope="col">Release Date</th>
                    <th scope="col">Episode ID</th>
                    <th scope="col">Characters</th>
                  </tr>
                </thead>
                <tbody>
                  {films.map((film, i) => (
                    <tr key={i}>
                      <td>
                        <div>
                          <div className="pics">
                            <object data="./video-camera (1).svg" />
                          </div>
                          <span>{film.title}</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="img">
                            <object data="./images.jpeg" />
                          </div>
                          <span>{film.director}</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="img">
                            <object data="./images.jpeg" />
                          </div>
                          <span>{film.producer}</span>
                        </div>
                      </td>
                      <td>{film.release_date}</td>
                      <td>{film.episode_id}</td>
                      <td>{film.url}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
