import { Beer } from "../types/beer";

const API_URL = "https://api.jsonbin.io/v3/b/6630fd9be41b4d34e4ecd1f9";

export const fetchBeerList = async (): Promise<Array<Beer>> => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.record;
};
