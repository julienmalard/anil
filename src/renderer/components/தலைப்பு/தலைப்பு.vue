<template>
  <div>
    <v-app-bar fixed extension-height="100">
      <v-btn icon>
        <v-icon>mdi-save</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-folder</v-icon>
      </v-btn>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon v-on="on" color="#24961e">
        <v-icon>mdi-earth</v-icon>
      </v-btn>
      <div slot="extension">
        abc
      </div>
    </v-app-bar>
      <!-- <v-tabs v-model="செயலில்">
        <v-tab
          v-for="தாவல் in தாவல்கள்"
          :key="தாவல்.பெயர்"
          :ripple="false"
        >
          <v-icon left small>{{ தாவல்.சின்னம் }}</v-icon>
          {{ $t(தாவல்.பெயர்) }}
        </v-tab>
      </v-tabs>

      <v-spacer></v-spacer>

      <mozhi-viruppankal :model="dialog"></mozhi-viruppankal>
      <amaippu-viruppankal></amaippu-viruppankal>

      <mozhi-amaippukal :model="dialog"></mozhi-amaippukal>

    <v-tabs-items v-model="செயலில்">
      <padakai-avanam></padakai-avanam>
      <padakai-kattumanam></padakai-kattumanam>
      <padakai-parvai></padakai-parvai>
      <padakai-uruvakappaduttutal></padakai-uruvakappaduttutal>
      <padakai-takavalkal></padakai-takavalkal>
      <padakai-vazhankal></padakai-vazhankal>
    </v-tabs-items> -->
  </div>
</template>

<script>
  import { mdiFile, mdiPencil, mdiEye, mdiMenuRight, mdiTable, mdiPresentation } from '@mdi/js'

  import mozhiViruppankal from './மொழிவிருப்பங்கள்'
  import amaippuViruppankal from './அமைப்புவிருப்பங்கள்'
  import mozhiAmaippukal from '../சர்வதேசமயமாக்கல்/அமைப்புகள்'

  import padakaiAvanam from './பதாகைகள்/பதாகை-ஆவணம்'
  import padakaiKattumanam from './பதாகைகள்/பதாகை-கட்டுமனம்'
  import padakaiParvai from './பதாகைகள்/பதாகை-பார்வை'
  import padakaiUruvakappaduttutal from './பதாகைகள்/பதாகை-உருவகப்படுத்துதல்'
  import padakaiTakavalkal from './பதாகைகள்/பதாகை-தகவல்கள்'
  import padakaiVazhankal from './பதாகைகள்/பதாகை-வழங்கள்'

  export default {
    name: 'தலைப்பு',
    components: {
      mozhiViruppankal,
      amaippuViruppankal,
      mozhiAmaippukal,
      padakaiAvanam,
      padakaiKattumanam,
      padakaiParvai,
      padakaiUruvakappaduttutal,
      padakaiTakavalkal,
      padakaiVazhankal
    },
    data: function () {
      return {
        செயலில்: 1,
        dialog: false,
        தாவல்கள்: [
          { பெயர்: 'பொதுமான.ஆவணம்', சின்னம்: mdiFile },
          { பெயர்: 'பொதுமான.கட்டுமனம்', சின்னம்: mdiPencil },
          { பெயர்: 'பொதுமான.பார்வை', சின்னம்: mdiEye },
          { பெயர்: 'பொதுமான.உருவகப்படுத்துதல்', சின்னம்: mdiMenuRight },
          { பெயர்: 'பொதுமான.தகவல்கள்', சின்னம்: mdiTable },
          { பெயர்: 'பொதுமான.வழங்கல்', சின்னம்: mdiPresentation }]
      }
    }
  }
</script>

<style scoped>
  .v-window-item {
     height:175px;
   }
</style>
