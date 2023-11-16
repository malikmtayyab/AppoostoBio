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
      <BCol xxl="12" >
        <BCard no-body>
          <BCardBody>
            <BTabs
              nav-class="nav-border-top nav-border-top-primary mb-3"
              content-class="text-muted"
            >
              <BTab title="Command Prompts" active>
                <template v-slot:title>
   
          <i class="mdi mdi-code-tags mdi-14px me-1  "></i> Command Prompts
      
      </template>
                <div
                  class="d-flex flex-column flex-md-row justify-content-between"
                >
                  <Form
                    :index="0"
                    @advanced-click="handleAdvancedButtonClick"
                  ></Form>

                  <Response></Response>
                </div>
              </BTab>
              <BTab title="Website">
                <template v-slot:title>
      
          <i class="mdi mdi-earth mdi-14px me-1"></i> Website
        
        </template>
                <div class="d-flex justify-content-between">
                  <Form :index="1"></Form>

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
                  <Form :index="2"></Form>

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
                  <Form :index="3"></Form>

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
                  <Form :index="4"></Form>

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
                  <Form :index="5"></Form>

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
                  <Form :index="6"></Form>

                  <Response></Response>
                </div>
              </BTab>
            </BTabs>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BOffcanvas
      v-model="showOffcanvas"
      placement="end"
      body-class="border-0 p-0 overflow-hidden"
      header-class="border-bottom"
    >
      <div class="offcanvas-body profile-offcanvas p-0">
        <div class="p-3">
          <div>
            <div>
          
              <div class="mt-3 text-center">
                <h5 class="fs-16 mb-1">
                  <h3 class="link-primary username">Advanced Settings</h3>
                </h5>
              </div>
            </div>
            <div class="border-top border-top-dashed p-3">
              <div class="mb-3 mt-3">
                <label for="compnayNameinput" class="form-label"
                  >Creativity Level</label
                >
                <BFormSelect
                  class="form-select"
                  id="validationDefault04"
                  required
                >
                  <option selected disabled value="">Choose Level</option>

                  <option v-for="option in creativity_levels" :key="option">
                    {{ option }}
                  </option>
                </BFormSelect>
              </div>

              <div class="mb-3 mt-3">
                <label for="compnayNameinput" class="form-label"
                  >Variants</label
                >
                <BFormSelect
                  class="form-select"
                  id="validationDefault04"
                  required
                >
                  <option selected disabled value="">Choose Variant</option>

                  <option v-for="option in variants" :key="option">
                    {{ option }}
                  </option>
                </BFormSelect>
              </div>

              <div class="mb-3 mt-3">
                <label for="firstNameinput" class="form-label"
                  >Maximum words per variant</label
                >
                <BFormInput
                  type="text"
                  class="form-control"
                  placeholder="1000"
                  id="firstNameinput"
                />
              </div>
              <div class="mb-3 mt-4">
                <BButton
                  v-on:click.prevent="showOffcanvas=!showOffcanvas"
                  class="w-100"
                  type="submit"
                  variant="primary"
                >
                  Apply
                </BButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BOffcanvas>
  </Layout>
</template>
