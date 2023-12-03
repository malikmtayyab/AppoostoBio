<script>
import Layout from "@/layouts/main.vue";

export default {
  data() {
    return {
      showOffcanvas: false,
      creativity_levels: [
        "None (the most factual)",
        "Low (high factual)",
        "Optimal",
        "High (highly creative)",
        "Maximum (the most creative)",
        "Custom",
      ],
      variants: ["1 variants", "2 variants", "3 variants"],
    };
  },
  components: {
    Layout,
  },
  methods: {},
};
</script>

<template>
  <Layout>
    <BRow class="div-height">
      <div class="d-flex justify-content-between">
        <h1>list 1</h1>
        <div>
          <BFormSelect class="form-select" id="validationDefault04">
            <option selected disabled value="">Change List</option>
            <option value="Empty">Empty</option>
          </BFormSelect>
        </div>
      </div>
      <div class="mt-2 mb-2">
        <h5>
          <span class="subscriber-count bg-primary rounded-circle">0</span>
          Subscribers
        </h5>
      </div>
      <BCol xxl="12">
        <BCard style="min-height: calc(100vh - 269px)" no-body>
          <BCardBody>
            <BTabs
              nav-class="nav-border-top nav-border-top-primary mb-3"
              content-class="text-muted"
            >
              <BTab title="Overview" active>
                <template v-slot:title>
                  <i class="ri-tornado-line"></i>
                  Overview
                </template>
              </BTab>
              <BTab title="Settings">
                <template v-slot:title>
                  <i class="ri-settings-3-line"></i>
                  Settings
                </template>
              </BTab>

              <BTab title="Subscribers">
                <template v-slot:title>
                  <i class="ri-user-3-line"></i>Subscribers
                </template>
              </BTab>
              <BTab title="Segments">
                <template v-slot:title>
                  <i class="ri-building-3-line"></i>
                  Segments
                </template>
              </BTab>
              <BTab title="Forms/Pages">
                <template v-slot:title>
                  <i class="ri-survey-line"></i>
                  Forms/Pages
                </template>
              </BTab>
              <BTab title="Manage list fields">
                <template v-slot:title>
                  <i class="ri-list-check"></i>
                  Manage list fields
                </template>
              </BTab>
              <BTab title="Email verification">
                <template v-slot:title>
                  <i class="ri-mail-send-line"></i>
                  Email verification
                </template>
              </BTab>
            </BTabs>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>

<style>
.subscriber-count {
  color: white;
  padding: 2px 6px;
}

@media (max-width: 1180px) {
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
