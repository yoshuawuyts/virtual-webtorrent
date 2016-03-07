const test = require('tape')
const virtualWebtorrent = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(virtualWebtorrent)
})
