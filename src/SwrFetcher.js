const BASE_API_URL = `https://infinite-dawn-93085.herokuapp.com`;

export const SWRFetcher = async (url) => {
  let resp;
  let text;

  try {
    resp = await fetch(`${BASE_API_URL}${url}`);

    text = await resp.text();
    const json = JSON.parse(text);

    return json;
  } catch (err) {
    if (!resp.ok) {
      throw new Error(`Error occurred fetching at ${BASE_API_URL}${url}`);
    }
    return text;
  }
};
