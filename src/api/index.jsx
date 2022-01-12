import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (ne, sw) => {
  try {
    // var options = {
    //   params: {
    //     bl_latitude: '11.847676',
    //     tr_latitude: '12.838442',
    //     bl_longitude: '109.095887',
    //     tr_longitude: '109.149359',
    //   },
    //   headers: {
    //     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    //     'x-rapidapi-key': 'c2159313dbmshf0d27deaa94261ap1c89f6jsnee71dd8a6506'
    //   }
    // };

    const { data: { data } } = await axios.get(URL, {
      params: {
        bl_latitude: ne.lat,
        tr_latitude: sw.lat,
        bl_longitude: ne.lng,
        tr_longitude: sw.lng,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'c2159313dbmshf0d27deaa94261ap1c89f6jsnee71dd8a6506'
      }
    });

    return data;

  } catch (err) {
    console.log(err);
  }
}