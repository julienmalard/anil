<template>
  <v-dialog
    v-model="model"
    max-width="1000"
  >
    <v-card>
      <v-card-title
        class="headline"
        primary-title
      >
        <v-icon>mdi-earth</v-icon>
        {{ $t('மொழி.மொழி_விருப்பங்கள்') }}
      </v-card-title>

      <v-card-text>
        <v-tabs
          v-model="tab"
          centered
          fixed-tabs
          :ripple="false"
        >
          <v-tab :ripple="false">{{ $t('பொதுமான.இடைமுகம்') }}</v-tab>
          <v-tab :ripple="false">{{ $t('பொதுமான.மாதிரி') }}</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-container>
              <v-row>
                <v-col>
                  <v-autocomplete
                    v-model="values"
                    :items="items"
                    outlined
                    dense
                    :label="$t('மொழி.மொழி')"
                  ></v-autocomplete>
                </v-col>
                <v-col>
                  <v-autocomplete
                    v-model="values"
                    :items="items"
                    outlined
                    dense
                    :label="$t('மொழி.எண்ணுரு_முறைமை')"
                    multiple
                  ></v-autocomplete>
                  <v-autocomplete
                    v-model="values"
                    :items="items"
                    outlined
                    dense
                    :label="$t('மொழி.நாள்காட்சி')"
                    multiple
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item>
            <v-card
              flat
            >
              <v-card-text>வணக்கம்</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          :ripple="false"
          @click="dialog=false"
        >
          {{ $t('பொதுமான.சரி') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'மொழியமைப்புகள்',
  props: ['model'],
  data: () => {
    return {
      tab: null,
      values: null,
      items: ['தமிழ்', 'Kaqchikel', "Tz'utujil", "Kanyen'ké:ha", 'پنجابی']
    }
  }
}
</script>

<style>

</style>
