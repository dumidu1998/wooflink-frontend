import React from 'react'
import styles from './Styles.module.css'
import { Form } from "react-bootstrap";

function WInput(props) {
    return (
        <Form.Control className={`${styles.formText} ${styles.textBox} ${props.className}`} type={props.type ?? "text"} placeholder={props.placeholder} />
    )
}

export default WInput