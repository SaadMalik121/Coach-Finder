<template>
  <button v-if="!link" class="button" :class="mode" @click="click">
    {{ text }}
  </button>

  <RouterLink :to="to" v-else>
    <p :class="mode">{{ text }}</p>
  </RouterLink>
</template>

<script>
export default {
  props: ["mode", "link", "text", "to", "click"],
};
</script>

<style scoped>
.flat {
  border: 1px solid #cd7856;
  padding: 15px 20px;
  border-radius: 20px;
  color: #cd7856;
  text-align: center;
}

.filled {
  background-color: #cd7856;
  border: 0;
  padding: 15px 25px;
  border-radius: 20px;
  color: white;
  text-align: center;
}

a {
  text-decoration: none;
  color: gainsboro;
  font-weight: bold;
  cursor: pointer;
}

a:active,
a.router-link-active {
  text-decoration: none;
  color: #cd7856;
}
</style>
