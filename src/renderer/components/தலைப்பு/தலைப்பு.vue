<template>
  <div>
    <div id="தலைப்பு">
      <v-toolbar dense flat>
        <v-tabs v-model="செயலில்">
          <v-tab
            v-for="தாவல் in தாவல்கள்"
            :key="தாவல்.பெயர்"
            :ripple="false"
          >
            <v-icon left small>{{ தாவல்.சின்னம் }}</v-icon>
            {{ தாவல்.பெயர் }}
          </v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
        <v-btn icon :ripple="false">
          <v-icon>mdi-earth</v-icon>
        </v-btn>

        <v-btn icon :ripple="false">
          <v-icon>mdi-cogs</v-icon>
        </v-btn>

      </v-toolbar>
      <v-tabs-items v-model="செயலில்">
        <v-tab-item>
          <div class="columns">
            <div class="column">மாதிரி</div>
            <div class="column">கோப்பு</div>
            <div class="column">ஏற்றுமதி</div>
          </div>
        </v-tab-item>
        <v-tab-item>
          <div class="columns">
            <div class="column">வடிவம்</div>
            <div class="column">
              <div class="container">
                மாறிகள்
              </div>
              <div class="container">
                <div class="columns">
                  <div class="column">
                    <svg class="சின்னம்" viewBox="0 0 70 40">
                      <rect width="60px" height="30px" rx="2" ry="2" x="5" y="5"
                        fill="white" stroke="black" stroke-width="2px"
                      />
                    </svg>
                  </div>
                  <div class="column">
                    <svg class="சின்னம்" viewBox="0 0 70 40">
                      <circle cx="35" cy="20" r="17.5" fill="white" stroke="black" stroke-width="2px"
                      />
                    </svg>
                  </div>
                  <div class="column">
                    <svg class="சின்னம்" viewBox="0 0 70 40">
                       <line x1="5" y1="16" x2="55" y2="16" stroke="black" stroke-width="2px" />
                       <line x1="5" y1="24" x2="55" y2="24" stroke="black" stroke-width="2px" />
                       <path d="M 35 5 C 45 5, 45 5, 35 20 S 25 35, 35 35 S 45 35, 35 20 S 25 5, 35 5"
                       stroke="black" stroke-width="2px" fill="transparent"/>
                       <polyline points="53 10 65 20 53 30" stroke="black" stroke-width="2px"
                        stroke-linecap="butt" fill="none" stroke-linejoin="miter"/>
                    </svg>
                  </div>
                  <div class="column">
                    <svg class="சின்னம்" viewBox="0 0 70 40">
                       <path d="M 5 25 Q 32.5 5 60 25" stroke="black" stroke-width="2px" fill="transparent"/>
                       <polyline points="56 15 60 25 50 26" stroke="black" stroke-width="2px"
                        stroke-linecap="butt" fill="none" stroke-linejoin="miter"/>
                    </svg>
                  </div>
                  <div class="column">
                    <svg class="சின்னம்" viewBox="0 0 70 40">
                      <circle cx="35" cy="20" r="17.5" fill="white" stroke="black"
                      stroke-width="2px" stroke-dasharray="5,5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">இணைப்பு</div>
            <div class="column">அலங்காரம்</div>
          </div>
        </v-tab-item>
        <v-tab-item>
          <div class="columns">
            <div class="column">பார்வைகள்</div>
            <div class="column">அடுக்குகள்</div>
          </div>
        </v-tab-item>
        <v-tab-item>
          <div class="columns">
            <div class="column">சரிபார்த்தல்</div>
            <div class="column">உருவகப்படுத்துதல்</div>
          </div>
        </v-tab-item>
        <v-tab-item>
          <div class="columns">
            <div class="column">தரவுத்தளம்</div>
          </div>
        </v-tab-item>
        <v-tab-item>
          <div class="columns">
            <div class="column">கதைகள்</div>
            <div class="column">முன்வைத்தல்</div>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
  import { mdiFile, mdiPencil, mdiEye, mdiMenuRight, mdiTable, mdiPresentation } from '@mdi/js'

  export default {
    name: 'தலைப்பு',
    data: () => {
      return {
        செயலில்: 1,
        தாவல்கள்: [
          { பெயர்: 'ஆவணம்', சின்னம்: mdiFile },
          { பெயர்: 'கட்டுமனம்', சின்னம்: mdiPencil },
          { பெயர்: 'பார்வை', சின்னம்: mdiEye },
          { பெயர்: 'உருவகப்படுத்துதல்', சின்னம்: mdiMenuRight },
          { பெயர்: 'தகவல்கள்', சின்னம்: mdiTable },
          { பெயர்: 'வழங்கல்', சின்னம்: mdiPresentation }]
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
