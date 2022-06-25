import React from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Grooming from '../components/Grooming'

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
            <Grooming/>
        </>
    )
}

export default sample