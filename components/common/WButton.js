import React from 'react'
import { Button } from "react-bootstrap";
import styles from './Styles.module.css'
function WButton(props) {
    return (
        <Button className={styles.btn} variant={props.variant} size={props.size ?? 'lg'} href="/home-page"  >
            {props.icon && <span className='me-2'>
                {props.icon}
            </span>}
            {props.text}
        </Button>
    )
}

export default WButton