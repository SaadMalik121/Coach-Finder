import { createStore } from "vuex";

export default {
  namespaced: true,
  actions: {
    submitCoachInformation(context, data) {
      context.commit("coachRegistration", data);
    },
  },
  state: {
    coaches: [
      {
        id: 1,
        name: "Saad Malik",
        age: 21,
        experties: ["Backend"],
        description:
          "I am ready to provide teaching to students who want to learn Full stack developement",
        hourlyRate: 5000,
      },
      {
        id: 2,
        name: "John Doe",
        age: 25,
        experties: ["Frontend", "UI"],
        description:
          "Contact Me, If you want to become UI/UX engineer and gain experties in front-end developement",
        hourlyRate: 2000,
      },
      {
        id: 3,
        name: "John Doe",
        age: 25,
        experties: ["Frontend"],
        description:
          "Contact Me, If you want to become UI/UX engineer and gain experties in front-end developement",
        hourlyRate: 2000,
      },
      {
        id: 4,
        name: "John Doe",
        age: 25,
        experties: ["Backend"],
        description:
          "Contact Me, If you want to become UI/UX engineer and gain experties in front-end developement",
        hourlyRate: 2000,
      },
      {
        id: 5,
        name: "John Doe",
        age: 25,
        experties: ["UI"],
        description:
          "Contact Me, If you want to become UI/UX engineer and gain experties in front-end developement",
        hourlyRate: 2000,
      },
      {
        id: 7,
        name: "John Doe",
        age: 25,
        experties: ["Backend", "Frontend", "UI"],
        description:
          "Contact Me, If you want to become UI/UX engineer and gain experties in front-end developement",
        hourlyRate: 2000,
      },
    ],
    requests: [],
  },
  getters: {
    getCoaches(state) {
      return state.coaches;
    },
    isUserRegistered(state, getters, rootState) {
      const isUserExist = state.coaches.find(
        (coach) => coach.id === rootState.userId
      );
      if (isUserExist) {
        return true;
      }
      return false;
    },
  },
  mutations: {
    coachRegistration(state, data) {
      state.coaches.push({
        ...data,
        // id: new Date().getTime().toString(),
        id: 6,
      });
    },
  },
};
