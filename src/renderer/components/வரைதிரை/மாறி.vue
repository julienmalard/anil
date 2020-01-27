<template>
  <g>
    <circle
      :cx=mari.ங
      :cy=mari.ஞ
      r=10
      style="fill:#ffffff;stroke-width:1;stroke:#000000"
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
export default {
  name: 'மாறி',
  props: [ 'mari' ]
}
</script>

<style>

</style>
