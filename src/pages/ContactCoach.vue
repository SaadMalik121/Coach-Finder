<template>
  <div class="mainDiv">
    <h2>Contact Coach</h2>
    <base-card>
      <ContactForm @requestMessage="requestMessage" />
    </base-card>
  </div>
</template>

<script>
import ContactForm from "../components/requests/ContactForm.vue";
export default {
  components: { ContactForm },
  props: ["id"],
  methods: {
    requestMessage(message) {
      this.$store.dispatch("requests/saveRequest", {
        ...message,
        coachId: this.id,
      });

      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
.mainDiv {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
h2 {
  margin-top: 20px;
  margin-bottom: 0px;
  color: rgb(45, 45, 45);
}
</style>
