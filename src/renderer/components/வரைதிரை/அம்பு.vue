<template>
  <g>
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3"
      orient="auto" markerUnits="strokeWidth"
      >
        <path d="M0,0 L0,6 L9,3 z" fill="#3366ff" />
      </marker>
    </defs>
    <g>
      <line
        :x1="ambu.ங"
        :y1="ambu.ஞ"
        :x2="calcSource().x"
        :y2="calcSource().y"
        stroke="#99ccff"
      />
      <line
        :x1="ambu.ங"
        :y1="ambu.ஞ"
        :x2="calcDestination().x"
        :y2="calcDestination().y"
        stroke="#99ccff"
      />
      <circle
        :cx="ambu.ங"
        :cy="ambu.ஞ"
        r=3
        style="fill:#ffffff;stroke-width:1;stroke:#99ccff;cursor:-webkit-grab;"
        @touchstart="mousedown"
        @mousedown="mousedown"
        @mousemove="mousemove"
        @touchmove="mousemove"
        @mouseup="mouseup"
        @touchend="mouseup"
      />
    </g>
    <path
      :d="
        `M${calcSource().x} ${calcSource().y}
        Q ${ambu.ங} ${ambu.ஞ}
        ${calcDestination().x} ${calcDestination().y}`
      "
      style="fill:transparent;stroke-width:2;stroke:#3366ff"
      marker-end="url(#arrow)"
    />
  </g>
</template>

<script>
export default {
  name: 'அம்பு',
  props: [ 'ambu', 'todakkam', 'irudi' ],
  data () {
    return {
      startPosition: null,
      cursorOffset: {
        x: 0,
        y: 0
      },
      x: this.ambu.ங,
      y: this.ambu.ஞ
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
          'பார்வை/ambuMarram',
          { id: this.ambu.id, ங: this.x, ஞ: this.y }
        )
      }
    },
    mouseup (e) {
      console.log('mouseup')
      this.startPosition = null
      document.removeEventListener('mousemove', this.mousemove)
      document.removeEventListener('mouseup', this.mouseup)
    },
    calcSource () {
      let x = this.ambu.ங
      let y = this.ambu.ஞ
      var tx, ty
      let [px, py, pw, pz] = this.$store.getters['பார்வை/petti_pera'](this.todakkam.id)

      if (x < px) {
        tx = px
      } else if (x < pw) {
        tx = x
      } else {
        tx = pw
      }
      if (y < py) {
        ty = py
      } else if (y < pz) {
        if (px < x && x < pw) {
          ty = y < pz / 2 ? pw : pz
        } else {
          ty = y
        }
      } else {
        ty = pz
      }
      return { x: tx, y: ty }
    },
    calcDestination () {
      let x = this.ambu.ங
      let y = this.ambu.ஞ
      var tx, ty
      let [px, py, pw, pz] = this.$store.getters['பார்வை/petti_pera'](this.irudi.id)

      if (x < px) {
        tx = px
      } else if (x < pw) {
        tx = x
      } else {
        tx = pw
      }
      if (y < py) {
        ty = py
      } else if (y < pz) {
        if (px < x && x < pw) {
          ty = y < pz / 2 ? pw : pz
        } else {
          ty = y
        }
      } else {
        ty = pz
      }
      return { x: tx, y: ty }
    }

  }
}
</script>

<style>

</style>
