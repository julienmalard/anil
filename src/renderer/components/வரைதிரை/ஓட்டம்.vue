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
      <circle
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
      <circle
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
      <circle
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
      <circle
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
    <circle
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
import சுட்டிகண்டுபிடி from './சுட்டி'

export default {
  name: 'ஓட்டம்',
  props: [ 'ottam', 'todakkam', 'irudi' ],
  mixins: [சுட்டிகண்டுபிடி],
  data () {
    return {
      startPosition: null,
      nagarttalVagai: null,
      cursorOffset: {
        x: 0,
        y: 0
      }
    }
  },
  methods: {
    mousedown (வகை, நி) {
      this.nagarttalVagai = வகை
      const [x, y] = this.சுட்டிகண்டுபிடி(நி)
      this.cursorOffset.x = x
      this.cursorOffset.y = y
      if (வகை === 'மையம்நகர்த்தல்') {
        this.startPosition = { x: this.ottam.ங, y: this.ottam.ஞ }
      } else if (வகை === 'இறுதிநகர்த்தல்') {
        this.startPosition = {
          x: this.ottam.சதம்_இறுதி * this.irudi.அகலம் + this.irudi.ங,
          y: this.ottam.ஞ
        }
      } else if (வகை === 'தொடக்கம்நகர்த்தல்') {
        this.startPosition = {
          x: this.ottam.சதம்_தொடக்கம் * this.todakkam.அகலம் + this.todakkam.ங,
          y: this.ottam.ஞ
        }
      }

      document.addEventListener('mousemove', this.mousemove)
      document.addEventListener('mouseup', this.mouseup)
    },
    mousemove (e) {
      if (this.nagarttalVagai) {
        let [x, y] = this.சுட்டிகண்டுபிடி(e)
        x = this.startPosition.x + (x - this.cursorOffset.x)
        y = this.startPosition.y + (y - this.cursorOffset.y)

        if (this.nagarttalVagai === 'மையம்நகர்த்தல்') {
          this.$store.dispatch(
            'பார்வை/ottamMarram',
            { id: this.ottam.id, ங: x, ஞ: y }
          )
        } else if (this.nagarttalVagai === 'இறுதிநகர்த்தல்') {
          this.$store.dispatch(
            'பார்வை/ottamMarram',
            {
              id: this.ottam.id,
              சதம்_இறுதி: Math.min(Math.max(0, (x - this.irudi.ங) / this.irudi.அகலம்), 1)
            }
          )
        } else if (this.nagarttalVagai === 'தொடக்கம்நகர்த்தல்') {
          this.$store.dispatch(
            'பார்வை/ottamMarram',
            {
              id: this.ottam.id,
              சதம்_தொடக்கம்: Math.min(Math.max(0, (x - this.todakkam.ங) / this.todakkam.அகலம்), 1)
            }
          )
        }
      }
    },
    mouseup (e) {
      this.startPosition = this.nagarttalVagai = null
      document.removeEventListener('mousemove', this.mousemove)
      document.removeEventListener('mouseup', this.mouseup)
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
    },
    naduttara () {
      let x = ((this.todakkam.ங + this.todakkam.அகலம்) + this.irudi.ங) / 2
      let y = ((this.irudi.ஞ + this.irudi.உயரம் / 2 - 15) + (this.todakkam.ஞ + this.todakkam.உயரம் / 2 - 15)) / 2
      return {x, y}
    }
  }
}
</script>

<style>

</style>
