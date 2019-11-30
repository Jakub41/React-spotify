import { COMMENT_USER, COMMENT_PASS } from "./ConstAPI";

export const createCommentAPIQUery = urlGenerator => async (...params) => {
  try {
    const url = urlGenerator(...params);
    const token = btoa(COMMENT_USER + ":" + COMMENT_PASS);
    const credentials = {
      method: "GET",
      headers: new Headers({
        Authorization: "Basic " + token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };
    const response = await fetch(url, credentials);
    const json = response.json();
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
