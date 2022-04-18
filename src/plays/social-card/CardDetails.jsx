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
  const [cardTheme, setCardTheme] = useState({
    bc: "#f2d6d6",
    fc: "#212121",
    link: "#000000",
  });

  useEffect(() => {
    if (photo) {
      const reader = new FileReader();
      reader.readAsDataURL(photo[0]);
      reader.onload = () => {
        setPicture(reader.result);
      };
    }
  }, [photo]);

  const applyTheme = theme => {
    let bc = '#f2d6d6';
    let fc = '#212121';
    let link = '#000000';
    switch (theme) {
      case "dark":
        bc = '#212121';
        fc = '#f2d6d6';
        link = '#ffffff';
        break;
      case "light":
        bc = '#f2d6d6';
        fc = '#212121';
        link = '#000000';
        break;
      case "red":
        bc = '#f44336';
        fc = '#ffffff';
        link = '#ffffff';
        break;
      case "green":
        bc = '#4caf50';
        fc = '#ffffff';
        link = '#ffffff';
        break;
      case "blue":
        bc = '#2196f3';
        fc = '#ffffff';
        link = '#ffffff';
        break;
      case "yellow":
        bc = '#ffeb3b';
        fc = '#000000';
        link = '#000000';
        break; 
      default:
        break;
    }
    setCardTheme({
      ...cardTheme,
      'bc': bc,
      'fc': fc,
      'link': link
    });
  }

  return (
    <div className="card-details">
      <div className="card-details-theme">
        <button className="light" onClick={ (theme) => applyTheme("light") }></button>
        <button className="dark" onClick={ (theme) => applyTheme("dark")}></button>
        <button className="red" onClick={ (theme) => applyTheme("red")}></button>
        <button className="blue" onClick={ (theme) => applyTheme("blue")}></button>
        <button className="yellow" onClick={ (theme) => applyTheme("yellow")}></button>
        <button className="green" onClick={ (theme) => applyTheme("green")}></button>
      </div>

      <div className="card" style={{ backgroundColor: cardTheme.bc, color: cardTheme.fc}}>
      
        <div className="card-header">
          {picture && (
            <div className="card-header-image">
              <img src={picture} alt="profile" />
            </div>
          )}
          <div className="card-header-name">
            <h3>{name}</h3>
          </div>
        </div>
        <div className="card-body">
          <div className="card-body-bio">
            <p>{bio}</p>
          </div>
          <div className="card-body-social">
            {twitter && (
              <div className="card-body-social-item">
                <a href={twitter} style={{color: cardTheme.link}} target="_blank" rel="noopener noreferrer">
                  <BsTwitter size="24px"/>
                </a>
              </div>
            )}
            {linkedIn && (
              <div className="card-body-social-item">
                <a href={linkedIn} style={{color: cardTheme.link}} target="_blank" rel="noopener noreferrer">
                  <BsLinkedin size="24px" />
                </a>
              </div>
            )}
            {github && (
              <div className="card-body-social-item">
                <a href={github} style={{color: cardTheme.link}} target="_blank" rel="noopener noreferrer">
                  <BsGithub size="24px" />
                </a>
              </div>
            )}
            {website && (
              <div className="card-body-social-item">
                <a href={website} style={{color: cardTheme.link}} target="_blank" rel="noopener noreferrer">
                  <CgWebsite size="24px" />
                </a>
              </div>
            )}
            {email && (
              <div className="card-body-social-item">
                <a href={`mailto:${email}`} style={{color: cardTheme.link}}>
                  <AiOutlineMail size="24px" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
