import axios from "axios";

const BASE_URL = "http://localhost:3000/";

const state = {
  auth_token: null,
  user: {
    id: null,
    username: null,
    email: null,
  },
};
const getters = {
  getAuthToken: state => state.auth_token,
  getUserEmail: state => state.user?.email,
  getUserID: state => state.user?.id,
  isLoggedIn: state => state.auth_token !== null,
};
const actions = {
  async loginUser({ commit }, payload) {
    try {
      const response = await axios.post(`${BASE_URL}users/sign_in`, payload);
      commit("setUserInfo", response.data);
      return response;
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
      throw error; // Rethrow the error to be caught by the component
    }
  },
  async logoutUser({ commit, state }) {
    const config = {
      headers: {
        Authorization: state.auth_token,
      },
    };
    await axios.delete(`${BASE_URL}users/sign_out`, config);
    commit("resetUserInfo");
  },
  async loginUserWithToken({ commit }, payload) {
    const config = {
      headers: {
        Authorization: payload.auth_token,
      },
    };
    const response = await axios.get(`${BASE_URL}me`, config);
    commit("setUserInfoFromToken", response);
    return response;
  },
};
const mutations = {
  setUserInfo(state, data) {
    state.user = data.data.user;
    state.auth_token = data.headers.authorization;
    axios.defaults.headers.common["Authorization"] = data.headers.authorization;
    localStorage.setItem("auth_token", data.headers.authorization);
  },
  setUserInfoFromToken(state, data) {
    state.user = data.data.user;
    state.auth_token = localStorage.getItem("auth_token");
  },
  resetUserInfo(state) {
    state.user = {
      id: null,
      username: null,
      email: null,
    };
    state.auth_token = null;
    localStorage.removeItem("auth_token");
    axios.defaults.headers.common["Authorization"] = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
