<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import { MoreVerticalIcon } from "@zhuowenli/vue-feather-icons";

export default {
  data() {
    return {
      shortendCanvas: false,
      urlCreate: false,
      filterCanvas: false,
    };
  },
  components: {
    Layout,
    PageHeader,
    MoreVerticalIcon,
  },
  methods: {
    handleFileLinkClick() {
      this.urlCreate = false;
      this.shortendCanvas = !this.shortendCanvas;
    },
    fileLinkClick() {
      this.urlCreate = !this.urlCreate;
    },
    handleFilterClick() {
      this.filterCanvas = true;
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="File link" pageTitle="Links" />
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div>
        <BCardHeader class="align-items-center d-flex py-0">
          <BCardTitle class="my-3 flex-grow-1"></BCardTitle>
        </BCardHeader>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <BCardHeader class="align-items-center d-flex py-0">
            <BCardTitle class="my-3 flex-grow-1"></BCardTitle>
          </BCardHeader>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <button class="btn btn-primary p-2" @click="handleFileLinkClick">
            File Link
          </button>
          <i
            class="ri-download-2-fill cursor-pointer"
            style="font-size: 24px; margin-left: 10px; margin-right: 10px"
          ></i>

          <i
            class="ri-filter-fill align-bottom cursor-pointer"
            style="font-size: 24px"
            v-on:click.prevent="handleFilterClick"
          ></i>
        </div>
      </div>
    </div>
    <BCol xl="12">
      <BCard no-body>
        <BCardBody>
          <div class="live-preview">
            <div class="table-responsive">
              <table
                class="table table-borderless align-middle table-nowrap mb-0"
              >
                <thead>
                  <tr>
                    <th class="text-start" scope="col">Title</th>
                    <th class="text-center" scope="col">Stats</th>
                    <th class="text-center" scope="col">Dates</th>
                    <th class="text-center" scope="col">Status</th>
                    <th class="text-end" scope="col">Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Annette Black</td>
                    <td>
                      <div class="d-flex justify-content-center">
                        <i class="ri-line-chart-line"></i>
                        <td>0</td>
                      </div>
                    </td>
                    <td>
                      <div
                        class="d-flex align-items-center justify-content-center"
                      >
                        <i class="ri-calendar-fill p-2"></i>
                        <i class="ri-history-line"></i>
                      </div>
                    </td>
                    <td>
                      <div
                        class="form-check form-switch d-flex justify-content-center"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="SwitchCheck2"
                        />
                      </div>
                    </td>
                    <td>
                      <div
                        class="hstack gap-3 fs-15 d-flex justify-content-end"
                      >
                        <BLink href="javascript:void(0);" class="link-primary"
                          ><i class="ri-file-copy-line"></i
                        ></BLink>
                        <BLink href="javascript:void(0);" class="link-danger">
                          <BDropdown
                            variant="link"
                            class="btn btn-ghost-secondary btn-icon"
                            toggle-class=" arrow-none"
                            menu-class="dropdown-menu"
                            aria-haspopup="true"
                          >
                            <template #button-content>
                              <more-vertical-icon
                                class="icon-sm"
                              ></more-vertical-icon>
                            </template>
                            <BDropdownItem
                              ><i
                                class="ri-edit-line align-bottom text-muted me-2"
                              ></i>
                              Edit
                            </BDropdownItem>
                            <BDropdownItem
                              ><i
                                class="ri-line-chart-line align-bottom text-muted me-2"
                              ></i>
                              Statistics</BDropdownItem
                            >
                            <BDropdownItem
                              ><i
                                class="ri-qr-code-line align-bottom text-muted me-2"
                              ></i>
                              QR Code</BDropdownItem
                            >
                            <BDropdownItem
                              ><i
                                class="ri-file-copy-line align-bottom text-muted me-2"
                              ></i>
                              Duplicate</BDropdownItem
                            >
                            <BDropdownItem
                              ><i
                                class="ri-delete-bin-5-line align-bottom text-muted me-2"
                              ></i>
                              Delete</BDropdownItem
                            >
                          </BDropdown>
                        </BLink>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Bessie Cooper</td>
                    <td>
                      <div class="d-flex justify-content-center">
                        <i class="ri-line-chart-line"></i>
                        <td>0</td>
                      </div>
                    </td>
                    <td>
                      <div
                        class="d-flex align-items-center justify-content-center"
                      >
                        <i class="ri-calendar-fill p-2"></i>
                        <i class="ri-history-line"></i>
                      </div>
                    </td>
                    <td>
                      <div
                        class="form-check form-switch d-flex justify-content-center"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="SwitchCheck2"
                        />
                      </div>
                    </td>
                    <td>
                      <div
                        class="hstack gap-3 fs-15 d-flex justify-content-end"
                      >
                        <BLink href="javascript:void(0);" class="link-primary"
                          ><i class="ri-file-copy-line"></i
                        ></BLink>
                        <BLink href="javascript:void(0);" class="link-danger">
                          <BDropdown
                            variant="link"
                            class="btn btn-ghost-secondary btn-icon"
                            toggle-class=" arrow-none"
                            menu-class="dropdown-menu"
                            aria-haspopup="true"
                          >
                            <template #button-content>
                              <more-vertical-icon
                                class="icon-sm"
                              ></more-vertical-icon>
                            </template>
                            <BDropdownItem
                              ><i
                                class="ri-edit-line align-bottom text-muted me-2"
                              ></i>
                              Edit
                            </BDropdownItem>
                            <BDropdownItem
                              ><i
                                class="ri-line-chart-line align-bottom text-muted me-2"
                              ></i>
                              Statistics</BDropdownItem
                            >
                            <BDropdownItem
                              ><i
                                class="ri-qr-code-line align-bottom text-muted me-2"
                              ></i>
                              QR Code</BDropdownItem
                            >
                            <BDropdownItem
                              ><i
                                class="ri-file-copy-line align-bottom text-muted me-2"
                              ></i>
                              Duplicate</BDropdownItem
                            >
                            <BDropdownItem
                              ><i
                                class="ri-delete-bin-5-line align-bottom text-muted me-2"
                              ></i>
                              Delete</BDropdownItem
                            >
                          </BDropdown>
                        </BLink>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Leslie Alexander</td>
                    <td>
                      <div class="d-flex justify-content-center">
                        <i class="ri-line-chart-line"></i>
                        <td>0</td>
                      </div>
                    </td>
                    <td>
                      <div
                        class="d-flex align-items-center justify-content-center"
                      >
                        <i class="ri-calendar-fill p-2"></i>
                        <i class="ri-history-line"></i>
                      </div>
                    </td>
                    <td>
                      <div
                        class="form-check form-switch d-flex justify-content-center"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="SwitchCheck2"
                        />
                      </div>
                    </td>
                    <td>
                      <div
                        class="hstack gap-3 fs-15 d-flex justify-content-end"
                      >
                        <BLink href="javascript:void(0);" class="link-primary"
                          ><i class="ri-file-copy-line"></i
                        ></BLink>
                        <BLink href="javascript:void(0);" class="link-danger">
                          <BDropdown
                            variant="link"
                            class="btn btn-ghost-secondary btn-icon"
                            toggle-class=" arrow-none"
                            menu-class="dropdown-menu"
                            aria-haspopup="true"
                          >
                            <template #button-content>
                              <more-vertical-icon
                                class="icon-sm"
                              ></more-vertical-icon>
                            </template>
                            <BDropdownItem
                              ><i
                                class="ri-edit-line align-bottom text-muted me-2"
                              ></i>
                              Edit
                            </BDropdownItem>
                            <BDropdownItem
                              ><i
                                class="ri-line-chart-line align-bottom text-muted me-2"
                              ></i>
                              Statistics</BDropdownItem
                            >
                            <BDropdownItem
                              ><i
                                class="ri-qr-code-line align-bottom text-muted me-2"
                              ></i>
                              QR Code</BDropdownItem
                            >
                            <BDropdownItem
                              ><i
                                class="ri-file-copy-line align-bottom text-muted me-2"
                              ></i>
                              Duplicate</BDropdownItem
                            >
                            <BDropdownItem
                              ><i
                                class="ri-delete-bin-5-line align-bottom text-muted me-2"
                              ></i>
                              Delete</BDropdownItem
                            >
                          </BDropdown>
                        </BLink>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Lenora Sandoval</td>
                    <td>
                      <div class="d-flex justify-content-center">
                        <i class="ri-line-chart-line"></i>
                        <td>0</td>
                      </div>
                    </td>
                    <td>
                      <div
                        class="d-flex align-items-center justify-content-center"
                      >
                        <i class="ri-calendar-fill p-2"></i>
                        <i class="ri-history-line"></i>
                      </div>
                    </td>
                    <td>
                      <div
                        class="form-check form-switch d-flex justify-content-center"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="SwitchCheck2"
                        />
                      </div>
                    </td>
                    <td>
                      <div
                        class="hstack gap-3 fs-15 d-flex justify-content-end"
                      >
                        <BLink href="javascript:void(0);" class="link-primary"
                          ><i class="ri-file-copy-line"></i
                        ></BLink>
                        <BLink href="javascript:void(0);" class="link-danger">
                          <BDropdown
                            variant="link"
                            class="btn btn-ghost-secondary btn-icon"
                            toggle-class=" arrow-none"
                            menu-class="dropdown-menu"
                            aria-haspopup="true"
                          >
                            <template #button-content>
                              <more-vertical-icon
                                class="icon-sm"
                              ></more-vertical-icon>
                            </template>
                            <BDropdownItem
                              ><i
                                class="ri-edit-line align-bottom text-muted me-2"
                              ></i>
                              Edit
                            </BDropdownItem>
                            <BDropdownItem
                              ><i
                                class="ri-line-chart-line align-bottom text-muted me-2"
                              ></i>
                              Statistics</BDropdownItem
                            >
                            <BDropdownItem
                              ><i
                                class="ri-qr-code-line align-bottom text-muted me-2"
                              ></i>
                              QR Code</BDropdownItem
                            >
                            <BDropdownItem
                              ><i
                                class="ri-file-copy-line align-bottom text-muted me-2"
                              ></i>
                              Duplicate</BDropdownItem
                            >
                            <BDropdownItem
                              ><i
                                class="ri-delete-bin-5-line align-bottom text-muted me-2"
                              ></i>
                              Delete</BDropdownItem
                            >
                          </BDropdown>
                        </BLink>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="d-none code-view">
            <pre
              class="language-markup"
              style="height: 275px"
            ><code>&lt;!-- Tables Without Borders --&gt;
                                                &lt;table class=&quot;table table-borderless table-nowrap&quot;&gt;
                                                    &lt;thead&gt;
                                                        &lt;tr&gt;
                                                            &lt;th scope=&quot;col&quot;&gt;Id&lt;/th&gt;
                                                            &lt;th scope=&quot;col&quot;&gt;Name&lt;/th&gt;
                                                            &lt;th scope=&quot;col&quot;&gt;Job Title&lt;/th&gt;
                                                            &lt;th scope=&quot;col&quot;&gt;Date&lt;/th&gt;
                                                            &lt;th scope=&quot;col&quot;&gt;Status&lt;/th&gt;
                                                            &lt;th scope=&quot;col&quot;&gt;&lt;/th&gt;
                                                        &lt;/tr&gt;
                                                    &lt;/thead&gt;
                                                    &lt;tbody&gt;
                                                        &lt;tr&gt;
                                                            &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
                                                            &lt;td&gt;Annette Black&lt;/td&gt;
                                                            &lt;td&gt;Industrial Designer&lt;/td&gt;
                                                            &lt;td&gt;10, Nov 2021&lt;/td&gt;
                                                            &lt;td&gt;&lt;span class=&quot;badge bg-success-subtle text-success&quot;&gt;Active&lt;/span&gt;&lt;/td&gt;
                                                            &lt;td&gt;
                                                                &lt;div class=&quot; d-flex justify-content-end&quot;&gt;
                                                                    &lt;a href=&quot;javascript:void(0);&quot; class=&quot;link-primary&quot;&gt;&lt;i class=&quot;ri-settings-4-line&quot;&gt;&lt;/i&gt;&lt;/a&gt;
                                                                    &lt;a href=&quot;javascript:void(0);&quot; class=&quot;link-danger&quot;&gt;&lt;i class=&quot;ri-delete-bin-5-line&quot;&gt;&lt;/i&gt;&lt;/a&gt;
                                                                &lt;/div&gt;
                                                            &lt;/td&gt;
                                                        &lt;/tr&gt;
                                                        &lt;tr&gt;
                                                            &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
                                                            &lt;td&gt;Bessie Cooper&lt;/td&gt;
                                                            &lt;td&gt;Graphic Designer&lt;/td&gt;
                                                            &lt;td&gt;13, Nov 2021&lt;/td&gt;
                                                            &lt;td&gt;&lt;span class=&quot;badge bg-success-subtle text-success&quot;&gt;Active&lt;/span&gt;&lt;/td&gt;
                                                            &lt;td&gt;
                                                                &lt;div class=&quot;hstack gap-3 fs-15&quot;&gt;
                                                                    &lt;a href=&quot;javascript:void(0);&quot; class=&quot;link-primary&quot;&gt;&lt;i class=&quot;ri-settings-4-line&quot;&gt;&lt;/i&gt;&lt;/a&gt;
                                                                    &lt;a href=&quot;javascript:void(0);&quot; class=&quot;link-danger&quot;&gt;&lt;i class=&quot;ri-delete-bin-5-line&quot;&gt;&lt;/i&gt;&lt;/a&gt;
                                                                &lt;/div&gt;
                                                            &lt;/td&gt;
                                                        &lt;/tr&gt;
                                                        &lt;tr&gt;
                                                            &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
                                                            &lt;td&gt;Leslie Alexander&lt;/td&gt;
                                                            &lt;td&gt;Product Manager&lt;/td&gt;
                                                            &lt;td&gt;17, Nov 2021&lt;/td&gt;
                                                            &lt;td&gt;&lt;span class=&quot;badge bg-success-subtle text-success&quot;&gt;Active&lt;/span&gt;&lt;/td&gt;
                                                            &lt;td&gt;
                                                                &lt;div class=&quot;hstack gap-3 fs-15&quot;&gt;
                                                                    &lt;a href=&quot;javascript:void(0);&quot; class=&quot;link-primary&quot;&gt;&lt;i class=&quot;ri-settings-4-line&quot;&gt;&lt;/i&gt;&lt;/a&gt;
                                                                    &lt;a href=&quot;javascript:void(0);&quot; class=&quot;link-danger&quot;&gt;&lt;i class=&quot;ri-delete-bin-5-line&quot;&gt;&lt;/i&gt;&lt;/a&gt;
                                                                &lt;/div&gt;
                                                            &lt;/td&gt;
                                                        &lt;/tr&gt;
                                                        &lt;tr&gt;
                                                            &lt;th scope=&quot;row&quot;&gt;4&lt;/th&gt;
                                                            &lt;td&gt;Lenora Sandoval&lt;/td&gt;
                                                            &lt;td&gt;Applications Engineer&lt;/td&gt;
                                                            &lt;td&gt;25, Nov 2021&lt;/td&gt;
                                                            &lt;td&gt;&lt;span class=&quot;badge bg-danger-subtle text-danger&quot;&gt;Disabled&lt;/span&gt;&lt;/td&gt;
                                                            &lt;td&gt;
                                                                &lt;div class=&quot;hstack gap-3 fs-15&quot;&gt;
                                                                    &lt;a href=&quot;javascript:void(0);&quot; class=&quot;link-primary&quot;&gt;&lt;i class=&quot;ri-settings-4-line&quot;&gt;&lt;/i&gt;&lt;/a&gt;
                                                                    &lt;a href=&quot;javascript:void(0);&quot; class=&quot;link-danger&quot;&gt;&lt;i class=&quot;ri-delete-bin-5-line&quot;&gt;&lt;/i&gt;&lt;/a&gt;
                                                                &lt;/div&gt;
                                                            &lt;/td&gt;
                                                        &lt;/tr&gt;
                                                    &lt;/tbody&gt;
                                                &lt;/table&gt;</code></pre>
          </div>
        </BCardBody>
      </BCard>
    </BCol>
    <BOffcanvas
      v-if="urlCreate === false"
      v-model="shortendCanvas"
      placement="end"
      body-class="border-0 p-0 overflow-hidden p-3"
      header-class="border-bottom"
      title="File Link"
      footer-class="border-top p-3 text-center text-primary "
    >
      <simplebar data-simplebar style="height: calc(100vh - 112px)">
        <div class="mb-3">
          <i class="ri-file-line m-1"></i>
          <label for="basiInput" class="form-label h5">File</label>
          <!-- <input
            type="text"
            placeholder="https://example.com"
            class="form-control"
            id="basiInput"
          /> -->

          <input class="form-control" type="file" id="formFile" />
        </div>
        <div class="mb-3">
          <i class="ri-link m-1"></i>
          <label for="basiInput" class="form-label h5">Short URL</label>
          <div class="d-flex justify-content-center">
            <input
              type="text"
              placeholder="appoostobio.com/"
              class="form-control rounded-0 rounded-start border-end-0"
              style="width: 152px"
              id="basiInput"
              readonly
              disabled
            />
            <input
              type="text"
              placeholder="https://example.com"
              class="form-control flex-1 rounded-0 rounded-end"
              id="basiInput"
            />
          </div>
          <p class="opacity-50 m-1 fs-6 fst-italic">
            Leave empty for a random generated one.
          </p>
        </div>
        <BButton
          class="w-100 text-center mb-3"
          variant="primary"
          type="button"
          id="button-addon1"
          @click="fileLinkClick"
          >Create File URL</BButton
        >
      </simplebar>
      <template #footer> Design & Develop Cocoon Web Tech srl </template>
    </BOffcanvas>
    <BOffcanvas
      v-if="urlCreate"
      v-model="shortendCanvas"
      placement="end"
      body-class="border-0 p-0 overflow-hidden"
      header-class="border-bottom"
    >
      <div class="m-3">
        <i class="ri-links-line m-1"></i>
        <label for="basiInput" class="form-label h5">URL</label>
        <input
          type="text"
          placeholder="https://example.com"
          class="form-control"
          id="basiInput"
        />
      </div>

      <div class="m-3">
        <i class="ri-link m-1"></i>
        <label for="basiInput" class="form-label h5">URL</label>
        <div class="d-flex justify-content-center">
          <input
            type="text"
            placeholder="appoostobio.com/"
            class="form-control w-50"
            id="basiInput"
            readonly
          />
          <input
            type="text"
            placeholder="https://example.com"
            class="form-control"
            id="basiInput"
          />
        </div>
        <p>Leave empty for a random generated one.</p>
      </div>

      <div class="text-center mt-5 m-3">
        <BButton
          class="w-100"
          variant="primary"
          type="button"
          id="button-addon1"
          >Create</BButton
        >
      </div>
    </BOffcanvas>

    <BOffcanvas
      v-model="filterCanvas"
      placement="end"
      body-class="border-0 p-0 overflow-auto p-3"
      header-class="border-bottom"
      title="Filters"
      footer-class="border-top p-3 text-center text-primary "
    >
      <simplebar data-simplebar style="height: calc(100vh - 112px)">
        <div class="mb-3">
          <label for="basiInput" class="form-label h5">Search</label>
          <input type="text" class="form-control" id="basiInput" />
        </div>
        <div class="mb-3">
          <label for="basiInput" class="form-label h5">Search By</label>
          <select class="form-select mb-3" aria-label="Search By">
            <option selected>Short URL</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="basiInput" class="form-label h5">Status</label>
          <select class="form-select mb-3" aria-label="Status">
            <option selected>All</option>
            <option>Active</option>
            <option selected>Disabled</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="basiInput" class="form-label h5">Project</label>
          <select class="form-select mb-3" aria-label="Project">
            <option selected>All</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="basiInput" class="form-label h5">Type</label>
          <select class="form-select mb-3" aria-label="Type">
            <option>All</option>
            <option>Builink Pages</option>
            <option selected>Shortend URLs</option>
            <option>File links</option>
            <option>VCard links</option>
            <option>Event links</option>
            <option>Static sites</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="basiInput" class="form-label h5">Order by</label>
          <select class="form-select mb-3" aria-label="Order by">
            <option selected>Created datetime</option>
            <option>Updated datetime</option>
            <option>Pageviews</option>
            <option>Short URL</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="basiInput" class="form-label h5">Order Type</label>
          <select class="form-select mb-3" aria-label="Order Type">
            <option>Ascending</option>
            <option selected>Descending</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="basiInput" class="form-label h5">Results per page</label>
          <select class="form-select mb-3" aria-label="Results per page">
            <option>10</option>
            <option>25</option>
            <option selected>50</option>
            <option>100</option>
            <option>250</option>
            <option>500</option>
            <option>1000</option>
          </select>
        </div>
        <BButton
          class="w-100 text-center mb-3"
          variant="primary"
          type="button"
          id="button-addon1"
          @click="shortendURLCLick"
          >Apply</BButton
        >
      </simplebar>
      <template #footer> Design & Develop Cocoon Web Tech srl </template>
    </BOffcanvas>
  </Layout>
</template>
