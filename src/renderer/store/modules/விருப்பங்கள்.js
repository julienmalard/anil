const நிலை = {
  மொழி: 'தமிழ்'
}

const மாற்றங்கள் = {
  mozhimattram (நிலை, mozhi) {
    நிலை.மொழி = mozhi
  }
}

const நடவிக்கைகள் = {
  mozhimattram ({ commit, state }, mozhi) {
    commit('mozhimattram', mozhi)
  }
}

export default {
  namespaced: true,
  state: நிலை,
  mutations: மாற்றங்கள்,
  actions: நடவிக்கைகள்
}
