export default () => {
  if (typeof window !== 'undefined') {
    window.__lo_site_id = '<%= options.luckyOrange %>'
    const rootScript = document.getElementsByTagName('script')[0]
    const luckyOrangeScript = document.createElement('script')
    luckyOrangeScript.type = 'text/javascript'
    luckyOrangeScript.defer = true
    luckyOrangeScript.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js'
    rootScript.parentNode.insertBefore(luckyOrangeScript, rootScript)
  }
}
