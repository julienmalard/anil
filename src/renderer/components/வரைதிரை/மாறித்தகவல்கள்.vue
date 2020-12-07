<template>
  <g>
    <circle
     :cx="100" :cy="100"
     r="12"
     style="fill:#ffffff;stroke:#24961e"
    />
    <foreignObject
      x="200"
      y="200"
    >
      <div xmlns="http://www.w3.org/1999/xhtml">
        <p>Test </p>
        <v-btn icon :ripple="false">
          <v-icon>mdi-cogs</v-icon>
        </v-btn>
        <v-card
          width="344"
          outlined
        >
          <p>Test 2</p>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">OVERLINE</div>
              <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
              <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn text>Button</v-btn>
            <v-btn text>Button</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </foreignObject>
  </g>
</template>

<script>
export default {
  name: 'மாறித்தகவல்கள்'
}
</script>

<style>

</style>
