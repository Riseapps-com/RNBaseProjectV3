const exec = require('shell-utils').exec;

const startEmulator = () => exec.execAsync('emulator -avd Nexus_5X_API_29_x86 -no-snapshot -memory 2048 -no-boot-anim')
const startReactNative = () => exec.execAsync('react-native start')
const build = () => exec.execSync('detox build -c android.em.debug')
const test = () => exec.execSync('detox test -c android.em.debug -f /e2e/index.spec.js')

startEmulator()
startReactNative()
build()
test()
