# Boilermaker-Reboiled

## 2021-03-14

### Done

* script/postinstall.js instead of `touch` for secrets.js Works on Windows now.
* removed the conditional around the install of `npm-merge-driver` (see https://www.npmjs.com/package/npm-merge-driver). Works on Windows now. See outstanding issue below.

### Issues

[x] Postinstall script doesn't work on Windows (no `touch` command) - what's a broadly compatible way of creating an empty file, or having the empty file show up?
[x] The `prepare` script uses conditional logic that doesn't work on Windows. Tests for the presence of the `.git` folder and if exists calls `npm-merge-driver install`. Not sure why this is in `prepare` vs. `postinstall`? See https://docs.npmjs.com/cli/v7/using-npm/scripts for package lifecycle events.
[ ] The 'fix' of always installing `npm-merge-driver install` might cause some weird behavior in scenarios where the code is deployed _not_ from a git repo (CI? Deploy?). Better solution would be conditionally checking for the `.git` folder in the postinstall script and executing the install there? Also gets rid of another package lifecycle event (unless there is some reason why it's in `prepare` and not `postinstall`?)

### Thoughts

* A single setup/bootstrap script might be preferable (e.g. run `node setup` after cloning rather than `npm install` - the setup handles dependency checks, install, postinstall, etc.)
