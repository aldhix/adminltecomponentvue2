<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="#"><b>Admin</b>LTE</a>
    </div>
    <!-- /.login-logo -->
    <card>
      <card-body class="login-card-body">
        <p class="login-box-msg">Sign in to start your session</p>
        <input-group class="mb-3">
          <form-input placeholder="Email" />
          <input-group-append>
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </input-group-append>
        </input-group>
        <input-group class="mb-3">
          <form-input type="password" placeholder="Password" />
          <input-group-append>
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </input-group-append>
        </input-group>
        <grid-row>
          <grid-col class="col-8">
            <form-check>
              <input
                type="checkbox"
                class="form-check-input"
                id="remember"
                v-model="remember"
              />
              <form-check-label for="remember">
                Remember Me
              </form-check-label>
            </form-check>
          </grid-col>
          <grid-col class="col-4">
            <button
              type="button"
              class="btn btn-primary btn-block"
              @click="login"
            >
              Sign In
            </button>
          </grid-col>
        </grid-row>
      </card-body>
    </card>
  </div>
  <!-- /.login-box -->
</template>
<script>
import Card from "../components/Card.vue";
import CardBody from "../components/CardBody.vue";
import FormCheck from "../components/FormCheck.vue";
import FormCheckLabel from "../components/FormCheckLabel.vue";
import FormInput from "../components/FormInput.vue";
import GridCol from "../components/GridCol.vue";
import GridRow from "../components/GridRow.vue";
import InputGroup from "../components/InputGroup.vue";
import InputGroupAppend from "../components/InputGroupAppend.vue";
export default {
  components: {
    Card,
    CardBody,
    InputGroup,
    FormInput,
    InputGroupAppend,
    GridRow,
    GridCol,
    FormCheck,
    FormCheckLabel,
  },
  name: "Login",
  beforeCreate() {
    $(document)
      .find("body")
      .removeClass("sidebar-min")
      .addClass("login-page");
  },
  data() {
    return {
      remember: false,
    };
  },
  methods: {
    login() {
      if (this.remember) {
        alert("Remember is checked");
      }
      window.document.location.href = this.$router.resolve({
        name: "dashboard",
      }).href;
    },
  },
};
</script>
