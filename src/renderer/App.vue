<template>
  <v-app>
    <talaipu></talaipu>

    <v-main class="grey lighten-3 d-flex align-center" style="margin-top:164px">
      <v-row justify="space-around">
        <varaitirai></varaitirai>
      </v-row>
    </v-main>

  </v-app>
</template>

<script>

import talaipu from './components/தலைப்பு/தலைப்பு'
import varaitirai from './components/வரைதிரை/வரைதிரை'

export default {
  name: 'App',
  components: { talaipu, varaitirai },
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' }
      ],
      mini: true
    }
  }
}
</script>
<!--
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
-->
<style>

</style>
