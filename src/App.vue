<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/layout/TheHeader.vue";
import MainCard from "./components/Ui/MainCard.vue";
</script>

<template>
  <header>
    <TheHeader></TheHeader>
  </header>

  <div class="viewContainer">
    <MainCard>
      <!-- <RouterView /> -->

      <RouterView v-slot="SlotProps">
        <Transition name="slide" mode="out-in">
          <component :is="SlotProps.Component"></component>
        </Transition>
      </RouterView>
    </MainCard>
  </div>
</template>

<style scoped>
.viewContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes slide-down-animation {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-animation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/* CSS animation for slide transition */
@keyframes slide-in-animation {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slide-out-animation {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Transition styles for slide */
.slide-enter-active {
  animation: slide-in-animation 0.3s ease;
}

.slide-leave-active {
  /* animation: slide-in-animation 0.5s reverse; */
  animation: slide-out-animation 0.5s ease;
}
</style>
