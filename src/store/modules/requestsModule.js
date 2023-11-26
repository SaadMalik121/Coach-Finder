export default {
  namespaced: true,
  actions: {
    saveRequest(context, request) {
      context.commit("addRequest", request);
    },
  },
  state: {
    requests: [],
  },
  getters: {
    getRequests(state, getters, rootState) {
      console.log("state.requests[0].coachId");
      console.log(state.requests[0]);
      return state.requests.filter(
        (request) => request.coachId == rootState.userId
      );
    },

    hasRequests(state, getters, rootState) {
      const requests = state.requests.filter(
        (request) => request.coachId == rootState.userId
      );

      return requests.length > 0;
    },
  },
  mutations: {
    addRequest(state, request) {
      console.log("In mutattion");
      console.log(request);
      state.requests.push(request);
      console.log("after");
      console.log(state.requests);
    },
  },
};
