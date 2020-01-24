<template>
  <div id="கட்டுப்பாடுகள்">
    <kattumanam v-bind:ceyalil="ceyalil == 'கட்டுமனம்'"></kattumanam>
  </div>
</template>

<script>
  import kattumanam from './கட்டுமனம்'
  export default {
    name: 'கட்டுப்பாடுகள்',
    components: { kattumanam },
    props: ['ceyalil']
  }
</script>

<style scoped>

</style>
