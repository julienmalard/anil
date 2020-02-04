<template>
  <div>
    <div id="தலைப்பு">
      <v-tabs>
        <v-tab>1</v-tab>
        <v-tab>2</v-tab>
      </v-tabs>
      <v-tabs>
        <taval
          v-for="தாவல் in தாவல்கள்"
          v-bind:taval="தாவல்"
          v-bind:ceyalil="செயலில்"
          v-bind:செயலாக்க="செயலாக்க"
          v-bind:key="தாவல்.பெயர்">
        </taval>
      </v-tabs>
      <div class="level-right">
          <p class="level-item"><font-awesome-icon icon="globe-africa" size="lg"/></p>
          <p class="level-item"><font-awesome-icon icon="cog" size="lg"/></p>
      </div>
    </div>
    <div id="கட்டுப்பாடுகள்" class="container is-fluid is-paddingless">
      <kattupadukal v-bind:ceyalil="செயலில்"></kattupadukal>
    </div>
  </div>
</template>

<script>
  import Taval from './தாவல்'
  import kattupadukal from './கட்டுப்பாடுகள்'

  export default {
    name: 'தலைப்பு',
    methods: {
      செயலாக்க: function (தாவல்) {
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
          { பெயர்: 'தகவல்கள்', சின்னம்: 'table' },
          { பெயர்: 'வழங்கல்', சின்னம்: 'desktop' }]
      }
    },
    components: { Taval, kattupadukal }
  }
</script>

<style scoped>
  #தலைப்பு, #கட்டுப்பாடுகள் {
    padding: 10px 20px;
    background-color: #ffffff;
  }
</style>
