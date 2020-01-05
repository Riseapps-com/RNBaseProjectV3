const exec = require('shell-utils').exec

const openSimulator = () =>
    exec.execSync(
        'open -a Simulator --args -CurrentDeviceUDID F17C3BFF-F881-44A7-BBB2-A9E40544D90A',
    )
const build = () => exec.execSync('detox build -c ios.sim.debug')
const test = () => exec.execSync('detox test -c ios.sim.debug -f /e2e/index.spec.js')
openSimulator()
build()
test()
