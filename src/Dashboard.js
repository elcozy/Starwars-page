import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { filmsB } from "./backupData";

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
        console.log(film.results);
        setFilms(film.results);
      })
      .catch((error) => {
        setFilms(filmsB);
        setFilms(6);
        console.error("Error:", error);
      });
    fetch(url_starship)
      .then((response) => response.json())
      .then((starship) => setStarshipCount(starship.count))
      .catch((error) => {
        console.error("Error:", error);
      });
    fetch(url_vehicles)
      .then((response) => response.json())
      .then((vehicles) => {
        setVehiclesCount(vehicles.count);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    fetch(url_people)
      .then((response) => response.json())
      .then((people) => {
        SetPeopleCount(people.count);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    fetch(url_species)
      .then((response) => response.json())
      .then((species) => {
        setSpeciesCount(species.count);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <div className="sub-main">
        <div className="container-fluid main maindash back">
          <div className="form-group mr-3 my-auto">
            <select
              className="form-control pr-5 select"
              id="exampleFormControlSelect1"
            >
              <option>Current Year</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group my-auto">
            <select
              className="form-control pr-5 select"
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
        <div className="card-container">
          <div className="col-6 col-md-6 col-lg-4 col-xl  wrapper-card">
            <Link to="/films">
              {" "}
              <div className="card-single">
                <div className="main">
                  <span className="name mb-2 mb-md-0">Films</span>
                  <span className="icon">
                    <div className="pics">
                      <object alt="" data="./video-camera (1).svg">
                        Video Camera
                      </object>
                    </div>
                  </span>
                </div>
                <h5 className="number">{filmsCount}</h5>
                <h5 className="stats">
                  &#8593; {Math.floor(filmsCount / 4)}&nbsp;
                  <span className="">More than yesterday</span>
                </h5>
              </div>
            </Link>
          </div>

          <div className="col-6 col-md-6 col-lg-4 col-xl  wrapper-card">
            <Link to="/starships">
              {" "}
              <div className="card-single">
                <div className="main">
                  <span className="name mb-2 mb-md-0">Starships</span>
                  <span className="icon">
                    <div className="pics star">
                      <object alt="" data="./ufo.svg">
                        Ufo
                      </object>
                    </div>
                  </span>
                </div>
                <h5 className="number">{starshipCount}</h5>
                <h5 className="stats">
                  &#8593; {Math.floor(starshipCount / 3)}&nbsp;
                  <span className="">More than yesterday</span>
                </h5>
              </div>
            </Link>
          </div>

          <div className="col-6 col-md-6 col-lg-4 col-xl  wrapper-card">
            <Link to="/people">
              <div className="card-single">
                <div className="main">
                  <span className="name mb-2 mb-md-0">People</span>
                  <span className="icon">
                    <div className="pics peop">
                      <object alt="" data="./group-of-students.svg">
                        Group of students
                      </object>
                    </div>
                  </span>
                </div>
                <h5 className="number">{peopleCount}</h5>
                <h5 className="stats">
                  &#8593; {Math.floor(peopleCount / 5)}&nbsp;
                  <span className="">More than yesterday</span>
                </h5>
              </div>
            </Link>
          </div>

          <div className="col-6 col-md-6 col-lg-4 col-xl  wrapper-card">
            <Link to="/vehicles">
              {" "}
              <div className="card-single">
                <div className="main">
                  <span className="name mb-2 mb-md-0">Vehicles</span>
                  <span className="icon">
                    <div className="pics vehi">
                      <object alt="" data="./taxi.svg">
                        Taxi
                      </object>
                    </div>
                  </span>
                </div>
                <h5 className="number">{vehiclesCount}</h5>
                <h5 className="stats">
                  &#8593; {Math.floor(vehiclesCount / 3)}&nbsp;
                  <span className="">More than yesterday</span>
                </h5>
              </div>
            </Link>
          </div>
          <div className="col-6 col-md-6 col-lg-4 col-xl  wrapper-card">
            <Link to="/species">
              <div className="card-single">
                <div className="main">
                  <span className="name mb-2 mb-md-0">Species</span>
                  <span className="icon">
                    <div className="pics spec">
                      <object alt="" data="./phylogenetics.svg">
                        phylogenetics
                      </object>
                    </div>
                  </span>
                </div>
                <h5 className="number">{speciesCount}</h5>
                <h5 className="stats">
                  &#8593; {Math.floor(speciesCount / 4)}&nbsp;
                  <span className="">More than yesterday</span>
                </h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="table-card">
            <h5 className="col">Films</h5>
            <div className="" style={{ overflowX: "auto" }}>
              <table className="table table-borderless">
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
                            <object alt="" data="./video-camera (1).svg">
                              Video Camera
                            </object>
                          </div>
                          <span>{film.title}</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="img">
                            <object alt="" data="./images.jpeg">
                              Images
                            </object>
                          </div>
                          <span>{film.director}</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="img">
                            <object alt="" data="./images.jpeg">
                              IMages
                            </object>
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
