import React from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import SellerRegistration3 from '../components/SellerRegistration3'

function sellerregistration2() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Wooflink</title>
                    <meta name="description" content="Wooflink" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            </div>
            <SellerRegistration3/>
        </>
    )
}

export default sellerregistration2