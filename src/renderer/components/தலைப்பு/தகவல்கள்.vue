<template>
  <div id="தகவல்கள்" class="columns" v-show="ceyalil">
    <div class="column">தரவுத்தளம்</div>
  </div>
</template>

<script>
  export default {
    name: 'தகவல்கள்',
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
