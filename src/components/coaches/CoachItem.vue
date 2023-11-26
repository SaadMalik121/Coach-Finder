<template>
  <div class="mainContainer">
    <div class="horizontalLine"></div>
    <div class="infoContainer">
      <p>{{ coachItem.name }}</p>
      <p>{{ coachItem.age }} Years</p>
      <p>{{ coachItem.hourlyRate }}/hour</p>
    </div>
    <p class="description">{{ coachItem.description }}</p>

    <div class="expertiesContainer">
      <p
        class="expertie"
        :style="{ backgroundColor: background(expertie) }"
        v-for="expertie in coachItem.experties"
      >
        {{ expertie }}
      </p>
    </div>

    <div class="buttonContainer">
      <BaseButton
        mode="filled"
        link="true"
        text="View Details"
        :to="'coaches/' + coachItem.id"
      ></BaseButton>
      <BaseButton
        mode="flat"
        text="Contact Coach"
        link="true"
        :to="'coaches/' + coachItem.id + '/contact'"
      ></BaseButton>
    </div>
  </div>
</template>

<script>
export default {
  props: ["coachItem"],
  methods: {
    background(expertie) {
      if (expertie == "Backend") return "red";
      else if (expertie == "Frontend") return "orange";
      else if (expertie == "UI") return "green";
    },
  },
};
</script>

<style>
.mainContainer {
  width: 100%;
}
.expertiesContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.expertie {
  margin: 0px 12px;
  background-color: red;
  padding: 10px 20px;
  border-radius: 20px;
  color: whitesmoke;
}
.infoContainer {
  padding: 12px 15px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: bold;
  font-size: 2vw;
  margin-top: 20px;
  font-family: "Courier New", Courier, monospace;
}
.description {
  color: rgb(44, 44, 44);
  font-weight: 100;
  text-align: center;
}

.buttonContainer {
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-top: 20px;
}
.horizontalLine {
  background-color: #815b5b;
  position: absolute;
  top: 0px;
  bottom: 100%;
  width: 200px;
}
</style>
