<template>
  <div id="உருவகப்படுத்துதல்" class="columns" v-show="ceyalil">
    <div class="column">சரிபார்த்தல்</div>
    <div class="column">உருவகப்படுத்துதல்</div>
  </div>
</template>

<script>
  export default {
    name: 'உருவகப்படுத்துதல்',
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
