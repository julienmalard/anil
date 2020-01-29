<template>
  <g>
    <rect
      :x=nilai.ங
      :y=nilai.ஞ
      :width=nilai.அகலம்
      :height=nilai.உயரம்
      rx=2
      ry=2
      style="fill:#ffffff;stroke-width:1;stroke:#000000;cursor:-webkit-grab;"
      @mousedown="mousedown('நகர்த்தல்', $event)"
      @touchstart="mousedown('நகர்த்தல்', $event)"
      @mousemove.prevent="mousemove"
      @touchmove.prevent="mousemove"
      @mouseup="mouseup"
      @touchend="mouseup"
    />
    <text
      :x="nilai.ங + nilai.அகலம்/2"
      :y="nilai.ஞ + nilai.உயரம்/2+5"
      text-anchor="middle"
    >
      {{ nilai.பெயர் }}
    </text>
    <g>
      <circle
        :cx="nilai.ங"
        :cy="nilai.ஞ"
        r=3
        style="fill:transparent;stroke-width:1;stroke:#99ccff;cursor:nwse-resize;"
        @mousedown="mousedown('அளவைமாற்றமிடது', $event)"
        @touchstart="mousedown('அளவைமாற்றமிடது', $event)"
        @mousemove.prevent="mousemove"
        @touchmove.prevent="mousemove"
        @mouseup="mouseup"
        @touchend="mouseup"
      />
      <circle
        :cx="nilai.ங + nilai.அகலம்"
        :cy="nilai.ஞ"
        r=3
        style="fill:transparent;stroke-width:1;stroke:#99ccff;cursor:nesw-resize;"
        @mousedown="mousedown('அளவைமாற்றம்வலது', $event)"
        @touchstart="mousedown('அளவைமாற்றம்வலது', $event)"
        @mousemove.prevent="mousemove"
        @touchmove.prevent="mousemove"
        @mouseup="mouseup"
        @touchend="mouseup"
      />
      <circle
        :cx="nilai.ங"
        :cy="nilai.ஞ + nilai.உயரம்"
        r=3
        style="fill:transparent;stroke-width:1;stroke:#99ccff;cursor:nesw-resize;"
        @mousedown="mousedown('அளவைமாற்றமிடது', $event)"
        @touchstart="mousedown('அளவைமாற்றமிடது', $event)"
        @mousemove.prevent="mousemove"
        @touchmove.prevent="mousemove"
        @mouseup="mouseup"
        @touchend="mouseup"
      />
      <circle
        :cx="nilai.ங + nilai.அகலம்"
        :cy="nilai.ஞ + nilai.உயரம்"
        r=3
        style="fill:transparent;stroke-width:1;stroke:#99ccff;cursor:nwse-resize;"
        @mousedown="mousedown('அளவைமாற்றம்வலது', $event)"
        @touchstart="mousedown('அளவைமாற்றம்வலது', $event)"
        @mousemove.prevent="mousemove"
        @touchmove.prevent="mousemove"
        @mouseup="mouseup"
        @touchend="mouseup"
      />
    </g>
  </g>
</template>

<script>
import சுட்டிகண்டுபிடி from './சுட்டி'

export default {
  name: 'நிலை',
  props: [ 'nilai' ],
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
      this.startPosition = { x: this.nilai.ங, y: this.nilai.ஞ }

      document.addEventListener('mousemove', this.mousemove)
      document.addEventListener('mouseup', this.mouseup)
    },
    mousemove (e) {
      if (this.nagarttalVagai) {
        let [x, y] = this.சுட்டிகண்டுபிடி(e)

        if (this.nagarttalVagai === 'நகர்த்தல்') {
          x = this.startPosition.x + (x - this.cursorOffset.x)
          y = this.startPosition.y + (y - this.cursorOffset.y)
          this.$store.dispatch(
            'பார்வை/nilaiMarram',
            { id: this.nilai.id, ங: x, ஞ: y }
          )
        } else if (this.nagarttalVagai === 'அளவைமாற்றமிடது') {
          x = this.startPosition.x + (x - this.cursorOffset.x)
          y = this.startPosition.y + (y - this.cursorOffset.y)
          this.$store.dispatch(
            'பார்வை/nilaiMarram',
            {
              id: this.nilai.id,
              ங: Math.min(x, this.nilai.ங + this.nilai.அகலம் - 50),
              ஞ: y,
              அகலம்: Math.max(50, this.nilai.ங - x + this.nilai.அகலம்)
            }
          )
        } else if (this.nagarttalVagai === 'அளவைமாற்றம்வலது') {
          this.$store.dispatch(
            'பார்வை/nilaiMarram',
            { id: this.nilai.id, அகலம்: Math.max(50, x - this.nilai.ங) }
          )
        }
      }
    },
    mouseup (e) {
      this.startPosition = this.nagarttalVagai = null
      document.removeEventListener('mousemove', this.mousemove)
      document.removeEventListener('mouseup', this.mouseup)
    }
  }
}
</script>

<style>

</style>
