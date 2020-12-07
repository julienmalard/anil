<template>
  <g
    @mouseover="sutti_mele"
    @mouseout="sutti_veliye"
  >
    <rect
      :x="urupadi.ங" :y="urupadi.ஞ"
      :width="urupadi.அகலம்" :height="urupadi.உயரம்"
      rx="2" ry="2"
      :style="`fill:#ffffff;stroke-width:1;stroke:#000000;cursor:${ திருத்தல் ? '-webkit-grab': 'auto' };`"
      @mousedown="mousedown('நகர்த்தல்', { ங: urupadi.ங, ஞ: urupadi.ஞ }, $event)"
      @touchstart="mousedown('நகர்த்தல்', { ங: urupadi.ங, ஞ: urupadi.ஞ }, $event)"
      @mousemove.prevent="mousemove"
      @touchmove.prevent="mousemove"
      @mouseup="mouseup"
      @touchend="mouseup"
    />
    <text
      v-if="!உரை_திருத்தல்"
      :x="urupadi.ங + urupadi.அகலம்/2"
      :y="urupadi.ஞ + urupadi.உயரம்/2+5"
      text-anchor="middle"
      @click="uraitiruttal"
      :style="`cursor:${ திருத்தல் ? 'text': 'default' };`"
    >
      {{ urupadi.பெயர் }}
    </text>

    <foreignObject
      v-else
      :x="urupadi.ங"
      :y="urupadi.ஞ"
    >
      <div xmlns="http://www.w3.org/1999/xhtml">
        <input
          v-model="உரை"
          v-focus
          @blur="uraisemi"
          :style="`width: ${urupadi.அகலம்}px; height: ${urupadi.உயரம்}px; resize: none;text-align: center;`"
        ></input>
      </div>
    </foreignObject>

    <g v-show="திருத்தல்">
      <circle
       v-for="(வட்டம், எண்) in வட்டங்கள்"
       :key="எண்"
       :cx="வட்டம்.ங" :cy="வட்டம்.ஞ"
       r=3
       :style="`fill:transparent;stroke-width:1;stroke:#99ccff;cursor:${வட்டம்.சுட்டி}-resize;`"
       @mousedown="mousedown(
         வட்டம்.நடவடிக்கை, { ங: வட்டம்.ங, ஞ: வட்டம்.ஞ }, $event)
         "
       @touchstart="mousedown(
         வட்டம்.நடவடிக்கை, { ங: வட்டம்.ங, ஞ: வட்டம்.ஞ }, $event)
         "
       @mousemove.prevent="mousemove"
       @touchmove.prevent="mousemove"
       @mouseup="mouseup"
       @touchend="mouseup"
      />
    </g>
    <g
      v-show="சுட்டி_மேல்" class="icon"
      @click="tiruttal"
    >
      <circle
       :cx="urupadi.ங + urupadi.அகலம்" :cy="urupadi.ஞ - 12.5 - 2"
       r="12"
       style="fill:transparent"
      />
      <rect
       :x="urupadi.ங + urupadi.அகலம் - 10" :y="urupadi.ஞ - 17.5"
       rx=2 ry=2 width="20" height="5"
       style="fill:#24961e"
      />
      <rect
       :x="urupadi.ங + urupadi.அகலம் - 2.5" :y="urupadi.ஞ - 25"
       rx=2 ry=2 width="5" height="20"
       style="fill:#24961e"
      />
    </g>
    <marittakavalkal></marittakavalkal>
  </g>
</template>

<script>
import சுட்டியிழுத்தல் from './சுட்டி'
import உருப்படி from './உருப்படி'
import மாறி from './மாறி'
import marittakavalkal from './மாறித்தகவல்கள்'

export default {
  name: 'நிலை',
  props: [ 'urupadi' ],
  components: { marittakavalkal },
  mixins: [ உருப்படி, மாறி ],
  data: function () {
    return {
      உரை: this.urupadi.பெயர்
    }
  },
  computed: {
    வட்டங்கள் () {
      return [
        { நடவடிக்கை: 'அளவைமாற்றம்-மேலே-இடது', சுட்டி: 'nwse', ங: this.urupadi.ங, ஞ: this.urupadi.ஞ },
        { நடவடிக்கை: 'அளவைமாற்றம்-மேலே-வலது', சுட்டி: 'nesw', ங: this.urupadi.ங + this.urupadi.அகலம், ஞ: this.urupadi.ஞ },
        { நடவடிக்கை: 'அளவைமாற்றம்-கீழே-இடது', சுட்டி: 'nesw', ங: this.urupadi.ங, ஞ: this.urupadi.ஞ + this.urupadi.உயரம் },
        { நடவடிக்கை: 'அளவைமாற்றம்-கீழே-வலது', சுட்டி: 'nwse', ங: this.urupadi.ங + this.urupadi.அகலம், ஞ: this.urupadi.ஞ + this.urupadi.உயரம் }
      ]
    }
  },
  methods: {
    mousedown (வகை, ஆரம்பம், நி) {
      if (this.திருத்தல்) {
        this.சுட்டியிழுத்தல் = new சுட்டியிழுத்தல்(நி, ஆரம்பம், வகை)
        document.addEventListener('mousemove', this.mousemove)
        document.addEventListener('mouseup', this.mouseup)
      }
    },
    mousemove (நி) {
      if (this.சுட்டியிழுத்தல்) {
        let மாற்றம் = {
          id: this.urupadi.id
        }
        const { ங, ஞ } = this.சுட்டியிழுத்தல்.சுட்டிகண்டுபிடி(நி)
        if (this.சுட்டியிழுத்தல்.வகை === 'நகர்த்தல்') {
          மாற்றம்.ங = ங
          மாற்றம்.ஞ = ஞ
        } else if (this.சுட்டியிழுத்தல்.வகை.startsWith('அளவைமாற்றம்')) {
          let குறிப்புகள் = this.சுட்டியிழுத்தல்.வகை.split('-').slice(1)
          if (குறிப்புகள்.includes('மேலே')) {
            மாற்றம்.ஞ = Math.min(ஞ, this.urupadi.ஞ + this.urupadi.உயரம் - 40)
            மாற்றம்.உயரம் = Math.max(40, this.urupadi.ஞ - ஞ + this.urupadi.உயரம்)
          } else {
            மாற்றம்.உயரம் = Math.max(40, ஞ - this.urupadi.ஞ)
          }
          if (குறிப்புகள்.includes('வலது')) {
            மாற்றம்.அகலம் = Math.max(50, ங - this.urupadi.ங)
          } else {
            மாற்றம்.ங = Math.min(ங, this.urupadi.ங + this.urupadi.அகலம் - 50)
            மாற்றம்.அகலம் = Math.max(50, this.urupadi.ங - ங + this.urupadi.அகலம்)
          }
        }
        this.$store.dispatch(
          'பார்வை/உருப்படி_மாற்றம்',
          மாற்றம்
        )
      }
    },
    sutti_mele (நி) {
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      if (this.திருத்தல்) {
        this.timeout = setTimeout(
          () => { this.சுட்டி_மேல் = true }, 250
        )
      }
    },
    sutti_veliye () {
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      this.timeout = setTimeout(
        () => { this.சுட்டி_மேல் = false }, 500
      )
    },
    tiruttal () {
      console.log('tiruttal')
    }
  }
}
</script>

<style>
.icon:hover {
  fill: #000000;
}
</style>
