import axios from 'axios';

export const getPlacesData = async (latitude, longitude, type) => {
  try {
    if (latitude && longitude != '') {
      const { data } = await axios.get(
        `https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,
        {
          params: {
            longitude: longitude,
            latitude: latitude
          },
          headers: {
            'X-RapidAPI-Key': 'da83eccb70msh8767c0ccf3d8a8cp161a92jsn99957f30c915',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        }
      );

      return data;
    }
  } catch (error) {
    return error;
  }
};

export const getCoordinates = async (city) => {
  try {
    if (city != '') {
      const { data } = await axios.get(
        `https://api.api-ninjas.com/v1/geocoding?city=${city}&country=india`,
        {
          headers: {
            'X-Api-Key': 'Nqq/eOevhCmgOSmniHar7g==qtlAPLC2d3oWOiY3'
          }
        }
      );

      return data;
    }
  } catch (error) {
    return error;
  }
};
