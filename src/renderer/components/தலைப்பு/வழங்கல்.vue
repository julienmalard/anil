<template>
  <div id="வழங்கல்" class="columns" v-show="ceyalil">
    <div class="column">கதைகள்</div>
    <div class="column">முன்வைத்தல்</div>
  </div>
</template>

<script>
  export default {
    name: 'வழங்கல்',
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
