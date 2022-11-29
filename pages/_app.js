import '../styles/globals.css';
import { persistor, store } from '../app/store';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';
//index.js
// import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
//...
// const persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
