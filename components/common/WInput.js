import React from 'react'
import styles from './Styles.module.css'
import { Form } from "react-bootstrap";

function WInput(props) {
    return (
        <Form.Control className={`text-box form-text ${styles.formText} ${styles.textBox}`} type={props.type ?? "text"} placeholder={props.placeholder} />
    )
}

export default WInput