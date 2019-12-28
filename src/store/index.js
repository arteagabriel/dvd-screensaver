import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toolbarActive: true,
    statsActive: true,
    velocityX: 1,
    velocityY: 1,
    positionX: 0,
    positionY: 0,
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
    }
  },
  actions: {
  },
  modules: {
  }
});
