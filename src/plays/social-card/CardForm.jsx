import { useState, useContext, useEffect, useRef } from "react";
import { SocialContext } from "./context/SocialContext";

const CardForm = () => {
  // Declaring the state value with an object that contains
  // all the information of the social card.
  const [state, setState] = useState({
    name: "",
    email: "",
    photo: "",
    bio: "",
    website: "",
    twitter: "",
    linkedIn: "",
    github: "",
  });

  // We get the updater function from the context.
  // It will help us to set the user filled information as the context data
  // so that, other component can access it.
  const { setSocial } = useContext(SocialContext);

  // We create a reference to focus on the 
  // first input field of the form.
  const nameInputRef = useRef(null);

  // This method will be called for the value
  // change of each of the form fields. Please
  // note how we handle the file input differently.
  const handleChange = (evt) => {
    const name = evt.target.name;
    const value =
      evt.target.type === "file" ? evt.target.files : evt.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };

  // We set the focus of the name input field.
  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  // Whenever the state value changes, we set the value
  // of the context data.
  useEffect(() => {
    setSocial(state);
  }, [state, setSocial]);

  return (
    <form className="social-card-form">
      <div className="form-group">
        <label htmlFor="name"></label>
        <input
          ref = {nameInputRef}
          type="text"
          placeholder="Enter Name"
          className="form-control"
          id="name"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="photo"></label>
        <input
          type="file"
          className="form-control"
          id="photo"
          name="photo"
          accept=".jpg, .jpeg, .png"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="bio"></label>
        <textarea
          placeholder="Enter Bio"
          className="form-control"
          id="bio"
          name="bio"
          value={state.bio}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="twitter"></label>
        <input
          type="text"
          placeholder="Enter Twitter URL"
          className="form-control"
          id="twitter"
          name="twitter"
          value={state.twitter}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="linkedIn"></label>
        <input
          type="text"
          placeholder="Enter LinkedIn URL"
          className="form-control"
          id="linkedIn"
          name="linkedIn"
          value={state.linkedIn}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="github"></label>
        <input
          type="text"
          placeholder="Enter GitHub URL"
          className="form-control"
          id="github"
          name="github"
          value={state.github}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="website"></label>
        <input
          type="text"
          placeholder="Enter Website URL"
          className="form-control"
          id="website"
          name="website"
          value={state.website}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email"></label>
        <input
          type="email"
          placeholder="Enter Email"
          className="form-control"
          id="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default CardForm;
