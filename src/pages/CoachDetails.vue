<template>
  <div class="mainContainer">
    <h1>Coach Details</h1>
    <p class="desc">
      The details of your selected coach is as below, you can contact him easily
      and start your journey with
      <span class="coachName">{{ selectedCoach.name }}</span>
    </p>

    <base-card class="contactContainer">
      <h3>Want to contact with us?</h3>
      <p>Send us your information. I'll let you know when we review you</p>
      <BaseButton
        mode="filled"
        text="Contact Coach"
        link="true"
        :to="'/coaches/' + id + '/contact'"
      ></BaseButton>
    </base-card>

    <RouterView></RouterView>

    <base-card>
      <div class="infoContainer">
        <p>{{ selectedCoach.name }}</p>
        <p>{{ selectedCoach.age }} Years</p>
        <p>{{ selectedCoach.hourlyRate }}/hour</p>
      </div>
      <p class="description">{{ selectedCoach.description }}</p>

      <div class="expertiesContainer">
        <p
          class="expertie"
          :style="{ backgroundColor: background(expertie) }"
          v-for="expertie in selectedCoach.experties"
        >
          {{ expertie }}
        </p>
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
    };
  },
  methods: {
    background(expertie) {
      if (expertie == "Backend") return "red";
      else if (expertie == "Frontend") return "orange";
      else if (expertie == "UI") return "green";
    },
  },
  created() {
    this.selectedCoach = this.$store.getters["coaches/getCoaches"].find(
      (coach) => coach.id == this.id
    );
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
.contactContainer {
  padding: 50px;
}
h1 {
  text-align: center;
  color: #cd7856;
  text-shadow: 1px 1px 4px #48484867;
}
.desc {
  text-align: center;
  width: 50%;
  color: rgb(133, 132, 132);
  font-style: italic;
}
.coachName {
  font-weight: bold;
}
</style>
