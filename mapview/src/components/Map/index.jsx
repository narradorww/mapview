import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "../Map/style.css";
import "leaflet/dist/leaflet.css";
import osm from "../../constants/osm-provider";
import { useGeoJSON } from "../../hooks/useGeoJSON";
import geo from "../../constants/geoJSON.json";


export default function Map() {
  const [center, setCenter] = useState({ lat: 12.041833166, lng: 8.521331248 });
  const { getAll, geoJson } = useGeoJSON();

  console.log({ ...geoJson});

  useEffect(() => {
    getAll();
  },[getAll])

  

  return (
    <MapContainer id="map" center={center} zoom={10} scrollWheelZoom={true}>
      <TileLayer url={osm.url} attribution={osm.attribution} />
      <GeoJSON data={geo} />
    </MapContainer>
  );
}
