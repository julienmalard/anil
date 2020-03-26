<template>
  <v-tooltip
    bottom
    :open-delay="500"
    transition="fade-transition"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        tile depressed color="white"
        min-height="45" min-width="45" max-height="45" max-width="45"
        v-on="on"
        :ripple="false"
        :input-value="terntetukappattatu"
      >
        <svg
          v-bind:class="{ தேர்ந்தெடுக்கப்பட்டது: terntetukappattatu }"
          viewBox="0 0 100 100" fill="transparent" stroke="black" stroke-width="7px"
          width="24" height="24"
          @click="onClick"
        >
          <defs>
            <g id="நிலை">
              <rect width="90px" height="60px" rx="2" ry="2" x="5" y="20"/>
            </g>
            <g id="துணை">
              <circle cx="50" cy="50" r="45"/>
            </g>
            <g id="ஓட்டம்">
              <line x1="0" y1="40" x2="83" y2="40" />
              <line x1="0" y1="60" x2="83" y2="60" />
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
            <g id="நிழல்">
              <circle cx="50" cy="50" r="45" stroke-dasharray="5,5"/>
            </g>
          </defs>
          <use :xlink:href="`#${uruppadi}`"/>
        </svg>
      </v-btn>
    </template>
    <span> {{ uruppadi }} சேருக </span>
  </v-tooltip>
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
</style>
