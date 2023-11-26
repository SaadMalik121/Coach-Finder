<template>
  <div class="mainContainer">
    <h2>Coach Registration Form</h2>
    <p>
      Welcome coach, you cna register yourself as a coach by providing your
      information so that students reach you out easily.
    </p>

    <base-card>
      <RegistrationForm
        @coachSubmittedInformation="coachSubmittedInformation"
      />
    </base-card>
  </div>
</template>

<script>
import RegistrationForm from "../components/coaches/RegistrationForm.vue";
export default {
  components: { RegistrationForm },
  methods: {
    coachSubmittedInformation(coachInfo) {
      this.$store.dispatch("coaches/submitCoachInformation", coachInfo);
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
.mainContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h2 {
  text-align: center;
  color: #cd7856;
  text-shadow: 1px 1px 4px #48484867;
}
p {
  text-align: center;
  width: 50%;
  color: rgb(133, 132, 132);
  font-style: italic;
}
</style>
