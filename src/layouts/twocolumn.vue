<script>
import router from "@/router";
import simplebar from "simplebar-vue";

import { layoutComputed } from "@/state/helpers";
import Menu from "@/components/menu.vue";
import NavBar from "@/components/nav-bar";
import RightBar from "@/components/right-bar";
import Footer from "@/components/footer";

/**
 * Vertical layout
 */
export default {
  components: {
    NavBar,
    RightBar,
    Footer,
    Menu,
    simplebar,
  },
  data() {
    return {
      isMenuCondensed: false,
      rmenu: localStorage.getItem("rmenu")
        ? localStorage.getItem("rmenu")
        : "twocolumn",
    };
  },

  computed: {
    ...layoutComputed,
  },
  created: () => {
    document.body.removeAttribute("data-layout", "horizontal");
    document.body.removeAttribute("data-topbar", "dark");
    document.body.removeAttribute("data-layout-size", "boxed");
  },
  methods: {
    initActiveMenu() {
      const pathName = window.location.pathname;
      const ul = document.getElementById("navbar-nav");
      if (ul) {
        const items = Array.from(ul.querySelectorAll("a.nav-link"));
        let activeItems = items.filter((x) => x.classList.contains("active"));
        this.removeActivation(activeItems);
        let matchingMenuItem = items.find((x) => {
          return x.getAttribute("href") === pathName;
        });
        if (matchingMenuItem) {
          this.activateParentDropdown(matchingMenuItem);
        } else {
          var id = pathName.replace("/", "");
          if (id) document.body.classList.add("twocolumn-panel");
          this.activateIconSidebarActive(pathName);
        }
      }
    },

    updateMenu(e, event) {
      document.body.classList.remove("twocolumn-panel");
      const ul = document.getElementById("navbar-nav");
      if (ul) {
        const items = Array.from(ul.querySelectorAll(".show"));
        items.forEach((item) => {
          item.classList.remove("show");
        });
      }
      const icons = document.getElementById("two-column-menu");
      if (icons) {
        const activeIcons = Array.from(
          icons.querySelectorAll(".nav-icon.active")
        );
        activeIcons.forEach((item) => {
          item.classList.remove("active");
        });
      }
      document.getElementById(e).classList.add("show");
      event.target.classList.add("active");
      this.activateIconSidebarActive("#" + e);
    },

    removeActivation(items) {
      items.forEach((item) => {
        if (item.classList.contains("menu-link")) {
          if (!item.classList.contains("active")) {
            item.setAttribute("aria-expanded", false);
          }
          item.nextElementSibling.classList.remove("show");
        }
        if (item.classList.contains("nav-link")) {
          if (item.nextElementSibling) {
            item.nextElementSibling.classList.remove("show");
          }
          item.setAttribute("aria-expanded", false);
        }
        item.classList.remove("active");
      });
    },

    activateIconSidebarActive(id) {
      var menu = document.querySelector(
        "#two-column-menu .simplebar-content-wrapper a[href='" +
          id +
          "'].nav-icon"
      );
      if (menu !== null) {
        menu.classList.add("active");
      }
    },

    activateParentDropdown(item) {
      // navbar-nav menu add active
      item.classList.add("active");
      let parentCollapseDiv = item.closest(".collapse.menu-dropdown");
      if (parentCollapseDiv) {
        // to set aria expand true remaining
        parentCollapseDiv.classList.add("show");
        parentCollapseDiv.parentElement.children[0].classList.add("active");
        parentCollapseDiv.parentElement.children[0].setAttribute(
          "aria-expanded",
          "true"
        );
        if (
          parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")
        ) {
          if (
            parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")
              .previousElementSibling
          ) {
            if (
              parentCollapseDiv.parentElement
                .closest(".collapse.menu-dropdown")
                .previousElementSibling.parentElement.closest(
                  ".collapse.menu-dropdown"
                )
            ) {
              const grandparent = parentCollapseDiv.parentElement
                .closest(".collapse.menu-dropdown")
                .previousElementSibling.parentElement.closest(
                  ".collapse.menu-dropdown"
                );
              this.activateIconSidebarActive(
                "#" + grandparent.getAttribute("id")
              );
              grandparent.classList.add("show");
            }
          }
          this.activateIconSidebarActive(
            "#" +
              parentCollapseDiv.parentElement
                .closest(".collapse.menu-dropdown")
                .getAttribute("id")
          );

          parentCollapseDiv.parentElement
            .closest(".collapse")
            .classList.add("show");
          if (
            parentCollapseDiv.parentElement.closest(".collapse")
              .previousElementSibling
          )
            parentCollapseDiv.parentElement
              .closest(".collapse")
              .previousElementSibling.classList.add("active");
          return false;
        }
        this.activateIconSidebarActive(
          "#" + parentCollapseDiv.getAttribute("id")
        );
        return false;
      }
      return false;
    },

    toggleMenu() {
      document.body.classList.toggle("sidebar-enable");

      if (window.screen.width >= 992) {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
          document.body.classList.remove("vertical-collpsed");
        });
        document.body.classList.toggle("vertical-collpsed");
      } else {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
        });
        document.body.classList.remove("vertical-collpsed");
      }
      this.isMenuCondensed = !this.isMenuCondensed;
    },

    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },

    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
  },

  mounted() {
    this.initActiveMenu();
    if (this.rmenu == "vertical" && this.layoutType == "twocolumn") {
      document.documentElement.setAttribute("data-layout", "vertical");
    }
    document.getElementById("overlay").addEventListener("click", () => {
      document.body.classList.remove("vertical-sidebar-enable");
    });

    window.addEventListener("resize", () => {
      if (this.layoutType == "twocolumn") {
        var windowSize = document.documentElement.clientWidth;
        if (windowSize < 767) {
          document.documentElement.setAttribute("data-layout", "vertical");
          this.rmenu = "vertical";
          localStorage.setItem("rmenu", "vertical");
        } else {
          document.documentElement.setAttribute("data-layout", "twocolumn");
          this.rmenu = "twocolumn";
          localStorage.setItem("rmenu", "twocolumn");
          setTimeout(() => {
            this.initActiveMenu();
          }, 50);
        }
      }
    });
    if (document.querySelectorAll(".navbar-nav .collapse")) {
      let collapses = document.querySelectorAll(".navbar-nav .collapse");

      collapses.forEach((collapse) => {
        // Hide sibling collapses on `show.bs.collapse`
        collapse.addEventListener("show.bs.collapse", (e) => {
          e.stopPropagation();
          let closestCollapse = collapse.parentElement.closest(".collapse");
          if (closestCollapse) {
            let siblingCollapses =
              closestCollapse.querySelectorAll(".collapse");
            siblingCollapses.forEach((siblingCollapse) => {
              if (siblingCollapse.classList.contains("show")) {
                siblingCollapse.classList.remove("show");
                siblingCollapse.parentElement.firstChild.setAttribute(
                  "aria-expanded",
                  "false"
                );
              }
            });
          } else {
            let getSiblings = (elem) => {
              // Setup siblings array and get the first sibling
              let siblings = [];
              let sibling = elem.parentNode.firstChild;
              // Loop through each sibling and push to the array
              while (sibling) {
                if (sibling.nodeType === 1 && sibling !== elem) {
                  siblings.push(sibling);
                }
                sibling = sibling.nextSibling;
              }
              return siblings;
            };
            let siblings = getSiblings(collapse.parentElement);
            siblings.forEach((item) => {
              if (item.childNodes.length > 2) {
                item.firstElementChild.setAttribute("aria-expanded", "false");
                item.firstElementChild.classList.remove("active");
              }
              let ids = item.querySelectorAll("*[id]");
              ids.forEach((item1) => {
                item1.classList.remove("show");
                item1.parentElement.firstChild.setAttribute(
                  "aria-expanded",
                  "false"
                );
                item1.parentElement.firstChild.classList.remove("active");
                if (item1.childNodes.length > 2) {
                  let val = item1.querySelectorAll("ul li a");

                  val.forEach((subitem) => {
                    if (subitem.hasAttribute("aria-expanded"))
                      subitem.setAttribute("aria-expanded", "false");
                  });
                }
              });
            });
          }
        });

        // Hide nested collapses on `hide.bs.collapse`
        collapse.addEventListener("hide.bs.collapse", (e) => {
          e.stopPropagation();
          let childCollapses = collapse.querySelectorAll(".collapse");
          childCollapses.forEach((childCollapse) => {
            let childCollapseInstance = childCollapse;
            childCollapseInstance.classList.remove("show");
            childCollapseInstance.parentElement.firstChild.setAttribute(
              "aria-expanded",
              "false"
            );
          });
        });
      });
    }
  },
};
</script>

