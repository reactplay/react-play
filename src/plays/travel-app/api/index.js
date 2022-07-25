import  axios  from 'axios';


export const getPlacesData = async (type) => {
    try{
        const {data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: '11.847676',
                tr_latitude: '12.838442',
                bl_longitude: '109.095887',
                tr_longitude: '109.149359',
              restaurant_tagcategory_standalone: '10591',
              restaurant_tagcategory: '10591',
              limit: '30',
              currency: 'USD',
              open_now: 'false',
              lunit: 'km',
              lang: 'en_US'
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': 'bef236bb7amsh515d59227b0e057p1db98fjsn96db2d5277c9'
            }
          });
          
        return data;
    }
    catch(error){
        console.log(error)
    }
}