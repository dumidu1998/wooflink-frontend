import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CustomerLoginPage from '../components/CustomerLoginPage'

function customerlogin() {
  return (
    <div className={styles.container}>
            <Head>
                <title>Wooflink</title>
                <meta name="description" content="Wooflink" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        <CustomerLoginPage />
        </div>
  )
}

export default customerlogin