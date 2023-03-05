import axios from 'axios';
import { useState } from 'react';
import TextContext from './playContext';

const TextState = ({ children }) => {
  const [value, setvalue] = useState();
  const [files, setFiles] = useState([]);
  const [TextfromImage, setTextfromImage] = useState();
  const [resultSentiments, setresultSentiments] = useState();
  const [resultEntities, setresultEntities] = useState();
  const [resultparaphraser, setresultparaphraser] = useState();
  const [loading, setloading] = useState(false);

  const getSentiments = (text) => {
    setloading(true);

    const objdata = {
      language: 'english',
      text: text
    };
    const options = {
      method: 'POST',
      url: 'https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '66e17f9775msh52ab94609039378p183539jsned52ecf69948',
        'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
      },
      data: objdata
    };

    axios
      .request(options)
      .then(function (response) {
        setresultSentiments(response.data);
        setresultEntities();
        setresultparaphraser();
        setTextfromImage();

        setloading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getEntities = (text) => {
    setloading(true);
    const options = {
      method: 'GET',
      url: 'https://textapis.p.rapidapi.com/ner',
      params: {
        text
      },
      headers: {
        'X-RapidAPI-Key': '66e17f9775msh52ab94609039378p183539jsned52ecf69948',
        'X-RapidAPI-Host': 'textapis.p.rapidapi.com'
      }
    };

    axios
      .request(options)
      .then(function (response) {
        setresultEntities(response.data);
        setresultparaphraser();
        setTextfromImage();
        setresultSentiments();
        setloading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const paraphraser = (text) => {
    setloading(true);
    const dataobj = {
      input: text
    };
    const options = {
      method: 'POST',
      url: 'https://paraphraser1.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '66e17f9775msh52ab94609039378p183539jsned52ecf69948',
        'X-RapidAPI-Host': 'paraphraser1.p.rapidapi.com'
      },
      data: dataobj
    };

    axios
      .request(options)
      .then(function (response) {
        setresultparaphraser(response.data);
        setTextfromImage();
        setresultSentiments();
        setresultEntities();

        setloading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const ImageToText = (formData) => {
    setloading(true);
    axios
      .request({
        method: 'POST',
        url: 'https://pen-to-print-handwriting-ocr.p.rapidapi.com/recognize/',
        headers: {
          'X-RapidAPI-Key': '66e17f9775msh52ab94609039378p183539jsned52ecf69948',
          'X-RapidAPI-Host': 'pen-to-print-handwriting-ocr.p.rapidapi.com'
        },
        data: formData
      })
      .then(function (response) {
        setTextfromImage(response.data.value);
        setloading(false);
        setresultSentiments();
        setresultEntities();
        setresultparaphraser();
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
        TextfromImage,
        resultEntities,
        resultSentiments,
        resultparaphraser,
        loading
      }}
    >
      {children}
    </TextContext.Provider>
  );
};

export { TextState };
