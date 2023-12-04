<script>
import Layout from "@/layouts/main.vue";
import { MoreVerticalIcon } from "@zhuowenli/vue-feather-icons";

import { zoomableChart } from "./data";

export default {
  data() {
    return {
      subscriberAddClickFlag: false,
      subscriberImportClickFlag: false,
      subscriberExportClickFlag: false,
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
    MoreVerticalIcon,
    Layout,
  },
  methods: {
    handleSubscriberAddClick() {
      this.subscriberAddClickFlag = !this.subscriberAddClickFlag;
    },
    handleSubscriberImportClick() {
      this.subscriberImportClickFlag = !this.subscriberImportClickFlag;
    },
    handleSubscriberExportClick() {
      this.subscriberExportClickFlag = !this.subscriberExportClickFlag;
    },
  },
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
                  <li class="list-inline-item m-0">
                    <BDropdown
                      variant="link"
                      toggle-class=" arrow-none py-0 px-0"
                      menu-class="dropdown-menu"
                      aria-haspopup="true"
                    >
                      <template #button-content>
                        <!-- <i class="ri-more-2-fill"></i> -->
                        <more-vertical-icon
                          class="icon-sm"
                        ></more-vertical-icon>
                      </template>
                      <BDropdownItem
                        ><i
                          class="ri-list-check align-bottom text-muted me-2"
                        ></i>
                        View all
                      </BDropdownItem>
                      <BDropdownItem @click="handleSubscriberAddClick"
                        ><i
                          class="ri-add-line align-bottom text-muted me-2"
                        ></i>
                        Add</BDropdownItem
                      >
                      <BDropdownItem @click="handleSubscriberImportClick"
                        ><i
                          class="ri-upload-line align-bottom text-muted me-2"
                        ></i>
                        Import</BDropdownItem
                      >
                      <BDropdownItem @click="handleSubscriberExportClick"
                        ><i
                          class="ri-download-line align-bottom text-muted me-2"
                        ></i>
                        Export</BDropdownItem
                      >
                    </BDropdown>
                  </li>
                </template>
              </BTab>
              <BTab title="Segments">
                <template v-slot:title>
                  <i class="ri-building-3-line"></i>
                  Segments
                  <li class="list-inline-item m-0">
                    <BDropdown
                      variant="link"
                      toggle-class=" arrow-none py-0 px-0"
                      menu-class="dropdown-menu"
                      aria-haspopup="true"
                    >
                      <template #button-content>
                        <!-- <i class="ri-more-2-fill"></i> -->
                        <more-vertical-icon
                          class="icon-sm"
                        ></more-vertical-icon>
                      </template>
                      <BDropdownItem
                        ><i
                          class="ri-list-check align-bottom text-muted me-2"
                        ></i>
                        View all
                      </BDropdownItem>
                      <BDropdownItem
                        ><i
                          class="ri-add-line align-bottom text-muted me-2"
                        ></i>
                        Add</BDropdownItem
                      >
                    </BDropdown>
                  </li>
                </template>
              </BTab>
              <BTab title="Forms/Pages">
                <template v-slot:title>
                  <i class="ri-survey-line"></i>
                  Forms/Pages
                  <li class="list-inline-item m-0">
                    <BButtonGroup>
                      <BDropdown
                        variant="link"
                        toggle-class=" arrow-none py-0 px-0"
                        menu-class="dropdown-menu"
                        aria-haspopup="true"
                      >
                        <template #button-content>
                          <!-- <i class="ri-more-2-fill"></i> -->
                          <more-vertical-icon
                            class="icon-sm"
                          ></more-vertical-icon>
                        </template>
                        <BDropdownItem href="#"
                          ><i class="ri-pages-line me-2"></i> Embedded
                          Form</BDropdownItem
                        >
                        <BDropdownHeader style="background-color: #d9dede"
                          ><i class="ri-user-follow-line me-2"></i> Subscribe
                        </BDropdownHeader>
                        <BDropdownItem href="#">Sign-up form</BDropdownItem>
                        <BDropdownItem href="#"
                          >Sign-up "Thank you" page</BDropdownItem
                        >
                        <BDropdownItem href="#"
                          >Sign-up confirmation email</BDropdownItem
                        >
                        <BDropdownItem href="#"
                          >Confirmation "Thank you" page</BDropdownItem
                        >
                        <BDropdownItem href="#"
                          >Final "Welcome" email</BDropdownItem
                        >
                        <BDropdownHeader style="background-color: #d9dede"
                          ><i class="ri-user-unfollow-line me-2"></i>Unsubscribe
                        </BDropdownHeader>
                        <BDropdownItem href="#">Unsubscribe form</BDropdownItem>
                        <BDropdownItem href="#"
                          >Unsubscribe success page</BDropdownItem
                        >
                        <BDropdownItem href="#"
                          >Unsubscribe "Goodbye" email</BDropdownItem
                        >
                        <BDropdownHeader style="background-color: #d9dede"
                          ><i class="ri-user-line me-2"></i> Update profile
                        </BDropdownHeader>
                        <BDropdownItem href="#"
                          >Update profile email sent</BDropdownItem
                        >
                        <BDropdownItem href="#"
                          >Update profile email</BDropdownItem
                        >
                        <BDropdownItem href="#"
                          >Update profile form</BDropdownItem
                        >
                        <BDropdownItem href="#"
                          >Update profile success page</BDropdownItem
                        >
                      </BDropdown>
                    </BButtonGroup>
                  </li>
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
    <BOffcanvas
      v-model="subscriberAddClickFlag"
      placement="end"
      body-class="border-0 p-0 overflow-hidden"
      style="background: #405189 !important"
    >
      <template #title>
        <span style="color: white"
          ><i class="ri-add-line"></i> New Subscriber</span
        >
      </template>
      <form>
        <div class="m-3">
          <label for="email" class="form-label text-white">Email</label>
          <input type="email" class="form-control" id="email" required />
        </div>
        <div class="m-3">
          <label for="lastname" class="form-label text-white">Last Name</label>
          <input type="text" class="form-control" id="lastname" />
        </div>
        <div class="text-center mt-5 m-3">
          <BButton
            class="w-100"
            variant="primary"
            type="button"
            id="button-addon1"
            style="background-color: white; color: black"
            >Save</BButton
          >
        </div>
      </form>
    </BOffcanvas>
    <BOffcanvas
      v-model="subscriberImportClickFlag"
      placement="end"
      body-class="border-0 p-0 overflow-hidden"
      style="background: #405189 !important"
    >
      <template #title>
        <span style="color: white"
          ><i class="ri-group-line"></i> Import Subscribers</span
        >
      </template>
      <BAlert
        :model-value="true"
        variant="secondary"
        class="border-0 mx-3"
        show
      >
        Server's max upload file size is limited to <strong>1G</strong>. Make
        sure your input file does not exceed this limit. Acceptable file type is
        CSV with a header row containing the column / field names like EMAIL,
        FIRST_NAME, LAST_NAME... You can download a sample input file
        <a href="#"><strong>here (Sample.csv)</strong></a>
      </BAlert>
      <form>
        <div class="mx-3 text-white">
          <p>Choose file to upload</p>
          <div>
            <input class="form-control" id="formSizeDefault" type="file" />
          </div>
        </div>
        <div class="text-center mt-5 m-3">
          <BButton
            class="w-100"
            variant="primary"
            type="button"
            id="button-addon1"
            style="background-color: white; color: black"
            >Import</BButton
          >
        </div>
      </form>
    </BOffcanvas>
    <BOffcanvas
      v-model="subscriberExportClickFlag"
      placement="end"
      body-class="border-0 p-0 overflow-hidden"
      style="background: #405189 !important"
    >
      <template #title>
        <span style="color: white"
          ><i class="ri-group-line"></i> Export Subscribers</span
        >
      </template>
      <p class="text-white mx-3">
        Select what do you want to export then click the
        <strong>Export</strong> button below to start export.
      </p>
      <BFormGroup class="form-radio-dark mb-2 text-white">
        <div
          style="
            margin-left: 7%;
            display: flex;
            flex-direction: column;
            gap: 20px;
          "
        >
          <BFormRadio
            v-model="checkbox2"
            name="formradiocolor8"
            id="formradioRight2"
            class="form-radio-dark"
            style="font-size: 20px"
            >Whole list (1 subscribers)</BFormRadio
          >
          <BFormRadio
            v-model="checkbox2"
            name="formradiocolor8"
            id="formradioRight2"
            class="form-radio-dark"
            style="font-size: 20px"
            >Choose segment</BFormRadio
          >
        </div>
        <div class="text-center mt-5 m-3">
          <BButton
            class="w-100"
            variant="primary"
            type="button"
            id="button-addon1"
            style="background-color: white; color: black"
            >Export</BButton
          >
        </div>
      </BFormGroup>
    </BOffcanvas>
  </Layout>
</template>

<style scoped>
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
