<template>
  <div>
    <BaseCard> <FileteredCoach @change-filter="filterChnage" /> </BaseCard>
    <BaseCard v-for="coach in FileteredCoach" :key="coach.id">
      <CoachItem :coachItem="coach" />
    </BaseCard>
  </div>
</template>

<script>
import CoachItem from "../components/coaches/CoachItem.vue";
import FileteredCoach from "../components/coaches/FileteredCoach.vue";

export default {
  components: { CoachItem, FileteredCoach },
  data() {
    return {
      activeFilters: {
        Frontend: true,
        Backend: true,
        UI: true,
      },
    };
  },
  computed: {
    FileteredCoach() {
      const coaches = this.$store.getters["coaches/getCoaches"];

      return coaches.filter((coach) => {
        if (
          this.activeFilters.Frontend &&
          coach.experties.includes("Frontend")
        ) {
          return true;
        }
        if (this.activeFilters.Backend && coach.experties.includes("Backend")) {
          return true;
        }
        if (this.activeFilters.UI && coach.experties.includes("UI")) {
          return true;
        }
        return false;
      });
    },
  },
  methods: {
    filterChnage(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
