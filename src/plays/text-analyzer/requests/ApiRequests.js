import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://textapis.p.rapidapi.com/sentiment',
//   params: { text: 'I really hate this!' },
//   headers: {
//     'X-RapidAPI-Key': '225e9d1661msh382ffaa868531a6p1d3efajsnb28de9f305f8',
//     'X-RapidAPI-Host': 'textapis.p.rapidapi.com'
//   }
// };

export const getSentiments = (text) => {
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
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getEntities = (text) => {
  console.log('clicked');
  axios
    .request({
      method: 'GET',
      url: 'https://textapis.p.rapidapi.com/ner/display',
      params: { text },
      headers: {
        'X-RapidAPI-Key': '225e9d1661msh382ffaa868531a6p1d3efajsnb28de9f305f8',
        'X-RapidAPI-Host': 'textapis.p.rapidapi.com'
      }
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getSpellcheck = (text) => {
  console.log('clicked');
  const encodedParams = new URLSearchParams();
  encodedParams.append('text', text);
  encodedParams.append('language', 'en-US');

  const options = {
    method: 'POST',
    url: 'https://dnaber-languagetool.p.rapidapi.com/v2/check',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '225e9d1661msh382ffaa868531a6p1d3efajsnb28de9f305f8',
      'X-RapidAPI-Host': 'dnaber-languagetool.p.rapidapi.com'
    },
    data: encodedParams
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
