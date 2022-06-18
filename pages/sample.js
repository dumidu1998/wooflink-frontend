import React from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

function sample() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Wooflink</title>
                    <meta name="description" content="Wooflink" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            </div>
        </>
    )
}

export default sample