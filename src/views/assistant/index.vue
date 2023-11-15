<script>
import simplebar from 'simplebar-vue';
import {
  InfoIcon,
  MoreVerticalIcon
} from '@zhuowenli/vue-feather-icons';

import {
  required,
  helpers
} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

import Layout from "@/layouts/main.vue";

import {
  chatData,
  chatMessagesData,
} from "@/common/data";
import botData from "../../common/data/bots"

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },

  data() {
    return {
      showOffcanvas: false,
      showMessageOffCanvas: false,
      chatData: chatData,
      chatMessagesData: chatMessagesData,
      botData: botData,
      botName: "Appooso Assistant",
      submitted: false,
      chattab: true,
      form: {
        message: "",
      },
      username: "General Queries",
      profile: require("@/assets/images/users/appoostoo_assitant.png")
    };
  },
  components: {
    Layout,
    InfoIcon,
    MoreVerticalIcon,
    simplebar
  },
  validations: {
    form: {
      message: {
        required: helpers.withMessage("Message is required", required),
      },
    },
  },
  methods: {
    /**
     * Get the name of user
     */
    scrollToBottom(id) {
      setTimeout(function () {
        var simpleBar = document.getElementById(id).querySelector(
          "#chat-conversation .simplebar-content-wrapper") ?
          document.getElementById(id).querySelector(
            "#chat-conversation .simplebar-content-wrapper") : '';
        var offsetHeight = document.getElementsByClassName("chat-conversation-list")[0] ?
          document.getElementById(id).getElementsByClassName("chat-conversation-list")[0]
            .scrollHeight - window.innerHeight + 600 : 0;
        if (offsetHeight)
          simpleBar.scrollTo({
            top: offsetHeight,
            behavior: "smooth"
          });
      }, 300);
    },
    chatUsername(name, image) {
      this.username = name;
      this.profile = image;
      this.usermessage = "Hello";
      this.chatMessagesData = [];
      const currentDate = new Date();
      const hours = (currentDate.getHours() < 10 ? "0" : "") + currentDate.getHours();
      const minutes = (currentDate.getMinutes() < 10 ? "0" : "") + currentDate.getMinutes();

      this.chatMessagesData.push({
        name: this.username,
        message: this.usermessage,
        time: hours + ":" + minutes,
      });
    },

    /**
     * Char form Submit
     */
    formSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      } else {
        const message = this.form.message;
        const currentDate = new Date();
        const hours = (currentDate.getHours() < 10 ? "0" : "") + currentDate.getHours();
        const minutes = (currentDate.getMinutes() < 10 ? "0" : "") + currentDate.getMinutes();
        this.chatMessagesData.push({
          align: "right",
          name: "Henry Wells",
          message,
          time: hours + ":" + minutes,
        });
        var currentChatId = "users-chat";
        this.scrollToBottom(currentChatId);
      }
      this.submitted = false;
      this.form = {};
    },
    handleActiveTab(tab) {
      this.chattab = tab === "chat" ? true : false;
    },
    chatBot(name) {
      this.botName = name
    },
    setSuggestion(message) {
      this.form.message = message;
    }
  },
  mounted() {
    var currentChatId = "users-chat";
    this.scrollToBottom(currentChatId);
    document.getElementById('copyClipBoard').style.display = 'none';
    var userChatElement = document.querySelectorAll(".user-chat");
    document.querySelectorAll(".chat-user-list li a").forEach(function (item) {
      item.addEventListener("click", function () {
        userChatElement.forEach(function (elm) {
          elm.classList.add("user-chat-show");
        });

        // chat user list link active
        var chatUserList = document.querySelector(".chat-user-list li.active");
        if (chatUserList) chatUserList.classList.remove("active");
        this.parentNode.classList.add("active");
      });
    });

    // user-chat-remove
    document.querySelectorAll(".user-chat-remove").forEach(function (item) {
      item.addEventListener("click", function () {
        userChatElement.forEach(function (elm) {
          elm.classList.remove("user-chat-show");
        });
      });
    });
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.chatMessagesData.filter((data) => {
          return (
            data.message.toLowerCase().includes(search)
          );
        });
      } else {
        return this.chatMessagesData;
      }
    },
  }
};
</script>

