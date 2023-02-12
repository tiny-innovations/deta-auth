import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

import useAuthState from 'deta-auth'
import { use, useEffect, useState } from 'react';

export default function Home() {
    const [security, setSecurity] = useState('secure')

    const { auth, loading, error } = useAuthState(`http://localhost:3000/api/${security}`)

    function switchSecurity() {
        if (security == 'secure') {
            setSecurity('unsecure')
        } else {
            setSecurity('secure')
        }
    }

    return (
        <>
            <Head>
                <title>Deta Auth</title>
                <meta name="description" content="A Deta Space authentication state library for React/Next.js" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={styles.main}>
                <div className={styles.center}>
                    <h1 className={inter.className}>Deta Auth, by Sourfruit</h1>
                </div>
                <a className={styles.button} href="https://www.npmjs.com/package/deta-auth">View on NPM</a>

                <div className={styles.grid}>
                    <h4 className={inter.className}>
                        Demo of <i>/api/{security}</i>
                        <br/><br/>
                        <a style={{cursor: 'pointer'}} onClick={() => {switchSecurity()}}><u>Switch</u></a>
                    </h4><br/>

                    <a className={styles.card}>
                        <h2 className={inter.className}>
                            {loading ? "Currently loading..." : "Finished loading"}
                        </h2>
                        <p className={inter.className}>
                            useAuthState (Deta Auth) returns a loading state, which can be used in tandem with a loader to prevent content being viewed before you know if a {"user's"} logged in or not.
                        </p>
                    </a>

                    <a className={styles.card}>
                        <h2 className={inter.className}>
                            {auth.session ? "Authenticated" : "Unauthenticated"}
                        </h2>
                        <p className={inter.className}>
                            useAuthState (Deta Auth) returns an auth object, including auth.session. Ultimately, this is the entire point of the hook.
                        </p>
                    </a>

                    <a className={styles.card}>
                        <h2 className={inter.className}>
                            {error ? "Error" : "No error"}
                        </h2>
                        <p className={inter.className}>
                            useAuthState (Deta Auth) returns an error object, notifying you if there was an error encountered when requesting state.
                        </p>
                    </a>

                    <a className={styles.card}>
                        <h2 className={inter.className}>
                            {auth.url}
                        </h2>
                        <p className={inter.className}>
                            useAuthState (Deta Auth) returns an auth object, including auth.url which allows you to quickly get the custom Space subdomain a user was assigned.
                        </p>
                    </a>


             

                </div>
            </main>
        </>
    )
}
