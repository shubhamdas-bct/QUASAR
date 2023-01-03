<template>
  <q-layout>
    <q-page-container>
      <q-page
        class="bg-light-blue window-height window-width row justify-center items-center"
      >
        <div class="column">
          <div class="row">
            <h5 class="text-h5 text-white q-my-md">Company & Co</h5>
          </div>
          <div class="row">
            <q-card square bordered class="q-pa-lg shadow-1">
              <q-card-section>
                <q-form class="q-gutter-md">
                  <q-input
                    square
                    filled
                    clearable
                    v-model="useremail"
                    type="useremail"
                    label="useremail"
                  />
                  <q-input
                    square
                    filled
                    clearable
                    v-model="password"
                    type="password"
                    label="password"
                  />
                </q-form>
              </q-card-section>
              <q-card-actions class="q-px-md">
                <q-btn
                  unelevated
                  color="light-blue-7"
                  size="lg"
                  class="full-width"
                  label="Login"
                  @click="doLogin"
                />
              </q-card-actions>
              {{ userFname }}
              <!-- <q-btn   icon="add" @click="addMyThing" /> -->
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";
import { Notify } from "quasar";
import { LocalStorage, SessionStorage } from "quasar";
//import { AUTH_REQUEST } from "actions/auth";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      useremail: null,
      password: null,
      userFname: "",
      // result: "",
      //show: "",
      // messages: "",
    };
  },
  methods: {
    fetchLoginData(userFname) {
      this.userFname = userFname;
    },
    doLogin() {
      //querry string
      axios
        .post(
          "http://localhost:8081/SBA_law_firm/ws/logIn?useremail=" +
            this.useremail +
            "&password=" +
            this.password
        )
        .then((response) => {
          console.log(response.data);
          this.fetchLoginData = response.data;

          window.location.assign("/#/indexpage");
          Notify.create("Congrats you logged in ");
        })
        .catch(() => {
          Notify.create("Check your email and password");
        });
    },
  },
};
</script>
