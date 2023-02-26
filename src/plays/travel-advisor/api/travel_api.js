import axios from 'axios';

export const getPlacesData = async (latitude, longitude , type) => {
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
    console.log(error);
  }
};

export const getCoordinates = async (city) => {
  try {
    const data = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=9f66153982a275eb857428a4be592907`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
