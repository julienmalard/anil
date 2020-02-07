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
      @mousedown="mousedown('நகர்த்தல்', { ங: nilai.ங, ஞ: nilai.ஞ }, $event)"
      @touchstart="mousedown('நகர்த்தல்', { ங: nilai.ங, ஞ: nilai.ஞ }, $event)"
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
    <g v-show="திருத்தல்">
      <circle
        :cx="nilai.ங"
        :cy="nilai.ஞ"
        r=3
        style="fill:transparent;stroke-width:1;stroke:#99ccff;cursor:nwse-resize;"
        @mousedown="mousedown(
          'அளவைமாற்றம்-மேலே-இடது', { ங: nilai.ங, ஞ: nilai.ஞ }, $event)
          "
        @touchstart="mousedown(
          'அளவைமாற்றம்-மேலே-இடது', { ங: nilai.ங, ஞ: nilai.ஞ }, $event)
          "
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
        @mousedown="mousedown(
          'அளவைமாற்றம்-மேலே-வலது', { ங: nilai.ங + nilai.அகலம், ஞ: nilai.ஞ },
          $event)"
        @touchstart="mousedown(
          'அளவைமாற்றம்-மேலே-வலது', { ங: nilai.ங + nilai.அகலம், ஞ: nilai.ஞ },
          $event)"
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
        @mousedown="mousedown(
          'அளவைமாற்றம்-கீழே-இடது', { ங: nilai.ங, ஞ: nilai.ஞ + nilai.உயரம் },
          $event)"
        @touchstart="mousedown(
          'அளவைமாற்றம்-கீழே-இடத', { ங: nilai.ங, ஞ: nilai.ஞ + nilai.உயரம் },
          $event)"
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
        @mousedown="mousedown(
          'அளவைமாற்றம்-கீழே-வலது', { ங: nilai.ங + nilai.அகலம், ஞ: nilai.ஞ + nilai.உயரம் },
          $event)"
        @touchstart="mousedown(
          'அளவைமாற்றம்-கீழே-வலது', { ங: nilai.ங + nilai.அகலம், ஞ: nilai.ஞ + nilai.உயரம் },
          $event)"
        @mousemove.prevent="mousemove"
        @touchmove.prevent="mousemove"
        @mouseup="mouseup"
        @touchend="mouseup"
      />
    </g>
  </g>
</template>

<script>
import சுட்டியிழுத்தல் from './சுட்டி'
import உருப்படி from './உருப்படி'

export default {
  name: 'நிலை',
  props: [ 'nilai' ],
  mixins: [ உருப்படி ],
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
          id: this.nilai.id
        }
        const [ங, ஞ] = this.சுட்டியிழுத்தல்.சுட்டிகண்டுபிடி(நி)
        if (this.சுட்டியிழுத்தல்.வகை === 'நகர்த்தல்') {
          மாற்றம்.ங = ங
          மாற்றம்.ஞ = ஞ
        } else if (this.சுட்டியிழுத்தல்.வகை.startsWith('அளவைமாற்றம்')) {
          let குறிப்புகள் = this.சுட்டியிழுத்தல்.வகை.split('-').slice(1)
          if (குறிப்புகள்.includes('மேலே')) {
            மாற்றம்.ஞ = Math.min(ஞ, this.nilai.ஞ + this.nilai.உயரம் - 40)
            மாற்றம்.உயரம் = Math.max(40, this.nilai.ஞ - ஞ + this.nilai.உயரம்)
          } else {
            மாற்றம்.உயரம் = Math.max(40, ஞ - this.nilai.ஞ)
          }
          if (குறிப்புகள்.includes('வலது')) {
            மாற்றம்.அகலம் = Math.max(50, ங - this.nilai.ங)
          } else {
            மாற்றம்.ங = Math.min(ங, this.nilai.ங + this.nilai.அகலம் - 50)
            மாற்றம்.அகலம் = Math.max(50, this.nilai.ங - ங + this.nilai.அகலம்)
          }
        }
        this.$store.dispatch(
          'பார்வை/உருப்படி_மாற்றம்',
          மாற்றம்
        )
      }
    }
  }
}
</script>

<style>

</style>
