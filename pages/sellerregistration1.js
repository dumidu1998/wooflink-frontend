import React from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import SellerRegistrationPage2 from '../components/SellerRegistrationPage2'

function sellerregistration1() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Wooflink</title>
                    <meta name="description" content="Wooflink" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            </div>
            <SellerRegistrationPage2/>
        </>
    )
}

export default sellerregistration1