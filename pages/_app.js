import Layout from '@/packages/page-components/Layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps}/> 
        </Layout>
    )
}
