<template>
  <div>
    <GsSearch/>
    <GsList/>
  </div>
</template>

<script>
import GsSearch from "./GsSearch";
import GsList from "./GsList";

export default {
  name: "Gs",
  data() {
    return {
    };
  },
  components: {
    GsSearch,
    GsList
  },
};
</script>