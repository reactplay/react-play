import { getPlayById } from "meta/play-meta-util";

import PlayHeader from "common/playlists/PlayHeader";
import "./Registration-form.css";
import { useEffect, useState } from "react";

function RegistrationForm(props) {
  // Do not remove the below lines.
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.
  const [field, setField] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    name: {
      isValidated: false,
      error: "",
    },
    email: {
      isValidated: false,
      error: "",
    },
    password: {
      isValidated: false,
      error: "",
    },
    confirmPassword: {
      isValidated: false,
      error: "",
    },
  });
  //function checks for all validation
  const isValidated = (field) => {
    if (field.name.trim() === "") {
      setError((prevState) => {
        prevState.name.error = "Field can't be empty";
        return {
          ...prevState,
        };
      });
    }
    if (field.email.trim() === "") {
      setError((prevState) => {
        prevState.email.error = "Field can't be empty";
        return {
          ...prevState,
        };
      });
    }
    if (field.password.trim() === "") {
      setError((prevState) => {
        prevState.password.error = "Field can't be empty";
        return {
          ...prevState,
        };
      });
    }
    if (field.confirmPassword.trim() === "") {
      setError((prevState) => {
        prevState.confirmPassword.error = "Field can't be empty";
        return {
          ...prevState,
        };
      });
    }
    if (field.name.trim() !== "") {
      setError((prevState) => {
        prevState.name.isValidated = true;
        prevState.name.error = "";
        return {
          ...prevState,
        };
      });
    }
    if (field.email.trim() !== "") {
      if (isValidEmail(field)) {
        setError((prevState) => {
          prevState.email.isValidated = true;
          prevState.email.error = "";
          return {
            ...prevState,
          };
        });
      } else {
        setError((prevState) => {
          prevState.email.isValidated = false;
          prevState.email.error = "not valid email";
          return {
            ...prevState,
          };
        });
      }
    }
    if (field.password.trim() !== "") {
      setError((prevState) => {
        prevState.password.isValidated = true;
        prevState.password.error = "";
        return {
          ...prevState,
        };
      });
    }
    if (field.confirmPassword.trim() !== "") {
      if (field.password.trim() === field.confirmPassword.trim()) {
        setError((prevState) => {
          prevState.confirmPassword.isValidated = true;
          prevState.confirmPassword.error = "";
          return {
            ...prevState,
          };
        });
      } else {
        setError((prevState) => {
          prevState.confirmPassword.isValidated = false;
          prevState.confirmPassword.error = "passwords aren't matching";
          return {
            ...prevState,
          };
        });
      }
    }
  };

  const isValidEmail = (field) => {
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEmail.test(field.email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isValidated(field);

    if (
      error.name.isValidated === true &&
      error.email.isValidated === true &&
      error.password.isValidated === true &&
      error.confirmPassword.isValidated === true
    ) {
      setField({ name: "", email: "", password: "", confirmPassword: "" });
    } else {
      console.log("sorry some field arent complete");
      console.log(error);
    }
  };
  const handleOnChange = (e) => {
    setField({ ...field, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="registration-form-container">
            <h1>Registration Form</h1>
            <p>A Simple registration form with validation without any libery</p>
            <div className="registration-form">
              <form onSubmit={handleSubmit}>
                <div className="user-input">
                  <label htmlFor="name">Name*</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={
                      error.name.error === ""
                        ? "registration-input"
                        : "input-error registration-input"
                    }
                    value={field.name}
                    onChange={handleOnChange}
                  />
                  <small
                    className={error.name.isValidated ? "hidden" : "error"}
                  >
                    {error.name.error}
                  </small>
                </div>
                <div className="user-input">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className={
                      error.email.error === ""
                        ? "registration-input "
                        : " input-error registration-input"
                    }
                    value={field.email}
                    onChange={handleOnChange}
                  />
                  <small
                    className={error.email.isValidated ? "hidden" : "error"}
                  >
                    {error.email.error}
                  </small>
                </div>
                <div className="user-input">
                  <label htmlFor="password">Password*</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={
                      error.password.error === ""
                        ? "registration-input"
                        : "input-error registration-input"
                    }
                    value={field.password}
                    onChange={handleOnChange}
                  />
                  <small
                    className={error.password.isValidated ? "hidden" : "error"}
                  >
                    {error.password.error}
                  </small>
                </div>
                <div className="user-input">
                  <label htmlFor="confirmPassword">Confirm Password*</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder=" Confirm Password"
                    className={
                      error.confirmPassword.error === ""
                        ? "registration-input"
                        : "input-error registration-input"
                    }
                    value={field.confirmPassword}
                    onChange={handleOnChange}
                  />
                  <small
                    className={
                      error.confirmPassword.isValidated ? "hidden" : "error"
                    }
                  >
                    {error.confirmPassword.error}
                  </small>
                </div>
                <div className="user-btn">
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default RegistrationForm;
