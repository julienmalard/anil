export default {
  data () {
    return {
      சுட்டியிழுத்தல்: null
    }
  },
  computed: {
    திருத்தல் () {
      return this.$store.state.பார்வை.திருத்தல்நிலை.பெயர் === 'திருத்தல்'
    }
  },
  methods: {
    mouseup (நி) {
      this.சுட்டியிழுத்தல் = null
      document.removeEventListener('mousemove', this.mousemove)
      document.removeEventListener('mouseup', this.mouseup)
    }
  }
}
