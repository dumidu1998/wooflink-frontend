import React from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import CustomerRegPage2 from '../components/CustomerRegPage2'


function cusregistration2() {
  return (
    <div className={styles.container}>
    <Head>
        <title>Wooflink | Registration</title>
        <meta name="description" content="Wooflink" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.mobileFrame}>
        <CustomerRegPage2 />
    </div>
</div>
  )
}
export default cusregistration2