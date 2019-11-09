import { Options } from 'react-native-navigation'

const waitForRenderOptions = (): Options => ({
    animations: {
        push: {
            waitForRender: true,
        },
        pop: {
            waitForRender: true,
        },
        setRoot: {
            waitForRender: true,
        },
        setStackRoot: {
            waitForRender: true,
        },
        showModal: {
            waitForRender: true,
        },
        dismissModal: {
            waitForRender: true,
        },
    },
})

export { waitForRenderOptions }
