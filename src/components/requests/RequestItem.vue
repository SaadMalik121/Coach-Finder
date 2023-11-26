<template>
  <div class="openingContainer">
    <p class="requestBatch">Request-{{ index + 1 }}</p>

    <div class="mainContainer">
      <h2>{{ request.name }}</h2>
      <a :href="'mailto:' + request.email" class="mail">{{ request.email }}</a>

      <p class="messageBadge">message</p>
      <p class="message">{{ request.message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["request", "index"],
};
</script>

<style scoped>
.requestBatch {
  background-color: rgb(222, 144, 0);
  width: fit-content;
  padding: 10px 20px;
  color: whitesmoke;
  border-radius: 50px;
  position: relative;
  right: -36%;
  top: 75px;
  z-index: 1;
}
.openingContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.mainContainer {
  background-color: antiquewhite;
  padding: 10px 50px 5px;
  border-radius: 20px;
  position: relative;
  border: 1px solid rgba(86, 86, 86, 0.37);
  margin-top: 30px;
  box-shadow: 5px 2px 20px rgba(0, 0, 0, 0.192);
  width: 80%;
}
h2 {
  color: orange;
}
.mail {
  text-decoration: none;
  color: rgb(147, 43, 5);
}

.mail:hover {
  text-decoration: underline;
  color: rgb(81, 34, 17);
}

.message {
  background-color: rgb(237, 213, 169);
  margin-top: 10px;
  padding: 40px 30px;
  border-radius: 50px;
  color: brown;
}
.messageBadge {
  background-color: red;
  width: fit-content;
  padding: 10px 20px;
  color: whitesmoke;
  border-radius: 50px;
  position: absolute;
  right: 50px;
}
</style>
