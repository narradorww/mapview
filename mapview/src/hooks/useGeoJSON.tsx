import { useCallback, useState } from "react";
import { IGeoJson } from "../interfaces";
import { GeoJSONServices } from "../services/GeoJSONServices";

export const useGEoJSON = () => {
  var [geoJson, setGeoJson] = useState({});
  const getAll = useCallback(async () => {
    const { status, data } = await GeoJSONServices.getAll();
    console.log(status, data);
    if (status !== 200) throw new Error();
    setGeoJson(data);
  }, []);

  return {
    geoJson,
    getAll,
  };
};
