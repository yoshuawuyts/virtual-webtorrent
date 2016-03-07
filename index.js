const virtualWidget = require('virtual-widget')
const WebTorrent = require('webtorrent')
const assert = require('assert')

// obj -> obj:HtmlEl
module.exports = virtualWidget({
  init: function () {
    assert.ok(this.state.torrent, 'opts.torrent should be defined')

    const wrapper = document.createElement('div')
    const torrentFile = this.state.torrent
    const client = new WebTorrent()
    const torrent = client.add(torrentFile, function () {
      torrent.files[0].appendTo(wrapper)
    })

    return wrapper
  }
})
