<template>
  <g>
    <g v-if="todakkam.ஞ + todakkam.உயரம் < urupadi.ஞ - 5">
      <polyline
        :points="
          `${urupadi.ங} ${urupadi.ஞ - 5}
           ${todakkam.ங + todakkam.அகலம் * urupadi.சதம்_தொடக்கம் + 5} ${urupadi.ஞ - 5}
           ${todakkam.ங + todakkam.அகலம் * urupadi.சதம்_தொடக்கம் + 5} ${todakkam.ஞ + todakkam.உயரம்}
          `
        "
        fill="transparent" stroke="black" stroke-width="1.5px"
      />
      <polyline
        :points="
          `${urupadi.ங} ${urupadi.ஞ + 5}
           ${todakkam.ங + todakkam.அகலம் * urupadi.சதம்_தொடக்கம் - 5} ${urupadi.ஞ + 5}
           ${todakkam.ங + todakkam.அகலம் * urupadi.சதம்_தொடக்கம் - 5} ${todakkam.ஞ + todakkam.உயரம்}
          `
        "
        fill="transparent" stroke="black" stroke-width="1.5px"
      />
      <circle v-show="திருத்தல்"
        :cx="todakkam.ங + todakkam.அகலம் * urupadi.சதம்_தொடக்கம்"
        :cy="(urupadi.ஞ + todakkam.ஞ + todakkam.உயரம்) / 2"
        r=3
        style="fill:transparent;stroke-width:1;stroke:#99ccff;cursor:-webkit-grab;"
        @mousedown="mousedown('தொடக்கம்நகர்த்தல்', $event)"
        @touchstart="mousedown('தொடக்கம்நகர்த்தல்', $event)"
        @mousemove.prevent="mousemove"
        @touchmove.prevent="mousemove"
        @mouseup="mouseup"
        @touchend="mouseup"
      />
    </g>
    <g v-else-if="todakkam.ஞ < urupadi.ஞ + 5">
      <line
        :x1="todakkampl().x"
        :y1="urupadi.ஞ - 5"
        :x2="urupadi.ங"
        :y2="urupadi.ஞ - 5"
        stroke="black" stroke-width="1.5px"
      />
      <line
        :x1="todakkampl().x"
        :y1="urupadi.ஞ + 5"
        :x2="urupadi.ங"
        :y2="urupadi.ஞ + 5"
        stroke="black" stroke-width="1.5px"
      />
    </g>
    <g v-else>
      <polyline
        :points="
          `${urupadi.ங} ${urupadi.ஞ - 5}
           ${todakkam.ங + todakkam.அகலம் * urupadi.சதம்_தொடக்கம் - 5} ${urupadi.ஞ - 5}
           ${todakkam.ங + todakkam.அகலம் * urupadi.சதம்_தொடக்கம் - 5} ${todakkam.ஞ}
          `
        "
        fill="transparent" stroke="black" stroke-width="1.5px"
      />
      <polyline
        :points="
          `${urupadi.ங} ${urupadi.ஞ + 5}
           ${todakkam.ங + todakkam.அகலம் * urupadi.சதம்_தொடக்கம் + 5} ${urupadi.ஞ + 5}
           ${todakkam.ங + todakkam.அகலம் * urupadi.சதம்_தொடக்கம் + 5} ${todakkam.ஞ}
          `
        "
        fill="transparent" stroke="black" stroke-width="1.5px"
      />
      <circle v-show="திருத்தல்"
        :cx="todakkam.ங + todakkam.அகலம் * urupadi.சதம்_தொடக்கம்"
        :cy="(urupadi.ஞ + todakkam.ஞ) / 2"
        r=3
        style="fill:transparent;stroke-width:1;stroke:#99ccff;cursor:-webkit-grab;"
        @mousedown="mousedown('தொடக்கம்நகர்த்தல்', $event)"
        @touchstart="mousedown('தொடக்கம்நகர்த்தல்', $event)"
        @mousemove.prevent="mousemove"
        @touchmove.prevent="mousemove"
        @mouseup="mouseup"
        @touchend="mouseup"
      />
    </g>
    <g v-if="irudi.ஞ + irudi.உயரம் < urupadi.ஞ + 5">
      <polyline
        :points="
          `${urupadi.ங} ${urupadi.ஞ - 5}
           ${irudi.ங + irudi.அகலம் * urupadi.சதம்_இறுதி - 5} ${urupadi.ஞ - 5}
           ${irudi.ங + irudi.அகலம் * urupadi.சதம்_இறுதி - 5} ${irudi.ஞ + irudi.உயரம் + 10}
          `
        "
        fill="transparent" stroke="black" stroke-width="1.5px"
      />
      <polyline
        :points="
          `${urupadi.ங} ${urupadi.ஞ + 5}
           ${irudi.ங + irudi.அகலம் * urupadi.சதம்_இறுதி + 5} ${urupadi.ஞ + 5}
           ${irudi.ங + irudi.அகலம் * urupadi.சதம்_இறுதி + 5} ${irudi.ஞ + irudi.உயரம் + 10}
          `
        "
        fill="transparent" stroke="black" stroke-width="1.5px"
      />
      <polyline
        :points="
          `${irudi.ங + irudi.அகலம் * urupadi.சதம்_இறுதி - 12} ${irudi.ஞ + irudi.உயரம் + 12}
           ${irudi.ங + irudi.அகலம் * urupadi.சதம்_இறுதி} ${irudi.ஞ + irudi.உயரம் + 2}
           ${irudi.ங + irudi.அகலம் * urupadi.சதம்_இறுதி + 12} ${irudi.ஞ + irudi.உயரம் + 12}`
        "
        stroke="black" stroke-width="1.5px"
        stroke-linecap="butt" fill="none" stroke-linejoin="miter"
      />
      <circle v-show="திருத்தல்"
        :cx="irudi.ங + irudi.அகலம் * urupadi.சதம்_இறுதி"
        :cy="(urupadi.ஞ + irudi.ஞ + irudi.உயரம்) / 2"
        r=3
        style="fill:transparent;stroke-width:1;stroke:#99ccff;cursor:-webkit-grab;"
        @mousedown="mousedown('இறுதிநகர்த்தல்', $event)"
        @touchstart="mousedown('இறுதிநகர்த்தல்', $event)"
        @mousemove.prevent="mousemove"
        @touchmove.prevent="mousemove"
        @mouseup="mouseup"
        @touchend="mouseup"
      />
    </g>
    <g v-else-if="irudi.ஞ < urupadi.ஞ + 5">
      <line
        :x1="irudi.ங - 10"
        :y1="urupadi.ஞ - 5"
        :x2="urupadi.ங"
        :y2="urupadi.ஞ - 5"
        stroke="black" stroke-width="1.5px"
      />
      <line
        :x1="irudi.ங - 10"
        :y1="urupadi.ஞ + 5"
        :x2="urupadi.ங"
        :y2="urupadi.ஞ + 5"
        stroke="black" stroke-width="1.5px"
      />
      <polyline
        :points="
          `${irudipl().x - 12} ${urupadi.ஞ - 12}
           ${irudipl().x - 2} ${urupadi.ஞ}
           ${irudipl().x - 12} ${urupadi.ஞ + 12}`
        "
        stroke="black" stroke-width="1.5px"
        stroke-linecap="butt" fill="none" stroke-linejoin="miter"
      />
    </g>
    <g v-else>
      <polyline
        :points="
          `${urupadi.ங} ${urupadi.ஞ - 5}
           ${irudi.ங + irudi.அகலம் * urupadi.சதம்_இறுதி + 5} ${urupadi.ஞ - 5}
           ${irudi.ங + irudi.அகலம் * urupadi.சதம்_இறுதி + 5} ${irudi.ஞ - 10}
          `
        "
        fill="transparent" stroke="black" stroke-width="1.5px"
      />
      <polyline
        :points="
          `${urupadi.ங} ${urupadi.ஞ + 5}
           ${irudi.ங + irudi.அகலம் * urupadi.சதம்_இறுதி - 5} ${urupadi.ஞ + 5}
           ${irudi.ங + irudi.அகலம் * urupadi.சதம்_இறுதி - 5} ${irudi.ஞ - 10}
          `
        "
        fill="transparent" stroke="black" stroke-width="1.5px"
      />
      <polyline
        :points="
          `${irudi.ங + irudi.அகலம் * urupadi.சதம்_இறுதி - 12} ${irudi.ஞ - 12}
           ${irudi.ங + irudi.அகலம் * urupadi.சதம்_இறுதி} ${irudi.ஞ - 2}
           ${irudi.ங + irudi.அகலம் * urupadi.சதம்_இறுதி + 12} ${irudi.ஞ - 12}`
        "
        stroke="black" stroke-width="1.5px"
        stroke-linecap="butt" fill="none" stroke-linejoin="miter"
      />
      <circle v-show="திருத்தல்"
        :cx="irudi.ங + irudi.அகலம் * urupadi.சதம்_இறுதி"
        :cy="(urupadi.ஞ + irudi.ஞ) / 2"
        r=3
        style="fill:transparent;stroke-width:1;stroke:#99ccff;cursor:-webkit-grab;"
        @mousedown="mousedown('இறுதிநகர்த்தல்', $event)"
        @touchstart="mousedown('இறுதிநகர்த்தல்', $event)"
        @mousemove.prevent="mousemove"
        @touchmove.prevent="mousemove"
        @mouseup="mouseup"
        @touchend="mouseup"
      />
    </g>
    <path
      :d="
        `M ${urupadi.ங} ${urupadi.ஞ - 15}
         C ${urupadi.ங + 10} ${urupadi.ஞ - 15},
           ${urupadi.ங + 10} ${urupadi.ஞ - 15},
           ${urupadi.ங} ${urupadi.ஞ},
         S ${urupadi.ங - 10} ${urupadi.ஞ + 15},
           ${urupadi.ங} ${urupadi.ஞ + 15},
         S ${urupadi.ங + 10} ${urupadi.ஞ + 15},
           ${urupadi.ங} ${urupadi.ஞ},
         S ${urupadi.ங - 10} ${urupadi.ஞ - 15},
           ${urupadi.ங} ${urupadi.ஞ - 15}`
      "
      stroke="black" stroke-width="1.5px" fill="transparent"
    />
    <text
      v-if="!உரை_திருத்தல்"
      :x="urupadi.ங"
      :y="urupadi.ஞ - 25"
      @click="uraitiruttal"
      text-anchor="middle"
      :style="`cursor:${ திருத்தல் ? 'text': 'default' };`"
    >
      {{ urupadi.பெயர் }}
    </text>
    <foreignObject
      v-else
      :x="urupadi.ங - 30"
      :y="urupadi.ஞ - 42"
    >
      <div xmlns="http://www.w3.org/1999/xhtml">
        <input
          v-model="உரை"
          v-focus
          @blur="uraisemi"
          style="width: 60px; text-align: center;"
        ></input>
      </div>
    </foreignObject>
    <circle v-show="திருத்தல்"
      :cx="urupadi.ங"
      :cy="urupadi.ஞ"
      r=3
      style="fill:transparent;stroke-width:1;stroke:#99ccff;cursor:-webkit-grab;"
      @mousedown="mousedown('மையம்நகர்த்தல்', $event)"
      @touchstart="mousedown('மையம்நகர்த்தல்', $event)"
      @mousemove.prevent="mousemove"
      @touchmove.prevent="mousemove"
      @mouseup="mouseup"
      @touchend="mouseup"
    />
  </g>
