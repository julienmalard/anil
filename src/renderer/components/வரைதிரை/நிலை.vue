<template>
  <g>
    <rect
      :x=nilai.ங
      :y=nilai.ஞ
      :width=nilai.அகலம்
      :height=nilai.உயரம்
      rx=2
      ry=2
      style="fill:#ffffff;stroke-width:1;stroke:#000000"
    />
    <text
      :x="nilai.ங + nilai.அகலம்/2"
      :y="nilai.ஞ + nilai.உயரம்/2+5"
      text-anchor="middle"
    >
      {{ nilai.பெயர் }}
    </text>
  </g>
</template>

<script>
export default {
  name: 'நிலை',
  props: [ 'nilai' ]
}
</script>

<style>

</style>
