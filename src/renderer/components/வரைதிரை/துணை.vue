<template>
  <g>
    <circle
      :cx=tunai.ங
      :cy=tunai.ஞ
      r=10
      style="fill:#ffffff;stroke-width:1;stroke:#000000;cursor:-webkit-grab;"
      @touchstart="mousedown"
      @mousedown="mousedown"
      @mousemove="mousemove"
      @touchmove="mousemove"
      @mouseup="mouseup"
      @touchend="mouseup"
    />
    <text
      :x="tunai.ங + 20"
      :y="tunai.ஞ + 3"
      text-anchor="left"
      style="cursor:text;"
    >
      {{ tunai.பெயர் }}
    </text>
  </g>
</template>

<script>
import சுட்டியிழுத்தல் from './சுட்டி'
import உருப்படி from './உருப்படி'

export default {
  name: 'மாறி',
  props: [ 'tunai' ],
  mixins: [ உருப்படி ],
  methods: {
    mousedown (நி) {
      if (this.திருத்தல்) {
        this.சுட்டியிழுத்தல் = new சுட்டியிழுத்தல்(நி, { ங: this.tunai.ங, ஞ: this.tunai.ஞ })

        document.addEventListener('mousemove', this.mousemove)
        document.addEventListener('mouseup', this.mouseup)
      }
    },
    mousemove (நி) {
      if (this.சுட்டியிழுத்தல்) {
        நி.preventDefault()
        const [ங, ஞ] = this.சுட்டியிழுத்தல்.சுட்டிகண்டுபிடி(நி)

        this.$store.dispatch(
          'பார்வை/உருப்படி_மாற்றம்',
          { id: this.tunai.id, ங: ங, ஞ: ஞ }
        )
      }
    }
  }
}
</script>

<style>

</style>
