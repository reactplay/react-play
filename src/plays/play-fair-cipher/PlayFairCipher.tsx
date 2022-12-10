import React, { useState } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';

function PlayFairCipher(props: any) {
  // Your Code Start below.

  const [input, setInput] = useState(''); // using same textbox for encrypt and decrypt
  const [ct, setCt] = useState('');
  const [pt, setPt] = useState('');
  const [key, setKey] = useState('');

  // Below function make 5x5 matrix
  // i and j will be on same position and anyone is use ( here i used i )
  const matrixMaker = (newKey: string) => {
    const newMatrix = [],
      tmp: string[] = [];
    (newKey + 'abcdefghijklmnopqrstuvwxyz')
      .replace('j', 'i')
      .split('')
      .map((v) => {
        if (tmp.indexOf(v) === -1)
          // first add key alphabet then other which are left ( no repeating )
          tmp.push(v);
      });
    while (tmp.length) newMatrix.push(tmp.splice(0, 5));

    return newMatrix;
  };
  const [matrix, setMatrix] = useState(matrixMaker(''));

  // only allow alphabets because this cipher can only encrypt alphabet
  const validateInput = (str: string) => str.toLowerCase().replace(/[^a-z]/gi, '');
  const handleKeyChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newKey = validateInput(e.currentTarget.value);
    setKey(newKey);

    // matrix creation
    setMatrix(matrixMaker(newKey));
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newInput = validateInput(e.currentTarget.value);
    setInput(newInput);
  };

  const ensureNoSameCharPair = (pt: string) => {
    let formattedPt = '';
    const arr = pt.split('');
    for (let i = 0; i < arr.length; i += 2) {
      formattedPt += arr[i];
      if (i + 1 === arr.length) {
        continue;
      }
      if (arr[i] === arr[i + 1]) {
        formattedPt += 'x'; // for ensuring same character pair not generate
        i -= 1;
      } else {
        formattedPt += arr[i + 1];
      }
    }

    return formattedPt.length % 2 === 0 ? formattedPt : formattedPt + 'x'; // even length
  };

  // find index of alphabet in 5x5 matrix
  const findIndex = (v: string) => {
    for (let i = 0; i < matrix.length; i++) {
      const index = matrix[i].indexOf(v);
      if (index > -1) {
        return [i, index];
      }
    }
  };
  const performEncryption = () => {
    setPt('');
    const newPt = ensureNoSameCharPair(input.replace('j', 'i'));
    let newCt = '';
    for (let i = 0; i < input.length; i += 2) {
      const pos1 = findIndex(newPt[i]);
      const pos2 = findIndex(newPt[i + 1]);
      if (pos1[0] === pos2[0]) {
        // when on same row
        // pos1[0] and pos2[0] same
        newCt += matrix[pos1[0]][(pos1[1] + 1) % 5];
        newCt += matrix[pos1[0]][(pos2[1] + 1) % 5];
      } else if (pos1[1] === pos2[1]) {
        // when on same column
        // pos1[1] and pos2[1] same
        newCt += matrix[(pos1[0] + 1) % 5][pos1[1]];
        newCt += matrix[(pos2[0] + 1) % 5][pos1[1]];
      } else {
        // when row and column both are different
        newCt += matrix[pos1[0]][pos2[1]];
        newCt += matrix[pos2[0]][pos1[1]];
      }
    }
    setCt(newCt);
  };

  const performDecryption = () => {
    setCt('');
    let newPt = '';
    for (let i = 0; i < input.length; i += 2) {
      const pos1 = findIndex(input[i]);
      const pos2 = findIndex(input[i + 1]);
      if (pos1[0] === pos2[0]) {
        // when on same row
        // pos1[0] and pos2[0] same
        newPt += matrix[pos1[0]].at(pos1[1] - 1);
        newPt += matrix[pos1[0]].at(pos2[1] - 1);
      } else if (pos1[1] === pos2[1]) {
        // when on same column
        // pos1[1] and pos2[1] same
        newPt += matrix.at(pos1[0] - 1)[pos1[1]];
        newPt += matrix.at(pos2[0] - 1)[pos1[1]];
      } else {
        // when row and column both are different
        newPt += matrix[pos1[0]][pos2[1]];
        newPt += matrix[pos2[0]][pos1[1]];
      }
    }
    setPt(newPt);
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="pf-container">
            <h1>Play Fair Cipher</h1>
            <form className="pf-form">
              <label htmlFor="input">Input : (Plain text or Cipher test)</label>
              <input
                id="input"
                name="input"
                placeholder="Enter plain text"
                type="text"
                value={input}
                onChange={handleInputChange}
              />
              <label htmlFor="key">Key</label>
              <input
                id="key"
                name="key"
                placeholder="Enter key"
                type="text"
                value={key}
                onChange={handleKeyChange}
              />
              <div id="btns">
                <div className="pf-form-btn" onClick={performEncryption}>
                  Encrypt
                </div>
                <div className="pf-form-btn" onClick={performDecryption}>
                  Decrypt
                </div>
              </div>
            </form>
            <div className="font-bold text-xl mt-5">Matrix</div>
            <div>
              <table className="pf-table">
                {matrix.map((row) => {
                  return (
                    <tr className="pf-table-row">
                      {row.map((col: any) => {
                        return (
                          <td className="pf-table-col">
                            {col} {col === 'i' && '/j'}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </table>
            </div>
            <div className="font-bold text-xl mt-5" id="output">
              {ct && (
                <>
                  Cipher Text : <span className="font-normal">{ct}</span>
                </>
              )}
              {pt && (
                <>
                  Plain Text : <span className="font-normal">{pt}</span>
                </>
              )}
            </div>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default PlayFairCipher;
