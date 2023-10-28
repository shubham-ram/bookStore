import Layout from '@/packages/page-components/Layout'

import { Provider } from 'react-redux';
import store from '@/store/store';

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps}/> 
            </Layout>
        </Provider>
    )
}
