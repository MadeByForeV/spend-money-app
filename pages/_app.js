import '../styles/globals.css';
import Head from "next/head";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore';
import BalanceBar from "../components/BalanceBar";
import Cart from '../components/Cart';


const {store,persistor} = configureStore();

function MyApp({ Component, pageProps }) {
  return(
    <>

    <Provider store={store}>
      <PersistGate loading={null}  persistor={persistor}>
        <Head>
          <title>Spend Money App</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
        </Head>


        <div className="clearfix"><BalanceBar/></div>
         <div className="container-xl">
           <Component {...pageProps} />
         <Cart/>

         </div>
      </PersistGate>
    </Provider>
    </>
  )
}

export default MyApp
