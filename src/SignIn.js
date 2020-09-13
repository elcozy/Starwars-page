import React, { useEffect, useState } from "react";
import StarWars from "./assets/img/undraw_To_the_stars_qhyy.svg";
import { Link } from "react-router-dom";

export default function SignIn(params) {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {});
  return (
    <div className="signin">
      <div className="content  flex-column flex-md-row">
        <div className="welcome col-12 col-md-6">
          <div className="context mx-auto">
            <span>Welcome to Star Wars</span>
            <span> the Clone Wars</span>
          </div>
          <div className="image mx-auto">{/* <StarWars /> */}</div>
        </div>
        <div className="form py-5 py-md-0 col-12 col-md-6">
          <div className="formm container my-auto">
            <h5>Sign in to continue to your account.</h5>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  onChange={(e) => setEmailValue(e.target.value)}
                  aria-describedby="emailHelp"
                  placeholder="Email address"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  onChange={(e) => setPasswordValue(e.target.value)}
                  class="form-control"
                  placeholder="Enter strong password"
                />
              </div>
              <Link className="" to="/dashboard">
                {/* <button component={Link} to="/dashboard" type="submit" class="btn btn-primary"> */}
                <button
                  component={Link}
                  to="/dashboard"
                  type="submit"
                  disabled={isDisabled}
                  class="btn btn-primary"
                >
                  Submit
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
