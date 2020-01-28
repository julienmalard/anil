<template>
  <g>
    <line
      :x1="todakkampl().x"
      :y1="todakkampl().y - 5"
      :x2="irudipl().x - 10"
      :y2="irudipl().y - 5"
      stroke="black" stroke-width="1.5px"
    />
    <line
      :x1="todakkampl().x"
      :y1="todakkampl().y + 5"
      :x2="irudipl().x - 10"
      :y2="irudipl().y + 5"
      stroke="black" stroke-width="1.5px"
    />
    <path
      :d="
        `M ${naduttara().x} ${naduttara().y}
         C ${naduttara().x + 10} ${naduttara().y},
           ${naduttara().x + 10} ${naduttara().y},
           ${naduttara().x} ${naduttara().y + 15},
         S ${naduttara().x - 10} ${naduttara().y + 30},
           ${naduttara().x} ${naduttara().y + 30},
         S ${naduttara().x + 10} ${naduttara().y + 30},
           ${naduttara().x} ${naduttara().y + 15},
         S ${naduttara().x - 10} ${naduttara().y},
           ${naduttara().x} ${naduttara().y}`
      "
      stroke="black" stroke-width="1.5px" fill="transparent"
    />
    <polyline
      :points="
        `${irudipl().x - 12} ${irudipl().y - 12}
         ${irudipl().x - 2} ${irudipl().y}
         ${irudipl().x - 12} ${irudipl().y + 12}`
      "
      stroke="black" stroke-width="1.5px"
      stroke-linecap="butt" fill="none" stroke-linejoin="miter"/>
    <circle
      :cx="naduttara().x"
      :cy="naduttara().y + 15"
      r=3
      style="fill:transparent;stroke-width:1;stroke:#99ccff;cursor:-webkit-grab;"
    />
  </g>
</template>

<script>
// "M 35 5 C 45 5, 45 5, 35 20 S 25 35, 35 35 S 45 35, 35 20 S 25 5, 35 5"
export default {
  name: 'ஓட்டம்',
  props: [ 'ottam', 'todakkam', 'irudi' ],
  methods: {
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
