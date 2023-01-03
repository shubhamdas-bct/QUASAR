<template>
  <h3 v-if="user"></h3>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      user: null,
    };
  },
  async created() {
    const response = await axios.get("user");
  },

  methods: {},
});
</script>
