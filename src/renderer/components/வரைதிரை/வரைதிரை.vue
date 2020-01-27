<template>
  <svg id="svgmod">
    <nilai v-for="nilai in nilaigal" :key="nilai.id" :nilai="nilai" />
    <ottam />
    <mari v-for="mari in marigal" :key="mari.id" :mari="mari" />
    <ambu v-for="ambu in ambugal"
      :key="ambu.id"
      :ambu="ambu"
      :todakkam="mariPera(ambu.todakkam)"
      :irudi="mariPera(ambu.irudi)"
    />
  </svg>
</template>

<script>
  import nilai from './நிலை'
  import mari from './மாறி'
  import ambu from './அம்பு'

  export default {
    name: 'வரைதிரை',
    components: { nilai, mari, ambu },
    methods: {
      mariPera (peyar) {
        let mari = this.nilaigal.find(nilai => nilai.பெயர் === peyar)
        if (mari) {
          return mari
        }
        return this.marigal.find(mari => mari.பெயர் === peyar)
      }
    },
    computed: {
      nilaigal () {
        return [
          { id: 1, பெயர்: 'வணக்கம்', உயரம்: 40, அகலம்: 130, ங: 500, ஞ: 30 }
        ]// this.$store.பார்வை.நிலைகள்
      },
      marigal () {
        return [
          { id: 3, பெயர்: 'எப்படி', ங: 250, ஞ: 30 }
        ]// this.$store.பார்வை.நிலைகள்
      },
      ambugal () {
        return [
          { id: 2, todakkam: 'வணக்கம்', irudi: 'எப்படி', ங: 400, ஞ: 100 }
        ]// this.$store.பார்வை.நிலைகள்
      }
    }
  }
</script>

<style>

</style>
