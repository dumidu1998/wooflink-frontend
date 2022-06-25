import React from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import SelleRegistration from '../components/SellerRegistration'

function sellerregistration() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Wooflink</title>
                    <meta name="description" content="Wooflink" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <SelleRegistration/>
            </div>
        </>
    )
}

export default sellerregistration