</template>

<script>
import சுட்டியிழுத்தல் from './சுட்டி'
import உருப்படி from './உருப்படி'
import மாறி from './மாறி'

export default {
  name: 'ஓட்டம்',
  props: [ 'urupadi', 'todakkam', 'irudi' ],
  mixins: [ உருப்படி, மாறி ],
  methods: {
    mousedown (வகை, நி) {
      let ஆரம்பம்
      if (வகை === 'மையம்நகர்த்தல்') {
        ஆரம்பம் = { ங: this.urupadi.ங, ஞ: this.urupadi.ஞ }
      } else if (வகை === 'இறுதிநகர்த்தல்') {
        ஆரம்பம் = {
          ங: this.urupadi.சதம்_இறுதி * this.irudi.அகலம் + this.irudi.ங,
          ஞ: this.urupadi.ஞ
        }
      } else if (வகை === 'தொடக்கம்நகர்த்தல்') {
        ஆரம்பம் = {
          ங: this.urupadi.சதம்_தொடக்கம் * this.todakkam.அகலம் + this.todakkam.ங,
          ஞ: this.urupadi.ஞ
        }
      }

      this.சுட்டியிழுத்தல் = new சுட்டியிழுத்தல்(நி, ஆரம்பம், வகை)
      document.addEventListener('mousemove', this.mousemove)
      document.addEventListener('mouseup', this.mouseup)
    },
    mousemove (நி) {
      if (this.சுட்டியிழுத்தல்) {
        const { ங, ஞ } = this.சுட்டியிழுத்தல்.சுட்டிகண்டுபிடி(நி)

        if (this.சுட்டியிழுத்தல்.வகை === 'மையம்நகர்த்தல்') {
          this.$store.dispatch(
            'பார்வை/உருப்படி_மாற்றம்',
            { id: this.urupadi.id, ங: ங, ஞ: ஞ }
          )
        } else if (this.சுட்டியிழுத்தல்.வகை === 'இறுதிநகர்த்தல்') {
          this.$store.dispatch(
            'பார்வை/உருப்படி_மாற்றம்',
            {
              id: this.urupadi.id,
              சதம்_இறுதி: Math.min(Math.max(0, (ங - this.irudi.ங) / this.irudi.அகலம்), 1)
            }
          )
        } else if (this.சுட்டியிழுத்தல்.வகை === 'தொடக்கம்நகர்த்தல்') {
          this.$store.dispatch(
            'பார்வை/உருப்படி_மாற்றம்',
            {
              id: this.urupadi.id,
              சதம்_தொடக்கம்: Math.min(Math.max(0, (ங - this.todakkam.ங) / this.todakkam.அகலம்), 1)
            }
          )
        }
      }
    },
    todakkampl () {
      let x = this.todakkam.ங + this.todakkam.அகலம்
      let y = this.todakkam.ஞ + this.todakkam.உயரம் / 2
      return {x, y}
    },
    irudipl () {
      let x = this.irudi.ங
      let y = this.irudi.ஞ + this.irudi.உயரம் / 2
      return {x, y}
    }
  }
}
</script>

<style>

</style>
