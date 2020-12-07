export default {
  data () {
    return {
      சுட்டி_மேல்: false,
      உரை_திருத்தல்: false,
      உரை: this.urupadi.பெயர்
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  methods: {
    onClick (e) {
      e.stopPropagation()
      e.மாறி = this.urupadi
      this.$emit('click', e)
    },
    uraitiruttal () {
      if (this.திருத்தல்) {
        this.உரை_திருத்தல் = true
      }
    },
    uraisemi () {
      this.உரை_திருத்தல் = false
      let உரை = this.உரை.trim()
      if (உரை && உரை !== this.urupadi.பெயர்) {
        this.$store.dispatch(
          'பார்வை/உருப்படி_மாற்றம்',
          { பெயர்: உரை, id: this.urupadi.id }
        )
      } else {
        this.உரை = this.urupadi.பெயர்
      }
    }
  }
}
