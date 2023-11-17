<script>
import { layoutComputed } from "@/state/helpers";

export default {
  data() {
    return {
      settings: {
        minScrollbarLength: 60,
      },
    };
  },
  computed: {
    ...layoutComputed,
    layoutType: {
      get() {
        return this.$store ? this.$store.state.layout.layoutType : {} || {};
      },
    },
  },

  watch: {
    $route: {
      handler: "onRoutechange",
      immediate: true,
      deep: true,
    },
  },

  mounted() {
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

  methods: {
    onRoutechange(ele) {
      this.initActiveMenu(ele.path);
      if (document.getElementsByClassName("mm-active").length > 0) {
        const currentPosition =
          document.getElementsByClassName("mm-active")[0].offsetTop;
        if (currentPosition > 500)
          if (this.$refs.isSimplebar)
            this.$refs.isSimplebar.value.getScrollElement().scrollTop =
              currentPosition + 300;
      }
    },

    initActiveMenu(ele) {
      setTimeout(() => {
        if (document.querySelector("#navbar-nav")) {
          let a = document
            .querySelector("#navbar-nav")
            .querySelector('[href="' + ele + '"]');
          if (a) {
            a.classList.add("active");
            let parentCollapseDiv = a.closest(".collapse.menu-dropdown");
            if (parentCollapseDiv) {
              parentCollapseDiv.classList.add("show");
              parentCollapseDiv.parentElement.children[0].classList.add(
                "active"
              );
              parentCollapseDiv.parentElement.children[0].setAttribute(
                "aria-expanded",
                "true"
              );
              if (
                parentCollapseDiv.parentElement.closest(
                  ".collapse.menu-dropdown"
                )
              ) {
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
                const grandparent = parentCollapseDiv.parentElement
                  .closest(".collapse")
                  .previousElementSibling.parentElement.closest(".collapse");
                if (
                  grandparent &&
                  grandparent &&
                  grandparent.previousElementSibling
                ) {
                  grandparent.previousElementSibling.classList.add("active");
                  grandparent.classList.add("show");
                }
              }
            }
          }
        }
      }, 0);
    },
  },
};
</script>

<template>
  <BContainer fluid>
    <div id="two-column-menu"></div>

    <template v-if="layoutType === 'vertical' || layoutType === 'semibox'">
      <ul class="navbar-nav h-100" id="navbar-nav">
        <!-- <li class="menu-title">
          <span data-key="t-menu"> {{ $t("t-menu") }}</span>
        </li> -->
        <li class="nav-item">
          <a
            class="nav-link menu-link"
            href="#dashboard"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="dashboard"
          >
            <i class="ri-dashboard-2-line"></i>
            <span data-key="t-dashboard"> {{ $t("t-dashboard") }}</span>
          </a>
          <div class="collapse menu-dropdown" id="dashboard">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <router-link
                  to="/"
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
          <a
            class="nav-link menu-link"
            href="#ai"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="ai"
          >
            <i class="ri-apps-2-line"></i>
            <span data-key="t-ai"> {{ $t("t-ai") }}</span>
          </a>
          <div class="collapse menu-dropdown" id="ai">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <router-link
                  to="/ai/images"
                  class="nav-link custom-abc"
                  data-key="t-images"
                >
                  {{ $t("t-images") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/ai/templates"
                  class="nav-link custom-abc"
                  data-key="t-templates"
                >
                  {{ $t("t-templates") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/ai/assistant"
                  class="nav-link custom-abc"
                  data-key="t-assistant"
                >
                  {{ $t("t-assistant") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/ai/speech-to-text"
                  class="nav-link custom-abc"
                  data-key="t-speech-to-text"
                >
                  {{ $t("t-speech-to-text") }}
                </router-link>
              </li>
            </ul>
          </div>
        </li>

        <li class="nav-item">
          <a
            class="nav-link menu-link"
            href="#pages"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="pages"
          >
            <i class="ri-pages-line"></i>
            <span data-key="t-pages">{{ $t("t-pages") }}</span>
          </a>
          <div class="collapse menu-dropdown" id="pages">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <router-link
                  to="/pages/landing-pages"
                  class="nav-link custom-abc"
                  data-key="t-landing-pages"
                >
                  {{ $t("t-landing-pages") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/pages/action-pages"
                  class="nav-link custom-abc"
                  data-key="t-action-pages"
                >
                  {{ $t("t-action-pages") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/pages/hosting"
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
          <a
            class="nav-link"
            href="#links"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="links"
            data-key="t-projects"
          >
            <i class="ri-rocket-line"></i>
            <span data-key="t-links">{{ $t("t-links") }}</span>
          </a>
          <div class="collapse menu-dropdown" id="links">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <router-link
                  to="/links/short-link"
                  class="nav-link"
                  data-key="t-short-link"
                >
                  {{ $t("t-short-link") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/links/file-link"
                  class="nav-link"
                  data-key="t-file-link"
                >
                  {{ $t("t-file-link") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/links/vcard-link"
                  class="nav-link"
                  data-key="t-vcard-link"
                >
                  {{ $t("t-vcard-link") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/links/event-link"
                  class="nav-link"
                  data-key="t-event-link"
                >
                  {{ $t("t-event-link") }}
                </router-link>
              </li>
            </ul>
          </div>
        </li>

        <li class="nav-item">
          <a
            class="nav-link menu-link"
            href="#tools"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="tools"
          >
            <i class="ri-pencil-ruler-2-line"></i>
            <span data-key="t-tools">{{ $t("t-tools") }}</span>
          </a>
          <div class="collapse menu-dropdown" id="tools">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <router-link
                  to="/tools/calendar"
                  class="nav-link"
                  data-key="t-calendar"
                >
                  {{ $t("t-calendar") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/tools/file-manager"
                  class="nav-link"
                  data-key="t-file-manager"
                >
                  {{ $t("t-file-manager") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/tools/qr-code"
                  class="nav-link"
                  data-key="t-qr-code"
                >
                  {{ $t("t-qr-code") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/tools/other-tools"
                  class="nav-link"
                  data-key="t-other-tools"
                >
                  {{ $t("t-other-tools") }}
                </router-link>
              </li>
            </ul>
          </div>
        </li>

        <li class="nav-item">
          <a
            class="nav-link menu-link"
            href="#dataAndPayments"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="dataAndPayments"
          >
            <i class="ri-stack-line"></i>
            <span data-key="t-data-and-payments">{{
              $t("t-data-and-payments")
            }}</span>
          </a>
          <div class="collapse menu-dropdown" id="dataAndPayments">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <router-link
                  to="/data-and-payments/data"
                  class="nav-link"
                  data-key="t-data"
                >
                  {{ $t("t-data") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/data-and-payments/payments"
                  class="nav-link"
                  data-key="t-payments"
                >
                  {{ $t("t-payments") }}
                </router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </template>
  </BContainer>
</template>
