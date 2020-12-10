const state = {
  config: null,
  profile: null,
};

const UPDATE_CONFIG = 'UPDATE_CONFIG';
const UPDATE_PROFILE = 'UPDATE_PROFILE';

const actions = {
  async getConfig() {
    console.log('getConfig');
  },
  async getProfile() {
    console.log('getProfile');
  },
};

/* eslint-disable no-param-reassign, no-shadow */
const mutations = {
  [UPDATE_CONFIG](state, config) {
    state.config = config;
  },
  [UPDATE_PROFILE](state, profile) {
    state.profile = profile;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  // getters,
};
