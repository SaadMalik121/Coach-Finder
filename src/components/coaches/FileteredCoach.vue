<template>
  <div class="majorDiv">
    <h2>Filter the coaches of your choice</h2>
    <p>This make it easier for you to get your desired result quickly.</p>
    <div class="mainDiv">
      <span>
        <input
          type="checkbox"
          checked
          @change="filterChange"
          id="Backend"
          name="Backend"
        />
        <label for="Backend">Backend</label>
      </span>
      <span>
        <input
          type="checkbox"
          checked
          @change="filterChange"
          id="Frontend"
          name="Frontend"
        />
        <label for="Frontend">Frontend</label>
      </span>
      <span>
        <input
          type="checkbox"
          checked
          @change="filterChange"
          id="UI"
          name="UI"
        />
        <label for="UI">UI</label>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: { Backend: true, Frontend: true, UI: true },
    };
  },
  methods: {
    filterChange(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit("change-filter", updatedFilters);
      console.log(updatedFilters);
    },
  },
};
</script>

<style scoped>
.majorDiv {
  padding: 30px 5px;
}
input {
  height: 40%;
  margin-right: 5px;
  accent-color: orange;
  width: 20px;
}
.mainDiv {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
h2 {
  color: #cd7856;
}
</style>
