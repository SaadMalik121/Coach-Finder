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
        <label :class="{ errorLabel: !email.isValid }">Your email</label>
        <input
          type="text"
          v-model.trim="email.val"
          :class="{ errorTextInput: !email.isValid }"
          @blur="clearValidity('email')"
        />
        <p v-if="!email.isValid" class="errorMessage">
          Email is required field. It must be filled
        </p>
      </div>

      <div class="form-control">
        <label :class="{ errorLabel: !message.isValid }">Message</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          v-model.trim="message.val"
          :class="{ errorTextInput: !message.isValid }"
          @blur="clearValidity('message')"
        ></textarea>
        <p v-if="!message.isValid" class="errorMessage">
          Message is required field. It must be filled
        </p>
      </div>

      <div class="submitBtn">
        <base-button mode="filled" text="Send Request Message"></base-button>
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
      } else {
        this.name.isValid = true;
      }
      if (this.email && this.email.val == "") {
        this.email.isValid = false;
      } else {
        this.email.isValid = true;
      }
      if (this.message && this.message.val == "") {
        this.message.isValid = false;
      } else {
        this.message.isValid = true;
      }
    },
    formSubmitted() {
      this.validateInput();
      if (!(this.email.isValid && this.message.isValid && this.name.isValid)) {
        return;
      }
      const requestMessage = {
        name: this.name.val,
        email: this.email.val,
        message: this.message.val,
      };
      this.$emit("requestMessage", requestMessage);
    },
  },
  data() {
    return {
      name: {
        val: "",
        isValid: true,
      },
      email: {
        val: "",
        isValid: true,
      },
      message: {
        val: "",
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
