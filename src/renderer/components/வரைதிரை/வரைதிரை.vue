<template>
  <svg id="svgmod">
    <nilai
      v-for="nilai in nilaigal"
      :key="nilai.id"
      :nilai="nilai"
      />
    <ottam />
    <mari />
    <ambu />
  </svg>
</template>

<script>
  import nilai from './நிலை'
  export default {
    name: 'வரைதிரை',
    components: { nilai },
    computed: {
      nilaigal () {
        return [
          { id: 1, பெயர்: 'வணக்கம்', உயரம்: 40, அகலம்: 130, ங: 500, ஞ: 30 }
        ]// this.$store.பார்வை.நிலைகள்
      }
    }
  }
</script>

<style>

</style>
