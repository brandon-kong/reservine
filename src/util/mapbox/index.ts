import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN as string;

export default mapboxgl;