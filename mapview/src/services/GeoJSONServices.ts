import { GeoJsonObject } from "geojson";

import { Api } from "./../providers/index";

const getAll = () => Api.get<GeoJsonObject>('/mapview');


export const GeoJSONServices = {
  getAll,
};
