import Layout from '@/packages/page-components/Layout'

import { Provider } from 'react-redux';
import store from '@/store/store';

import '@/styles/globals.css'
import { useEffect } from 'react';
import { getCookieValue } from '@/packages/utils/cookie';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
    const { push } = useRouter();

    const MainLayout = Component?.getLayout || Layout;

    useEffect(()=>{
        const isLoggedIn = getCookieValue({ cookieName: "user_id"})
        
        if(!isLoggedIn){
            push('/login');
            return;
        }
    },[])

    return (
        <Provider store={store}>
            <MainLayout>
                <Component {...pageProps}/> 
            </MainLayout>
        </Provider>
    )
}
