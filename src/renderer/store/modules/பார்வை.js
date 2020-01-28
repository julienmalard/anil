const state = {
  மாறிகள்: [{ id: 3, பெயர்: 'எப்படி', ங: 250, ஞ: 30 }],
  நிலைகள்: [
    { id: 1, பெயர்: 'ஏறி', அகலம்: 130, உயரம்: 40, ங: 500, ஞ: 30 },
    { id: 4, பெயர்: 'கடல்', அகலம்: 130, உயரம்: 40, ங: 800, ஞ: 30 }
  ],
  ஓட்டங்கள்: [
    { id: 5, பெயர்: 'ஆறு', todakkam: 'ஏறி', irudi: 'கடல்', உயரம்: 40, அகலம்: 130, ங: 500, ஞ: 30 }
  ],
  அன்புகள்: [{ id: 2, todakkam: 'ஏறி', irudi: 'எப்படி', ங: 400, ஞ: 100 }]
}

const getters = {
  மாறி_பெற (பெயர்) {
    let மாறி = state.நிலைகள்.find(நிலை => நிலை.பெயர் === பெயர்)
    if (மாறி) {
      return மாறி
    }
    return state.மாறிகள்.find(மாறி => மாறி.பெயர் === பெயர்)
  },
  petti_pera (state) {
    return id => {
      let nilai = state.நிலைகள்.find(நிலை => நிலை.id === id)
      if (nilai) {
        return [
          nilai.ங, nilai.ஞ, nilai.ங + nilai.அகலம், nilai.ஞ + nilai.உயரம்
        ]
      }
      let mari = state.மாறிகள்.find(மாறி => மாறி.id === id)
      return [
        mari.ங - 20, mari.ஞ - 20, mari.ங + 20, mari.ஞ + 20
      ]
    }
  }
}

const mutations = {
  mariSeruga (மாறி) {
    state.மாறிகள்.push(மாறி)
  },
  mariNikku (பெயர்) {
    state.மாறிகள் = state.மாறிகள்.filter(மாறி => மாறி.பெயர் !== பெயர்)
  },
  ambuMarram (state, marram) {
    let ambu = state.அன்புகள்.find(அன்பு => அன்பு.id === marram['id'])
    for (let key in marram) {
      ambu[key] = marram[key]
    }
  },
  nilaiMarram (state, marram) {
    let nilai = state.நிலைகள்.find(நிலை => நிலை.id === marram['id'])
    for (let key in marram) {
      nilai[key] = marram[key]
    }
  },
  mariMarram (state, marram) {
    let mari = state.மாறிகள்.find(மாறி => மாறி.id === marram['id'])
    for (let key in marram) {
      mari[key] = marram[key]
    }
  }
}

const actions = {
  ambuMarram ({ commit, state }, marram) {
    commit('ambuMarram', marram)
  },
  nilaiMarram ({ commit, state }, marram) {
    commit('nilaiMarram', marram)
  },
  mariMarram ({ commit, state }, marram) {
    commit('mariMarram', marram)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
