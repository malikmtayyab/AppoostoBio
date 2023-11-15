<script>

export default {
props:{
    options:{
        type:Array
    }
}
}

</script>

<template>
     <div class="mb-3">
                      <label for="compnayNameinput" class="form-label">Type</label>
                      <BFormSelect class="form-select" id="validationDefault04" required >
                        <option selected disabled value="">Choose Type</option>

                        <option v-for="option in options" :key="option">{{ option.name }}</option>
                      </BFormSelect>
                    </div>
</template>