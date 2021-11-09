export interface IGeometry {
    type: string;
    coordinates: number[];
}

export interface IGeoJson {
    type: string;
    geometry: IGeometry;
    bbox?: number[];
    properties?: any;
}





// 'Interface imported from https://gist.github.com/codediodeio/'