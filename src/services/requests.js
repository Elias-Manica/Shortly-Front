import axios from "axios";

const Base_URL = "https://shortly-elias-manica.herokuapp.com";

async function getRaking() {
  const promise = await axios.get(`${Base_URL}/ranking`);
  return promise;
}

async function singUp(body) {
  const promise = await axios.post(`${Base_URL}/signUp`, body);
  return promise;
}

async function singIn(body) {
  const promise = await axios.post(`${Base_URL}/signIn`, body);
  return promise;
}

async function getProfile(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = await axios.get(`${Base_URL}/users/me`, config);
  return promise;
}

export { getRaking, singUp, singIn, getProfile };
