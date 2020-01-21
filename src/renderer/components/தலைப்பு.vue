<template>
  <div id="தலைப்பு" class="level is-marginless">

    <div id="தாவல்கள்" class="level-left tabs is-marginless">
      <ul>
        <taval
          v-for="தாவல் in தாவல்கள்"
          v-bind:taval="தாவல்"
          v-bind:ceyalil="செயலில்"
          v-bind:aceyalaka="ceyalaka"
          v-bind:key="தாவல்.பெயர்">
        </taval>
      </ul>
    </div>
    <div class="level-right">
        <p class="level-item"><font-awesome-icon icon="globe-africa" size="lg"/></p>
        <p class="level-item"><font-awesome-icon icon="cog" size="lg"/></p>
    </div>
  </div>
</template>

<script>
  import Taval from './தாவல்'
  export default {
    name: 'தலைப்பு',
    methods: {
      ceyalaka: function (தாவல்) {
        this.செயலில் = தாவல்
      }
    },
    data: () => {
      return {
        செயலில்: 'கட்டுமனம்',
        தாவல்கள்: [
          { பெயர்: 'ஆவணம்', சின்னம்: 'file' },
          { பெயர்: 'கட்டுமனம்', சின்னம்: 'edit' },
          { பெயர்: 'பார்வை', சின்னம்: 'eye' },
          { பெயர்: 'உருவகப்படுத்துதல்', சின்னம்: 'caret-right' },
          { பெயர்: 'வழங்கல்', சின்னம்: 'desktop' }]
      }
    },
    components: { Taval }
  }
</script>

<style scoped>
#தலைப்பு {
  padding: 10px 20px;
}
</style>
