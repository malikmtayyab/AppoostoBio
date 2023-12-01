<script>
import { layoutComputed } from "@/state/helpers";

import Vertical from "./vertical";
import TwoColumns from "./twocolumn";

export default {
  components: {
    Vertical,
    TwoColumns,
  },
  data() {
    return {};
  },
  computed: {
    ...layoutComputed,
  },
  mounted() {
    // document.querySelector("html").setAttribute('dir', 'rtl');
  },
};
</script>

<template>
  <div>
    <Vertical
      v-if="layoutType === 'vertical' || layoutType === 'semibox'"
      :layout="layoutType"
    >
      <slot />
    </Vertical>

    <TwoColumns v-if="layoutType === 'twocolumn'" :layout="layoutType">
      <slot />
    </TwoColumns>
  </div>
</template>
