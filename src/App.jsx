import { useState, useEffect } from 'react';
import { Map, Marker } from "pigeon-maps";

function App() {
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords.latitude, position.coords.longitude);
          setCoordinates({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error.message);
        }
      );
    } else {
      console.log("El navegador no admite la geolocalización.");
    }
  }, []);

  return (
    <div>
      <div className='mapcontainer'>
        <Map center={[coordinates.latitude, coordinates.longitude]} zoom={12}>
          <Marker width={30} anchor={[coordinates.latitude, coordinates.longitude]} />
        </Map>
      </div>

      <button onClick={console.log("first")}>Obtener coordenadas</button>
      <p>Coordenadas: {coordinates.latitude}, {coordinates.longitude}</p>
    </div>
  );
}

export default App;
