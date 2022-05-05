import { getPlayById } from "meta/play-meta-util";

import PlayHeader from "common/playlists/PlayHeader";
import { useEffect, useState } from "react";

import "./password-generator-style.css";
import data from "./data.json";

const config = {
  length: 12,
  numbers: true,
  special: true,
  uppercase: true,
  lowercase: true,
  // excludeSimilarCharacters: true,
};

function PasswordGenerator(props) {
  // Do not remove the below lines.
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.
  const [password, setPassword] = useState({ status: false, password: "" });
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
  const arrangeData = () => {
    const { numbers, special, uppercase, lowercase } = passwordConfig;

    const parseData = (val, key) => {
      if (val) return data[key];
      return [];
    };

    const concated = [
      ...parseData(numbers, "numbers"),
      ...parseData(special, "special"),
      ...parseData(uppercase, "uppercase"),
      ...parseData(lowercase, "lowercase"),
    ];
    return concated;
  };

  // Generate a random password
  const generatePassword = () => {
    setError(false)
    const concated = arrangeData();
    let finalPassword = "";
    for (let i = 0; i < passwordConfig.length; i++) {
      finalPassword += concated[randomNumberGenerator(concated.length)];
    }
    return finalPassword;
  };

  // generate password button click handler
  const generateHander = () => {
    const finalPassword = generatePassword();
    setPassword({ status: false, password: finalPassword });
  };

  // handling checkbox and updating the config
  const handleCheckedItem = (name, checked) => {
    const modifiedConfig = { ...passwordConfig };
    delete modifiedConfig.length
    delete modifiedConfig.excludeSimilarCharacters
    modifiedConfig[name] = checked;
    const values = Object.values(modifiedConfig).filter(i => i === true);
    if (values.length === 0) {
      return setError(true)
    }
    setPasswordConfig({ ...passwordConfig, [name]: checked });
    setError(false)
  };

  // Copy the password to the clipboard
  const onCopyClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(password.password);
    setPassword({ ...password, status: true });
  };

  useEffect(() => {
    generateHander();
  }, []);

  const ErrorBox = () => {
    return <p className='error'>You cannot Uncheck All At Once.</p>;
  };

  return (
    <div className='play-details'>
      <PlayHeader play={play} />
      <div className='play-details-body'>
        {/* Your Code Starts Here */}
        <div className='main'>
          <h1 className='title'>Password Generator</h1>
          <section>
            {error && <ErrorBox />}
            <div>
              <CheckBox
                getCheckedItem={handleCheckedItem}
                checked={passwordConfig?.uppercase}
                name='Uppercase'
                id='uppercase'
              />
              <CheckBox
                getCheckedItem={handleCheckedItem}
                checked={passwordConfig?.lowercase}
                name='Lowercase'
                id='lowercase'
              />
              <CheckBox
                getCheckedItem={handleCheckedItem}
                checked={passwordConfig?.special}
                name='Special Char.'
                id='special'
              />
              <CheckBox
                getCheckedItem={handleCheckedItem}
                checked={passwordConfig?.numbers}
                name='Numbers'
                id='numbers'
              />
              <div className='checkbox-comp'>
                <label>Length</label>
                <select
                  onChange={e => handleCheckedItem("length", e.target.value)}
                  value={passwordConfig.length}
                >
                  {[12,14,16,20].map(num => {
                    return <option key={num} value={num}>{num}</option>
                  })}
                </select>
              </div>
            </div>
            <div>
              <input
                type='text'
                value={password?.password}
                onChange={null}
                readOnly={true}
              />
              <button
                onClick={onCopyClick}
                className={
                  password?.status ? "copy-button copid" : "copy-button"
                }
              >
                {password?.status ? "Copied" : "Copy"}
              </button>
            </div>
            <div>
              <button onClick={generateHander} className='generate'>
                Generate Password
              </button>
            </div>
          </section>
        </div>
        {/* Your Code Ends Here */}
      </div>
    </div>
  );
}

const CheckBox = ({ name, checked, getCheckedItem, id }) => {
  const checkboxChangeHandler = (id) => (e) => {
    getCheckedItem(id, e.target.checked);
  };

  return (
    <div className='checkbox-comp'>
      <label htmlFor={name}>{name}</label>
      <input
        checked={checked}
        onChange={checkboxChangeHandler(id)}
        id={name}
        type='checkbox'
      />
    </div>
  );
};

export default PasswordGenerator;
