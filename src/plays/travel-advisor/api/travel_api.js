import axios from 'axios';

export const getPlacesData = async (latitude, longitude, type) => {
  try {
    const { data } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,
      {
        params: {
          longitude: longitude,
          latitude: latitude
        },
        headers: {
          'X-RapidAPI-Key': '66e17f9775msh52ab94609039378p183539jsned52ecf69948',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      }
    );

    return data;
  } catch (error) {
    return error;
  }
};

export const getCoordinates = async (city) => {
  try {
    const { data } = await axios.get(
      `https://api.api-ninjas.com/v1/geocoding?city=${city}&country=india`,
      {
        headers: {
          'X-Api-Key': 'Nqq/eOevhCmgOSmniHar7g==qtlAPLC2d3oWOiY3'
        }
      }
    );

    return data;
  } catch (error) {
    return error;
  }
};
