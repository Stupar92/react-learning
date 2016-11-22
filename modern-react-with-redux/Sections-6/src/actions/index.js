import axios from 'axios';

const API_KEY = "4b4741e77fdeefe25b350f9ae2c9dd29";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    
    const request = axios.get(url);

    // Redux promise will act as a middleware and will stop propagating this action to reducers since payload is a promise. Instead,
    // reducers will get the action once the request completes
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}