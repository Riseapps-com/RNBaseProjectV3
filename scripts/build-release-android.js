const exec = require('shell-utils').exec;

const build = () => exec.execSync('rm -rf android/app/build && cd android && ./gradlew assembleRelease')
build()
