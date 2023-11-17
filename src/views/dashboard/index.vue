<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import getChartColorsArray from "@/common/getChartColorsArray";

export default {
  data() {
    return {
      series: [{
        name: "Revenue",
        data: [20, 25, 30, 35, 40, 55, 70, 110, 150, 180, 210, 250],
      },
      {
        name: "Expenses",
        data: [12, 17, 45, 42, 24, 35, 42, 75, 102, 108, 156, 199],
      },
      ],
      chartOptions: {
        chart: {
          height: 290,
          type: "area",
          toolbar: "false",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return "$" + value + "k";
            },
          },
          tickAmount: 5,
          min: 0,
          max: 260,
        },
        colors: getChartColorsArray('["--vz-success", "--vz-danger"]'),
        fill: {
          opacity: 0.06,
          colors: ["#0AB39C", "#F06548"],
          type: "solid",
        },
      },
      dealsStatus: [
        {
          id: 1,
          name: "Absternet LLC",
          date: "Sep 20, 2021",
          img: require("@/assets/images/users/avatar-1.jpg"),
          representativeName: "Donald Risher",
          badgeClass: "success",
          status: "Deal Won",
          statusValue: "$100.1K",
        },
        {
          id: 2,
          name: "Raitech Soft",
          date: "Sep 23, 2021",
          img: require("@/assets/images/users/avatar-2.jpg"),
          representativeName: "Sofia Cunha",
          badgeClass: "warning",
          status: "Intro Call",
          statusValue: "$150K",
        },
        {
          id: 3,
          name: "William PVT",
          date: "Sep 27, 2021",
          img: require("@/assets/images/users/avatar-3.jpg"),
          representativeName: "Luis Rocha",
          badgeClass: "danger",
          status: "Stuck",
          statusValue: "$78.18K",
        },
        {
          id: 4,
          name: "Loiusee LLP",
          date: "Sep 30, 2021",
          img: require("@/assets/images/users/avatar-4.jpg"),
          representativeName: "Vitoria Rodrigues",
          badgeClass: "success",
          status: "Deal Won",
          statusValue: "$180K",
        },
        {
          id: 5,
          name: "Apple Inc.",
          date: "Sep 30, 2021",
          img: require("@/assets/images/users/avatar-6.jpg"),
          representativeName: "Vitoria Rodrigues",
          badgeClass: "info",
          status: "New Lead",
          statusValue: "$78.9K",
        },
      ],
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
    <BCard no-body class="card-height-100">
      <BCardHeader class="align-items-center d-flex py-0">
        <BCardTitle class="mb-0 flex-grow-1">Balance Overview</BCardTitle>
        <div class="flex-shrink-0">
          <BDropdown variant="link" class="card-header-dropdown" toggle-class="text-reset dropdown-btn arrow-none"
            menu-class="dropdown-menu-end" aria-haspopup="true"
            :offset="{ alignmentAxis: -3, crossAxis: 0, mainAxis: 0 }">
            <template #button-content> <span class="fw-semibold text-uppercase fs-12">Sort by: </span><span
                class="text-muted">Current Year<i class="mdi mdi-chevron-down ms-1"></i></span>
            </template>
            <BDropdownItem>Today</BDropdownItem>
            <BDropdownItem>Last Week</BDropdownItem>
            <BDropdownItem>Last Month</BDropdownItem>
            <BDropdownItem>Current Year</BDropdownItem>
          </BDropdown>
        </div>
      </BCardHeader>
      <BCardBody class="px-0">
        <ul class="list-inline main-chart text-center mb-0">
          <li class="list-inline-item chart-border-left me-0 border-0">
            <h4 class="text-primary">
              $584k
              <span class="text-muted d-inline-block fs-13 align-middle ms-2">Revenue</span>
            </h4>
          </li>
          <li class="list-inline-item chart-border-left me-0">
            <h4>
              $497k<span class="text-muted d-inline-block fs-13 align-middle ms-2">Expenses</span>
            </h4>
          </li>
          <li class="list-inline-item chart-border-left me-0">
            <h4>
              <span data-plugin="counterup">3.6</span>%<span
                class="text-muted d-inline-block fs-13 align-middle ms-2">Profit Ratio</span>
            </h4>
          </li>
        </ul>

        <apexchart class="apex-charts" height="290" dir="ltr" :series="series" :options="chartOptions"></apexchart>
      </BCardBody>
    </BCard>
    <BCard no-body>
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <BCardHeader class="align-items-center d-flex py-0">
            <BCardTitle class="my-3 flex-grow-1">Links</BCardTitle>
          </BCardHeader>
        </div>
        <div>
          <button class="btn btn-primary p-2">Create Link</button>
          <i class="ri-filter-fill align-bottom ms-3 me-3" style="font-size: 24px;"></i>
        </div>
      </div>

      <BCardBody>
        <div class=" table-responsive table-card">
          <table class="table table-borderless table-hover table-nowrap align-middle mb-0">
            <tbody>
              <tr v-for="(item, index) of dealsStatus" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.date }}</td>
                <td>
                  <img :src="`${item.img}`" alt="" class="avatar-xs rounded-circle me-2" />
                  <BLink href="#javascript: void(0);" class="text-body fw-medium">{{ item.representativeName }}</BLink>
                </td>
                <td>
                  <span
                    :class="{ 'badge bg-success-subtle text-success p-2': item.status == 'Deal Won', 'badge bg-warning-subtle text-warning p-2': item.status == 'Intro Call', 'badge bg-danger-subtle text-danger p-2': item.status == 'Stuck', 'badge bg-info-subtle text-info p-2': item.status == 'New Lead' }">{{
                      item.status }}</span>
                </td>
                <td>
                  <div class="text-nowrap">{{ item.statusValue }}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </BCardBody>
    </BCard>
  </Layout>
</template>
<style></style>
