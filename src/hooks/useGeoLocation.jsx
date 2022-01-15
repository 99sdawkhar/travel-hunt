import { useEffect, useState } from "react";

const useGeoLocation = () => {
  const [locationStatus, setLocationStatus] = useState('denied')
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            setLocationStatus(result.state);
            //If granted then you can directly call your function here
          } else if (result.state === "prompt") {
            setLocationStatus(result.state)
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
            setLocationStatus(result.state)
          }
          result.onchange = function () {
            setLocationStatus(result.state)
          };
        });
    } else {
      setLocationStatus('denied');
      alert("Sorry Not available!");
    }
  }, [])

  return locationStatus;
}

export default useGeoLocation;
