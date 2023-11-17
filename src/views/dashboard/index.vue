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
                     Total Biolinks
                 
                  </h5>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <i class="ri-space-ship-line display-6 text-muted"></i>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h2 class="mb-0">
                        <!-- <count-to :startVal="0" :endVal="197" :duration="5000"></count-to> -->
                        10
                      </h2>
                    </div>
                  </div>
                </div>
              </BCol>

              <BCol lg class="border-end">
                <div class="mt-3 mt-md-0 py-4 px-3">
                  <h5 class="text-muted text-uppercase fs-13">
                    Total Short Links
                  
                  </h5>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <i class="ri-exchange-dollar-line display-6 text-muted"></i>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h2 class="mb-0">
                        <!-- $<count-to :startVal="0" :endVal="489" :duration="5000"></count-to>k -->
                        0
                      </h2>
                    </div>
                  </div>
                </div>
              </BCol>

              <BCol lg class="border-end">
                <div class="mt-3 mt-md-0 py-4 px-3">
                  <h5 class="text-muted text-uppercase fs-13">
                    Total File Links
                   
                  </h5>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <i class="ri-pulse-line display-6 text-muted"></i>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h2 class="mb-0">
                        <!-- <count-to :startVal="0" :endVal="32" :duration="5000"></count-to>% -->
                        5
                      </h2>
                    </div>
                  </div>
                </div>
              </BCol>

              <BCol lg class="border-end">
                <div class="mt-3 mt-lg-0 py-4 px-3">
                  <h5 class="text-muted text-uppercase fs-13">
                    Total vcard links
                    
                  </h5>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <i class="ri-trophy-line display-6 text-muted"></i>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h2 class="mb-0">
                        <!-- $<count-to :startVal="0" :endVal="1596" :duration="5000"></count-to>0 -->
                        4
                      </h2>
                    </div>
                  </div>
                </div>
              </BCol>

              <BCol lg>
                <div class="mt-3 mt-lg-0 py-4 px-3 border-end">
                  <h5 class="text-muted text-uppercase fs-13">
                   Total Event Links
                  
                  </h5>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <i class="ri-service-line display-6 text-muted"></i>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h2 class="mb-0">
                        <!-- <count-to :startVal="0" :endVal="2659" :duration="5000"></count-to> -->
                        15
                      </h2>
                    </div>
                  </div>
                </div>
              </BCol>

              <BCol lg>
                <div class="mt-3 mt-lg-0 py-4 px-3">
                  <h5 class="text-muted text-uppercase fs-13">
                    Total QR Codes
                  
                  </h5>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <i class="ri-qr-code-line display-6 text-muted"></i>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h2 class="mb-0">
                        <!-- <count-to :startVal="0" :endVal="2659" :duration="5000"></count-to> -->
                        78
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
