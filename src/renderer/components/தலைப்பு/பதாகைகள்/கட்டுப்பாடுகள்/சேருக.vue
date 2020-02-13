<template>
  <svg
    v-bind:class="{ தேர்ந்தெடுக்கப்பட்டது: terntetukappattatu }"
    viewBox="0 0 100 100" fill="white" stroke="black" stroke-width="3px"
    width="40" height="40"
    @click="onClick"
  >
    <defs>
      <g id="நிலை">
        <rect width="80px" height="45px" rx="2" ry="2" x="10" y="27.5"/>
      </g>
      <g id="மாறி">
        <circle cx="50" cy="50" r="30"/>
      </g>
      <g id="ஓட்டம்">
        <line x1="5" y1="40" x2="83" y2="40" />
        <line x1="5" y1="60" x2="83" y2="60" />
        <path d="M 45 25 C 60 25, 60 25, 45 50 S 30 75, 45 75 S 60 75, 45 50 S 30 25, 45 25"
         fill="transparent"/>
        <polyline points="76 25 95 50 76 75"
        stroke-linecap="butt" fill="none" stroke-linejoin="miter"/>
      </g>
      <g id="அன்பு">
        <path d="M 5 55 Q 47.5 25 90 55" fill="transparent"/>
        <polyline points="80 38 90 55 72 58"
         stroke-linecap="butt" fill="none" stroke-linejoin="miter"/>
      </g>
    </defs>
    <use :xlink:href="
      `#${this.uruppadi}`
    "/>
  </svg>
</template>

<script>
export default {
  name: 'சேருக',
  props: ['uruppadi'],
  computed: {
    terntetukappattatu () {
      const திருத்தல்நிலை = this.$store.state.பார்வை.திருத்தல்நிலை
      return திருத்தல்நிலை.பெயர் === 'சேருக' && திருத்தல்நிலை.உருப்படி === this.uruppadi
    }
  },
  methods: {
    onClick (நி) {
      if (this.terntetukappattatu) {
        this.$store.dispatch(
          'பார்வை/திருத்தல்நிலை_மாற்றம்',
          { பெயர்: 'திருத்தல்' }
        )
      } else {
        this.$store.dispatch(
          'பார்வை/திருத்தல்நிலை_மாற்றம்',
          { பெயர்: 'சேருக', உருப்படி: this.uruppadi }
        )
      }
    }
  }
}
</script>

<style scoped>
  svg:hover {
    stroke: #3366ff;
    background: #fbfbfb;
    fill: #fbfbfb;
  }
  .தேர்ந்தெடுக்கப்பட்டது {
    stroke: #3366ff;
    background: #fbfbfb;
    fill: #fbfbfb;
  }
</style>
