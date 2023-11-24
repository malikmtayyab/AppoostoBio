<script>
// import typeSelect from "./typeSelector";

export default {
  data() {
    return {
      showTooltip: false,
      options: [
        [{ name: "Custom Prompt", value: "custom" }],
        [
          { name: "Website Headline", value: "website_headline" },
          { name: "SEO Title", value: "seo_title" },
        ],
        [
          { name: "PHP snippet", value: "php_snippet" },
          { name: "HTML snippet", value: "html_snippet" },
        ],
        [
          { name: "Social media bio", value: "social_bio" },
          { name: "Social media hashtags", value: "social_hashtags" },
        ],
        [
          { name: "Sales Email", value: "sale_email" },
          { name: "Cold Email", value: "cold_email" },
        ],
        [
          { name: "Summarize", value: "summarize" },
          { name: "Quote Generator", value: "quote_generator" },
        ],
        [
          { name: "Name Generator", value: "name_generator" },
          { name: "Startup Ideas", value: "startup_ideas" },
        ],
      ],
    };
  },
  props: {
    index: {
      type: Number,
    },
  },
  components: {
    // typeSelect,
  },
  methods: {
    handleAdvancedClick() {
      // Emitting an event named 'advanced-click' to the parent component
      this.$emit("advanced-click");
    },
  },
};
</script>

<template>
  <BForm action="javascript:void(0);" class="mt-3 pb-2 col-12 col-md-12">
    <BRow>
      <!-- <BCol md="12">
        <typeSelect :options="options[index]"></typeSelect>
      </BCol> -->

      <BCol md="12">
        <div class="mb-3">
          <label for="firstNameinput" class="form-label">Name</label>
          <BFormInput
            type="text"
            class="form-control"
            placeholder="Enter your firstname"
            id="firstNameinput"
          />
        </div>
      </BCol>

      <BCol md="12">
        <div class="mb-3">
          <label for="emailidInput" class="form-label">Prompt</label>

          <i
            class="ms-2 mdi mdi-information-outline"
            data-toggle="tooltip"
            data-placement="right"
            title="Tooltip about prompt "
          ></i>
          <textarea
            class="form-control"
            rows="4"
            id="validationTextarea"
            placeholder="What are the top 5 most tourist friendly countries?"
          ></textarea>
        </div>
      </BCol>
      <BCol md="12">
        <div class="mb-3">
          <label for="address1ControlTextarea" class="form-label"
            >Language</label
          >
          <BFormSelect class="form-select" id="validationDefault04">
            <option selected disabled value="">Choose...</option>
            <option>English</option>
            <option>Italian</option>
          </BFormSelect>
        </div>
      </BCol>
      <BCol lg="12">
        <BAccordion class="mb-3">
          <BAccordionItem
            style="
              padding-top: 14px;
              padding-bottom: 14px;
              padding-left: 8px;
              padding-right: 8px;
            "
            title="Advance Settings"
          >
            <div>
              <div>
                <div class="mt-3 text-center">
                  <h5 class="fs-16 mb-1">
                    <h3 class="link-primary username">Advanced Settings</h3>
                  </h5>
                </div>
              </div>
              <div class="border-top border-top-dashed p-3">
                <div class="mb-3 mt-3">
                  <label for="compnayNameinput" class="form-label"
                    >Creativity Level</label
                  >
                  <BFormSelect
                    class="form-select"
                    id="validationDefault04"
                    required
                  >
                    <option selected disabled value="">Choose Level</option>

                    <option v-for="option in creativity_levels" :key="option">
                      {{ option }}
                    </option>
                  </BFormSelect>
                </div>

                <div class="mb-3 mt-3">
                  <label for="compnayNameinput" class="form-label"
                    >Variants</label
                  >
                  <BFormSelect
                    class="form-select"
                    id="validationDefault04"
                    required
                  >
                    <option selected disabled value="">Choose Variant</option>

                    <option v-for="option in variants" :key="option">
                      {{ option }}
                    </option>
                  </BFormSelect>
                </div>

                <div class="mb-3 mt-3">
                  <label for="firstNameinput" class="form-label"
                    >Maximum words per variant</label
                  >
                  <BFormInput
                    type="text"
                    class="form-control"
                    placeholder="1000"
                    id="firstNameinput"
                  />
                </div>
                <div class="mb-3 mt-4">
                  <BButton
                    v-on:click.prevent="showOffcanvas = !showOffcanvas"
                    class="w-100"
                    type="submit"
                    variant="primary"
                  >
                    Apply
                  </BButton>
                </div>
              </div>
            </div>
          </BAccordionItem>
        </BAccordion>
      </BCol>

      <BCol lg="12">
        <div class="text-end mt-2">
          <BButton class="w-100" type="submit" variant="primary">
            Generate
          </BButton>
        </div>
      </BCol>
    </BRow>
  </BForm>
</template>
