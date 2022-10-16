import axios from "axios";

const Base_URL = "https://shortly-elias-manica.herokuapp.com";

async function getRaking() {
  const promise = await axios.get(`${Base_URL}/ranking`);
  return promise;
}

async function singUp(body) {
  console.log(body);
  const promise = await axios.post(`${Base_URL}/signUp`, body);
  return promise;
}

export { getRaking, singUp };
