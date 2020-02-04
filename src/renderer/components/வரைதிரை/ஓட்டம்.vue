<template>
  <g>
    <g v-if="todakkam.ஞ + todakkam.உயரம் < ottam.ஞ - 5">
      <polyline
        :points="
          `${ottam.ங} ${ottam.ஞ - 5}
           ${todakkam.ங + todakkam.அகலம் * ottam.சதம்_தொடக்கம் + 5} ${ottam.ஞ - 5}
           ${todakkam.ங + todakkam.அகலம் * ottam.சதம்_தொடக்கம் + 5} ${todakkam.ஞ + todakkam.உயரம்}
          `
        "
        fill="transparent" stroke="black" stroke-width="1.5px"
      />
      <polyline
        :points="
          `${ottam.ங} ${ottam.ஞ + 5}
           ${todakkam.ங + todakkam.அகலம் * ottam.சதம்_தொடக்கம் - 5} ${ottam.ஞ + 5}
           ${todakkam.ங + todakkam.அகலம் * ottam.சதம்_தொடக்கம் - 5} ${todakkam.ஞ + todakkam.உயரம்}
          `
        "
        fill="transparent" stroke="black" stroke-width="1.5px"
      />
      <circle v-show="திருத்தல்"
        :cx="todakkam.ங + todakkam.அகலம் * ottam.சதம்_தொடக்கம்"
        :cy="(ottam.ஞ + todakkam.ஞ + todakkam.உயரம்) / 2"
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
    <g v-else-if="todakkam.ஞ < ottam.ஞ + 5">
      <line
        :x1="todakkampl().x"
        :y1="ottam.ஞ - 5"
        :x2="ottam.ங"
        :y2="ottam.ஞ - 5"
        stroke="black" stroke-width="1.5px"
      />
      <line
        :x1="todakkampl().x"
        :y1="ottam.ஞ + 5"
        :x2="ottam.ங"
        :y2="ottam.ஞ + 5"
        stroke="black" stroke-width="1.5px"
      />
    </g>
    <g v-else>
      <polyline
        :points="
          `${ottam.ங} ${ottam.ஞ - 5}
           ${todakkam.ங + todakkam.அகலம் * ottam.சதம்_தொடக்கம் - 5} ${ottam.ஞ - 5}
           ${todakkam.ங + todakkam.அகலம் * ottam.சதம்_தொடக்கம் - 5} ${todakkam.ஞ}
          `
        "
        fill="transparent" stroke="black" stroke-width="1.5px"
      />
      <polyline
        :points="
          `${ottam.ங} ${ottam.ஞ + 5}
           ${todakkam.ங + todakkam.அகலம் * ottam.சதம்_தொடக்கம் + 5} ${ottam.ஞ + 5}
           ${todakkam.ங + todakkam.அகலம் * ottam.சதம்_தொடக்கம் + 5} ${todakkam.ஞ}
          `
        "
        fill="transparent" stroke="black" stroke-width="1.5px"
      />
      <circle v-show="திருத்தல்"
        :cx="todakkam.ங + todakkam.அகலம் * ottam.சதம்_தொடக்கம்"
        :cy="(ottam.ஞ + todakkam.ஞ) / 2"
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
    <g v-if="irudi.ஞ + irudi.உயரம் < ottam.ஞ + 5">
      <polyline
        :points="
          `${ottam.ங} ${ottam.ஞ - 5}
           ${irudi.ங + irudi.அகலம் * ottam.சதம்_இறுதி - 5} ${ottam.ஞ - 5}
           ${irudi.ங + irudi.அகலம் * ottam.சதம்_இறுதி - 5} ${irudi.ஞ + irudi.உயரம் + 10}
          `
        "
        fill="transparent" stroke="black" stroke-width="1.5px"
      />
      <polyline
        :points="
          `${ottam.ங} ${ottam.ஞ + 5}
           ${irudi.ங + irudi.அகலம் * ottam.சதம்_இறுதி + 5} ${ottam.ஞ + 5}
           ${irudi.ங + irudi.அகலம் * ottam.சதம்_இறுதி + 5} ${irudi.ஞ + irudi.உயரம் + 10}
          `
        "
        fill="transparent" stroke="black" stroke-width="1.5px"
      />
      <polyline
        :points="
          `${irudi.ங + irudi.அகலம் * ottam.சதம்_இறுதி - 12} ${irudi.ஞ + irudi.உயரம் + 12}
           ${irudi.ங + irudi.அகலம் * ottam.சதம்_இறுதி} ${irudi.ஞ + irudi.உயரம் + 2}
           ${irudi.ங + irudi.அகலம் * ottam.சதம்_இறுதி + 12} ${irudi.ஞ + irudi.உயரம் + 12}`
        "
        stroke="black" stroke-width="1.5px"
        stroke-linecap="butt" fill="none" stroke-linejoin="miter"
      />
      <circle v-show="திருத்தல்"
        :cx="irudi.ங + irudi.அகலம் * ottam.சதம்_இறுதி"
        :cy="(ottam.ஞ + irudi.ஞ + irudi.உயரம்) / 2"
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
    <g v-else-if="irudi.ஞ < ottam.ஞ + 5">
      <line
        :x1="irudi.ங - 10"
        :y1="ottam.ஞ - 5"
        :x2="ottam.ங"
        :y2="ottam.ஞ - 5"
        stroke="black" stroke-width="1.5px"
      />
      <line
        :x1="irudi.ங - 10"
        :y1="ottam.ஞ + 5"
        :x2="ottam.ங"
        :y2="ottam.ஞ + 5"
        stroke="black" stroke-width="1.5px"
      />
      <polyline
        :points="
          `${irudipl().x - 12} ${ottam.ஞ - 12}
           ${irudipl().x - 2} ${ottam.ஞ}
           ${irudipl().x - 12} ${ottam.ஞ + 12}`
        "
        stroke="black" stroke-width="1.5px"
        stroke-linecap="butt" fill="none" stroke-linejoin="miter"
      />
    </g>
    <g v-else>
      <polyline
        :points="
          `${ottam.ங} ${ottam.ஞ - 5}
           ${irudi.ங + irudi.அகலம் * ottam.சதம்_இறுதி + 5} ${ottam.ஞ - 5}
           ${irudi.ங + irudi.அகலம் * ottam.சதம்_இறுதி + 5} ${irudi.ஞ - 10}
          `
        "
        fill="transparent" stroke="black" stroke-width="1.5px"
      />
      <polyline
        :points="
          `${ottam.ங} ${ottam.ஞ + 5}
           ${irudi.ங + irudi.அகலம் * ottam.சதம்_இறுதி - 5} ${ottam.ஞ + 5}
           ${irudi.ங + irudi.அகலம் * ottam.சதம்_இறுதி - 5} ${irudi.ஞ - 10}
          `
        "
        fill="transparent" stroke="black" stroke-width="1.5px"
      />
      <polyline
        :points="
          `${irudi.ங + irudi.அகலம் * ottam.சதம்_இறுதி - 12} ${irudi.ஞ - 12}
           ${irudi.ங + irudi.அகலம் * ottam.சதம்_இறுதி} ${irudi.ஞ - 2}
           ${irudi.ங + irudi.அகலம் * ottam.சதம்_இறுதி + 12} ${irudi.ஞ - 12}`
        "
        stroke="black" stroke-width="1.5px"
        stroke-linecap="butt" fill="none" stroke-linejoin="miter"
      />
      <circle v-show="திருத்தல்"
        :cx="irudi.ங + irudi.அகலம் * ottam.சதம்_இறுதி"
        :cy="(ottam.ஞ + irudi.ஞ) / 2"
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
        `M ${ottam.ங} ${ottam.ஞ - 15}
         C ${ottam.ங + 10} ${ottam.ஞ - 15},
           ${ottam.ங + 10} ${ottam.ஞ - 15},
           ${ottam.ங} ${ottam.ஞ},
         S ${ottam.ங - 10} ${ottam.ஞ + 15},
           ${ottam.ங} ${ottam.ஞ + 15},
         S ${ottam.ங + 10} ${ottam.ஞ + 15},
           ${ottam.ங} ${ottam.ஞ},
         S ${ottam.ங - 10} ${ottam.ஞ - 15},
           ${ottam.ங} ${ottam.ஞ - 15}`
      "
      stroke="black" stroke-width="1.5px" fill="transparent"
    />
    <text
      :x="ottam.ங"
      :y="ottam.ஞ - 25"
      text-anchor="middle"
      style="cursor:text;"
    >
      {{ ottam.பெயர் }}
    </text>
    <circle v-show="திருத்தல்"
      :cx="ottam.ங"
      :cy="ottam.ஞ"
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

