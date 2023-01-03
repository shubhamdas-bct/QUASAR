<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> SBA_LAW_FIRM </q-toolbar-title>
        <q-btn
          unelevated
          color="light-green-7"
          label="Logout"
          @click="doLogout"
        />
        <div>{{ userFname }}</div>
      </q-toolbar>
    </q-header>

    <q-footer class="app-footer">
      <div class="row col-md-12">
        <div class="col-md-12 center">
          <!-- <img
            src="./assets/img/bct_logo.png"
            style="width: 20px; height: 20px"
            alt="JStack"
          /> -->
          <span style="font-size: 11px">
            Powered by Bluecopper Technologies Pvt. Ltd.</span
          >
        </div>
      </div>
    </q-footer>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Navigation Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import EssentialLink from "components/EssentialLink.vue";
import { Notify } from "quasar";

const linksList = [
  {
    title: "Dashboard",
    caption: "quasar.dev",
    icon: "speedometer-outline",
    link: "https://quasar.dev",
  },
  {
    title: "Case Enlistment",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Case Managegent",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Scope of Service Management",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "User Management",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Archived Cases",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default {
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      userFname: "",
    };
  },

  methods: {
    fetchLoginData(userFname) {
      this.userFname = userFname;
    },

    doLogout() {
      //querry string
      axios.post("http://localhost:8081/SBA_law_firm/ws/logOut").then(
        function (response) {
          window.location.assign("/#/login");
          Notify.create("Logout succesfull");
          // setTimeout(function () {
          //   location.reload();
          // }, 500);
        }
        // function (error) {}
      );
    },
  },
};
</script>
