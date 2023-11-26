import { createStore } from "vuex";
import Coaches from "./modules/coachesModule";
import Requests from "./modules/requestsModule";
import authModule from "./modules/authModule";

const store = createStore({
  modules: {
    coaches: Coaches,
    requests: Requests,
    users: authModule,
  },
  state: {
    userId: 6,
  },
  getters: {},
  mutations: {},
});

export default store;
