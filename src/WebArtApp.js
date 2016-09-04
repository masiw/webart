var Log = require('log')
let log = new Log('masi.WebArtApp')

class WebArtApp {
  sayHello () {
    log.info('Hello, World!')
  }
}

module.exports = WebArtApp
