<script>
import Layout from "@/layouts/main.vue";
import { MoreVerticalIcon } from "@zhuowenli/vue-feather-icons";

export default {
  data() {
    return {
      subscriberAddClickFlag: false,
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
    MoreVerticalIcon,
    Layout,
  },
  methods: {
    handleSubscriberAddClick() {
      console.log("in listner", this.subscriberAddClickFlag);
      this.subscriberAddClickFlag = !this.subscriberAddClickFlag;
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
                      <BDropdownItem
                        ><i
                          class="ri-upload-line align-bottom text-muted me-2"
                        ></i>
                        Import</BDropdownItem
                      >
                      <BDropdownItem
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
      <!-- <div class="offcanvas-body profile-offcanvas p-0">
        <div v-for="data of botData" :key="data.id" class="text-center">
          <div v-if="data.name === botName">
            <div class="m-5">
              <img
                :src="data.image"
                alt=""
                class="avatar-lg img-thumbnail rounded-circle mx-auto profile-img"
              />
              <div class="mt-3">
                <h5 class="fs-16 mb-1">
                  <a
                    href="javascript:void(0);"
                    class="link-primary username text-white"
                  >
                    {{ data.name }}</a
                  >
                </h5>
              </div>
            </div>
            <div class="p-3 text-white">
              <div class="mb-3">
                <p class="text-uppercase fw-medium fs-12 mb-1 text-white">
                  {{ data.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="m-3">
        <label for="basiInput" class="form-label text-white">Chat Title</label>
        <input type="text" class="form-control" id="basiInput" />
      </div>
      <div class="text-center mt-5 m-3">
        <BButton
          class="w-100"
          variant="primary"
          type="button"
          id="button-addon1"
          style="background-color: white; color: black"
          >Create</BButton
        >
      </div>
    </BOffcanvas>
  </Layout>
</template>

<style scoped>
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
