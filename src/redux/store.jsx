import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {filtersReducer} from './filterSlice';
import {contactsReducer} from './contactsSlice';

import storage from 'redux-persist/lib/storage';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
});

const persistedReducer = 
persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);



















// import {createStore} from 'redux';
// import { devToolsEnhancer } from '@reduxjs/toolkit/dist/devtoolsExtension';
// import { rootReducer} from './reducer';
// import {persistStore} from 'redux-persist';

// const enhancer = devToolsEnhancer();
// export const store = (rootReducer, enhancer);
// export const persistor = persistStore(store);