import Reactotron from 'reactotron-react-native'
import {reactotronRedux as reduxPlugin} from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

export const reactotron = Reactotron.useReactNative({
    asyncStorage: {
        ignore: ['secret']
    },
    networking: true,
    errors: true
})
    .use(reduxPlugin())
    .use(sagaPlugin({}))
    .connect()

export default reactotron
