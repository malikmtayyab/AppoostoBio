<script>
import Layout from "@/layouts/main.vue";


export default {
  data() {
    return {
      shortendCanvas: false,
      urlCreate: false,
      filterCanvas: false,
    };
  },
  components: {
    Layout,
   
    
  },
  methods: {
    handleFileLinkClick() {
      this.urlCreate = false;
      this.shortendCanvas = !this.shortendCanvas;
    },
    fileLinkClick() {
      this.urlCreate = !this.urlCreate;
    },
    handleFilterClick() {
      this.filterCanvas = true;
    },
  },
};
</script>

<template>
  <Layout>

    <h1>Hello</h1>
  </Layout>
</template>
