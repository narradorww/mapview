import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "../Map/style.css";
import "leaflet/dist/leaflet.css";
import osm from "../../constants/osm-provider";
import { useGeoJSON } from "../../hooks/useGeoJSON";
import geo from "../../constants/geoJSON.json";

export default function Map() {
  const [center, setCenter] = useState({ lat: 12.041833166, lng: 8.521331248 });
  const { getAll, geoJSON } = useGeoJSON();
  console.log({ ...geoJSON });

  useEffect(() => {
    getAll();
  }, [getAll]);

  function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
        console.log(`ja sabemos como funfa ${feature.properties.uuid}`)
    }
}






  return (
    <>
      <MapContainer id="map" center={center} zoom={10} scrollWheelZoom={true}>
        <TileLayer url={osm.url} attribution={osm.attribution} />
        <GeoJSON data={geo} onEachFeature={onEachFeature} eventHandlers={{
    click: () => {
      console.log('marker clicked')
    },
  }}/>
      </MapContainer>
    </>
  );
}

