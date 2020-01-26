<template>
  <div id="பார்வை" class="columns" v-show="ceyalil">
    <div class="column">பார்வைகள்</div>
    <div class="column">அடுக்குகள்</div>
  </div>
</template>

<script>
  export default {
    name: 'பார்வை',
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
