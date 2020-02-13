var cldr = require('cldr')

class எழுத்து {
  constructor (பெயர், இடதுவலது=true, மேல்கீழ்=true, horizontal=true) {
    this.பெயர் = பெயர்
    this.இடதுவலது = இடதுவலது
    this.மேல்கீழ் = மேல்கீழ்
    this.horizontal = horizontal
  }
}

class மொழி {
  constructor (பெயர், குறியீடு, எழுத்து, எண்ணுரு=null, நாள்காட்சி=null, glottologue=null, iso=null) {
    this.பெயர் = பெயர்
    this.glottologue = glottologue
    this.iso = iso
    this.குறியீடு = குறியீடு
  }
}
