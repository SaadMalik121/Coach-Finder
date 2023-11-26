<template>
  <div class="mainDiv">
    <div class="left">
      <div
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 40px;
        "
      >
        <h1 class="title is-3">
          Welcome To <span style="color: orange">Coach</span>
          <span style="color: rgb(61, 61, 61)">Finders</span>
        </h1>
      </div>
      <div class="box" style="border: 1px solid rgba(85, 84, 84, 0.347)">
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            padding-bottom: 10px;
          "
        >
          <h1
            class="title is-4"
            style="
              display: flex;
              align-self: center;
              margin-bottom: 20px;
              padding: 10px 20px;
            "
          >
            Login to your Account
          </h1>
        </div>
        <form @submit.prevent="handleSubmitLogin">
          <input
            v-model="this.userData.email"
            class="input is-primary"
            type="email"
            placeholder="Email"
            required
          />
          <input
            v-model="this.userData.password"
            class="input is-primary"
            type="password"
            placeholder="Password"
            required
          />
          <!-- <RouterLink to="/home" replace> -->
          <button class="button is-primary" style="width: 100%" type="submit">
            Login
          </button>

          <div style="margin-top: 10px">
            <RouterLink to="/register">
              Not have an account?
              <span style="font-weight: 600; color: rgb(3, 111, 75)"
                >Creat an account</span
              >
            </RouterLink>
          </div>
          <!-- </RouterLink> -->
        </form>
      </div>
    </div>

    <!-- Right Side -->
    <div class="right">
      <h1
        style="
          font-weight: 600;
          font-size: 35px;
          justify-content: center;
          align-items: center;
          display: flex;
          margin-bottom: 100px;
          padding: 15px 20px;
        "
      >
        Find Coach near you
      </h1>
      <div
        class="jobLogo"
        style="justify-content: center; align-items: center; display: flex"
      >
        <img src="../../public/classroom.png" width="100%" />
      </div>
      <p style="margin-top: 15%; padding: 0px 20px">
        Finding jobs near you involves searching for available job opportunities
        within a specific geographical area, typically close to your current
        location. To begin your search, utilize job search platforms such as
        Indeed, LinkedIn, Glassdoor, and Monster. These platforms provide search
        filters that allow you to specify your preferred location or search
        within a certain radius of your current location.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: { email: "", password: "" },
    };
  },
  methods: {
    async handleSubmitLogin() {
      try {
        await this.$store.commit("handleSignInUser", this.userData);
        if (this.$store.getters.getLoginStatus) {
          this.$router.replace("/");
        }
      } catch (error) {
        alert(error.message);
      }

      //   console.log(this.$store.state.count);
    },
  },
};
</script>

<style scoped>
.mainDiv {
  display: flex;
  padding: 0px 20px;
  margin-left: 10%;
}
.left {
  margin-top: 10%;
  width: 90%;
  /* max-width: 1500px; */
}
.box {
  padding: 50px;
}
.right {
  padding: 2%;
  margin-left: 15%;
  background-color: orange;
  color: white;
  width: 70%;
}
.jobLogo {
  width: 290px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-bottom: 0px;
}
input {
  padding: 10px;
  display: block;
  width: 100%;
}
.button {
  background-color: orange;
  color: white;
  padding: 10px 20px;
  border: 0;
  border-radius: 20px;
  font-size: 25px;
}
</style>
