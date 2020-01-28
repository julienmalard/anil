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
      @touchstart="mousedown"
      @mousedown="mousedown"
      @mousemove="mousemove"
      @touchmove="mousemove"
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
        style="fill:transparent;stroke-width:1;stroke:#99ccff;cursor:-webkit-grab;"
      />
      <circle
        :cx="nilai.ங + nilai.அகலம்"
        :cy="nilai.ஞ"
        r=3
        style="fill:transparent;stroke-width:1;stroke:#99ccff;cursor:-webkit-grab;"
      />
      <circle
        :cx="nilai.ங"
        :cy="nilai.ஞ + nilai.உயரம்"
        r=3
        style="fill:transparent;stroke-width:1;stroke:#99ccff;cursor:-webkit-grab;"
      />
      <circle
        :cx="nilai.ங + nilai.அகலம்"
        :cy="nilai.ஞ + nilai.உயரம்"
        r=3
        style="fill:transparent;stroke-width:1;stroke:#99ccff;cursor:-webkit-grab;"
      />
    </g>
  </g>
</template>

<script>
export default {
  name: 'நிலை',
  props: [ 'nilai' ],
  data () {
    return {
      startPosition: null,
      cursorOffset: {
        x: 0,
        y: 0
      },
      x: this.nilai.ங,
      y: this.nilai.ஞ
    }
  },
  methods: {
    getLocation (e) {
      /* マウスカーソルの位置またはタッチ位置を返す */
      let x = 0
      let y = 0
      if (e.touches) {
        /* タッチの場合 */
        x = e.touches[0].pageX
        y = e.touches[0].pageY
      } else {
        /* マウスの場合 */
        x = e.pageX
        y = e.pageY
      }
      return [x, y]
    },
    mousedown (e) {
      console.log('mousedown')
      const [x, y] = this.getLocation(e)
      this.cursorOffset.x = x
      this.cursorOffset.y = y
      this.startPosition = { x: this.x, y: this.y }

      document.addEventListener('mousemove', this.mousemove)
      document.addEventListener('mouseup', this.mouseup)
    },
    mousemove (e) {
      if (this.startPosition) {
        e.preventDefault()
        const [x, y] = this.getLocation(e)

        this.x =
          this.startPosition.x +
          (x - this.cursorOffset.x)
        this.y =
          this.startPosition.y +
          (y - this.cursorOffset.y)
        this.$store.dispatch(
          'பார்வை/nilaiMarram',
          { id: this.nilai.id, ங: this.x, ஞ: this.y }
        )
      }
    },
    mouseup (e) {
      console.log('mouseup')
      this.startPosition = null
      document.removeEventListener('mousemove', this.mousemove)
      document.removeEventListener('mouseup', this.mouseup)
    }
  }
}
</script>

<style>

</style>
