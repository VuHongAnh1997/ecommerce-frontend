import {createStore, applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers'
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage: storage
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer,
    composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);
export { persistor, store };