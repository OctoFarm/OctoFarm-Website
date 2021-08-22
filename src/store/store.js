import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";

// load Vuex
Vue.use(Vuex);

const state = {
  statistics: {},
};

// to handle state
const getters = {

};

// to handle actions
const actions = {
  getStatistics({ commit }) {
    axios.get("https://api.octofarm.net/statistics", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then((res) => {
      commit("SET_STATISTICS", res.data);
    }).catch((error) => {
      console.error(error);
    });
  },
};

// to handle mutations
const mutations = {
  // eslint-disable-next-line no-shadow
  SET_STATISTICS(state, statistics) {
    state.statistics = statistics;
  },
};

// export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
