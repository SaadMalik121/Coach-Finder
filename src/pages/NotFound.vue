<template>
  <div class="mainDiv">
    <img src="error-404.png" class="image" />
    <h2>
      Page not found. DO you want to see coaches list.
      <RouterLink to="/" class="link"> Visit here</RouterLink>
    </h2>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mainDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.image {
  width: 300px;
}
h2 {
  color: rgb(87, 87, 87);
}
.link {
  color: orange;
}
</style>
