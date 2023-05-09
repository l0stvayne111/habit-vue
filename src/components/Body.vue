<template>
  <div class="container-home">
      <slot/>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Body"
}
</script>

<style scoped>
.container-home {
    padding-bottom: 90px;
}

</style>