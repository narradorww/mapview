# NETLUME

## TAKE HOME PROJECT

### FRONT-END ENGINEER

---

### 3. `/mapview`

The map view endpoint will return you a collection of GeoJSON features.

```
    // GeoJSONFeature
    {
        geometry: {
            coordinates: [number, number][];
            type: 'LineString';
        };
        properties: {
            color: string;
            info: {
                diameter: number;
                length: number;
            };
            parent_uuid: string;
            uuid: string;s
        },
        type: 'Feature';
    }

    // API response
    {
      features: GeoJSONFeature[];
      type: 'FeatureCollection';
    }
```

*The API will be exposed on http://localhost:5000/*

---

## UI/UX SPECIFICATION

There are two project features for this take home project: Tree View and Map View. You can choose to submit any of the two or both as long as you are still inside the deadline.

**IMPORTANT: All submissions should be developed in React and Typescript.**


### Map view

Given the GeoJSON Feature Collection that you'll retrieve from the `/mapview` endpoint of this API, build an user interface in which all of GeoJSON features are displayed on an interactive map.

#### Requirements

- You should use Leaflet.js and/or React Leaflet libraries to build the map component.

- User should be able to see all map elements in a default color.

- User should be able to toggle a switch/click a button to see all map elements with the custom color defined in the `color` property of each GeoJSONFeature properties object.

- When a given map element is hovered, the map element should be highlighted so the user can identify an individual map element.

- When a given map element is clicked, a popup displays the data inside the `info` property of each GeoJSONFeature and the its `uuid`.

- The map should automatically center on the map elements upon initialization.

- All data should be fetched from the API. No hard-coded data.

---

## NICE-TO-HAVE'S

If you're commited and want to achieve high marks, be mindful to:

- Write clean and readable code.

- Use a linter and code formatter.

- Create type and interface definitions for functions, arguments and components.

- Write comments **ONLY** where the code is complex enough to make it necessary.

- Write tests for the component.

