<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import Form from "./utils/form.vue";
import Response from "./utils/response.vue";

export default {
  data() {
    return {};
  },
  components: {
    Layout,
    PageHeader,
    Form,
    Response,
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Templates" pageTitle="AI" />
    <BRow>
      <BCol xxl="12" class="vh-75">
        <BCard no-body>
          <BCardBody>
            <BTabs
              nav-class="nav-border-top nav-border-top-primary mb-3"
              content-class="text-muted"
            >
              <BTab title="Command Prompts" active>
                <div
                  class="d-flex flex-column flex-md-row justify-content-between"
                >
                  <Form :index="0"></Form>

                  <Response></Response>
                </div>
              </BTab>
              <BTab title="Website">
                <div class="d-flex justify-content-between">
                  <Form :index="1"></Form>

                  <Response></Response>
                </div>
              </BTab>
              <BTab title="Developers">
                <div
                  class="d-flex flex-column flex-md-row justify-content-between"
                >
                  <Form :index="2"></Form>

                  <Response></Response>
                </div>
              </BTab>
              <BTab title="Social Media">
                <div
                  class="d-flex flex-column flex-md-row justify-content-between"
                >
                  <Form :index="3"></Form>

                  <Response></Response>
                </div>
              </BTab>

              <BTab title="Email">
                <div
                  class="d-flex flex-column flex-md-row justify-content-between"
                >
                  <Form :index="4"></Form>

                  <Response></Response>
                </div>
              </BTab>

              <BTab title="Text">
                <div
                  class="d-flex flex-column flex-md-row justify-content-between"
                >
                  <Form :index="5"></Form>

                  <Response></Response>
                </div>
              </BTab>

              <BTab title="Others">
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
  </Layout>
</template>
