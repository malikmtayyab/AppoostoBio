<script>
import Layout from "@/layouts/main.vue";
import Form from "./utils/form.vue";
import Response from "./utils/response.vue";

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
    Form,
    Response,
  },
  methods: {
    handleAdvancedButtonClick() {
      this.showOffcanvas = true;
    },
  },
};
</script>

<template>
  <Layout>
    <BRow class="div-height">
      <BCol xxl="12">
        <BCard style="min-height: calc(100vh - 178px)" no-body>
          <BCardBody>
            <BTabs
              nav-class="nav-border-top nav-border-top-primary mb-3"
              content-class="text-muted"
            >
              <BTab title="Command Prompts" active>
                <template v-slot:title>
                  <i class="mdi mdi-code-tags mdi-14px me-1"></i> Command
                  Prompts
                </template>
                <div
                  class="d-flex flex-column flex-md-row justify-content-between"
                >
                  <div>
                    <BCol xl="12" md="12" class="mt-3">
                      <BCard
                        no-body
                        class="card-animate"
                        v-on:click.prevent="showOffcanvas = true"
                      >
                        <BCardBody>
                          <div class="">
                            <div class="mb-2">
                              <i class="mdi mdi-code-tags mdi-24px me-1"></i>
                            </div>

                            <div>
                              <h5 class="fw-medium">Custom Prompts</h5>
                              <p class="mt-2 ff-secondary fw-semibold">
                                Ask our AI for anything & he will do it is best
                                to give you quality content
                              </p>
                            </div>
                            <div></div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </div>

                  <Response></Response>
                </div>
              </BTab>
              <BTab title="Website">
                <template v-slot:title>
                  <i class="mdi mdi-earth mdi-14px me-1"></i> Website
                </template>
                <div class="d-flex justify-content-between">
                  <div>
                    <BCol xl="12" md="12" class="mt-3">
                      <BCard
                        no-body
                        class="card-animate"
                        v-on:click.prevent="showOffcanvas = true"
                      >
                        <BCardBody>
                          <div class="">
                            <div class="mb-2">
                              <i class="mdi mdi-earth mdi-24px me-1"></i>
                            </div>

                            <div>
                              <h5 class="fw-medium">Website Headline</h5>
                              <p class="mt-2 ff-secondary fw-semibold">
                                Generate creative, catchy and unique headlines
                                for your website.
                              </p>
                            </div>
                            <div></div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </div>

                  <Response></Response>
                </div>
              </BTab>
              <BTab title="Developers">
                <template v-slot:title>
                  <i class="mdi mdi-code-braces mdi-14px me-1"></i> Developers
                </template>
                <div
                  class="d-flex flex-column flex-md-row justify-content-between"
                >
                  <div>
                    <BCol xl="12" md="12" class="mt-3">
                      <BCard
                        no-body
                        class="card-animate"
                        v-on:click.prevent="showOffcanvas = true"
                      >
                        <BCardBody>
                          <div class="">
                            <div class="mb-2">
                              <i class="mdi mdi-code-braces mdi-24px me-1"></i>
                            </div>

                            <div>
                              <h5 class="fw-medium">PHP Snippet</h5>
                              <p class="mt-2 ff-secondary fw-semibold">
                                Generate creative, catchy and unique headlines
                                for your website.
                              </p>
                            </div>
                            <div></div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </div>

                  <Response></Response>
                </div>
              </BTab>
              <BTab title="Social Media">
                <template v-slot:title>
                  <i class="mdi mdi-twitter mdi-14px me-1"></i> Social Media
                </template>
                <div
                  class="d-flex flex-column flex-md-row justify-content-between"
                >
                  <div>
                    <BCol xl="12" md="12" class="mt-3">
                      <BCard
                        no-body
                        class="card-animate"
                        v-on:click.prevent="showOffcanvas = true"
                      >
                        <BCardBody>
                          <div class="">
                            <div class="mb-2">
                              <i class="mdi mdi-twitter mdi-24px me-1"></i>
                            </div>

                            <div>
                              <h5 class="fw-medium">Social Media bio</h5>
                              <p class="mt-2 ff-secondary fw-semibold">
                                Generate creative, catchy and unique headlines
                                for your website.
                              </p>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </div>

                  <Response></Response>
                </div>
              </BTab>

              <BTab title="Email">
                <template v-slot:title>
                  <i class="mdi mdi-email mdi-14px me-1"></i> Email
                </template>
                <div
                  class="d-flex flex-column flex-md-row justify-content-between"
                >
                  <div>
                    <BCol xl="12" md="12" class="mt-3">
                      <BCard
                        no-body
                        class="card-animate"
                        v-on:click.prevent="showOffcanvas = true"
                      >
                        <BCardBody>
                          <div class="">
                            <div class="mb-2">
                              <i class="mdi mdi-email mdi-24px me-1"></i>
                            </div>

                            <div>
                              <h5 class="fw-medium">Sales Email</h5>
                              <p class="mt-2 ff-secondary fw-semibold">
                                Generate creative, catchy and unique headlines
                                for your website.
                              </p>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </div>

                  <Response></Response>
                </div>
              </BTab>

              <BTab title="Text">
                <template v-slot:title>
                  <i class="mdi mdi-message-text mdi-14px me-1"></i> Text
                </template>
                <div
                  class="d-flex flex-column flex-md-row justify-content-between"
                >
                  <div>
                    <BCol xl="12" md="6" class="mt-3">
                      <BCard
                        no-body
                        class="card-animate"
                        v-on:click.prevent="showOffcanvas = true"
                      >
                        <BCardBody>
                          <div class="">
                            <div class="mb-2">
                              <i class="mdi mdi-text mdi-24px me-1"></i>
                            </div>

                            <div>
                              <h5 class="fw-medium">Summarize</h5>
                              <p class="mt-2 ff-secondary fw-semibold">
                                Generate creative, catchy and unique headlines
                                for your website.
                              </p>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </div>

                  <Response></Response>
                </div>
              </BTab>

              <BTab title="Others">
                <template v-slot:title>
                  <i class="mdi mdi-dots-horizontal mdi-14px me-1"></i> Other
                </template>
                <div
                  class="d-flex flex-column flex-md-row justify-content-between"
                >
                  <div>
                    <BCol xl="12" md="6" class="mt-3">
                      <BCard
                        no-body
                        class="card-animate"
                        v-on:click.prevent="showOffcanvas = true"
                      >
                        <BCardBody>
                          <div class="">
                            <div class="mb-2">
                              <i class="mdi mdi-book mdi-24px me-1"></i>
                            </div>

                            <div>
                              <h5 class="fw-medium">Name Generator</h5>
                              <p class="mt-2 ff-secondary fw-semibold">
                                Generate creative, catchy and unique headlines
                                for your website.
                              </p>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </div>

                  <Response></Response>
                </div>
              </BTab>
            </BTabs>
            <!-- <div class="d-flex pb-5 pt-5">
  <div>
    
       
            <div>
              <div class="mb-4">
                <h4 class="color">Website</h4>
              </div>

              <BCol xl="12" md="6">
                <BCard no-body class="card-animate" v-on:click.prevent="showOffcanvas=true">
                  <BCardBody>
                    <div class="">
                      <div class="mb-2">
                        <i class="mdi mdi-earth mdi-24px me-1"></i>
                      </div>

                      <div>
                        <h5 class="fw-medium">Website Headline</h5>
                        <p class="mt-2 ff-secondary fw-semibold">
                          Generate creative, catchy and unique headlines for
                          your website.
                        </p>
                      </div>
                      <div></div>
                    </div>
                  </BCardBody>
                </BCard>
              </BCol>
            </div>

            <div>
              <div class="mb-4">
                <h4 class="color">Developers</h4>
              </div>

              <BCol xl="12" md="6">
                <BCard no-body class="card-animate" v-on:click.prevent="showOffcanvas=true">
                  <BCardBody>
                    <div class="">
                      <div class="mb-2">
                        <i class="mdi mdi-code-braces mdi-24px me-1"></i>
                      </div>

                      <div>
                        <h5 class="fw-medium">PHP Snippet</h5>
                        <p class="mt-2 ff-secondary fw-semibold">
                          Generate creative, catchy and unique headlines for
                          your website.
                        </p>
                      </div>
                      <div></div>
                    </div>
                  </BCardBody>
                </BCard>
              </BCol>
            </div>
            </div>
            <div >

<Response/>
</div>
            </div> -->
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BOffcanvas
      v-model="showOffcanvas"
      placement="end"
      body-class="border-0 p-0 "
      header-class="border-bottom"
      :style="{ background: '#405189', color: 'white' }"
    >
      <div class="offcanvas-body profile-offcanvas p-0">
        <h2 class="text-center text-white mt-3 color">Create Template</h2>
        <div class="p-3">
          <Form index="1" />
        </div>
      </div>
    </BOffcanvas>
  </Layout>
</template>

<style>
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
