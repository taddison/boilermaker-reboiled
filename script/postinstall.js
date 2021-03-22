const fs = require('fs')
const {execSync} = require('child_process')

// Ensure the secrets.js file exists
fs.closeSync(fs.openSync('./secrets.js', 'w'))

// Install the npm-merge-driver if we're in a git repo
if (fs.existsSync('.git')) {
  execSync('npx npm-merge-driver install')
}
