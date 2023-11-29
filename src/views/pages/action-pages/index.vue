<script>
import Layout from "@/layouts/main.vue";

export default {
  data() {
    return {};
  },
  components: {
    Layout,
  },
};
</script>

<template>
  <Layout>
    <!-- <BContainer fluid> -->
    <BRow class="div-height">
      <BCol lg="8" xxl="9">
        <BCard style="min-height: calc(100vh - 178px)" no-body>
          <BCardBody>
            <BTabs
              nav-class="nav-border-top nav-border-top-primary mb-3"
              content-class="text-muted"
            >
              <BTab title="Customizations" active>
                <template v-slot:title>
                  <i class="ri-edit-fill"></i> Customizations
                </template>
              </BTab>
              <BTab title="Verified Badge">
                <template v-slot:title>
                  <i class="ri-verified-badge-fill"></i> Verified Badge
                </template>
              </BTab>
              <BTab title="Branding">
                <template v-slot:title>
                  <i class="ri-brain-fill"></i> Branding
                </template>
              </BTab>
              <BTab title="Pixels">
                <template v-slot:title>
                  <i class="ri-pixelfed-fill"></i>
                  Pixels
                </template>
              </BTab>

              <BTab title="UTM Parameters">
                <template v-slot:title>
                  <i class="ri-keyboard-box-fill"></i> UTM Parameters
                </template>
              </BTab>

              <BTab title="Seo">
                <template v-slot:title>
                  <i class="ri-menu-search-fill"></i> Seo
                </template>
              </BTab>

              <BTab title="Advanced">
                <template v-slot:title>
                  <i class="ri-advertisement-fill"></i> Advanced
                </template>
              </BTab>
            </BTabs>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol
        lg="4"
        xxl="3"
        style="max-height: calc(100vh - 178px)"
        class="d-flex align-items-center justify-content-center"
      >
        <div
          class="w-100 bg-white h-100 border border-5 border-black"
          style="
            border-radius: 50px;
            max-height: 530px;
            max-width: 280px;
            min-height: 530px;
          "
        ></div>
      </BCol>
    </BRow>
    <!-- </BContainer> -->
  </Layout>
</template>

<style>
@media (max-width: 1740px) {
  .nav-tabs {
    overflow-x: auto;
    white-space: nowrap;
    flex-wrap: nowrap;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .nav-tabs::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  .nav-tabs .nav-item {
    flex-grow: 1;
  }
}
</style>
