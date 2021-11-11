import { useCallback, useState } from "react";
import { GeoJSONServices } from "../services/GeoJSONServices";

export const useGeoJSON = () => {
  const [geoJSON, setGeoJSON] = useState<{}>({});

  const getAll = useCallback(async () => {
    const response = await GeoJSONServices.getAll();

    setGeoJSON(response.data);
  }, []);

  return {
    geoJSON,
    getAll,
  };
};
