<template>
  <li v-bind:class="{ 'is-active': ceyalil ==  taval.பெயர் }" @click="ceyalaka(taval.பெயர்)">
    <a>
      <p class="level-item"><font-awesome-icon :icon='taval.சின்னம்' /></p>
      <span>{{ taval.பெயர் }}</span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'தாவல்_ஆவணம்',
  props: ['taval', 'ceyalil', 'aceyalaka'],
  methods: {
    ceyalaka: function (taval) {
      this.aceyalaka(taval)
    }
  }
}
</script>

<style>

</style>
