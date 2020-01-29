<template>
  <g>
    <circle
      :cx=mari.ங
      :cy=mari.ஞ
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
      :x="mari.ங + 20"
      :y="mari.ஞ + 3"
      text-anchor="left"
      style="cursor:text;"
    >
      {{ mari.பெயர் }}
    </text>
  </g>
</template>

<script>
import சுட்டிகண்டுபிடி from './சுட்டி'

export default {
  name: 'மாறி',
  props: [ 'mari' ],
  mixins: [சுட்டிகண்டுபிடி],
  data () {
    return {
      startPosition: null,
      cursorOffset: {
        x: 0,
        y: 0
      },
      x: this.mari.ங,
      y: this.mari.ஞ
    }
  },
  methods: {
    mousedown (e) {
      console.log(சுட்டிகண்டுபிடி)
      const [x, y] = this.சுட்டிகண்டுபிடி(e)
      this.cursorOffset.x = x
      this.cursorOffset.y = y
      this.startPosition = { x: this.x, y: this.y }

      document.addEventListener('mousemove', this.mousemove)
      document.addEventListener('mouseup', this.mouseup)
    },
    mousemove (e) {
      if (this.startPosition) {
        e.preventDefault()
        const [x, y] = this.சுட்டிகண்டுபிடி(e)

        this.x =
          this.startPosition.x +
          (x - this.cursorOffset.x)
        this.y =
          this.startPosition.y +
          (y - this.cursorOffset.y)
        this.$store.dispatch(
          'பார்வை/mariMarram',
          { id: this.mari.id, ங: this.x, ஞ: this.y }
        )
      }
    },
    mouseup (e) {
      this.startPosition = null
      document.removeEventListener('mousemove', this.mousemove)
      document.removeEventListener('mouseup', this.mouseup)
    }
  }
}
</script>

<style>

</style>
