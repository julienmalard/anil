<template>
  <svg id="svgmod">
    <nilai v-for="nilai in nilaigal" :key="nilai.id" :nilai="nilai" />
    <ottam v-for="ottam in ottangal"
      :key="ottam.id"
      :ottam="ottam"
      :todakkam="mariPera(ottam.todakkam)"
      :irudi="mariPera(ottam.irudi)"
    />
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
  import { mapGetters } from 'vuex'

  import nilai from './நிலை'
  import mari from './மாறி'
  import ambu from './அம்பு'
  import ottam from './ஓட்டம்'

  export default {
    name: 'வரைதிரை',
    components: { nilai, mari, ambu, ottam },
    methods: {
      mariPera (பெயர்) {
        let மாறி = this.nilaigal.find(nilai => nilai.பெயர் === பெயர்)
        if (மாறி) {
          return மாறி
        }
        return this.marigal.find(மாறி => மாறி.பெயர் === பெயர்)
      }
    },
    computed: {
      nilaigal () {
        return this.$store.state.பார்வை.நிலைகள்
      },
      marigal () {
        return this.$store.state.பார்வை.மாறிகள்
      },
      ambugal () {
        return this.$store.state.பார்வை.அன்புகள்
      },
      ottangal () {
        return this.$store.state.பார்வை.ஓட்டங்கள்
      },
      ...mapGetters([
        'பார்வை.மாறி_பெற'
      ])
    }
  }
</script>

<style>

</style>
