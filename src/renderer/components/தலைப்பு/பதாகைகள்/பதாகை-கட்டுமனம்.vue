<template>
  <v-tab-item>
    <v-container fluid>
      <v-row>
        <v-col>
          {{ $t('பொதுமான.வடிவம்') }}
          <v-row>
            <v-col>
              <v-icon>mdi-select-drag</v-icon>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          {{ $t('பொதுமான.மாறிகள்') }}
          <v-row>
            <v-col>
              <ceruka uruppadi="நிலை"></ceruka>
              <ceruka uruppadi="மாறி"></ceruka>
            </v-col>
            <v-col>
              <ceruka uruppadi="ஓட்டம்"></ceruka>
              <ceruka uruppadi="அன்பு"></ceruka>
            </v-col>
            <v-col>
              <ceruka uruppadi="பெய்"></ceruka>
              <svg class="சின்னம்" viewBox="0 0 70 40">
                <circle cx="35" cy="20" r="17.5" fill="white" stroke="black"
                stroke-width="2px" stroke-dasharray="5,5"
                />
              </svg>
            </v-col>
          </v-row>
        </v-col>
        <v-col>{{ $t('பொதுமான.இணைப்பு') }}</v-col>
        <v-col>{{ $t('பொதுமான.அலங்காரம்') }}</v-col>
      </v-row>
    </v-container>
  </v-tab-item>

</template>

<script>
  import ceruka from './கட்டுப்பாடுகள்/சேருக'
  export default {
    name: 'கட்டுமனம்',
    components: { ceruka }
  }
</script>

<style>

</style>
