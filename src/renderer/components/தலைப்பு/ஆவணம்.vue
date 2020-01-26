<template>
  <div id="ஆவணம்" class="columns" v-show="ceyalil">
    <div class="column">மாதிரி</div>
    <div class="column">கோப்பு</div>
    <div class="column">ஏற்றுமதி</div>
  </div>
</template>

<script>
  export default {
    name: 'ஆவணம்',
    props: ['ceyalil']
  }
</script>

<style scoped>
#கட்டுப்பாடுகள் {
  padding: 10px 20px;
}
.சின்னம்:hover {
  background-color: #EEEEEE;
}
</style>
