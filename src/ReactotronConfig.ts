import Reactotron from 'reactotron-react-native'

let _enableLog = false

const configure = (enableLog: boolean): void => {
    _enableLog = enableLog
    configureReactotron().connect()
    connectConsoleToReactotron()
}

const configureReactotron = (): any => {
    const reactotron = Reactotron.useReactNative({
        asyncStorage: {
            ignore: ['secret'],
        },
        networking: true,
        errors: true,
    })
    Reactotron.clear()
    return reactotron
}

const connectConsoleToReactotron = () => {
    console.info = info
    console.log = log
    console.warn = warn
    console.error = error
}

const log = (message: string, ...args: any[]) => {
    if (!_enableLog) return
    Reactotron.display({
        name: 'LOG',
        preview: message,
        value: { message, args },
    })
}

const info = (message: string, ...args: any[]) => {
    if (!_enableLog) return
    Reactotron.display({
        name: 'INFO',
        preview: message,
        value: { message, args },
    })
}

const warn = (message: string, ...args: any[]) => {
    if (!_enableLog) return
    Reactotron.display({
        name: 'WARN',
        preview: message,
        value: { message, args },
        important: true,
    })
}

const error = (message: string, ...args: any[]) => {
    if (!_enableLog) return
    Reactotron.display({
        name: 'ERROR',
        preview: message,
        value: { message, args },
        important: true,
    })
}

export { configure, configureReactotron }
