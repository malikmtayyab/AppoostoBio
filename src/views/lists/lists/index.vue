<script>
import {
  MoreHorizontalIcon
} from "@zhuowenli/vue-feather-icons";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import animationData from "@/components/widgets/gsqxdxog.json";

import Lottie from "@/components/widgets/lottie.vue";
import { projectWidgets1, projectWidgets2, projectWidgets3 } from "@/common/data";

export default {
  data() {
    return {
      defaultOptions: { animationData: animationData },
      removeProjectModal: false,
      projectListWidgets1: projectWidgets1,
      projectListWidgets2: projectWidgets2,
      projectListWidgets3: projectWidgets3,
    };
  },
  components: {
    Layout,
    PageHeader,
    Multiselect,
    MoreHorizontalIcon,
    lottie: Lottie,
  },
  methods: {
    toggleFavourite(ele) {
      ele.target.closest('.favourite-btn').classList.toggle("active");
    },

    removeProject() {
      this.removeProjectModal = true;
      document.getElementById("removeProjectModal");
      addEventListener("click", (e) => {
        document
          .getElementById("remove-project")
          .addEventListener("click", () => {
            if (e.target.closest('.project-card')) {
              e.target.closest('.project-card').remove();
            }
            this.removeProjectModal = false;
          });
      });
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Project List" pageTitle="Projects" />
    <BRow class="g-4 mb-3">
   
      <BCol sm="auto">
        <div class="d-flex justify-content-sm-end gap-2">
          <div class="search-box ms-2">
            <input type="text" class="form-control" placeholder="Search..." />
            <i class="ri-search-line search-icon"></i>
          </div>

          <Multiselect class="multiselect form-control w-lg w-auto m-0" v-model="value" :close-on-select="true"
            :searchable="true" :create-option="true" :options="[
              { value: 'All', label: 'All' },
              { value: 'Today', label: 'Today' },
              { value: 'Yesterday', label: 'Yesterday' },
              { value: 'Last 7 Days', label: 'Last 7 Days' },
              { value: 'Last 30 Days', label: 'Last 30 Days' },
              { value: 'This Month', label: 'This Month' },
              { value: 'Last Year', label: 'Last Year' },
            ]" />
        </div>
        
      </BCol>

         <BCol sm>
          <div class="d-flex justify-content-sm-end gap-2">
          <router-link to="/apps/projects-create" class="btn btn-success "><i class="ri-add-line align-bottom me-1"></i>
            Add New</router-link>
        </div>
      </BCol>
    
    </BRow>

    <BRow>
      <BCol xxl="3" sm="6" class="project-card" v-for="(item, index) of  projectListWidgets1 " :key="index">
        <BCard no-body class="card-height-100">
          <BCardBody>
            <div class="d-flex flex-column h-100">
              <div class="d-flex">
                <div class="flex-grow-1">
                </div>
                <div class="flex-shrink-0">
                  <div class="d-flex gap-1 align-items-center">
                
                    <BDropdown variant="link"
                      toggle-class="btn btn-link text-muted p-1 mt-n2 py-0 text-decoration-none fs-15 arrow-none"
                      menu-class="dropdown-menu-end" :offset="{ alignmentAxis: -130, crossAxis: 0, mainAxis: 10 }">
                      <template #button-content>
                        <MoreHorizontalIcon class="icon-sm"></MoreHorizontalIcon>
                      </template>
                      <BDropdownItem to="/apps/projects-overview"><i
                          class="ri-eye-fill align-bottom me-2 text-muted"></i>
                        View</BDropdownItem>
                      <BDropdownItem to="/apps/projects-create"><i
                          class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                        Edit </BDropdownItem>
                      <div class="dropdown-divider"></div>
                      <BDropdownItem @click="removeProject"> <i
                          class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                        Remove
                      </BDropdownItem>
                    </BDropdown>
                  </div>
                </div>
              </div>
              <div class="d-flex mb-2 ">

                <div class="flex-grow-1">
                  <h5 class="mb-1 fs-15">
                    <router-link to="/apps/projects-overview" class="text-body">{{ item.label }}</router-link>
                  </h5>
                  <p class="text-muted text-truncate-two-lines mb-3">
                    {{ item.caption }}
                  </p>
                </div>
              </div>
              <div class="d-flex flex-grow-1 justify-content-between ms-1 me-1">
                
              <div class="mt-auto">
                <div class="d-flex mb-2">
                  <div class="flex-grow-1 me-2">
                    <div>Open rate</div>
                  </div>
                  <div class="flex-shrink-0">
                    <div>
                      <i class=" align-bottom me-1 text-muted "></i>
                     9.5%
                    </div>
                  </div>
                </div>
                <div class="progress progress-sm animated-progess">
                  <div class="progress-bar bg-success" role="progressbar" aria-valuenow="34" aria-valuemin="0"
                    aria-valuemax="100" :style="`width: ${item.progressBar};`"></div>
                </div>
              </div>

              <div class="mt-auto">
                <div class="d-flex mb-2 ">
                  <div class="flex-grow-1 me-2">
                    <div>Click rate</div>
                  </div>
                  <div class="flex-shrink-0">
                    <div>
                      <i class=" align-bottom me-1 text-muted"></i>
                      5.0%
                    </div>
                  </div>
                </div>
                <div class="progress progress-sm animated-progess">
                  <div class="progress-bar bg-success" role="progressbar" aria-valuenow="34" aria-valuemin="0"
                    aria-valuemax="100" :style="`width: ${item.progressBar};`"></div>
                </div>
              </div>

          
              </div>
            </div>
          </BCardBody>
          <BCardFooter class="bg-transparent border-top-dashed py-2">
            <div class="d-flex align-items-center">
              <div class="flex-grow-1">
               <div>2 Subscribers</div>
              </div>
              <div class="flex-shrink-0">
                <div class="text-muted">
                  <i class="ri-calendar-event-fill me-1 align-bottom"></i>
                  {{ item.date }}
                </div>
              </div>
            </div>
          </BCardFooter>
        </BCard>
      </BCol>
    </BRow>

 

    <b-modal v-model="removeProjectModal" id="removeProjectModal" hide-footer class="v-modal-custom" modal-class="zoomIn"
      centered>
      <div class="mt-2 text-center">
        <lottie class="avatar-xl" colors="primary:#f7b84b,secondary:#f06548" :options="defaultOptions" :height="100"
          :width="100" />
        <div class="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
          <h4>Are you Sure ?</h4>
          <p class="text-muted mx-4 mb-0">Are you Sure You want to Remove this Project ?</p>
        </div>
      </div>
      <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
        <BButton type="button" variant="light" class="w-sm" @click="removeProjectModal = false">Close</BButton>
        <BButton type="button" variant="danger" class="w-sm" id="remove-project">Yes, Delete It!</BButton>
      </div>
    </b-modal>

</Layout></template>