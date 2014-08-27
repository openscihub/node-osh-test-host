# Test host

## Installation

```
npm install osh-test-host
```

## Usage

```js
var host = require('osh-test-host');


// In node.js:

host();     // 'localhost:3333'
host.port;  // 3333


// In the browser:

host();     // ''
host.port;  // null
```

## License

MIT
