import axios from "axios";

export const getPlacesData = async (type, ne, sw) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
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