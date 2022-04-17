
import { useState } from 'react';

const CardForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    photo: "",
    bio: "",
    website: "",
    twitter: "",
    linkedIn: "",
    showwcase: "",
    github: ""
  });


  const handleChange = evt => {
    const name = evt.target.name;
    const value =
    evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [name]: value
    });
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(state);
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={state.name}
          onChange={ handleChange }
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={state.email}
          onChange={ handleChange }
        />
      </div>
      <div className="form-group">
        <label htmlFor="photo">Photo</label>
        <input
          type="file"
          className="form-control"
          id="photo"
          name="photo"
          value={state.photo}
          onChange={ handleChange }
        />
      </div>
      <div className="form-group">
        <label htmlFor="bio">Bio</label>
        <textarea
          className="form-control"
          id="bio"
          name="bio"
          value={state.bio}
          onChange={ handleChange }
        />
      </div>
      <div className="form-group">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          className="form-control"
          id="website"
          name="website"
          value={state.website}
          onChange={ handleChange }
        />
      </div>
      <div className="form-group">
        <label htmlFor="twitter">Twitter</label>
        <input
          type="text"
          className="form-control"
          id="twitter"
          name="twitter"
          value={state.twitter}
          onChange={ handleChange }
        />
      </div>
      <div className="form-group">
        <label htmlFor="linkedIn">LinkedIn</label>
        <input
          type="text"
          className="form-control"
          id="linkedIn"
          name="linkedIn"
          value={state.linkedIn}
          onChange={ handleChange }
        />
      </div>
      <div className="form-group">
        <label htmlFor="showcase">Showwcase</label>
        <input
          type="text"
          className="form-control"
          id="showwcase"
          name="showwcase"
          value={state.showwcase}
          onChange={ handleChange }
        />
      </div>
      <div className="form-group">
        <label htmlFor="github">Github</label>
        <input
          type="text"
          className="form-control"
          id="github"
          name="github"
          value={state.github}
          onChange={ handleChange }
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={ handleSubmit }>Submit</button>
    </form>
  );
};

export default CardForm;