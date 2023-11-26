<template>
  <span v-if="hasRequests" class="requestItem">
    <h1 class="requestsHead">Your Requests</h1>
    <RequestItem
      v-for="(request, index) in requestOfLoggedInCoach"
      :key="request.id"
      :request="request"
      :index="index"
    >
    </RequestItem>
  </span>

  <h4 v-else class="noRequestsFound">
    No Requests Yet. Hold on, hope you get requests from students soon.
  </h4>
</template>

<script>
import RequestItem from "../components/requests/RequestItem.vue";
export default {
  components: { RequestItem },
  computed: {
    requestOfLoggedInCoach() {
      const response = this.$store.getters["requests/getRequests"];
      return response;
    },
    hasRequests() {
      const response = this.$store.getters["requests/hasRequests"];
      return response;
    },
  },
};
</script>

<style scoped>
.requestsHead {
  margin-bottom: 50px;
  color: rgb(66, 44, 4);
}
.requestItem {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.noRequestsFound {
  text-align: center;
  color: rgb(52, 51, 51);
  margin-top: 50px;
}
</style>
