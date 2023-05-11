<template>
  <div>
    <Header></Header>
    <business></business>
    <D_content></D_content>
    <broadside></broadside>
  </div>
</template>

<script>
import Header from "./header.vue";
import business from "./business.vue";
import D_content from "./content.vue";
import broadside from "./broadside.vue";
export default {
  components: {
    Header,
    business,
    D_content,
    broadside
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
</style>
