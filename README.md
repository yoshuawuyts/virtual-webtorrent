# virtual-webtorrent [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

Webtorrent video element for virtual-dom.

## Usage
```js
const hyperx = require('hyperx')
const vdom = require('virtual-dom')
const hx = hyperx(vdom.h)
const createWebTorrent = require('virtual-webtorrent')

const tree = hx`
  <section>
    ${createWebTorrent({ torrent: torrent })}
  </section>
`
document.body.appendChild(vdom.create(tree))
```

## API
### webtorrent(opts)
Create a new webtorrent element. Options are:
- __torrent:__ required, torrent file

## Installation
```sh
$ npm install virtual-webtorrent
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/virtual-webtorrent.svg?style=flat-square
[3]: https://npmjs.org/package/virtual-webtorrent
[4]: https://img.shields.io/travis/yoshuawuyts/virtual-webtorrent/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/virtual-webtorrent
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/virtual-webtorrent/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/virtual-webtorrent
[8]: http://img.shields.io/npm/dm/virtual-webtorrent.svg?style=flat-square
[9]: https://npmjs.org/package/virtual-webtorrent
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
