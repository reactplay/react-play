import { useState, useContext, useEffect } from 'react';
import { SocialContext } from './context/SocialContext';
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';

const CardDetails = () => {
  // Get the user-filled values from the context
  const { social } = useContext(SocialContext);

  // Destructure the values from the object.
  const { name, email, photo, bio, website, twitter, linkedIn, github } = social;

  // We need a file reader to handle the photo uploaded by the user.
  // We have to perform some computations and extract the actual picture
  // from the file. So created a state variable to take care of this.
  const [picture, setPicture] = useState();

  // We have an option to set the theme of the social card.
  // This state variable is the theme object.
  const [cardTheme, setCardTheme] = useState({
    bc: '#f2d6d6',
    fc: '#212121',
    link: '#000000'
  });

  // Perform all calculations to get the profile photo
  // from the file reader.
  useEffect(() => {
    if (photo) {
      const reader = new FileReader();
      reader.readAsDataURL(photo[0]);
      reader.onload = () => {
        setPicture(reader.result);
      };
    }
  }, [photo]);

  // This method will be called when the user changes the theme
  const applyTheme = (theme) => {
    let bc = '';
    let fc = '';
    let link = '';
    switch (theme) {
      case 'dark':
        bc = '#212121';
        fc = '#f2d6d6';
        link = '#ffffff';

        break;
      case 'light':
        bc = '#f2d6d6';
        fc = '#212121';
        link = '#000000';

        break;
      case 'red':
        bc = '#f44336';
        fc = '#ffffff';
        link = '#ffffff';

        break;
      case 'green':
        bc = '#4caf50';
        fc = '#ffffff';
        link = '#ffffff';

        break;
      case 'blue':
        bc = '#2196f3';
        fc = '#ffffff';
        link = '#ffffff';

        break;
      case 'yellow':
        bc = '#ffeb3b';
        fc = '#000000';
        link = '#000000';

        break;
      default:
        break;
    }
    setCardTheme({
      ...cardTheme,
      bc: bc,
      fc: fc,
      link: link
    });
  };

  return (
    <div className="card-details">
      <div className="card-details-theme">
        <button className="light" onClick={() => applyTheme('light')} />
        <button className="dark" onClick={() => applyTheme('dark')} />
        <button className="red" onClick={() => applyTheme('red')} />
        <button className="blue" onClick={() => applyTheme('blue')} />
        <button className="yellow" onClick={() => applyTheme('yellow')} />
        <button className="green" onClick={() => applyTheme('green')} />
      </div>

      <div
        className="social-card-preview"
        style={{ backgroundColor: cardTheme.bc, color: cardTheme.fc }}
      >
        <div className="card-header">
          {picture && (
            <div className="card-header-image">
              <img alt="profile" src={picture} />
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
                <a
                  href={twitter}
                  rel="noopener noreferrer"
                  style={{ color: cardTheme.link }}
                  target="_blank"
                >
                  <BsTwitter size="24px" />
                </a>
              </div>
            )}
            {linkedIn && (
              <div className="card-body-social-item">
                <a
                  href={linkedIn}
                  rel="noopener noreferrer"
                  style={{ color: cardTheme.link }}
                  target="_blank"
                >
                  <BsLinkedin size="24px" />
                </a>
              </div>
            )}
            {github && (
              <div className="card-body-social-item">
                <a
                  href={github}
                  rel="noopener noreferrer"
                  style={{ color: cardTheme.link }}
                  target="_blank"
                >
                  <BsGithub size="24px" />
                </a>
              </div>
            )}
            {website && (
              <div className="card-body-social-item">
                <a
                  href={website}
                  rel="noopener noreferrer"
                  style={{ color: cardTheme.link }}
                  target="_blank"
                >
                  <CgWebsite size="24px" />
                </a>
              </div>
            )}
            {email && (
              <div className="card-body-social-item">
                <a href={`mailto:${email}`} style={{ color: cardTheme.link }}>
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
