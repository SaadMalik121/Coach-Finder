import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";
import CoachDetails from "../pages/CoachDetails.vue";
import CoachesList from "../pages/CoachesList.vue";

const NotFound = defineAsyncComponent(() => import("../pages/NotFound.vue"));
const SignupView = defineAsyncComponent(() =>
  import("../pages/SignupView.vue")
);
const loginView = defineAsyncComponent(() => import("../pages/loginView.vue"));
const ContactCoach = defineAsyncComponent(() =>
  import("../pages/ContactCoach.vue")
);
const RequestList = defineAsyncComponent(() =>
  import("../pages/RequestList.vue")
);
const CoachRegisteration = defineAsyncComponent(() =>
  import("../pages/CoachRegisteration.vue")
);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/coaches",
    },
    {
      path: "/coaches",
      name: "home",
      component: CoachesList,
    },
    {
      path: "/coaches/:id",
      props: true,
      component: CoachDetails,
      children: [
        {
          path: "contact",
          component: ContactCoach,
          props: true,
        },
      ],
    },
    {
      path: "/requests",
      name: "Requests",
      component: RequestList,
    },
    {
      path: "/registerCoach",
      component: CoachRegisteration,
    },
    {
      path: "/login",
      component: localStorage.getItem("userData") ? CoachesList : loginView,
    },
    {
      path: "/register",
      component: localStorage.getItem("userData") ? CoachesList : SignupView,
    },
    {
      path: "/:notFound",
      component: NotFound,
    },
  ],
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

router.beforeEach(async (to, from, next) => {
  if (to.name == "Requests" && !localStorage.getItem("userData")) {
    next("/login");
  } else {
    next();
  }
});
export default router;
