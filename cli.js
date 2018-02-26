const exec = require('child_process').execSync

exec(`open -a Simulator && xcrun simctl openurl booted ${process.argv[2]}`)
