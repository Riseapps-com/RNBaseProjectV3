import { exec } from 'shell-utils'
const detox = require('detox')
const config = require('../package.json').detox
const adapter = require('detox/runners/jest/adapter')
const specReporter = require('detox/runners/jest/specReporter')
const assignReporter = require('detox/runners/jest/assignReporter')

jest.setTimeout(600000)
jasmine.getEnv().addReporter(adapter)
jasmine.getEnv().addReporter(specReporter)
jasmine.getEnv().addReporter(assignReporter)

beforeAll(async () => {
    await detox.init(config, { launchApp: false })
    await device.launchApp({ permissions: { notifications: 'YES' } })
    // disableAndroidEmulatorAnimations()
})

beforeEach(async () => {
    await adapter.beforeEach()
})

afterAll(async () => {
    await adapter.afterAll()
    await detox.cleanup()
})

const disableAndroidEmulatorAnimations = () => {
    if (device.getPlatform() === 'android') {
        const { _deviceId: deviceId } = device
        exec.execAsync(`adb -s ${deviceId} shell settings put global window_animation_scale 0.0`)
        exec.execAsync(
            `adb -s ${deviceId} shell settings put global transition_animation_scale 0.0`,
        )
        exec.execAsync(`adb -s ${deviceId} shell settings put global animator_duration_scale 0.0`)
    }
}
