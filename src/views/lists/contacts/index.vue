<script>
import Layout from "@/layouts/main.vue";

import { zoomableChart } from "./data";

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

      zoomableChart: zoomableChart,
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

                <BRow>
                  <BCol cols="12">
                    <BRow class="mb-3">
                      <h3>List Performance</h3>
                    </BRow>
                    <BRow class="mb-3">
                      <BCol lg="6">
                        <div class="d-flex justify-content-between">
                          <h5>Average open rate</h5>
                          <h5>34%</h5>
                        </div>
                        <div class="mt-auto">
                          <div
                            class="progress progress-sm animated-progess"
                            style="height: 16px"
                          >
                            <div
                              class="progress-bar bg-success"
                              role="progressbar"
                              aria-valuenow="34"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              :style="`width: ${34}%;`"
                            ></div>
                          </div>
                        </div>
                      </BCol>
                      <BCol lg="6">
                        <div class="d-flex justify-content-between">
                          <h5>Average click rate</h5>
                          <h5>34%</h5>
                        </div>
                        <div class="mt-auto">
                          <div
                            class="progress progress-sm animated-progess"
                            style="height: 16px"
                          >
                            <div
                              class="progress-bar bg-success"
                              role="progressbar"
                              aria-valuenow="34"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              :style="`width: ${34}%;`"
                            ></div>
                          </div>
                        </div>
                      </BCol>
                    </BRow>
                    <BRow class="">
                      <BCol xxl="3" lg="6">
                        <BCard
                          no-body
                          class="card-body card-primary text-center"
                        >
                          <h1 class="text-white">0.00%</h1>
                          <h5 class="text-white opacity-70">
                            Avg subscribe rate
                          </h5>
                        </BCard>
                      </BCol>
                      <BCol xxl="3" lg="6">
                        <BCard
                          no-body
                          class="card-body card-primary text-center"
                        >
                          <h1 class="text-white">0.00%</h1>
                          <h5 class="text-white opacity-70">
                            Avg unsubscribe rate
                          </h5>
                        </BCard>
                      </BCol>
                      <BCol xxl="3" lg="6">
                        <BCard
                          no-body
                          class="card-body card-primary text-center"
                        >
                          <h1 class="text-white">0.00%</h1>
                          <h5 class="text-white opacity-70">
                            Total unsubscribers
                          </h5>
                        </BCard>
                      </BCol>
                      <BCol xxl="3" lg="6">
                        <BCard
                          no-body
                          class="card-body card-primary text-center"
                        >
                          <h1 class="text-white">0.00%</h1>
                          <h5 class="text-white opacity-70">
                            Total unconfirmed
                          </h5>
                        </BCard>
                      </BCol>
                    </BRow>
                    <BRow>
                      <BCol lg="6">
                        <BCard class="mb-0" no-body>
                          <BCardHeader>
                            <BCardTitle class="mb-0">List Growth</BCardTitle>
                          </BCardHeader>
                          <BCardBody>
                            <apexchart
                              class="apex-charts"
                              height="350"
                              dir="ltr"
                              :series="zoomableChart.series"
                              :options="zoomableChart.chartOptions"
                            ></apexchart>
                          </BCardBody>
                        </BCard>
                      </BCol>
                      <BCol lg="6">
                        <div
                          class="bg-primary d-flex flex-column align-items-center justify-content-center"
                          style="height: 100%; border-radius: 6px"
                        >
                          <i class="ri-bard-line text-white fs-1"></i>
                          <h4 class="text-white">There are no logs yet</h4>
                        </div>
                      </BCol>
                    </BRow>
                  </BCol>
                </BRow>
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
.opacity-70 {
  opacity: 70%;
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
