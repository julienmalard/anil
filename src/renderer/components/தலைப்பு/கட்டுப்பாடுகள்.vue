<template>
  <div id="கட்டுப்பாடுகள்">
    <avanam v-bind:ceyalil="ceyalil == 'ஆவணம்'"></avanam>
    <kattumanam v-bind:ceyalil="ceyalil == 'கட்டுமனம்'"></kattumanam>
    <parvai v-bind:ceyalil="ceyalil == 'பார்வை'"></parvai>
    <uruvakappaduttutal v-bind:ceyalil="ceyalil == 'உருவகப்படுத்துதல்'"></uruvakappaduttutal>
    <takavalkal v-bind:ceyalil="ceyalil == 'தகவல்கள்'"></takavalkal>
    <vazhangal v-bind:ceyalil="ceyalil == 'வழங்கல்'"></vazhangal>
  </div>
</template>

<script>
  import avanam from './ஆவணம்'
  import kattumanam from './கட்டுமனம்'
  import parvai from './பார்வை'
  import uruvakappaduttutal from './உருவகப்படுத்துதல்'
  import takavalkal from './தகவல்கள்'
  import vazhangal from './வழங்கல்'
  export default {
    name: 'கட்டுப்பாடுகள்',
    components: {
      avanam, kattumanam, parvai, uruvakappaduttutal, takavalkal, vazhangal
    },
    props: ['ceyalil']
  }
</script>

<style scoped>
#கட்டுப்பாடுகள் {
  background-color: #ffffff;
}
</style>
