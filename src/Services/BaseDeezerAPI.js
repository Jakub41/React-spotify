import { DEEZER_URL, DEEZER_HOST, DEEZER_KEY } from "./ConstAPI";

const createAPIQUery = urlGenerator => async (...params) => {
  try {
    const url = urlGenerator(...params);
    const headers = {
      "x-rapidapi-host": DEEZER_HOST,
      "x-rapidapi-key": DEEZER_KEY
    };
    const response = await fetch(url, { method: "GET", headers });
    const json = await response.json();
    return {
      success: true,
      ...json
    };
  } catch {
    return {
      success: false,
      result: [],
      message:
        "There is an issue to get data from server. Please try again later."
    };
  }
};

export const getArtist = createAPIQUery(
  search => `${DEEZER_URL}/search?q=${search}`
);

// getArtist("The Queen");
