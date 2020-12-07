<template>
  <v-sheet
    :height="$store.state.பார்வை.பக்கமளவு[0]"
    :width="$store.state.பார்வை.பக்கமளவு[1]"

    rounded="lg"
  >
    <svg
      height="auto" width="auto"
      @click="onClick"
    >
      <ottam v-for="ஓட்டம் in ஓட்டங்கள்"
        :key="ஓட்டம்.id"
        :urupadi="ஓட்டம்"
        :todakkam="உருப்படி_பெற(ஓட்டம்.தொடக்கம்)"
        :irudi="உருப்படி_பெற(ஓட்டம்.இறுதி)"
      />
      <tunai v-for="துணை in துணைகள்"
        :key="துணை.id"
        :urupadi="துணை"
        @click="onClick"
      />
      <ambu v-for="அன்பு in அன்புகள்"
        :key="அன்பு.id"
        :ambu="அன்பு"
        :todakkam="உருப்படி_பெற(அன்பு.தொடக்கம்)"
        :irudi="உருப்படி_பெற(அன்பு.இறுதி)"
      />
      <nilai v-for="நிலை in நிலைகள்"
        :key="நிலை.id"
        :urupadi="நிலை"
      />
    </svg>
  </v-sheet>
</template>

<script>
import { mapGetters } from 'vuex'

import nilai from './நிலை'
import tunai from './துணை'
import ambu from './அம்பு'
import ottam from './ஓட்டம்'

export default {
  name: 'வரைதிரை',
  components: { nilai, tunai, ambu, ottam },
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
    uid () {
      return String(Math.floor(Math.random() * 1e8))
    },
    onClick (நி) {
      console.log('onClick', நி)
      const திருத்தல்நிலை = this.$store.state.பார்வை.திருத்தல்நிலை
      if (திருத்தல்நிலை.பெயர் === 'சேருக') {
        var dim = this.$refs['svg'].getBoundingClientRect()
        var உருப்படி = திருத்தல்நிலை.உருப்படி
        if (உருப்படி === 'நிலை') {
          this.$store.dispatch('பார்வை/செருக',
            {
              id: this.uid(),
              வகை: 'நிலை',
              பெயர்: 'நிலை',
              ங: நி.x - 130 / 2 - dim.left,
              ஞ: நி.y - 40 / 2 - dim.top,
              அகலம்: 130,
              உயரம்: 40
            })
        } else if (உருப்படி === 'துணை') {
          this.$store.dispatch('பார்வை/செருக',
            {
              id: this.uid(),
              வகை: 'துணை',
              பெயர்: 'துணை',
              ங: நி.x - dim.left,
              ஞ: நி.y - dim.top
            })
        } else if (உருப்படி === 'அன்பு') {
          let படி = திருத்தல்நிலை.படி || 0
          let மாற்றம் = { பெயர்: 'சேருக', உருப்படி: 'அன்பு' }
          if (படி === 2) {
            if (நி.மாறி !== undefined) {
              மாற்றம்.இறுதி = நி.மாறி.id
            }
          }
          if (படி === 0) {
            மாற்றம்.தொடக்கம் = நி.மாறி.id
          } else if (படி === 1) {} else {
            மாற்றம்.படி = படி + 1
            console.log(மாற்றம்)
            this.$store.dispatch(
              'பார்வை/திருத்தல்நிலை_மாற்றம்',
              மாற்றம்
            )
          }
        } else {
          console.error(உருப்படி)
        }
      }
      if (திருத்தல்நிலை.பெயர் !== 'பூட்டப்பட்டுள்ளது' && திருத்தல்நிலை.பெயர் !== 'திருத்தல்') {
        this.$store.dispatch('பார்வை/திருத்தல்நிலை_மாற்றம்', { பெயர்: 'திருத்தல்' })
      }
    }
  }
}
</script>

<style>

</style>
