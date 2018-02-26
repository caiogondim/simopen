#!/usr/bin/env node

const exec = require('child_process').execSync

exec(`xcrun simctl openurl booted ${process.argv[2]} && open -a Simulator`)
