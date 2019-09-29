import api from '../../api/imgur';
import { router } from '../../main';
import qs from 'qs';

const state = {
  token: window.localStorage.getItem('imgur_token')
};

const getters = {
  isLoggedIn: state => !!state.token,
  getToken: state => state.token
};

const actions = {
  login: () => {
    api.login();
  },

  finalizeLogin({ commit }, accessToken) {
    const parsed = qs.parse(accessToken.replace('#', ''));
    commit('setToken', parsed.access_token);
    window.localStorage.setItem('imgur_token', parsed.access_token);
    router.push('/');
  },
  logout: ({ commit }) => {
    commit('setToken', null);
    window.localStorage.setItem('imgur_token', null);
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
