<script>
import typeSelect from './typeSelector'

export default {
  data() {
    return {
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
props:{
  index:{
    type:Number
  }
},
  components: {
    typeSelect
  },
};
</script>

<template>
         <BForm action="javascript:void(0);" class="mt-3 pb-2 col-12 col-md-5"  >
                <BRow>
                  <BCol md="12">
                    <div class="mb-3">
                      <label for="firstNameinput" class="form-label">Name</label>
                      <BFormInput type="text" class="form-control" placeholder="Enter your firstname" id="firstNameinput" />
                    </div>
                  </BCol>
                
               
                  <BCol md="12">
                   <typeSelect :options=options[index]></typeSelect>
                  </BCol>
                  <BCol md="12">
                    <div class="mb-3">
                      <label for="emailidInput" class="form-label">Prompt</label>
                      <textarea class="form-control" rows="4" id="validationTextarea" placeholder="What are the top 5 most tourist friendly countries?" ></textarea>
                    </div>
                  </BCol>
                  <BCol md="12">
                    <div class="mb-3">
                      <label for="address1ControlTextarea" class="form-label">Language</label>
                      <BFormSelect class="form-select" id="validationDefault04" required >
                        <option selected disabled value="">Choose...</option>
                        <option>English</option>
                        <option>Italian</option>
                      </BFormSelect>
                    </div>
                  </BCol>
               
                  
                  <BCol lg="12">
                    <div class=" text-end mt-2">
                      <BButton class="w-100" type="submit" variant="primary">
                        Generate
                      </BButton>
                    </div>
                  </BCol>
                </BRow>
              </BForm>
</template>

