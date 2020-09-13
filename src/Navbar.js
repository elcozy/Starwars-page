import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar(params) {
  const [namePage, setNamePage] = useState("");

  const getPath = () => {
    let path = window.location.pathname;
    var name = path.replace(/[^a-zA-Z ]/g, "");
    setNamePage(name);
    console.log("path :>> ", name);
  };

  useEffect(() => {
    getPath();
  });

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light fixed-left">
        <Link className="navbar-brand" to="#">
          <img
            src="/Star wars logo@2x.png"
            className="d-inline-block align-top img-fluid w-100"
            alt=""
          />
        </Link>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          type="button"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          data-target="#navbarsExampleDefault"
          className="collapse navbar-collapse"
          id="navbarsExampleDefault"
        >
          <ul className="navbar-nav">
            <Link
              className={`nav-NavLink ${
                namePage === "dashboard" ? "active-link" : ""
              }`}
              to="/dashboard"
            >
              <li className="nav-item w-100">
                <div className="d-flex">
                  <span className=" nav-link-image">
                    {/* <object alt=""
                      data="/dashboard.svg"
                      width={"100%"}
                      className="d-inline-block img-fluid"
                      alt=""
                    /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        className="a"
                        d="M7.708,0H1.458A1.46,1.46,0,0,0,0,1.458v3.75A1.46,1.46,0,0,0,1.458,6.667h6.25A1.46,1.46,0,0,0,9.167,5.208V1.458A1.46,1.46,0,0,0,7.708,0Zm0,0"
                      />
                      <path
                        className="a"
                        d="M7.708,213.332H1.458A1.46,1.46,0,0,0,0,214.79v8.75A1.46,1.46,0,0,0,1.458,225h6.25a1.46,1.46,0,0,0,1.458-1.458v-8.75A1.46,1.46,0,0,0,7.708,213.332Zm0,0"
                        transform="translate(0 -204.999)"
                      />
                      <path
                        className="a"
                        d="M285.04,341.332h-6.25a1.46,1.46,0,0,0-1.458,1.458v3.75A1.46,1.46,0,0,0,278.79,348h6.25a1.46,1.46,0,0,0,1.458-1.458v-3.75A1.46,1.46,0,0,0,285.04,341.332Zm0,0"
                        transform="translate(-266.499 -327.999)"
                      />
                      <path
                        className="a"
                        d="M285.04,0h-6.25a1.46,1.46,0,0,0-1.458,1.458v8.75a1.46,1.46,0,0,0,1.458,1.458h6.25a1.46,1.46,0,0,0,1.458-1.458V1.458A1.46,1.46,0,0,0,285.04,0Zm0,0"
                        transform="translate(-266.499)"
                      />
                    </svg>
                  </span>
                  <span className="col text">Dashboard</span>
                </div>
              </li>
            </Link>
            <Link
              className={`nav-NavLink ${
                namePage === "starships" ? "active-link" : ""
              }`}
              to="/starships"
            >
              <li className="nav-item w-100">
                <div className="d-flex">
                  <span className="  nav-link-image">
                    {/* <object alt=""
                      data="/building.svg"
                      width={"100%"}
                      className="d-inline-block img-fluid"
                      alt=""
                    /> */}
                    <svg
                      className="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16.29"
                      height="20"
                      viewBox="0 0 16.29 20"
                    >
                      <path
                        className="a"
                        d="M61.627,18.71H60.355V2.9a.645.645,0,0,0-.645-.645H54.871V.645A.645.645,0,0,0,54.226,0H49.75A.645.645,0,0,0,49.1.645V2.258h-.524a.645.645,0,0,0-.645.645V18.71H46.663a.657.657,0,0,0-.663.614.645.645,0,0,0,.644.676h4.6a.323.323,0,0,0,.323-.323v-3.71H51.3a.657.657,0,0,1-.663-.614.645.645,0,0,1,.644-.676H56.99a.657.657,0,0,1,.663.614.645.645,0,0,1-.644.676h-.282v3.71a.323.323,0,0,0,.323.323h4.6a.645.645,0,0,0,.644-.676A.657.657,0,0,0,61.627,18.71Zm-9.054-5.363h-.726a.645.645,0,1,1,0-1.29h.726a.645.645,0,0,1,0,1.29Zm0-2.419h-.726a.645.645,0,1,1,0-1.29h.726a.645.645,0,0,1,0,1.29Zm0-2.419h-.726a.645.645,0,1,1,0-1.29h.726a.645.645,0,0,1,0,1.29Zm0-2.419h-.726a.645.645,0,1,1,0-1.29h.726a.645.645,0,0,1,0,1.29ZM56.4,13.347h-.726a.645.645,0,1,1,0-1.29H56.4a.645.645,0,0,1,0,1.29Zm0-2.419h-.726a.645.645,0,0,1,0-1.29H56.4a.645.645,0,1,1,0,1.29Zm0-2.419h-.726a.645.645,0,0,1,0-1.29H56.4a.645.645,0,0,1,0,1.29Zm0-2.419h-.726a.645.645,0,0,1,0-1.29H56.4a.645.645,0,0,1,0,1.29ZM52.855,19.677V16.29a.323.323,0,0,1,.323-.323h1.935a.323.323,0,0,1,.323.323v3.387a.323.323,0,0,1-.323.323H53.178A.323.323,0,0,1,52.855,19.677Z"
                        transform="translate(-46)"
                      />
                    </svg>
                  </span>
                  <span className="col text">Starships</span>
                </div>
              </li>
            </Link>
            <Link
              className={`nav-NavLink ${
                namePage === "people" ? "active-link" : ""
              }`}
              to="/people"
            >
              <li className="nav-item w-100">
                <div className="d-flex">
                  <span className="  nav-link-image">
                    {/* <object alt=""
                      data="/people.svg "
                      width={"100%"}
                      className="d-inline-block img-fluid"
                      alt=""
                    /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <g transform="translate(0 -4.659)">
                        <g transform="translate(0 4.659)">
                          <path
                            className="a"
                            d="M19.65,11.519a1.569,1.569,0,0,0-1.17-.573H17.261L12.556,5.012a.864.864,0,0,0-1.195-.175.911.911,0,0,0-.171,1.222c0,.025.024.025.024.05l3.876,4.837H4.657L8.509,6.109A.88.88,0,0,0,8.46,4.887a.834.834,0,0,0-1.195.05l-.073.075L2.487,10.971H1.512A1.537,1.537,0,0,0,0,12.517a1.241,1.241,0,0,0,.024.3l1.95,10.048a2.184,2.184,0,0,0,2.145,1.8H15.871a2.184,2.184,0,0,0,2.145-1.8l1.95-10.048A1.571,1.571,0,0,0,19.65,11.519ZM7.46,19.672a.854.854,0,1,1-1.707,0v-3.54a.854.854,0,1,1,1.707,0Zm3.389,0a.854.854,0,1,1-1.707,0v-3.54a.854.854,0,1,1,1.707,0Zm3.364,0a.854.854,0,1,1-1.707,0v-3.54a.854.854,0,1,1,1.707,0Z"
                            transform="translate(0 -4.659)"
                          />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span className="col text">People</span>
                </div>
              </li>
            </Link>
            <Link
              className={`nav-NavLink ${
                namePage === "vehicles" ? "active-link" : ""
              }`}
              to="/vehicles"
            >
              <li className="nav-item w-100">
                <div className="d-flex">
                  <span className="  nav-link-image">
                    {/* <object alt=""
                      data="/vehicles.svg"
                      width={"100%"}
                      className="d-inline-block img-fluid"
                      alt=""
                    /> */}
                    <svg
                      width="23"
                      height="26"
                      viewBox="0 0 23 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.5 1.72278V26.9452C22.4974 27.3129 22.3687 27.6646 22.1416 27.9245C21.9145 28.1843 21.6073 28.3314 21.2863 28.334H1.71367C1.39199 28.334 1.08348 28.1877 0.855907 27.9273C0.628335 27.6669 0.500324 27.3136 0.5 26.9452V1.72278C0.50256 1.35512 0.631289 1.00336 0.858377 0.743502C1.08547 0.483645 1.39268 0.336546 1.71367 0.333984H21.2863C21.9561 0.333984 22.5 0.955585 22.5 1.72278ZM5.38889 3.13398V15.734L9.66667 12.934L13.9444 15.734V3.13398H5.38889Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="col text">Vehicles</span>
                </div>
              </li>
            </Link>
            <Link
              className={`nav-NavLink ${
                namePage === "species" ? "active-link" : ""
              }`}
              to="/species"
            >
              <li className="nav-item w-100">
                <div className="d-flex">
                  <span className="  nav-link-image">
                    {/* <object alt=""
                      data="/species.svg "
                      width={"100%"}
                      className="d-inline-block img-fluid"
                      alt=""
                    /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <path
                        className="a"
                        d="M2.857,40a2.857,2.857,0,1,0,2.857,2.857A2.86,2.86,0,0,0,2.857,40Z"
                        transform="translate(0 -25.714)"
                      />
                      <path
                        className="a"
                        d="M22.857,40a2.857,2.857,0,1,0,2.857,2.857A2.86,2.86,0,0,0,22.857,40Z"
                        transform="translate(-12.857 -25.714)"
                      />
                      <path
                        className="a"
                        d="M42.857,40a2.857,2.857,0,1,0,2.857,2.857A2.86,2.86,0,0,0,42.857,40Z"
                        transform="translate(-25.714 -25.714)"
                      />
                      <path
                        className="a"
                        d="M2.857,20a2.857,2.857,0,1,0,2.857,2.857A2.86,2.86,0,0,0,2.857,20Z"
                        transform="translate(0 -12.857)"
                      />
                      <path
                        className="a"
                        d="M22.857,20a2.857,2.857,0,1,0,2.857,2.857A2.86,2.86,0,0,0,22.857,20Z"
                        transform="translate(-12.857 -12.857)"
                      />
                      <path
                        className="a"
                        d="M42.857,20a2.857,2.857,0,1,0,2.857,2.857A2.86,2.86,0,0,0,42.857,20Z"
                        transform="translate(-25.714 -12.857)"
                      />
                      <path
                        className="a"
                        d="M2.857,0A2.857,2.857,0,1,0,5.714,2.857,2.86,2.86,0,0,0,2.857,0Z"
                      />
                      <path
                        className="a"
                        d="M22.857,0a2.857,2.857,0,1,0,2.857,2.857A2.86,2.86,0,0,0,22.857,0Z"
                        transform="translate(-12.857)"
                      />
                      <path
                        className="a"
                        d="M42.857,5.714A2.857,2.857,0,1,0,40,2.857,2.86,2.86,0,0,0,42.857,5.714Z"
                        transform="translate(-25.714)"
                      />
                    </svg>
                  </span>
                  <span className="col text">Species</span>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
      <div className="section-top">
        <div className="main1">
          <div className="container-fluid main">
            <h3>{namePage}</h3>
            <span>
              <i className="far fa-2x fa-comments"></i>
              <i className="far fa-2x fa-bell"></i>
            </span>
            <div className="image">
              <img src="/images.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
