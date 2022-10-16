import axios from "axios";

const Base_URL = "https://shortly-elias-manica.herokuapp.com";

async function getRaking() {
  const promise = await axios.get(`${Base_URL}/ranking`);
  return promise;
}

export { getRaking };
