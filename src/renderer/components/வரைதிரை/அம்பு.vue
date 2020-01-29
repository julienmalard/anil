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
        :x2="calcSource(todakkam).x"
        :y2="calcSource(todakkam).y"
        stroke="#99ccff"
      />
      <line
        :x1="ambu.ங"
        :y1="ambu.ஞ"
        :x2="calcSource(irudi).x"
        :y2="calcSource(irudi).y"
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
        `M ${calcSource(todakkam).x} ${calcSource(todakkam).y}
         Q ${ambu.ங} ${ambu.ஞ}
        ${calcSource(irudi).x} ${calcSource(irudi).y}`
      "
      style="fill:transparent;stroke-width:2;stroke:#3366ff"
      marker-end="url(#arrow)"
    />
  </g>
</template>

<script>
import சுட்டிகண்டுபிடி from './சுட்டி'

export default {
  name: 'அம்பு',
  props: [ 'ambu', 'todakkam', 'irudi' ],
  mixins: [சுட்டிகண்டுபிடி],
  data () {
    return {
      startPosition: null,
      cursorOffset: {
        x: 0,
        y: 0
      }
    }
  },
  methods: {
    mousedown (e) {
      const [x, y] = this.சுட்டிகண்டுபிடி(e)
      this.cursorOffset.x = x
      this.cursorOffset.y = y
      this.startPosition = { x: this.ambu.ங, y: this.ambu.ஞ }

      document.addEventListener('mousemove', this.mousemove)
      document.addEventListener('mouseup', this.mouseup)
    },
    mousemove (e) {
      if (this.startPosition) {
        e.preventDefault()
        let [x, y] = this.சுட்டிகண்டுபிடி(e)

        x = this.startPosition.x + (x - this.cursorOffset.x)
        y = this.startPosition.y + (y - this.cursorOffset.y)

        this.$store.dispatch(
          'பார்வை/ambuMarram',
          { id: this.ambu.id, ங: x, ஞ: y }
        )
      }
    },
    mouseup (e) {
      this.startPosition = null
      document.removeEventListener('mousemove', this.mousemove)
      document.removeEventListener('mouseup', this.mouseup)
    },
    calcSource (mari) {
      let x = this.ambu.ங
      let y = this.ambu.ஞ
      var tx, ty
      let [px, py, pw, pz, cx, cy] = this.$store.getters['பார்வை/petti_pera'](mari.id)

      if (y < cy) {
        tx = cx + (x - cx) * (1 - (y - py) / (y - cy))
      } else {
        tx = cx + (x - cx) * (1 - (y - pz) / (y - cy))
      }
      tx = tx < px ? px : (tx > pw ? pw : tx)

      if (x < cx) {
        ty = cy + (y - cy) * (1 - (x - px) / (x - cx))
      } else {
        ty = cy + (y - cy) * (1 - (x - pw) / (x - cx))
      }
      ty = ty < py ? py : (ty > pz ? pz : ty)

      return { x: tx, y: ty }
    }
  }
}
</script>

<style>

</style>
