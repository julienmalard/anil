<template>
  <v-tab
    v-bind:class="{ 'is-active': ceyalil ==  taval.பெயர் }"
    @click="செயலாக்க(taval.பெயர்)"
  >
    <a>
      <p class="level-item"><font-awesome-icon :icon='taval.சின்னம்' /></p>
      <span>{{ taval.பெயர் }}</span>
    </a>
  </v-tab>
</template>

<script>
export default {
  name: 'தாவல்_ஆவணம்',
  props: ['taval', 'ceyalil', 'செயலாக்க']
}
</script>

<style>

</style>
