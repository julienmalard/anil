export default class சுட்டியிழுத்தல் {
  constructor (நி, ஆரம்பம், வகை = null) {
    this.வகை = வகை
    this.சமநிலை = this._சுட்டிகண்டுபிடி_மூல்(நி)
    this.ஆரம்பம் = ஆரம்பம்
    this.தற்பொழுது = ஆரம்பம்
  }
  _சுட்டிகண்டுபிடி_மூல் (நி) {
    let ங = 0
    let ஞ = 0
    if (நி.touches) {
      ங = நி.touches[0].pageX
      ஞ = நி.touches[0].pageY
    } else {
      ங = நி.pageX
      ஞ = நி.pageY
    }
    return { ங, ஞ }
  }
  சுட்டிகண்டுபிடி (நி) {
    const { ங, ஞ } = this._சுட்டிகண்டுபிடி_மூல்(நி)
    this.தற்பொழுது = {
      ங: this.ஆரம்பம்.ங + (ங - this.சமநிலை.ங),
      ஞ: this.ஆரம்பம்.ஞ + (ஞ - this.சமநிலை.ஞ)
    }
    return this.தற்பொழுது
  }
}
