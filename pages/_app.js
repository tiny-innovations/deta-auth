import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
            <title>Deta Auth</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Verify authentication state in a Deta Space app, among other things." />
                <meta name="keywords" content="Deta, Deta Space, s0urfruit, Deta Auth, npm, deta-auth, auth" />
                <meta name="author" content="Sourfruit" />
                <meta property="og:url" content="https://deta-auth.bysourfruit.com" />

                <meta property="og:title" content="Deta Auth" />
                <meta property="og:description" content="Verify authentication state in a Deta Space app, among other things." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://deta-auth.bysourfruit.com/logo.png" width="32px" height="32px" />
                <meta property="og:locale" content="en_US" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Deta Auth" />
                <meta name="twitter:description" content="Verify authentication state in a Deta Space app, among other things." />
                <meta name="twitter:image" content="https://deta-auth.bysourfruit.com/logo.png" width="32px" height="32px" />
                <meta name="twitter:image:alt" content="Deta Auth Logo" />

                <link rel="icon" type="image/png" sizes="32x32" href="https://deta-auth.bysourfruit.com/logo.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="https://deta-auth.bysourfruit.com/logo.png" />
        </Head>
        <Component {...pageProps} />
    </>
  )
}
