<template>
  <div id="தலைப்பு">
    <v-toolbar dense flat>
      <v-tabs v-model="செயலில்">
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

      <v-dialog
        v-model="dialog"
      >
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            {{ $t('மொழி.மொழி_விருப்பங்கள்') }}
          </v-card-title>

          <v-card-text>
            <v-tabs
              v-model="tab"
              centered
              fixed-tabs
              :ripple="false"
            >
              <v-tab>{{ $t('பொதுமான.இடைமுகம்') }}</v-tab>
              <v-tab>{{ $t('பொதுமான.மாதிரி') }}</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-container>
                  <v-row justify="center">
                    <v-col>
                      {{ $t('மொழி.என்_மொழிகள்') }}
                    </v-col>
                    <v-col>
                      {{ $t('மொழி.எல்லாம்_மொழிகள்') }}
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
      <v-btn icon :ripple="false">
        <v-icon>mdi-cogs</v-icon>
      </v-btn>

    </v-toolbar>
    <v-tabs-items v-model="செயலில்">
      <v-tab-item>
        <v-row>
          <v-col>{{ $t('பொதுமான.மாதிரி') }}</v-col>
          <v-col>{{ $t('பொதுமான.கோப்பு') }}</v-col>
          <v-col>{{ $t('பொதுமான.ஏற்றுமதி') }}</v-col>
        </v-row>
      </v-tab-item>
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
                  <svg class="சின்னம்" viewBox="0 0 70 40">
                    <rect width="60px" height="30px" rx="2" ry="2" x="5" y="5"
                      fill="white" stroke="black" stroke-width="2px"
                    />
                  </svg>
                    <svg class="சின்னம்" viewBox="0 0 70 40">
                      <circle cx="35" cy="20" r="17.5" fill="white" stroke="black" stroke-width="2px"
                      />
                    </svg>
                </v-col>
                <v-col>
                  <svg class="சின்னம்" viewBox="0 0 70 40">
                     <line x1="5" y1="16" x2="55" y2="16" stroke="black" stroke-width="2px" />
                     <line x1="5" y1="24" x2="55" y2="24" stroke="black" stroke-width="2px" />
                     <path d="M 35 5 C 45 5, 45 5, 35 20 S 25 35, 35 35 S 45 35, 35 20 S 25 5, 35 5"
                     stroke="black" stroke-width="2px" fill="transparent"/>
                     <polyline points="53 10 65 20 53 30" stroke="black" stroke-width="2px"
                      stroke-linecap="butt" fill="none" stroke-linejoin="miter"/>
                  </svg>
                  <svg class="சின்னம்" viewBox="0 0 70 40">
                     <path d="M 5 25 Q 32.5 5 60 25" stroke="black" stroke-width="2px" fill="transparent"/>
                     <polyline points="56 15 60 25 50 26" stroke="black" stroke-width="2px"
                      stroke-linecap="butt" fill="none" stroke-linejoin="miter"/>
                  </svg>
                </v-col>
                <v-col>
                  <svg class="சின்னம்" viewBox="0 0 70 40">
                    <circle cx="35" cy="20" r="17.5" fill="white" stroke="black"
                    stroke-width="2px" stroke-dasharray="5,5"
                    />
                  </svg>
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
      <v-tab-item>
        <v-row>
          <v-col>{{ $t('பொதுமான.பார்வைகள்') }}</v-col>
          <v-col>{{ $t('பொதுமான.அடுக்குகள்') }}</v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item>
        <v-row>
          <v-col>{{ $t('பொதுமான.சரிபார்த்தல்') }}</v-col>
          <v-col>{{ $t('பொதுமான.உருவகப்படுத்துதல்') }}</v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item>
        <v-row>
          <v-col>{{ $t('பொதுமான.தரவுத்தளம்') }}</v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item>
        <v-row>
          <v-col>{{ $t('பொதுமான.கதைகள்') }}</v-col>
          <v-col>{{ $t('பொதுமான.முன்வைத்தல்') }}</v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
  import { mdiFile, mdiPencil, mdiEye, mdiMenuRight, mdiTable, mdiPresentation } from '@mdi/js'

  export default {
    name: 'தலைப்பு',
    data: function () {
      return {
        dialog: false,
        tab: null,
        செயலில்: 1,
        தாவல்கள்: [
          { பெயர்: 'பொதுமான.ஆவணம்', சின்னம்: mdiFile },
          { பெயர்: 'பொதுமான.கட்டுமனம்', சின்னம்: mdiPencil },
          { பெயர்: 'பொதுமான.பார்வை', சின்னம்: mdiEye },
          { பெயர்: 'பொதுமான.உருவகப்படுத்துதல்', சின்னம்: mdiMenuRight },
          { பெயர்: 'பொதுமான.தகவல்கள்', சின்னம்: mdiTable },
          { பெயர்: 'பொதுமான.வழங்கல்', சின்னம்: mdiPresentation }]
      }
    },
    computed: {
      மொழிகள்: () => ['தமிழ்', 'Kaqchikel', "Tz'utujil", "Kanyen'ké:ha", 'پنجابی'],
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

<style scoped>
  #தலைப்பு, #கட்டுப்பாடுகள் {
    padding: 10px 20px;
    background-color: #ffffff;
  }
</style>