<template>
  <div id="layout-wrapper">
    <NavBar />
    <div>
      <!-- ========== Left Sidebar Start ========== -->
      <!-- ========== App Menu ========== -->
      <div class="app-menu navbar-menu">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <!-- Dark Logo-->
          <router-link to="/" class="logo logo-dark">
            <span class="logo-sm">
              <img
                src="@/assets/images/appoostoo_dark.png"
                alt=""
                height="22"
              />
            </span>
            <span class="logo-lg">
              <img
                src="@/assets/images/appoostoo_dark.png"
                alt=""
                height="17"
              />
            </span>
          </router-link>
          <!-- Light Logo-->
          <router-link to="/" class="logo logo-light">
            <span class="logo-sm">
              <img
                src="@/assets/images/appoostoo_light.png"
                alt=""
                height="60"
              />
            </span>
            <span class="logo-lg">
              <img
                src="@/assets/images/appoostoo_light.png"
                alt=""
                height="50"
              />
            </span>
          </router-link>
          <button
            type="button"
            class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
          >
            <i class="ri-record-circle-line"></i>
          </button>
        </div>

        <div id="scrollbar" v-if="rmenu == 'twocolumn'">
          <BContainer fluid>
            <div id="two-column-menu">
              <simplebar class="twocolumn-iconview list-unstyled">
                <a class="logo"
                  ><img
                    src="@/assets/images/apposotoo_icon.png"
                    alt="Logo"
                    height="50"
                /></a>
                <li>
                  <a
                    href="#dashboard"
                    class="nav-icon"
                    role="button"
                    @click.prevent="updateMenu('dashboard', $event)"
                  >
                    <i class="ri-dashboard-2-line"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#ai"
                    class="nav-icon"
                    role="button"
                    @click.prevent="updateMenu('ai', $event)"
                  >
                    <i class="ri-apps-2-line"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#pages"
                    class="nav-icon"
                    role="button"
                    @click.prevent="updateMenu('pages', $event)"
                  >
                    <i class="ri-pages-line"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="#links"
                    class="nav-icon"
                    role="button"
                    @click.prevent="updateMenu('links', $event)"
                  >
                    <i class="ri-rocket-line"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#tools"
                    class="nav-icon"
                    role="button"
                    @click.prevent="updateMenu('tools', $event)"
                  >
                    <i class="ri-pencil-ruler-2-line"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#data&payments"
                    class="nav-icon"
                    role="button"
                    @click.prevent="updateMenu('data&payments', $event)"
                  >
                    <i class="ri-file-list-3-line"></i>
                  </a>
                </li>
              </simplebar>
            </div>
            <template v-if="layoutType === 'twocolumn'">
              <simplebar class="navbar-nav" id="navbar-nav">
                <li class="menu-title">
                  <span data-key="t-menu"> {{ $t("t-menu") }}</span>
                </li>
                <li class="nav-item">
                  <div class="collapse menu-dropdown" id="dashboard">
                    <ul class="nav nav-sm flex-column">
                      <!-- New Pages Start From Here -->
                      <li class="nav-item">
                        <router-link
                          to="/dashboard"
                          class="nav-link custom-abc"
                          data-key="t-dashboard"
                        >
                          {{ $t("t-dashboard") }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
                <!-- end Dashboard Menu -->
                <li class="nav-item">
                  <div class="collapse menu-dropdown" id="ai">
                    <ul class="nav nav-sm flex-column">
                      <!-- AI pages starts from here -->

                      <li class="nav-item">
                        <router-link
                          to="/images"
                          class="nav-link custom-abc"
                          data-key="t-images"
                        >
                          {{ $t("t-images") }}
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link
                          to="/templates"
                          class="nav-link custom-abc"
                          data-key="t-templates"
                        >
                          {{ $t("t-templates") }}
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link
                          to="/assistant"
                          class="nav-link custom-abc"
                          data-key="t-assistant"
                        >
                          {{ $t("t-assistant") }}
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link
                          to="/speech-to-text"
                          class="nav-link custom-abc"
                          data-key="t-speech-to-text"
                        >
                          {{ $t("t-speech-to-text") }}
                        </router-link>
                      </li>

                      <!-- AI pages End Here -->
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="collapse menu-dropdown" id="pages">
                    <ul class="nav nav-sm flex-column">
                      <li class="nav-item">
                        <router-link
                          to="/landing-pages"
                          class="nav-link custom-abc"
                          data-key="t-landing-pages"
                        >
                          {{ $t("t-landing-pages") }}
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link
                          to="/action-pages"
                          class="nav-link custom-abc"
                          data-key="t-action-pages"
                        >
                          {{ $t("t-action-pages") }}
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link
                          to="/hosting"
                          class="nav-link custom-abc"
                          data-key="t-hosting"
                        >
                          {{ $t("t-hosting") }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="collapse menu-dropdown" id="links">
                    <ul class="nav nav-sm flex-column">
                      <li class="nav-item">
                        <router-link
                          to="/short-link"
                          class="nav-link"
                          data-key="t-short-link"
                        >
                          {{ $t("t-short-link") }}
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link
                          to="/file-link"
                          class="nav-link"
                          data-key="t-file-link"
                        >
                          {{ $t("t-file-link") }}
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link
                          to="/vcard-link"
                          class="nav-link"
                          data-key="t-vcard-link"
                        >
                          {{ $t("t-vcard-link") }}
                        </router-link>
                      </li>

                      <li class="nav-item">
                        <router-link
                          to="/event-link"
                          class="nav-link"
                          data-key="t-event-link"
                        >
                          {{ $t("t-event-link") }}
                        </router-link>
                      </li>

                      <!-- Other Pages Start Ends Here -->
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="collapse menu-dropdown" id="tools">
                    <ul class="nav nav-sm flex-column">
                      <li class="nav-item">
                        <router-link
                          to="/file-manager"
                          class="nav-link"
                          data-key="t-file-manager"
                        >
                          {{ $t("t-file-manager") }}
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link
                          to="/qr-code"
                          class="nav-link"
                          data-key="t-qr-code"
                        >
                          {{ $t("t-qr-code") }}
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link
                          to="/other-tools"
                          class="nav-link"
                          data-key="t-other-tools"
                        >
                          {{ $t("t-other-tools") }}
                        </router-link>
                      </li>
                      <!-- Other Pages Start Ends Here -->
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="collapse menu-dropdown" id="data&payments">
                    <ul class="nav nav-sm flex-column">
                      <li class="nav-item">
                        <router-link
                          to="/data"
                          class="nav-link"
                          data-key="t-data"
                        >
                          {{ $t("t-data") }}
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link
                          to="/payments"
                          class="nav-link"
                          data-key="t-payments"
                        >
                          {{ $t("t-payments") }}
                        </router-link>
                      </li>
                      <!-- Other Pages Start Ends Here -->
                    </ul>
                  </div>
                </li>
              </simplebar>
            </template>
          </BContainer>
        </div>

        <simplebar
          id="scrollbar"
          class="h-100"
          ref="scrollbar"
          v-if="rmenu == 'vertical'"
        >
          <Menu></Menu>
        </simplebar>

        <div class="sidebar-background"></div>
      </div>
      <!-- Left Sidebar End -->
      <!-- Vertical Overlay-->
      <div class="vertical-overlay" id="overlay"></div>
    </div>
    <!-- ============================================================== -->
    <!-- Start Page Content here -->
    <!-- ============================================================== -->

    <div class="main-content">
      <div class="page-content">
        <!-- Start Content-->
        <BContainer fluid>
          <slot />
        </BContainer>
      </div>
      <Footer />
    </div>
    <RightBar />
  </div>
</template>
