import React from 'react'
import SellerLoginPage from '../components/SellerLoginPage'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

function sellerlogin() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Wooflink | Seller Login</title>
                <meta name="description" content="Wooflink" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.mobileFrame}>
            <SellerLoginPage/>
    </div>
        </div>
    )
}
export default sellerlogin