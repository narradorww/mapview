import React, { useState, useEffect } from "react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import "../Map/style.css";
import "leaflet/dist/leaflet.css";
import osm from "../../constants/osm-provider";
import { useGeoJSON } from "../../hooks/useGeoJSON";
import geo from "../../constants/geoJSON.json";
import Popup from "../PopUp"; 
import ReactDOMServer from 'react-dom/server';

export default function MMap() {
  const [center, setCenter] = useState({ lat: 12.041833166, lng: 8.521331248 });
  const { getAll, geoJSON } = useGeoJSON();
  console.log({ ...geoJSON });
  const mapJSON = { ...geoJSON}
  const mapJSON2 = {...geo}

  useEffect(() => {
    getAll();
  }, [getAll]);



  const onEachFeature = (feature, layer) => {
    const popupContent = ReactDOMServer.renderToString(
      <Popup feature={feature} />
    );
    layer.bindPopup(popupContent);
  };

  return (
    <>
      <Map id="map" center={center} zoom={10} scrollWheelZoom={true}>
        <TileLayer url={osm.url} attribution={osm.attribution} />
        <GeoJSON data={mapJSON2} onEachFeature={onEachFeature} eventHandlers={{
    click: () => {
      console.log('marker clicked');
      onEachFeature()
    },
  }}/>
      </Map>
    </>
  );
}

