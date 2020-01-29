export default {
  methods: {
    சுட்டிகண்டுபிடி (நி) {
      let ங = 0
      let ஞ = 0
      if (நி.touches) {
        ங = நி.touches[0].pageX
        ஞ = நி.touches[0].pageY
      } else {
        ங = நி.pageX
        ஞ = நி.pageY
      }
      return [ங, ஞ]
    }
  }
}
