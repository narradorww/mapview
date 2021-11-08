import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON} from "react-leaflet";
import "../Map/style.css";
import "leaflet/dist/leaflet.css";
import osm from "../../constants/osm-provider"


export default function Map(){
    const [center, setCenter] = useState({ lat: -23.1145472, lng: -46.5108992 });
    const [zoom, setZoom] = useState(10);                                                                                                   

    return (
        <MapContainer id="map" center={center} zoom={zoom} scrollWheelZoom={true}>
          <TileLayer
            url={osm.url}
            attribution={osm.attribution}
          />
          
    
    
        </MapContainer>
    );
}
