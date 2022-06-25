import styles from '../styles/Home.module.css'
import Head from 'next/head'
import CustomerReg from '../components/CustomerReg'

function cusregistration() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Wooflink</title>
                <meta name="description" content="Wooflink" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <CustomerReg />
        </div>

    )
}

export default cusregistration