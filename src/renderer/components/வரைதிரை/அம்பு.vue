<template>
  <g>
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3"
      orient="auto" markerUnits="strokeWidth"
      >
        <path d="M0,0 L0,6 L9,3 z" fill="#3366ff" />
      </marker>
    </defs>
    <g v-show="திருத்தல்">
      <line
        :x1="ambu.ங"
        :y1="ambu.ஞ"
        :x2="calcSource(todakkam).ங"
        :y2="calcSource(todakkam).ஞ"
        stroke="#99ccff"
      />
      <line
        :x1="ambu.ங"
        :y1="ambu.ஞ"
        :x2="irudiIdam(30).ங"
        :y2="irudiIdam(30).ஞ"
        stroke="#99ccff"
      />
      <circle
        :cx="ambu.ங"
        :cy="ambu.ஞ"
        r=3
        style="fill:#ffffff;stroke-width:1;stroke:#99ccff;cursor:-webkit-grab;"
        @touchstart="mousedown('நகர்த்தல்', { ங: ambu.ங, ஞ: ambu.ஞ }, $event)"
        @mousedown="mousedown('நகர்த்தல்', { ங: ambu.ங, ஞ: ambu.ஞ }, $event)"
        @mousemove="mousemove"
        @touchmove="mousemove"
        @mouseup="mouseup"
        @touchend="mouseup"
      />
    </g>
    <path
      :d="
        `M ${calcSource(todakkam).ங} ${calcSource(todakkam).ஞ}
         Q ${ambu.ங} ${ambu.ஞ}
        ${irudiIdam(ஆரை=40).ங} ${irudiIdam(ஆரை=40).ஞ}`
      "
      style="fill:transparent;stroke-width:2;stroke:#3366ff"
      marker-end="url(#arrow)"
    />
    <circle
      :cx="calcSource(irudi, ஆரை=30).ங"
      :cy="calcSource(irudi, ஆரை=30).ஞ"
      :style="`fill:transparent;cursor:${ திருத்தல் ? '-webkit-grab': 'auto' };`"
      r=10
      @touchstart="mousedown('இறுதிமாற்றம்', irudiIdam(ஆரை=40), $event)"
      @mousedown="mousedown('இறுதிமாற்றம்', irudiIdam(ஆரை=40), $event)"
      @mousemove="mousemove"
      @touchmove="mousemove"
      @mouseup="mouseup"
      @touchend="mouseup"
    />
  </g>
</template>

<script>
import சுட்டியிழுத்தல் from './சுட்டி'
import உருப்படி from './உருப்படி'

export default {
  name: 'அம்பு',
  props: [ 'ambu', 'todakkam', 'irudi' ],
  mixins: [ உருப்படி ],
  data: function () {
    return {}
  },
  computed: {
    இறுதி_மாற்றம் () {
      return this.சுட்டியிழுத்தல் ? this.சுட்டியிழுத்தல்.வகை === 'இறுதிமாற்றம்' : false
    }
  },
  methods: {
    mousedown (வகை, ஆரம்பம், நி) {
      if (this.திருத்தல்) {
        this.சுட்டியிழுத்தல் = new சுட்டியிழுத்தல்(நி, ஆரம்பம், வகை)
        this.$store.dispatch(
          'பார்வை/திருத்தல்நிலை_மாற்றம்',
          { பெயர்: 'இடம்மாற்றம்', உருப்படி: this.ambu }
        )

        document.addEventListener('mousemove', this.mousemove)
        document.addEventListener('mouseup', this.mouseup)
      }
    },
    mousemove (நி) {
      if (this.சுட்டியிழுத்தல்) {
        நி.preventDefault()
        const { ங, ஞ } = this.சுட்டியிழுத்தல்.சுட்டிகண்டுபிடி(நி)
        if (this.சுட்டியிழுத்தல்.வகை === 'நகர்த்தல்') {
          this.$store.dispatch(
            'பார்வை/உருப்படி_மாற்றம்',
            { id: this.ambu.id, ங: ங, ஞ: ஞ }
          )
        }
      }
    },
    mouseup (நி) {
      this.சுட்டியிழுத்தல் = null

      this.$store.dispatch('பார்வை/திருத்தல்நிலை_மாற்றம்', { பெயர்: 'திருத்தல்' })

      document.removeEventListener('mousemove', this.mousemove)
      document.removeEventListener('mouseup', this.mouseup)
    },
    irudiIdam (ஆரை) {
      if (this.இறுதி_மாற்றம்) {
        return this.சுட்டியிழுத்தல்.தற்பொழுது
      }
      return this.calcSource(this.irudi, ஆரை)
    },
    calcSource (உருப்படி, ஆரை = 20) {
      let x = this.ambu.ங
      let y = this.ambu.ஞ
      let ங, ஞ

      if (உருப்படி.வகை === 'நிலை') {
        let மையம் = { ங: உருப்படி.ங + உருப்படி.அகலம் / 2, ஞ: உருப்படி.ஞ + உருப்படி.உயரம் / 2 }
        let பெட்டி = {
          வமே: { ங: உருப்படி.ங, ஞ: உருப்படி.ஞ },
          தேகி: { ங: உருப்படி.ங + உருப்படி.அகலம், ஞ: உருப்படி.ஞ + உருப்படி.உயரம் }
        }

        if (y < மையம்.ஞ) {
          ங = மையம்.ங + (x - மையம்.ங) * (1 - (y - பெட்டி.வமே.ஞ) / (y - மையம்.ஞ))
        } else {
          ங = மையம்.ங + (x - மையம்.ங) * (1 - (y - பெட்டி.தேகி.ஞ) / (y - மையம்.ஞ))
        }
        ங = ங < பெட்டி.வமே.ங ? பெட்டி.வமே.ங : (ங > பெட்டி.தேகி.ங ? பெட்டி.தேகி.ங : ங)

        if (x < மையம்.ங) {
          ஞ = மையம்.ஞ + (y - மையம்.ஞ) * (1 - (x - பெட்டி.வமே.ங) / (x - மையம்.ங))
        } else {
          ஞ = மையம்.ஞ + (y - மையம்.ஞ) * (1 - (x - பெட்டி.தேகி.ங) / (x - மையம்.ங))
        }
        ஞ = ஞ < பெட்டி.வமே.ஞ ? பெட்டி.வமே.ஞ : (ஞ > பெட்டி.தேகி.ஞ ? பெட்டி.தேகி.ஞ : ஞ)
      } else if (உருப்படி.வகை === 'துணை') {
        let தூரம் = Math.sqrt((x - உருப்படி.ங) ** 2 + (y - உருப்படி.ஞ) ** 2)
        ங = ஆரை / தூரம் * (x - உருப்படி.ங) + உருப்படி.ங
        ஞ = ஆரை / தூரம் * (y - உருப்படி.ஞ) + உருப்படி.ஞ
      } else if (உருப்படி.வகை === 'ஓட்டம்') {
        let தூரம் = Math.sqrt((x - உருப்படி.ங) ** 2 + (y - உருப்படி.ஞ) ** 2)
        ங = ஆரை / தூரம் * (x - உருப்படி.ங) + உருப்படி.ங
        ஞ = ஆரை / தூரம் * (y - உருப்படி.ஞ) + உருப்படி.ஞ
      } else {
        ங = உருப்படி.ங
        ஞ = உருப்படி.ஞ
      }
      return { ங, ஞ }
    }
  }
}
</script>

<style>

</style>
