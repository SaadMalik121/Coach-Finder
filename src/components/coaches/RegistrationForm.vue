<template>
  <div class="formContainer">
    <form @submit.prevent="formSubmitted">
      <div class="form-control">
        <label :class="{ errorLabel: !name.isValid }">Your Name</label>
        <input
          type="text"
          v-model.trim="name.val"
          :class="{ errorTextInput: !name.isValid }"
          @blur="clearValidity('name')"
        />
        <p v-if="!name.isValid" class="errorMessage">
          Name is required field. It must be filled
        </p>
      </div>
      <div class="form-control">
        <label :class="{ errorLabel: !age.isValid }">Your age</label>
        <input
          type="text"
          v-model.trim="age.val"
          :class="{ errorTextInput: !age.isValid }"
          @blur="clearValidity('age')"
        />
        <p v-if="!age.isValid" class="errorMessage">
          Age is required field. It must be filled
        </p>
      </div>
      <div class="form-control">
        <label :class="{ errorLabel: !hourlyRate.isValid }"
          >Charges per hour</label
        >
        <input
          type="number"
          v-model.number="hourlyRate.val"
          :class="{ errorTextInput: !hourlyRate.isValid }"
          @blur="clearValidity('hourlyRate')"
        />
        <p v-if="!hourlyRate.isValid" class="errorMessage">
          Hourly Rate is required field. It must be filled
        </p>
      </div>
      <div class="form-control">
        <label :class="{ errorLabel: !description.isValid }">Description</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          v-model.trim="description.val"
          :class="{ errorTextInput: !description.isValid }"
          @blur="clearValidity('description')"
        ></textarea>
        <p v-if="!description.isValid" class="errorMessage">
          Description is required field. It must be filled
        </p>
      </div>

      <h4 :class="{ errorLabel: !experties.isValid }">Choose Your Experties</h4>
      <div class="experties-container">
        <span>
          <input
            class="checkbox"
            type="checkbox"
            checked
            @change="filterChange"
            id="Backend"
            name="Backend"
            v-model.trim="experties.val"
            value="Backend"
            :class="{ errorTextInput: !experties.isValid }"
            :on-click="clearValidity('experties')"
          />
          <label for="Backend">Backend</label>
        </span>
        <span>
          <input
            class="checkbox"
            type="checkbox"
            checked
            @change="filterChange"
            id="Frontend"
            name="Frontend"
            v-model.trim="experties.val"
            value="Frontend"
            :class="{ errorTextInput: !experties.isValid }"
            @blur="clearValidity('experties')"
          />
          <label for="Frontend">Frontend</label>
        </span>
        <span>
          <input
            class="checkbox"
            type="checkbox"
            checked
            @change="filterChange"
            id="UI"
            name="UI"
            v-model.trim="experties.val"
            value="UI"
            :class="{ errorTextInput: !experties.isValid }"
            @blur="clearValidity('experties')"
          />
          <label for="UI">UI</label>
        </span>
      </div>

      <p class="errorMessage" v-if="!experties.isValid">
        Experties is required field. One or most experties must be chosen
      </p>
      <div class="submitBtn">
        <base-button mode="filled" text="Register as a coach"></base-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    clearValidity(fieldName) {
      this[fieldName].isValid = true;
    },
    validateInput() {
      if (this.name && this.name.val == "") {
        this.name.isValid = false;
        this.isFormValid = false;
      } else {
        this.name.isValid = true;
      }
      if (this.age && this.age.val == "") {
        this.age.isValid = false;
        this.isFormValid = false;
      } else {
        this.age.isValid = true;
      }
      if (this.description && this.description.val == "") {
        this.description.isValid = false;
        this.isFormValid = false;
      } else {
        this.description.isValid = true;
      }
      if (this.experties && this.experties.val.length == 0) {
        this.experties.isValid = false;
        this.isFormValid = false;
      } else {
        this.experties.isValid = true;
      }
      if (
        (this.hourlyRate && this.hourlyRate.val == null) ||
        this.hourlyRate.val < 0
      ) {
        this.hourlyRate.isValid = false;
        this.isFormValid = false;
      } else {
        this.hourlyRate.isValid = true;
      }
    },
    formSubmitted() {
      this.validateInput();
      if (
        !(
          this.age.isValid &&
          this.description.isValid &&
          this.hourlyRate.isValid &&
          this.experties.isValid &&
          this.name.isValid
        )
      ) {
        return;
      }
      const coachInformation = {
        name: this.name.val,
        age: this.age.val,
        experties: this.experties.val,
        description: this.description.val,
        hourlyRate: this.hourlyRate.val,
      };
      this.$emit("coachSubmittedInformation", coachInformation);
    },
  },
  data() {
    return {
      isFormValid: true,
      name: {
        val: "",
        isValid: true,
      },
      age: {
        val: "",
        isValid: true,
      },
      experties: { val: [], isValid: true },
      description: {
        val: "",
        isValid: true,
      },
      hourlyRate: {
        val: null,
        isValid: true,
      },
    };
  },
};
</script>

<style scoped>
.formContainer {
  padding: 30px 0px;
}
.form-control {
  margin-top: 10px;
  padding: 5px;
}
input {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc; /* Add a default border */
  outline: none;
  box-sizing: border-box;
  font-size: 20px;
}

textarea {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc; /* Add a default border */
  outline: none;
  box-sizing: border-box;
  font-size: 20px;
  overflow: hidden;
  display: block;
  resize: vertical;
}

/* Increase specificity to override default border */
input:focus,
textarea:focus {
  border: 2px solid #cd7856;
}
.checkbox {
  height: 40%;
  margin-right: 5px;
  accent-color: orange;
  width: 20px;
}
.experties-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0px 20px;
}
.submitBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  width: 100%;
}

.errorMessage {
  color: red;
  font-style: italic;
  font-size: 20px;
}
.errorLabel {
  color: red;
}
.errorTextInput {
  border: 2px solid red;
}
</style>
