import Vue from 'vue'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'

import 'vuetify/dist/vuetify.min.css' // முக்கியமாது!!!
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(Vuetify)
Vue.use(VueI18n)

const messages = {
  தமிழ்: {
    பொதுமான: {
      மாதிரி: 'மாதிரி',
      இடைமுகம்: 'இடைமுகம்',
      சரி: 'சரி',
      கோப்பு: 'கோப்பு',
      ஏற்றுமதி: 'ஏற்றுமதி',
      வடிவம்: 'வடிவம்',
      மாறிகள்: 'மாறிகள்',
      இணைப்பு: 'இணைப்பு',
      அலங்காரம்: 'அலங்காரம்',
      பார்வைகள்: 'பார்வைகள்',
      அடுக்குகள்: 'அடுக்குகள்',
      சரிபார்த்தல்: 'சரிபார்த்தல்',
      உருவகப்படுத்துதல்: 'உருவகப்படுத்துதல்',
      தரவுத்தளம்: 'தரவுத்தளம்',
      கதைகள்: 'கதைகள்',
      முன்வைத்தல்: 'முன்வைத்தல்',
      ஆவணம்: 'ஆவணம்',
      கட்டுமனம்: 'கட்டுமனம்',
      பார்வை: 'பார்வை',
      தகவல்கள்: 'தகவல்கள்',
      வழங்கல்: 'வழங்கல'
    },
    மொழி: {
      மேலும்: 'மேலும்',
      மொழி: 'மொழி',
      நாள்காட்சி: 'நாள்காட்சி',
      எண்ணுரு_முறைமை: 'எண்ணுரு முறைமை',
      மொழி_விருப்பங்கள்: 'மொழி விருப்பங்கள்'
    }
  },
  Kaqchikel: {
    பொதுமான: {
      மாதிரி: "K'utb'äl",
      இடைமுகம்: 'Rokisanel tunüy',
      சரி: "Ütz k'a ri'",
      கோப்பு: 'Wuj',
      ஏற்றுமதி: "Q'axanïk",
      வடிவம்: "Rub'eyal",
      மாறிகள்: 'Retal jalöj',
      இணைப்பு: 'Tununem',
      அலங்காரம்: 'அலங்காரம்',
      பார்வைகள்: "Tz'etb'äl",
      அடுக்குகள்: 'Xak',
      சரிபார்த்தல்: "Tz'etonem",
      உருவகப்படுத்துதல்: "Rub'eyalem",
      தரவுத்தளம்: "Ruxe'el tzij",
      கதைகள்: 'Tzijonïk',
      முன்வைத்தல்: 'Samajinïk',
      ஆவணம்: 'Wuj',
      கட்டுமனம்: "Rub'anikil",
      பார்வை: "Tz'etb'äl",
      தகவல்கள்: 'Tzij',
      வழங்கல்: "Ruk'utïk"
    },
    மொழி: {
      மேலும்: "Chïk taq ch'ab'äl",
      மொழி: "Ch'ab'äl",
      நாள்காட்சி: "Cholq'ij",
      எண்ணுரு_முறைமை: 'Ajilanïk',
      மொழி_விருப்பங்கள்: "Rub'eyal ch'ab'äl"
    }
  }
}

export const i18n = new VueI18n({
  locale: 'தமிழ்',
  fallbackLocale: 'தமிழ்',
  messages
})

const opts = {
  icons: {
    iconfont: 'mdiSvg'
  },
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  }
}

export default new Vuetify(opts)
