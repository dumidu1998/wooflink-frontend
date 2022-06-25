import React from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import HomePage from '../components/HomePage'

function home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Wooflink</title>
                <meta name="description" content="Wooflink" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomePage /> 
            
            </div>

    )
}

export default home