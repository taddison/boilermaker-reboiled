const fs = require('fs')

fs.closeSync(fs.openSync('./secrets.js', 'w'))
