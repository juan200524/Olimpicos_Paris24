import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import { useNavigate } from 'react-router-dom';

const GlobeComponent = () => {
  const globeEl = useRef();
  const navigate = useNavigate();

  const parisCoordinates = { lat: 48.8566, lng: 2.3522 };

  useEffect(() => {
    const globe = globeEl.current;
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;
    
    // Centrar el globo en París al inicio
    globe.pointOfView({ lat: parisCoordinates.lat, lng: parisCoordinates.lng, altitude: 2.5 }, 1000);
  }, []);

  const handleClick = () => {
    const globe = globeEl.current;
    globe.controls().autoRotate = false;
    globe.pointOfView({ lat: parisCoordinates.lat, lng: parisCoordinates.lng, altitude: 1.5 }, 1000);
    setTimeout(() => navigate('/info'), 1500);
  };

  const parisMarker = [{
    lat: parisCoordinates.lat,
    lng: parisCoordinates.lng,
    color: 'gold',
    radius: 0.3,
    label: 'París 2024'
  }];

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      onGlobeClick={handleClick}
      pointsData={parisMarker}
      pointAltitude={0.1}
      pointColor="color"
      pointRadius="radius"
      pointLabel="label"
      labelsData={parisMarker}
      labelLat={d => d.lat}
      labelLng={d => d.lng}
      labelText={d => d.label}
      labelSize={0.5}
      labelColor={() => 'white'}
      labelDotRadius={0.3}
      labelAltitude={0.05}
    />
  );
};

export default GlobeComponent;