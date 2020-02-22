import GOODS from '../../data';

const state = {
  all: [],
  slider: [],
}

const getters = {
  all: (state) => {
    return state.all;
  },
  byId: (state) => (id) => {
    return state.all.filter( (p) => p.id === id )[0];
  },
  slider: (state) => {
    return state.slider.slice(0, 3);
  },
}

const mutations = {
  fill: (state) => {
    state.all = GOODS;
    state.slider = GOODS;
  },
  shiftLeft: (state) => {
    const len = state.slider.length;
    state.slider = [...state.slider.slice(len - 1, len), ...state.slider.slice(0, -1)];
  },
  shiftRight: (state) => {
    state.slider = [...state.slider.slice(1, state.length), state.slider[0]];
  }
}

const actions = {
  fill: ({commit, state}) => {
    if ( state.all.length === 0 ) commit('fill');
    else return;
  },
  shiftLeft: ({commit, state}) => {
    if (state.slider.length > 0) commit('shiftLeft');
    else commit('fill');
  },
  shiftRight: ({commit, state}) => {
    if (state.slider.length > 0) commit('shiftRight');
    else commit('fill');
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
