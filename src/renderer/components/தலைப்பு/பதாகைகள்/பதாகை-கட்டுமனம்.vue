<template>
  <v-tab-item>
    <v-container fluid>
      <v-row>
        <v-col cols="5">
          <v-row justify="space-between" class='py-0'>
            <v-col cols="4" class='py-0'>
              <v-overflow-btn
                class="my-2"
                :items="['Arial', 'Times New Roman', 'Calibri']"
                value="Arial"
                dense
                auto-select-first
                hide-no-data
                editable
                hide-details
              ></v-overflow-btn>
            </v-col>
            <v-col cols="4" class='py-0'>
              <v-overflow-btn
                class="my-2"
                :items="['౧౦', '౧౨', '౫౦', '౭౮']"
                value="౧౨"
                dense
                auto-select-first
                hide-no-data
                editable
                hide-details
              ></v-overflow-btn>
            </v-col>
            <v-col cols="4" class='py-0'>
              <v-row>
                <v-btn-toggle
                  v-model="formatting"
                  multiple group dense
                >
                  <v-btn color="white">
                    <v-icon>mdi-format-italic</v-icon>
                  </v-btn>

                  <v-btn color="white">
                    <v-icon>mdi-format-bold</v-icon>
                  </v-btn>

                  <v-btn color="white">
                    <v-icon>mdi-format-underline</v-icon>
                  </v-btn>
                </v-btn-toggle>
              </v-row>
            </v-col>
          </v-row>
          <v-row justify="space-between" class='py-0'>
            <v-col class='py-0'>
              <v-btn-toggle group dense mandatory v-model="toggle_exclusive">
                <v-btn>
                  <v-icon>mdi-format-align-left</v-icon>
                </v-btn>

                <v-btn>
                  <v-icon>mdi-format-align-center</v-icon>
                </v-btn>

                <v-btn>
                  <v-icon>mdi-format-align-right</v-icon>
                </v-btn>

                <v-btn>
                  <v-icon>mdi-format-align-justify</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-divider vertical inset></v-divider>
            <v-col class='py-0'>
              <v-btn
                color="white" tile depressed
                min-height="45" min-width="45" max-height="45" max-width="45"
                :ripple="false"
              >
                <v-row
                  align="center"
                  class="flex-column"
                  justify="center"
                >
                  <v-icon class="cols 12">mdi-format-color-text</v-icon>
                  <v-sheet
                    tile
                    style="margin-top: -4px;"
                    height="4"
                    width="26"
                    color="purple"
                  ></v-sheet>
                </v-row>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-divider vertical inset></v-divider>
        <v-col cols=4>
          <v-row justify="space-between" class='py-0'>
            <v-col>
              <ceruka uruppadi="நிலை"></ceruka>
              <ceruka uruppadi="துணை"></ceruka>
              <ceruka uruppadi="ஓட்டம்"></ceruka>
              <ceruka uruppadi="அன்பு"></ceruka>
              <ceruka uruppadi="நிழல்"></ceruka>
            </v-col>
            <v-col>
              <v-tooltip
                bottom
                :open-delay="500"
                transition="fade-transition"
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    :input-value="puttu"
                    tile depressed color="white"
                    min-height="45" min-width="45" max-height="45" max-width="45"
                    :ripple="false"
                    v-on="on"
                    @click="onClick"
                  >
                    <v-icon v-show="puttu">mdi-lock-outline</v-icon>
                    <v-icon v-show="!puttu">mdi-lock-open-outline</v-icon>
                  </v-btn>
                </template>
                <span> {{ puttu ? $t('திரத்தல்') : $t('பூட்டு') }} </span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-col>
        <v-divider vertical inset></v-divider>
        <v-col>{{ $t('பொதுமான.இணைப்பு') }}</v-col>
        <v-divider vertical inset></v-divider>
        <v-col>{{ $t('பொதுமான.அலங்காரம்') }}</v-col>
      </v-row>
    </v-container>
  </v-tab-item>

</template>

<script>
  import ceruka from './கட்டுப்பாடுகள்/சேருக'

  export default {
    name: 'கட்டுமனம்',
    components: { ceruka },
    computed: {
      puttu: function (நி) {
        return this.$store.state.பார்வை.திருத்தல்நிலை.பெயர் === 'பூட்டப்பட்டுள்ளது'
      }
    },
    methods: {
      onClick: function (நி) {
        this.$store.dispatch(
          'பார்வை/திருத்தல்நிலை_மாற்றம்', {
            பெயர்: this.puttu ? 'திருத்தல்' : 'பூட்டப்பட்டுள்ளது'
          }
        )
      }
    }
  }
</script>

<style>

</style>
