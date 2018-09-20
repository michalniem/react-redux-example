import { create } from 'axios';

export const jsonPlaceholder = create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const countries = create({
  baseURL: 'http://countryapi.gear.host/v1/Country/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'application/json',
  },
});
