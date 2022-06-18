import React from 'react'
import SellerPlans from '../components/SellerPlans'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

function sellerplans() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Wooflink</title>
                <meta name="description" content="Wooflink" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SellerPlans />
        </div>
    )
}

export default sellerplans