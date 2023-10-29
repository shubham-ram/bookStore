import Layout from '@/packages/page-components/Layout'

import { Provider } from 'react-redux';
import store from '@/store/store';

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

    const MainLayout = Component?.getLayout || Layout;

    return (
        <Provider store={store}>
            <MainLayout>
                <Component {...pageProps}/> 
            </MainLayout>
        </Provider>
    )
}
