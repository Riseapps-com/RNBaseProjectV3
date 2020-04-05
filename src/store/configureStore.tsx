import { applyMiddleware, compose, createStore, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './rootSaga'
import { AppState, rootReducer } from './rootReducer'
import { Persistor } from 'redux-persist/es/types'
import { persistStore } from 'redux-persist'

const configureStore = (): Store<AppState> => {
    const sagaMiddleware = createSagaMiddleware()
    const store: Store<AppState> = createStore(
        rootReducer,
        compose(applyMiddleware(sagaMiddleware)),
    )
    sagaMiddleware.run(rootSaga)
    return store
}

const store: Store<AppState> = configureStore()
const persistor: Persistor = persistStore(store)

export { store, persistor }
