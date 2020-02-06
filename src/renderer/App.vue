<template>
  <v-app>
    <div id="பயன்பாடு">
      <div id="entête">
        <talaipu></talaipu>
      </div>
      <div class="mod">
        <varaitirai></varaitirai>
      </div>
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
#பயன்பாடு {
  height: 100%;
  display: flex;
  flex-direction: column;
}
#svgmod {
  height: 2000px;
  width: 3000px;
  flex: 1 1 auto;
}
#entête {
  flex: 0 1 auto;
}
html, body {
  height: 100%;
}
.mod {
  overflow: scroll;
  border-top: 2px solid #eeeeee;
}
</style>
