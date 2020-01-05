import { exec } from 'shell-utils'

const pressBack = () => exec.execSync('adb shell input keyevent 4')
const pressMenu = () => exec.execSync('adb shell input keyevent 82')
const pressEnter = keyCode => exec.execSync(`adb shell input keyevent 66`)
const pressLockButton = () => exec.execSync(`adb shell input keyevent 26`)
const pressKeyCode = keyCode => exec.execSync(`adb shell input keyevent ${keyCode}`)
const grantPermission = () =>
    exec.execSync('adb shell pm grant com.mentalhealth android.permission.READ_PHONE_STATE')
const revokePermission = () =>
    exec.execSync('adb shell pm revoke com.mentalhealth android.permission.READ_PHONE_STATE')
const openActivity = () => exec.execSync('adb shell am start -n com.mentalhealth/.MainActivity')
const executeShellCommand = command => exec.execSync(`adb shell ${command}`)
const enterText = text => exec.execSync(`adb shell input text ${text}`)
const swipeUp = () => exec.execSync('adb shell input touchscreen swipe 300 1200 500 0 100')

export {
    pressBack,
    pressMenu,
    pressEnter,
    pressLockButton,
    pressKeyCode,
    grantPermission,
    revokePermission,
    openActivity,
    executeShellCommand,
    enterText,
    swipeUp,
}
