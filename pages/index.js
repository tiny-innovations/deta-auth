import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

import Switch from "react-switch";

import useAuthState from 'deta-auth'
import { useEffect, useState } from 'react';

export default function Home() {
    const [security, setSecurity] = useState('secure')
    const [isChecked, setCheck] = useState(true)

    const { auth, loading, error } = useAuthState(`/api/${security}`)

    function switchSecurity() {
        console.log('Switching...')
        if (security == 'secure') {
            setSecurity('unsecure')
        } else {
            setSecurity('secure')
        }
    }

    function handleChange() {
        setCheck(!isChecked)
        switchSecurity()
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
                    <br/><br/>
                    <p className={styles.description}>
                        Verify authentication state in a Deta Space app, among other things.
                    </p>
                </div>
                <div style={{display: 'flex', marginTop: ''}}>
                    <a style={{marginBottom: '20px'}} className={styles.button} href="https://www.npmjs.com/package/deta-auth">View on NPM</a>
                    <a className={styles.button} href="https://github.com/tiny-innovations/deta-auth">View on GitHub</a>
                </div>
        
                <div className={styles.grid}>
                    <h3 className={inter.className}>
                        /api/{security}
                        <br/><br/>
                        <Switch onChange={handleChange} checked={isChecked} />
                    </h3><br/>

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
                            {error ? "Errored" : "No error"}
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
