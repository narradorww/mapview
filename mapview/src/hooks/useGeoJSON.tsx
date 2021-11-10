import { useCallback, useState } from "react";
import { GeoJsonObject } from "geojson";
import { GeoJSONServices } from "../services/GeoJSONServices";

export const useGeoJSON = () => {
  const [geoJSON, setGeoJSON] = useState<GeoJsonObject>();

  const getAll = useCallback(async () => {
    const { status, data } = await GeoJSONServices.getAll();

    if (status !== 200) throw new Error();

    setGeoJSON(data);
  }, []);

  return {
    geoJSON,
    getAll,
  };
};
