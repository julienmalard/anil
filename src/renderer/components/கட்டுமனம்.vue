<template>
  <div id="கட்டுமனம்" class="columns" v-show="ceyalil">
    <div class="column">வடிவம்</div>
    <div class="column" style="padding-top:0">
      <div class="container" style="padding:5px">
        மாறிகள்
      </div>
      <div class="container" style="padding:5px">
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
    <div class="column">அலங்காரம்</div>
    <div class="column">வரைபடம்</div>
  </div>
</template>

<script>
  export default {
    name: 'கட்டுமனம்',
    props: ['ceyalil']
  }
</script>

<style scoped>
#கட்டுப்பாடுகள் {
  padding: 10px 20px;
}
.சின்னம்:hover {
  background-color: #EEEEEE;
}
</style>
