import { useState, useContext, useEffect } from "react";
import { SocialContext } from "./context/SocialContext";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineMail } from "react-icons/ai";

const CardDetails = () => {
  const { social } = useContext(SocialContext);
  const { name, email, photo, bio, website, twitter, linkedIn, github } =
    social;

  const [picture, setPicture] = useState();

  useEffect(() => {
    if (photo) {
      const reader = new FileReader();
      reader.readAsDataURL(photo[0]);
      reader.onload = () => {
        setPicture(reader.result);
      };
    }
  }, [photo]);

  return (
    <div className="card-details">
      <div className="card-details-header">
        {picture && (
          <div className="card-details-header-image">
            <img src={picture} alt="profile" />
          </div>
        )}
        <div className="card-details-header-name">
          <h3>{name}</h3>
        </div>
      </div>
      <div className="card-details-body">
        <div className="card-details-body-bio">
          <p>{bio}</p>
        </div>
        <div className="card-details-body-social">
          {twitter && (
            <div className="card-details-body-social-item">
              <a href={twitter} target="_blank" rel="noopener noreferrer">
                <BsTwitter size="24px" />
              </a>
            </div>
          )}
          {linkedIn && (
            <div className="card-details-body-social-item">
              <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                <BsLinkedin size="24px" />
              </a>
            </div>
          )}
          {github && (
            <div className="card-details-body-social-item">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <BsGithub size="24px" />
              </a>
            </div>
          )}
          {website && (
            <div className="card-details-body-social-item">
              <a href={website} target="_blank" rel="noopener noreferrer">
                <CgWebsite size="24px" />
              </a>
            </div>
          )}
          {email && (
            <div className="card-details-body-social-item">
              <a href={`mailto:${email}`}>
                <AiOutlineMail size="24px" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
