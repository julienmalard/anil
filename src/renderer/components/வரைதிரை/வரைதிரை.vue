<template>
  <svg id="svgmod"
    @click="onClick"
  >
    <nilai v-for="நிலை in நிலைகள்" :key="நிலை.id" :nilai="நிலை" />
    <ottam v-for="ஓட்டம் in ஓட்டங்கள்"
      :key="ஓட்டம்.id"
      :ottam="ஓட்டம்"
      :todakkam="உருப்படி_பெற(ஓட்டம்.தொடக்கம்)"
      :irudi="உருப்படி_பெற(ஓட்டம்.இறுதி)"
    />
    <mari v-for="துணை in துணைகள்" :key="துணை.id" :tunai="துணை" />
    <ambu v-for="அன்பு in அன்புகள்"
      :key="அன்பு.id"
      :ambu="அன்பு"
      :todakkam="உருப்படி_பெற(அன்பு.தொடக்கம்)"
      :irudi="உருப்படி_பெற(அன்பு.இறுதி)"
    />
  </svg>
</template>

<script>
  import { mapGetters } from 'vuex'

  import nilai from './நிலை'
  import mari from './துணை'
  import ambu from './அம்பு'
  import ottam from './ஓட்டம்'

  export default {
    name: 'வரைதிரை',
    components: { nilai, mari, ambu, ottam },
    computed: {
      ...mapGetters({
        'உருப்படி_பெற': 'பார்வை/உருப்படி_பெற',
        'நிலைகள்': 'பார்வை/நிலைகள்',
        'துணைகள்': 'பார்வை/துணைகள்',
        'அன்புகள்': 'பார்வை/அன்புகள்',
        'ஓட்டங்கள்': 'பார்வை/ஓட்டங்கள்'
      })
    },
    methods: {
      onClick (நி) {
        const திருத்தல்நிலை = this.$store.state.பார்வை.திருத்தல்நிலை
        if (திருத்தல்நிலை.பெயர் === 'சேருக') {
          this.$store.dispatch('பார்வை/செருக', { id: '11', வகை: 'துணை', பெயர்: 'எப்படி2', ங: 400, ஞ: 400 })
        }
        if (திருத்தல்நிலை.பெயர் !== 'பூட்டப்பட்டுள்ளது') {
          this.$store.dispatch('பார்வை/திருத்தல்நிலை_மாற்றம்', { பெயர்: 'திருத்தல்' })
        }
      }
    }
  }
</script>

<style>

</style>
