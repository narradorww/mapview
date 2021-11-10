import React from "react";

export default function Popup({ feature }) {
  let popupContent;
  if (feature.properties && feature.properties.popupContent) {
    popupContent = feature.properties.popupContent;
  }

  return (
    <div>
      <p>{`Pipe Id [${feature.properties.uuid}]`}</p>
      <p>{`Parent Id [${feature.properties.parent_uuid}]`}</p>
      <p>{`Lenght ${feature.properties.info.length} meters with ${feature.properties.info.diameter} mm of diameter`}</p>
      {popupContent}
    </div>
  );
}
//code derived from https://stackoverflow.com/questions/60683314/react-leaflet-geojson-oneachfeature-popup-with-custom-react-component