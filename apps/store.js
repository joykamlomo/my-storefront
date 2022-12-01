import { configureStore } from '@reduxjs/toolkit';
import basketSlice from '../slices/basketSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import persistStore from 'redux-persist/lib/persistStore';
import shippingSlice from '../slices/shippingSlice';

//store.js
const persistConfig = {
  key: 'counter',
  storage,
};

// const basketRed
//store.js
const reducers = combineReducers({
  basket: basketSlice,
  shippingdetails: shippingSlice,
});

///store.js
const persistedReducer = persistReducer(persistConfig, reducers);

//store.js
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
