<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";

export default {
  data() {
    return {
    };
  },
  components: {
    Layout,
    PageHeader,
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Dashboard" pageTitle="Dashboard" />
    <BRow>
      <BCol xl="12">
        <BCard no-body class="crm-widget">
          <BCardBody class="p-0">
            <BRow class="row-cols-md-3 row-cols-1">
              <BCol lg class="border-end">
                <div class="py-4 px-3">
                  <h5 class="text-muted text-uppercase fs-13">
                    Campaign Sent
                    <i class="
                                      ri-arrow-up-circle-line
                                      text-success
                                      fs-18
                                      float-end
                                      align-middle
                                    "></i>
                  </h5>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <i class="ri-space-ship-line display-6 text-muted"></i>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h2 class="mb-0">
                        <count-to :startVal="0" :endVal="197" :duration="5000"></count-to>
                      </h2>
                    </div>
                  </div>
                </div>
              </BCol>

              <BCol lg class="border-end">
                <div class="mt-3 mt-md-0 py-4 px-3">
                  <h5 class="text-muted text-uppercase fs-13">
                    Annual Profit
                    <i class="
                                      ri-arrow-up-circle-line
                                      text-success
                                      fs-18
                                      float-end
                                      align-middle
                                    "></i>
                  </h5>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <i class="ri-exchange-dollar-line display-6 text-muted"></i>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h2 class="mb-0">
                        $<count-to :startVal="0" :endVal="489" :duration="5000"></count-to>k
                      </h2>
                    </div>
                  </div>
                </div>
              </BCol>

              <BCol lg class="border-end">
                <div class="mt-3 mt-md-0 py-4 px-3">
                  <h5 class="text-muted text-uppercase fs-13">
                    Lead Conversation
                    <i class="
                                      ri-arrow-down-circle-line
                                      text-danger
                                      fs-18
                                      float-end
                                      align-middle
                                    "></i>
                  </h5>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <i class="ri-pulse-line display-6 text-muted"></i>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h2 class="mb-0">
                        <count-to :startVal="0" :endVal="32" :duration="5000"></count-to>%
                      </h2>
                    </div>
                  </div>
                </div>
              </BCol>

              <BCol lg class="border-end">
                <div class="mt-3 mt-lg-0 py-4 px-3">
                  <h5 class="text-muted text-uppercase fs-13">
                    Daily Average Income
                    <i class="
                                      ri-arrow-up-circle-line
                                      text-success
                                      fs-18
                                      float-end
                                      align-middle
                                    "></i>
                  </h5>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <i class="ri-trophy-line display-6 text-muted"></i>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h2 class="mb-0">
                        $<count-to :startVal="0" :endVal="1596" :duration="5000"></count-to>0
                      </h2>
                    </div>
                  </div>
                </div>
              </BCol>

              <BCol lg>
                <div class="mt-3 mt-lg-0 py-4 px-3 border-end">
                  <h5 class="text-muted text-uppercase fs-13">
                    Annual Deals
                    <i class="
                                      ri-arrow-down-circle-line
                                      text-danger
                                      fs-18
                                      float-end
                                      align-middle
                                    "></i>
                  </h5>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <i class="ri-service-line display-6 text-muted"></i>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h2 class="mb-0">
                        <count-to :startVal="0" :endVal="2659" :duration="5000"></count-to>
                      </h2>
                    </div>
                  </div>
                </div>
              </BCol>

              <BCol lg>
                <div class="mt-3 mt-lg-0 py-4 px-3">
                  <h5 class="text-muted text-uppercase fs-13">
                    MOnthly Deals
                    <i class="
                                      ri-arrow-down-circle-line
                                      text-danger
                                      fs-18
                                      float-end
                                      align-middle
                                    "></i>
                  </h5>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <i class="ri-service-line display-6 text-muted"></i>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h2 class="mb-0">
                        <count-to :startVal="0" :endVal="2659" :duration="5000"></count-to>
                      </h2>
                    </div>
                  </div>
                </div>
              </BCol>

            </BRow>

          </BCardBody>

        </BCard>

      </BCol>

    </BRow>
  </Layout>
</template>
