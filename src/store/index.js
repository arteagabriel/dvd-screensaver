import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toolbarActive: false,
    statsActive: false,
    velocityX: 3,
    velocityY: 3,
    wallCount: 0,
    cornerCount: 0
  },
  mutations: {
    toggleToolbar(state) {
      state.toolbarActive = !state.toolbarActive;
    },
    toggleStats(state) {
      state.statsActive = !state.statsActive;
    },
    setVelocityX(state, velocityX) {
      state.velocityX = velocityX;
    },
    setVelocityY(state, velocityY) {
      state.velocityY = velocityY;
    },
    incrementWallCount(state) {
      state.wallCount++;
    },
    incrementCornerCount(state) {
      state.cornerCount++;
    }
  },
  actions: {
  },
  modules: {
  }
});
