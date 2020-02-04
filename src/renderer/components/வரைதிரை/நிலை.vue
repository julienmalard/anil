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
    <g v-show="திருத்தல்">
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
import சுட்டியிழுத்தல் from './சுட்டி'
import உருப்படி from './உருப்படி'

export default {
  name: 'நிலை',
  props: [ 'nilai' ],
  mixins: [ உருப்படி ],
  methods: {
    mousedown (வகை, நி) {
      if (this.திருத்தல்) {
        this.சுட்டியிழுத்தல் = new சுட்டியிழுத்தல்(நி, { ங: this.nilai.ங, ஞ: this.nilai.ஞ }, வகை)
        document.addEventListener('mousemove', this.mousemove)
        document.addEventListener('mouseup', this.mouseup)
      }
    },
    mousemove (நி) {
      if (this.சுட்டியிழுத்தல்) {
        const மூல் = this.சுட்டியிழுத்தல்.சுட்டிகண்டுபிடி_மூல்(நி)

        if (this.சுட்டியிழுத்தல்.வகை === 'நகர்த்தல்') {
          const [ங, ஞ] = this.சுட்டியிழுத்தல்.சுட்டிகண்டுபிடி(நி)

          this.$store.dispatch(
            'பார்வை/உருப்படி_மாற்றம்',
            { id: this.nilai.id, ங: ங, ஞ: ஞ }
          )
        } else if (this.சுட்டியிழுத்தல்.வகை === 'அளவைமாற்றமிடது') {
          const [, ஞ] = this.சுட்டியிழுத்தல்.சுட்டிகண்டுபிடி(நி)
          this.$store.dispatch(
            'பார்வை/உருப்படி_மாற்றம்',
            {
              id: this.nilai.id,
              ங: Math.min(மூல்.ங, this.nilai.ங + this.nilai.அகலம் - 50),
              ஞ: ஞ,
              அகலம்: Math.max(50, this.nilai.ங - மூல்.ங + this.nilai.அகலம்)
            }
          )
        } else if (this.சுட்டியிழுத்தல்.வகை === 'அளவைமாற்றம்வலது') {
          this.$store.dispatch(
            'பார்வை/உருப்படி_மாற்றம்',
            { id: this.nilai.id, அகலம்: Math.max(50, மூல்.ங - this.nilai.ங) }
          )
        }
      }
    }
  }
}
</script>

<style>

</style>
