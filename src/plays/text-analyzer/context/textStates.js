import axios from 'axios';
import data from 'plays/dynamic-routes/Data';
import { useState } from 'react';
import TextContext from './playContext';

const TextState = ({ children }) => {
  const [value, setvalue] = useState();
  const [files, setFiles] = useState([]);
  const [TextfromImage, setTextfromImage] = useState();
  const [result, setresult] = useState();

  const getSentiments = (text) => {
    console.log('clicked');
    axios
      .request({
        method: 'GET',
        url: 'https://textapis.p.rapidapi.com/sentiment',
        params: { text },
        headers: {
          'X-RapidAPI-Key': '225e9d1661msh382ffaa868531a6p1d3efajsnb28de9f305f8',
          'X-RapidAPI-Host': 'textapis.p.rapidapi.com'
        }
      })
      .then(function (response) {
        setresult(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getEntities = (text) => {
    console.log('clicked');
    const options = {
      method: 'GET',
      url: 'https://textapis.p.rapidapi.com/ner',
      params: {
        text
      },
      headers: {
        'X-RapidAPI-Key': '225e9d1661msh382ffaa868531a6p1d3efajsnb28de9f305f8',
        'X-RapidAPI-Host': 'textapis.p.rapidapi.com'
      }
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const  paraphraser = (text) => {
    console.log('clicked');
    const  dataobj = {
      "input": text,
    }
    const options = {
      method: 'POST',
      url: 'https://paraphraser1.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '225e9d1661msh382ffaa868531a6p1d3efajsnb28de9f305f8',
        'X-RapidAPI-Host': 'paraphraser1.p.rapidapi.com'
      },
      data: dataobj
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const ImageToText = (formData) => {
    axios
      .request({
        method: 'POST',
        url: 'https://pen-to-print-handwriting-ocr.p.rapidapi.com/recognize/',
        headers: {
          'X-RapidAPI-Key': '225e9d1661msh382ffaa868531a6p1d3efajsnb28de9f305f8',
          'X-RapidAPI-Host': 'pen-to-print-handwriting-ocr.p.rapidapi.com'
        },
        data: formData
      })
      .then(function (response) {
        setTextfromImage(response.data.value);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <TextContext.Provider
      value={{
        value,
        setvalue,
        files,
        setFiles,
        getSentiments,
        getEntities,
        paraphraser,
        ImageToText,
        result,
        setresult,
        TextfromImage
      }}
    >
      {children}
    </TextContext.Provider>
  );
};

export { TextState };
