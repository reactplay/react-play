import PlayHeader from 'common/playlists/PlayHeader';
import { useCallback, useEffect, useState } from 'react';

import './password-generator-style.css';
import data from './data.json';

const config = {
  length: 12,
  numbers: true,
  special: true,
  uppercase: true,
  lowercase: true
};

function PasswordGenerator(props) {
  // Your Code Start below.
  const [password, setPassword] = useState({ status: false, password: '' });
  const [passwordConfig, setPasswordConfig] = useState({ ...config });
  const [error, setError] = useState(false);

  // generating lowercase characters
  data.lowercase = data?.uppercase?.map((i) => i.toLowerCase());

  // generate a random number within limit which is provided
  const randomNumberGenerator = (limit) => {
    let result = 0;
    while (limit) {
      result = Math.floor(Math.random() * Math.floor(Math.random() * 100));
      if (result < limit) return result;

      continue;
    }
  };

  // arrange data to feed the generatePassword function
  const arrangeData = useCallback(() => {
    const { numbers, special, uppercase, lowercase } = passwordConfig;
    const parseData = (val, key) => {
      if (val) return data[key];

      return [];
    };
    const concated = [
      ...parseData(numbers, 'numbers'),
      ...parseData(special, 'special'),
      ...parseData(uppercase, 'uppercase'),
      ...parseData(lowercase, 'lowercase')
    ];

    return concated;
  }, [passwordConfig]);

  // Generate a random password
  const generatePassword = useCallback(() => {
    setError(false);
    const concated = arrangeData();
    let finalPassword = '';
    for (let i = 0; i < passwordConfig.length; i++) {
      finalPassword += concated[randomNumberGenerator(concated.length)];
    }

    return finalPassword;
  }, [arrangeData, passwordConfig]);

  // generate password button click handler
  const generateHander = useCallback(() => {
    const finalPassword = generatePassword();
    setPassword({ status: false, password: finalPassword });
  }, [generatePassword]);

  // Copy the password to the clipboard
  const onCopyClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(password.password);
    setPassword({ ...password, status: true });
  };

  const ErrorBox = () => {
    return <p className="error">You cannot Uncheck All At Once.</p>;
  };

  const checkhandler = (id, inputCheckbox) => () => {
    const modifiedConfig = { ...passwordConfig };
    delete modifiedConfig.length;
    delete modifiedConfig.excludeSimilarCharacters;
    modifiedConfig[id] = !inputCheckbox;
    const values = Object.values(modifiedConfig).filter((i) => i === true);
    if (values.length === 0) {
      return setError(true);
    }
    setPasswordConfig({ ...passwordConfig, [id]: modifiedConfig[id] });
    setError(false);
  };

  useEffect(() => {
    generateHander();
  }, [generateHander]);

  const setLength = (value) => {
    setPasswordConfig({ ...passwordConfig, length: value });
    setError(false);
  };

  return (
    <div className="play-details">
      <PlayHeader play={props} />
      <div className="play-details-body password-generator">
        <div className="main">
          <h1 className="title">Password Generator</h1>
          {error && <ErrorBox />}
          <div className="inputfield">
            <input disabled readOnly className="text" type="text" value={password.password} />
            <button className="copy copybtn" onClick={onCopyClick}>
              {password?.status ? 'Copied' : 'Copy'}
            </button>
          </div>
          <div className="block">
            <input
              hidden
              readOnly
              checked={passwordConfig.lowercase}
              id="lowercaseToggle"
              name="lowercase"
              type="checkbox"
            />
            <div
              className="select lowercase"
              id="lower"
              onClick={checkhandler('lowercase', passwordConfig.lowercase)}
            >
              <h3>Lowercase</h3>
              <div className="bigCircle">
                <div className="smallCircle" />
              </div>
            </div>
            <input
              hidden
              readOnly
              checked={passwordConfig.uppercase}
              id="uppercaseToggle"
              type="checkbox"
            />
            <div
              className="select uppercase"
              onClick={checkhandler('uppercase', passwordConfig.uppercase)}
            >
              <h3>Uppercase</h3>
              <div className="bigCircle">
                <div className="smallCircle" />
              </div>
            </div>
          </div>
          <div className="block">
            <input
              hidden
              readOnly
              checked={passwordConfig.numbers}
              id="numberToggle"
              type="checkbox"
            />
            <div
              className="select number"
              onClick={checkhandler('numbers', passwordConfig.numbers)}
            >
              <h3>Number</h3>
              <div className="bigCircle">
                <div className="smallCircle" />
              </div>
            </div>
            <input
              hidden
              readOnly
              checked={passwordConfig.special}
              id="specialCharToggle"
              type="checkbox"
            />
            <div
              className="select specialchar"
              onClick={checkhandler('special', passwordConfig.special)}
            >
              <h3>Special Char</h3>
              <div className="bigCircle">
                <div className="smallCircle" />
              </div>
            </div>
          </div>
          <div className="block length">
            <div className="flexlength">
              <h3>Length</h3>
              <select
                className="select"
                value={passwordConfig.length}
                onChange={(e) => setLength(e.target.value)}
              >
                {[12, 14, 16, 20].map((num) => {
                  return (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="block generate">
            <div className="sub">
              <input
                className="generate"
                type="submit"
                value="Generate Password"
                onClick={generateHander}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
