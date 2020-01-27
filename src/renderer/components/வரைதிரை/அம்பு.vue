<template>
  <g>
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#3366ff" />
      </marker>
    </defs>
    <path
      :d="
        `M${calcSource().x} ${calcSource().y}
        Q ${ambu.ங} ${ambu.ஞ}
        ${calcDestination().x} ${calcDestination().y}`
      "
      style="fill:transparent;stroke-width:2;stroke:#3366ff"
      marker-end="url(#arrow)"
    />
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
      style="fill:#ffffff;stroke-width:1;stroke:#99ccff"
    />
  </g>
</template>

<script>
export default {
  name: 'அம்பு',
  props: [ 'ambu', 'todakkam', 'irudi' ],
  methods: {
    calcSource () {
      return { x: this.todakkam.ங, y: this.todakkam.ஞ + this.todakkam.உயரம் / 2 }
    },
    calcDestination () {
      return { x: this.irudi.ங + 50, y: this.irudi.ஞ + 20 }
    }
  }
}
</script>

<style>

</style>