<template>
  <Layout>

    <div class="chat-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-1">
      <div class="chat-leftsidebar">

        <BCard no-body>
          <BCardBody>
            <BTabs nav-class="nav-tabs-custom nav-success mb-3" justified>
              <BTab title="Chats" :active="activeTab === 'chat'" @click="handleActiveTab('chat')">
              </BTab>
              <BTab title="Bots" :active="activeTab === 'bot'" @click="handleActiveTab('bot')">
              </BTab>
            </BTabs>
          </BCardBody>
        </BCard>

        <simplebar v-if="chattab" class="chat-room-list" data-simplebar>
          <div class="d-flex align-items-center px-4 mb-2">
            <div class="flex-grow-1">
              <h4 class="mb-0 fs-11 text-muted text-uppercase">
                Direct Messages
              </h4>
            </div>
            <div class="flex-shrink-0">
              <div v-b-tooltip.hover title="New Message">
                <BButton @click="showMessageOffCanvas = !showMessageOffCanvas" type="button" variant="soft-success"
                  size="sm">
                  <i class="ri-add-line align-bottom"></i>
                </BButton>
              </div>
            </div>
          </div>

          <div class="chat-message-list">
            <SimpleBar class="list-unstyled chat-list chat-user-list">
              <li class v-for="data of chatData" :key="data.id" @click="chatUsername(data.name, data.image)"
                :class="{ active: username == data.name }">
                <BLink href="javascript: void(0);">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                      <div class="avatar-xxs" v-if="data.image">
                        <img :src="`${data.image}`" class="rounded-circle img-fluid userprofile" alt />
                      </div>
                      <div class="avatar-xxs" v-if="!data.image">
                        <div class="avatar-title rounded-circle bg-danger userprofile">
                          {{ data.name.charAt(0) }}
                        </div>
                      </div>
                    </div>
                    <div class="flex-grow-1 overflow-hidden">
                      <p class="text-truncate mb-1">
                        {{ data.name }}
                      </p>
                      <p class="text-truncate mb-1">
                        <small>
                          {{ data.name }}
                        </small>
                      </p>
                    </div>
                  </div>
                </BLink>
              </li>
            </SimpleBar>
          </div>
        </simplebar>
        <div v-else class="chat-message-list">
          <SimpleBar class="list-unstyled chat-list chat-user-list">
            <li class v-for="data of botData" :key="data.id" @click="chatBot(data.name)"
              :class="{ active: botName == data.name }">
              <BLink href="javascript: void(0);">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                    <div class="avatar-xxs" v-if="data.image">
                      <img :src="`${data.image}`" class="rounded-circle img-fluid userprofile" alt />
                    </div>
                    <div class="avatar-xxs" v-if="!data.image">
                      <div class="avatar-title rounded-circle bg-danger userprofile">
                        {{ data.name.charAt(0) }}
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1 overflow-hidden">
                    <p class="text-truncate mb-1">
                      {{ data.name }}
                    </p>
                  </div>
                </div>
              </BLink>
            </li>
          </SimpleBar>
        </div>

      </div>
      <div class="user-chat w-100 overflow-hidden">
        <div class="chat-content d-lg-flex">
          <div class="w-100 overflow-hidden position-relative">
            <div class="position-relative">
              <div class="p-3 user-chat-topbar">
                <BRow class="align-items-center">
                  <BCol sm="4" cols="8">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0 d-block d-lg-none me-3">
                        <BLink href="javascript: void(0);" class="user-chat-remove fs-18 p-1"><i
                            class="ri-arrow-left-s-line align-bottom"></i></BLink>
                      </div>
                      <div class="flex-grow-1 overflow-hidden">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                            <img :src="profile ? profile : require('@/assets/images/users/user-dummy-img.jpg')"
                              class="rounded-circle avatar-xs" alt="" />
                            <span class="user-status"></span>
                          </div>
                          <div class="flex-grow-1 overflow-hidden">
                            <h5 class="text-truncate mb-0 fs-16">
                              <BLink class="text-reset username" @click="showOffcanvas = !showOffcanvas">{{ username }}
                              </BLink>
                            </h5>
                            <p class="text-truncate text-muted fs-14 mb-0 userStatus">
                              <small>Online</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </BCol>
                  <BCol sm="8" cols="4">
                    <ul class="list-inline user-chat-nav text-end mb-0">
                      <li class="list-inline-item d-none d-lg-inline-block m-0">
                        <BButton type="button" variant="ghost-secondary" class="btn-icon"
                          @click="showOffcanvas = !showOffcanvas">
                          <info-icon class="icon-sm"></info-icon>
                        </BButton>
                      </li>

                      <li class="list-inline-item m-0">
                        <BDropdown variant="link" class="btn btn-ghost-secondary btn-icon" toggle-class=" arrow-none"
                          menu-class="dropdown-menu" aria-haspopup="true">
                          <template #button-content> <more-vertical-icon class="icon-sm"></more-vertical-icon>
                          </template>
                          <BDropdownItem><i class="ri-save-line align-bottom text-muted me-2"></i>
                            Save
                          </BDropdownItem>
                          <BDropdownItem><i class="ri-download-line align-bottom text-muted me-2"></i>
                            Download (.txt)</BDropdownItem>
                          <BDropdownItem><i class="ri-download-line align-bottom text-muted me-2"></i>
                            Download (.pdf)</BDropdownItem>
                          <BDropdownItem><i class="ri-download-line align-bottom text-muted me-2"></i>
                            Download (.docx)</BDropdownItem>
                          <BDropdownItem><i class="ri-delete-bin-5-line align-bottom text-muted me-2"></i>
                            Delete</BDropdownItem>
                        </BDropdown>
                      </li>
                    </ul>
                  </BCol>
                </BRow>
              </div>

              <div class="position-relative" id="users-chat">
                <simplebar class="chat-conversation p-3 p-lg-4" id="chat-conversation" data-simplebar ref="current">
                  <ul class="list-unstyled chat-conversation-list">
                    <li v-for="data of resultQuery" :key="data.message" :class="{
                      right: `${data.align}` === 'right',
                      left: `${data.align}` !== 'right',
                    }" class="chat-list">
                      <div class="conversation-list">
                        <div class="chat-avatar" v-if="data.align !== 'right'">
                          <img :src="profile ? profile : require('@/assets/images/users/user-dummy-img.jpg')" alt="" />
                        </div>
                        <div class="user-chat-content">
                          <div class="ctext-wrap">
                            <div class="ctext-wrap-content">
                              <p class="mb-0 ctext-content">
                                {{ data.message }}
                              </p>
                            </div>
                            <BDropdown variant="link" class="dropdown align-self-start message-box-drop"
                              toggle-class=" arrow-none" menu-class="dropdown-menu" aria-haspopup="true">
                              <template #button-content> <i class="ri-more-2-fill"></i>
                              </template>
                              <BDropdownItem> <i class="ri-edit-line me-2 text-muted align-bottom"></i> Edit
                              </BDropdownItem>
                              <BDropdownItem><i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                                Delete</BDropdownItem>
                            </BDropdown>
                            <div class="conversation-name">
                              <small class="text-muted time">{{
                                data.time
                              }}</small>
                              <span class="text-success check-message-icon"><i
                                  class="ri-check-double-line align-bottom"></i></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>

                </simplebar>
                <div class="alert alert-warning alert-dismissible copyclipboard-alert px-4 fade show" id="copyClipBoard"
                  role="alert">
                  Message copied
                </div>
              </div>


              <div class="chat-input-section p-3 p-lg-4">
                <form @submit.prevent="formSubmit">
                  <div class="container mb-3">
                    <div class="row">
                      <div class="col-md-4">
                        <label for="select1" class="form-label">Output Language</label>
                        <select class="form-select" id="select1">
                          <option selected>English (US)</option>
                          <option value="1">English (UK)</option>
                          <option value="2">Italiano</option>
                          <option value="3">Turkce</option>
                        </select>
                      </div>
                      <div class="col-md-4">
                        <label for="select2" class="form-label">Tone</label>
                        <select class="form-select" id="select2">
                          <option selected>Emotional</option>
                          <option value="1">Professional</option>
                          <option value="2">Humorous</option>
                          <option value="3">Educational</option>
                        </select>
                      </div>
                      <div class="col-md-4">
                        <label for="select3" class="form-label">Writing Style</label>
                        <select class="form-select" id="select3">
                          <option selected>Narratvive</option>
                          <option value="1">Poetic</option>
                          <option value="2">Argumentative</option>
                          <option value="3">Descriptive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <BRow class="g-0 align-items-center">
                    <BCol>
                      <div class="chat-input-feedback">
                        Please Enter a Message
                      </div>

                      <input type="text" v-model="form.message" class="form-control chat-input bg-light border-light"
                        placeholder="Enter Message..." :class="{
                          'is-invalid': submitted && v$.form.message.$error,
                        }" />
                      <div v-if="submitted && v$.form.message.$error" class="invalid-feedback">
                        <span v-if="v$.form.message.required.$message">{{
                          v$.form.message.required.$message
                        }}</span>
                      </div>
                    </BCol>
                    <BCol cols="auto">
                      <div class="chat-input-links ms-2">
                        <div class="links-list-item">
                          <BButton variant="success" type="submit" class="chat-send">
                            <i class="ri-send-plane-2-fill align-bottom"></i>
                          </BButton>
                        </div>
                      </div>
                    </BCol>
                  </BRow>
                </form>
              </div>

              <div class="replyCard">
                <BCard no-body class="mb-0">
                  <BCardBody class="py-3">
                    <div class="replymessage-block mb-0 d-flex align-items-start">
                      <div class="flex-grow-1">
                        <h5 class="conversation-name"></h5>
                        <p class="mb-0"></p>
                      </div>
                      <div class="flex-shrink-0">
                        <BButton type="button" variant="link" size="sm" id="close_toggle" class="mt-n2 me-n3 fs-18">
                          <i class="bx bx-x align-middle"></i>
                        </BButton>
                      </div>
                    </div>
                  </BCardBody>
                </BCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BOffcanvas v-model="showOffcanvas" placement="end" body-class="border-0 p-0 overflow-hidden"
      header-class="border-bottom">
      <div class="offcanvas-body profile-offcanvas p-0">
        <div class="p-1 pb-4 pt-0">
          <div class="team-settings">
            <div class="row g-0">
              <div class="col">
              </div>
              <div class="col-auto">
                <div class="user-chat-nav d-flex">

                  <div class="dropdown">
                    <a class="btn nav-btn" href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="ri-more-2-fill"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li><a class="dropdown-item" href="javascript:void(0);"><i
                            class="ri-inbox-archive-line align-bottom text-muted me-2"></i>Archive</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);"><i
                            class="ri-mic-off-line align-bottom text-muted me-2"></i>Muted</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);"><i
                            class="ri-delete-bin-5-line align-bottom text-muted me-2"></i>Delete</a></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div v-for="data of botData" :key="data.id" class="p-3 text-center">
          <div v-if="data.name === botName">
            <div>
              <img :src="data.image" alt="" class="avatar-lg img-thumbnail rounded-circle mx-auto profile-img">
              <div class="mt-3">
                <h5 class="fs-16 mb-1"><a href="javascript:void(0);" class="link-primary username"> {{ data.name }}</a>
                </h5>
              </div>
            </div>
            <div class="border-top border-top-dashed p-3">
              <h5 class="fs-15 mb-3">Description</h5>
              <div class="mb-3">
                <p class="text-muted text-uppercase fw-medium fs-12 mb-1">{{ data.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="botName" class="border-top border-top-dashed p-3">
        <h5 class="fs-15 mb-3">Suggestions</h5>

        <BAccordion>
          <BAccordionItem title="Content">
            <div class="vstack gap-2">

              <div class="border rounded border-dashed p-2">
                <div class="d-flex align-items-center">
                  <div class="suggestion flex-shrink-0 me-3">
                    <p @click="setSuggestion('Write a blog post about AI')">Write a blog post about AI</p>
                  </div>
                </div>
              </div>

              <div class="border rounded border-dashed p-2">
                <div class="d-flex align-items-center">
                  <div class="suggestion flex-shrink-0 me-3">
                    <p @click="setSuggestion('What are the different types of content writing?')">What are the different
                      types of content
                      writing?</p>
                  </div>
                </div>
              </div>
            </div>
          </BAccordionItem>
          <BAccordionItem title="SEO">
            <div class="vstack gap-2">

              <div class="border rounded border-dashed p-2">
                <div class="d-flex align-items-center">
                  <div class="suggestion flex-shrink-0 me-3">
                    <p @click="setSuggestion('How can I implement SEO on my site?')">How can I implement SEO on my site?
                    </p>
                  </div>
                </div>
              </div>

              <div class="border rounded border-dashed p-2">
                <div class="d-flex align-items-center">
                  <div class="suggestion flex-shrink-0 me-3">
                    <p @click="setSuggestion('What are the benefits of SSR in terms of SEO?')">What are the benefits of
                      SSR in terms of SEO?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </BAccordionItem>
        </BAccordion>


      </div>

    </BOffcanvas>
    <BOffcanvas v-model="showMessageOffCanvas" placement="end" body-class="border-0 p-0 overflow-hidden"
      header-class="border-bottom">
      <div class="offcanvas-body profile-offcanvas p-0">
        <div v-for="data of botData" :key="data.id" class="p-3 text-center">
          <div v-if="data.name === botName">
            <div>
              <img :src="data.image" alt="" class="avatar-lg img-thumbnail rounded-circle mx-auto profile-img">
              <div class="mt-3">
                <h5 class="fs-16 mb-1"><a href="javascript:void(0);" class="link-primary username"> {{ data.name }}</a>
                </h5>
              </div>
            </div>
            <div class="border-top border-top-dashed p-3">
              <h5 class="fs-15 mb-3">Description</h5>
              <div class="mb-3">
                <p class="text-muted text-uppercase fw-medium fs-12 mb-1">{{ data.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="m-3">
        <label for="basiInput" class="form-label">Chat Title</label>
        <input type="text" class="form-control" id="basiInput">
      </div>
      <div class="text-center mt-5 m-3 ">
        <BButton class="w-100" variant="primary" type="button" id="button-addon1">Create</BButton>
      </div>

    </BOffcanvas>
  </Layout>
</template>

<style scoped>
.suggestion {
  cursor: pointer;
}
</style>