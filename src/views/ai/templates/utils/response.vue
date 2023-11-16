<script>
import { reactive } from "vue";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  props: {
    message: {
      type: String,
    },
  },
  setup() {
    const state = reactive({
      content:
        "<h3><span class='ql-size-large;'>Hello World!</span></h3><p><br></p><h3>This is an simple editable area.</h3><p><br></p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p><br></p><p>End of simple area</p>",
      _content: "",
      disabled: false,
    });
    return {
      state,
    };
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData:
        "<h3>Hello World!</h3><h5><b>This is an simple editable area.</b></h5>",
      content: "<h1>Some initial content</h1>",

      plugins: [
        "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
        "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
        "save table contextmenu directionality emoticons template paste textcolor",
      ],
      toolbar:
        "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
      options: {
        height: 300,
        style_formats: [
          { title: "Bold text", inline: "b" },
          { title: "Red text", inline: "span", styles: { color: "#ff0000" } },
          { title: "Red header", block: "h1", styles: { color: "#ff0000" } },
          { title: "Example 1", inline: "span", classes: "example1" },
          { title: "Example 2", inline: "span", classes: "example2" },
          { title: "Table styles" },
          { title: "Table row 1", selector: "tr", classes: "tablerow1" },
        ],
      },
      editorConfig: {
        height: "100vh", // Ensure the editor takes up 100% height
        // Other config options...
      },
    };
  },
  components: {
    ckeditor: CKEditor.component,
  },
};
</script>

<template>
      <div class="h-100">

            <div v-if="message" class="ckeditor-classic ckeditor-wrapper mt-3">
    <ckeditor
      v-model="editorData"
      :editor="editor"
      :config="editorConfig"
      ></ckeditor>
</div>
<div  v-else class="h-100 d-flex justify-content-center align-items-center mt-5 pt-2 ">
      <img class="img" src="@/assets/images/empty-template.png"/>
</div>
</div>
</template>

<style scoped>
.ckeditor-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.img
{
      height: 50% !important;
      width:50% !important;
}
/* You might need to adjust the surrounding elements' heights for this to work properly */
</style>
