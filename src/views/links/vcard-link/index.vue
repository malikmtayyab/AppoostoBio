<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import { MoreVerticalIcon } from "@zhuowenli/vue-feather-icons";

export default {
  data() {
    return {
      shortendCanvas: false,
      urlCreate: false,
    };
  },
  components: {
    Layout,
    PageHeader,
    MoreVerticalIcon,
  },
  methods: {
    handleVCardClick() {
      this.urlCreate = false;
      this.shortendCanvas = !this.shortendCanvas;
    },
    vcardUrlClick() {
      this.urlCreate = !this.urlCreate;
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="VCard link" pageTitle="Links" />
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div>
        <BCardHeader class="align-items-center d-flex py-0">
          <BCardTitle class="my-3 flex-grow-1"></BCardTitle>
        </BCardHeader>
      </div>
      <div>
        <button class="btn btn-primary p-2" @click="handleVCardClick">
          VCard Link
        </button>
        <BDropdown
          variant="link"
          class="btn btn-icon"
          toggle-class=" arrow-none"
          menu-class="dropdown-menu"
          aria-haspopup="true"
        >
          <template #button-content>
            <i
              class="ri-download-2-fill"
              style="font-size: 24px; margin-left: 10px; margin-top: 10px"
            ></i>
          </template>
          <BDropdownItem
            ><i class="ri-edit-line align-bottom text-muted me-2"></i>
            Edit
          </BDropdownItem>
          <BDropdownItem
            ><i class="ri-line-chart-line align-bottom text-muted me-2"></i>
            Statistics</BDropdownItem
          >
          <BDropdownItem
            ><i class="ri-qr-code-line align-bottom text-muted me-2"></i> QR
            Code</BDropdownItem
          >
          <BDropdownItem
            ><i class="ri-file-copy-line align-bottom text-muted me-2"></i>
            Duplicate</BDropdownItem
          >
          <BDropdownItem
            ><i class="ri-delete-bin-5-line align-bottom text-muted me-2"></i>
            Delete</BDropdownItem
          >
        </BDropdown>
        <i
          class="ri-filter-fill align-bottom ms-3 me-3"
          style="font-size: 24px"
        ></i>
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
      title="VCard"
      footer-class="border-top p-3 text-center text-primary "
    >
      <simplebar data-simplebar style="height: calc(100vh - 112px)">
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
          @click="vcardUrlClick"
          >Create VCard URL</BButton
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
  </Layout>
</template>
