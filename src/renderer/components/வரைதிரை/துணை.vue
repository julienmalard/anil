<template>
  <g>
    <circle
      :cx=urupadi.ங
      :cy=urupadi.ஞ
      r=10
      :style="`fill:#ffffff;stroke-width:1;stroke:#000000;cursor:${ திருத்தல் ? '-webkit-grab': 'default' };`"
      @click="onClick"
      @touchstart="mousedown"
      @mousedown="mousedown"
      @mousemove="mousemove"
      @touchmove="mousemove"
      @mouseup="mouseup"
      @touchend="mouseup"
    />
    <text
      v-if="!உரை_திருத்தல்"
      :x="urupadi.ங + 20"
      :y="urupadi.ஞ + 3"
      @click="uraitiruttal"
      text-anchor="left"
      :style="`cursor:${ திருத்தல் ? 'text': 'default' };`"
    >
      {{ urupadi.பெயர் }}
    </text>
    <foreignObject
      v-else
      :x="urupadi.ங + 20"
      :y="urupadi.ஞ - 14"
    >
      <div xmlns="http://www.w3.org/1999/xhtml">
        <input
          v-model="உரை"
          v-focus
          @blur="uraisemi"

        ></input>
      </div>
    </foreignObject>
  </g>
</template>

<script>
import சுட்டியிழுத்தல் from './சுட்டி'
import உருப்படி from './உருப்படி'
import மாறி from './மாறி'

export default {
  name: 'மாறி',
  props: [ 'urupadi' ],
  mixins: [ உருப்படி, மாறி ],
  methods: {
    mousedown (நி) {
      if (this.திருத்தல்) {
        this.சுட்டியிழுத்தல் = new சுட்டியிழுத்தல்(நி, { ங: this.urupadi.ங, ஞ: this.urupadi.ஞ })

        document.addEventListener('mousemove', this.mousemove)
        document.addEventListener('mouseup', this.mouseup)
      }
    },
    mousemove (நி) {
      if (this.சுட்டியிழுத்தல்) {
        நி.preventDefault()
        const { ங, ஞ } = this.சுட்டியிழுத்தல்.சுட்டிகண்டுபிடி(நி)

        this.$store.dispatch(
          'பார்வை/உருப்படி_மாற்றம்',
          { id: this.urupadi.id, ங: ங, ஞ: ஞ }
        )
      }
    }
  }
}
</script>

<style>

</style>
