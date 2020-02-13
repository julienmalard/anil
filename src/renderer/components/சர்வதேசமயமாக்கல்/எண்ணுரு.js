var cldr = require('cldr')

class முறைமை {
  constructor (பெயர்) {
    this.பெயர் = பெயர்
  }
}

class இடஞ்சார் extends முறைமை {
  constructor (பெயர், எண்கள்) {
    super.constructor(பெயர்)
    this.எண்கள் = எண்கள்
    this.base = length(எண்கள்)
  }
}

class இடஞ்சார்_பத்து extends முறைமை {
  constructor (பெயர், எண்கள், தசம, ) {
    super.constructor(பெயர்)
    this.எண்கள் = எண்கள்
    this.base = length(எண்கள்)
  }
  padittal (எண்) {
    this.எண்கள்.forEach((item, i) => {
      எண் = எண்.replace(item, i)
    })

    return float(எண்)
  }
}
