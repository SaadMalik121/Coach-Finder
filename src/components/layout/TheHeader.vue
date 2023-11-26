<template>
  <div class="mainHead">
    <div>
      <router-link to="/coaches">
        <h2>Coach Finder</h2>
      </router-link>
    </div>

    <div>
      <ul>
        <router-link to="/coaches">
          <li>Coaches</li>
        </router-link>

        <router-link to="/requests">
          <li>Requests</li>
        </router-link>
      </ul>
    </div>

    <div class="btnContainer" v-if="isUserLoggedIn">
      <BaseButton
        mode="filled"
        text="Register as Coach"
        to="/registerCoach"
        link="true"
        v-if="!isAlreadyRegistered"
      ></BaseButton>
      <BaseButton
        mode="flat"
        text="Logout"
        class="signup"
        :click="logout"
      ></BaseButton>
    </div>
    <div class="btnContainer" v-else>
      <BaseButton
        mode="filled"
        text="Login"
        to="/login"
        link="true"
      ></BaseButton>
      <BaseButton
        mode="flat"
        text="Register"
        link="true"
        to="/register"
        class="signup"
      ></BaseButton>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isAlreadyRegistered() {
      const response = this.$store.getters["coaches/isUserRegistered"];
      console.log("The response is:" + response);
      return response;
    },
    isUserLoggedIn() {
      console.log("this.$store.getters.getLoginStatus");
      console.log(this.$store.getters.getLoginStatus);
      return this.$store.getters.getLoginStatus;
    },
  },
  methods: {
    logout() {
      this.$store.commit("handleLogoutUser");
    },
  },
};
</script>

<style scoped>
.mainHead {
  display: flex;
  justify-content: space-between;
  /* background-color: #815b5b; */
  padding: 25px 10% 0px 10%;
  box-shadow: 5px 10px #88888829;
  border: 0.5px solid rgba(93, 92, 92, 0.379);
  border-radius: 20px;
  margin-bottom: 50px;
  background-color: white;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
}
ul {
  margin-top: 15px;

  list-style-type: none;
  display: flex;
  /* justify-content: space-between; */
}
li {
  margin: 5px 20px;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: gainsboro;
  font-weight: bold;
}

a:active,
a.router-link-active {
  text-decoration: none;
  color: #cd7856;
}
h2 {
  margin-top: 15px;

  /* color: #2c3639; */
  color: #cd7856;
  text-shadow: 1px 1px 4px #48484867;
}

.btnContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 15px; */
}
.signup {
  margin-left: 20px;
}
</style>
