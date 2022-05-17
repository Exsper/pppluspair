import { createStore } from "vuex";

export default createStore({
  state: {
    playerInfos: JSON.parse(localStorage.getItem("playerInfos")) ?? {},
  },
  getters: {
    playerNameList: (state) => {
      return Object.keys(state.playerInfos).map((username) => {
        return { username };
      });
    },
    getplayerInfo: (state) => (item) => {
      return state.playerInfos[item.username];
    },
  },
  mutations: {
    addPlayerInfo(state, playerInfoObj) {
      Object.assign(state.playerInfos, playerInfoObj);
      localStorage.setItem("playerInfos", JSON.stringify(state.playerInfos));
    },
    delPlayerInfo(state, username) {
      let _username = Object.keys(state.playerInfos).find((value) => {
        return value.toLowerCase() === username.toLowerCase();
      });
      delete state.playerInfos[_username];
      localStorage.setItem("playerInfos", JSON.stringify(state.playerInfos));
    },
  },
  actions: {},
  modules: {},
});
