import TokenService from "./token-service";
import config from "../config";

const LanguageApiService = {
  async getLanguageAndWords() {
    const res = await fetch(`${config.API_ENDPOINT}/language`, {
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    });
    if (!res.ok) {
      res.json().then((e) => Promise.reject(e));
    }
    // console.log(res.json(), "Line 14")
    return res.json();
    // getAuthToken to confirm authentication and parseJwt for user.id ?
  },

  async getHeadWord() {
    const res = await fetch(`${config.API_ENDPOINT}/language/head`, {
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    });
    if (!res.ok) {
      res.json().then((e) => Promise.reject(e));
    }
    // console.log(res.json(), "words");
    return res.json();
  },

  postGuess(guess) {
    return fetch(`${config.API_ENDPOINT}/language/guess`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(guess),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default LanguageApiService;
