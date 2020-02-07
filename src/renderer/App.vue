<template>
  <v-app>
    <talaipu></talaipu>
    <div class="mod">
      <varaitirai></varaitirai>
    </div>
  </v-app>
</template>

<script>
  import talaipu from './components/தலைப்பு/தலைப்பு'
  import varaitirai from './components/வரைதிரை/வரைதிரை'

  export default {
    name: 'App',
    components: { talaipu, varaitirai }
  }
</script>

<style>
#svgmod {
  height: 2000px;
  width: 3000px;
  flex: 1 1 auto;
}
html, body {
  height: 100%;
}
.mod {
  overflow: scroll;
  border-top: 2px solid #eeeeee;
}
</style>
