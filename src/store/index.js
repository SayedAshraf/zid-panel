import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navVisibility: true,
  },
  mutations: {
    UpdateNavVisibility(state, visibility) {
      state.navVisibility = visibility;
    },
  },
  actions: {},
  modules: {},
});
