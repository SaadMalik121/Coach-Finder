export default {
  actions: {},
  state: {
    users: [
      {
        id: 1,
        isAdmin: true,
        name: "Admin",
        email: "admin@gmail.com",
        password: "1122",
      },
      {
        id: 2,
        isAdmin: false,
        name: "User",
        email: "user@gmail.com",
        password: "user",
      },
    ],
    isLogedIn: localStorage.getItem("userData"),
  },
  getters: {
    getLoginStatus(state) {
      return state.isLogedIn;
    },
  },
  mutations: {
    handleSignInUser(state, payload) {
      //   state.user.push(payload);
      let user = null;
      user = state.users.find(
        (user) =>
          user.email === payload.email && user.password === payload.password
      );
      if (user) {
        console.log(user);
        localStorage.setItem("userData", {
          email: user.email,
          id: user.id,
          isAdmin: user.isAdmin,
        });
        // location.reload();
        location.replace("/");

        this.isLogedIn = true;
      } else {
        alert("Your entered email and password is incorred");
        throw Error("Your entered email and password is incorred");
      }
    },

    handleLogoutUser(state) {
      localStorage.removeItem("userData");
      this.isLogedIn = false;
      location.replace("/");
    },

    handleSubmitSignup(state, payload) {
      let isEmailAlreadyExists = null;
      isEmailAlreadyExists = state.users.filter(
        (user) => user.email == payload.email
      );

      if (payload.email && payload.password && payload.confirmPassword) {
        if (isEmailAlreadyExists.length == 0) {
          state.users.push({
            email: payload.email,
            password: payload.password,
            id: new Date().getTime().toString(),
            isAdmin: false,
          });

          localStorage.setItem("userData", {
            email: payload.email,
            password: payload.password,
            id: new Date().getTime().toString(),
            isAdmin: false,
          });
          //   location.reload();
          location.replace("/");

          this.isLogedIn = true;

          //   this.$router.replace("/");
        } else {
          alert("Email already registered");
        }
        //   location.reload();
      } else {
        alert("All the fields must be field");
      }
    },
  },
};
