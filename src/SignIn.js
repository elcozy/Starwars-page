import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function SignIn(params) {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const history = useHistory();
  const login = () => {
    history.push("/dashboard");
  };
  useEffect(() => {
    const isEmailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      emailValue.toLowerCase()
    );
    const isPasswordValid = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
      passwordValue
    );
    setPasswordValid(isPasswordValid);
    setEmailValid(isEmailValid);
  }, [emailValue, passwordValue]);
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
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className={`form-control ${
                    emailValue
                      ? `${isEmailValid ? "" : "is-invalid invalid"}`
                      : ""
                  } `}
                  onChange={(e) => setEmailValue(e.target.value)}
                  aria-describedby="emailHelp"
                  placeholder="Email address"
                />
                <div
                  className={`invalid-feedback ${
                    emailValue ? `${isEmailValid ? "" : "d-block"}` : ""
                  }`}
                >
                  Enter a valid email.
                </div>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  onChange={(e) => setPasswordValue(e.target.value)}
                  className={`form-control ${
                    passwordValue ? `${isPasswordValid ? "" : "invalid"}` : ""
                  }`}
                  placeholder="Enter strong password"
                  required
                />
                <div
                  className={`invalid-feedback ${
                    passwordValue ? `${isPasswordValid ? "" : "d-block"}` : ""
                  }`}
                >
                  Password must container an uppercase, lower case, number and
                  symbol.
                </div>
              </div>
              <button
                to="/dashboard"
                type="submit"
                disabled={!isEmailValid || !isPasswordValid}
                className="btn btn-primary"
                onClick={login}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