export default {
  name: 'ஓட்டம்',
  props: [ 'ottam', 'todakkam', 'irudi' ],
  mixins: [ உருப்படி ],
  methods: {
    mousedown (வகை, நி) {
      let ஆரம்பம்
      if (வகை === 'மையம்நகர்த்தல்') {
        ஆரம்பம் = { ங: this.ottam.ங, ஞ: this.ottam.ஞ }
      } else if (வகை === 'இறுதிநகர்த்தல்') {
        ஆரம்பம் = {
          ங: this.ottam.சதம்_இறுதி * this.irudi.அகலம் + this.irudi.ங,
          ஞ: this.ottam.ஞ
        }
      } else if (வகை === 'தொடக்கம்நகர்த்தல்') {
        ஆரம்பம் = {
          ங: this.ottam.சதம்_தொடக்கம் * this.todakkam.அகலம் + this.todakkam.ங,
          ஞ: this.ottam.ஞ
        }
      }

      this.சுட்டியிழுத்தல் = new சுட்டியிழுத்தல்(நி, ஆரம்பம், வகை)
      document.addEventListener('mousemove', this.mousemove)
      document.addEventListener('mouseup', this.mouseup)
    },
    mousemove (நி) {
      if (this.சுட்டியிழுத்தல்) {
        const [ங, ஞ] = this.சுட்டியிழுத்தல்.சுட்டிகண்டுபிடி(நி)

        if (this.சுட்டியிழுத்தல்.வகை === 'மையம்நகர்த்தல்') {
          this.$store.dispatch(
            'பார்வை/உருப்படி_மாற்றம்',
            { id: this.ottam.id, ங: ங, ஞ: ஞ }
          )
        } else if (this.சுட்டியிழுத்தல்.வகை === 'இறுதிநகர்த்தல்') {
          this.$store.dispatch(
            'பார்வை/உருப்படி_மாற்றம்',
            {
              id: this.ottam.id,
              சதம்_இறுதி: Math.min(Math.max(0, (ங - this.irudi.ங) / this.irudi.அகலம்), 1)
            }
          )
        } else if (this.சுட்டியிழுத்தல்.வகை === 'தொடக்கம்நகர்த்தல்') {
          this.$store.dispatch(
            'பார்வை/உருப்படி_மாற்றம்',
            {
              id: this.ottam.id,
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
