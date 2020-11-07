/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
  token: localStorage.getItem("user-token") || "",
  status: ""
};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
};

const mutations = {
  AUTH_REQUEST: state => {
    state.status = "loading";
  },
  AUTH_SUCCESS: (state, token) => {
    state.status = "success";
    state.token = token;
  },
  AUTH_REMOVE: (state, token) => {
    state.token = "";
  },
  AUTH_ERROR: state => {
    state.status = "error";
  }
};

const actions = {
  login: ({ commit, dispatch }, user) => {
    return new Promise((resolve, reject) => {
      commit("AUTH_REQUEST");
      axios({
        url: "http://localhost:5000/auth/login",
        data: user,
        method: "POST"
      })
        .then(res => {
          const token = res.data.token;
          localStorage.setItem("user-token", token);
          commit("AUTH_SUCCESS", token);
          resolve(res);
        })
        .catch(err => {
          commit("AUTH_ERROR", err);
          localStorage.removeItem("user-token");
          reject(err);
        });
    });
  },
  logout: ({ commit, dispatch }) => {
    return new Promise((resolve, reject) => {
      localStorage.removeItem("user-token");
      commit("AUTH_REMOVE");
      delete axios.defaults.headers.common["Authorization"];
      resolve();
    });
  }
};

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
  modules: {}
});
