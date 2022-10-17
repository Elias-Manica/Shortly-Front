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

async function createShortly(body, token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = await axios.post(`${Base_URL}/urls/shorten`, body, config);
  return promise;
}

async function deleteShortly(id, token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = await axios.delete(`${Base_URL}/urls/${id}`, config);
  return promise;
}

async function openShortly(shortly) {
  const promise = await axios.get(`${Base_URL}/urls/open/${shortly}`);
  return promise;
}

async function getSHortlyById(id) {
  const promise = await axios.get(`${Base_URL}/urls/${id}`);
  return promise;
}

async function signOut(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = await axios.post(`${Base_URL}/signOut`, {}, config);
  return promise;
}

export {
  getRaking,
  singUp,
  singIn,
  signOut,
  getProfile,
  createShortly,
  deleteShortly,
  openShortly,
  getSHortlyById,
};
