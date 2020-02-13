<template>
  <v-menu
    transition="slide-y-transition"
    bottom
    offset-y offset-x
    min-width="225"
  >
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on" :ripple="false">
        <v-icon>mdi-earth</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, i) in மொழிகள்"
        :ripple="false"
        :key="i"
        @click="mozhimattram(item)"
      >
        <v-list-item-action>
          <v-icon v-if="mozhi === item">mdi-check</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list-item :ripple="false"  @click.stop="dialog = true">
        <v-list-item-action>
          <v-icon>mdi-plus</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ $t('மொழி.மேலும்') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
  export default {
    name: 'மொழிவிருப்பங்கள்',
    props: ['dialog'],
    computed: {
      மொழிகள்: () => {
        return ['தமிழ்', 'Kaqchikel', "Tz'utujil", "Kanyen'ké:ha", 'پنجابی']
      },
      mozhi: function () {
        return this.$store.state.விருப்பங்கள்.மொழி
      }
    },
    methods: {
      mozhimattram: function (மொழி) {
        this.$vuetify.lang.current = மொழி
        this.$i18n.locale = மொழி
        this.$store.dispatch('விருப்பங்கள்/mozhimattram', மொழி)
      }
    }
  }
</script>

<style>

</style>
