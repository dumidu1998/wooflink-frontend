import React from 'react'
import styles from './Styles.module.css'
import { useField } from "formik";

function WInputi(props) {
    const [field, meta] = useField(props.name)
    return (
        <>
            <input
                {...field}
                id={props.id || props.name}
                className={`${styles.formText} ${styles.textBox} ${props.className}`}
                value={field.value}
                type={props.type ?? "text"}
                placeholder={props.placeholder}
                disabled={props.disabled}
            />
            {(meta.touched && meta.error) && <div className={styles.error}>{meta.error}</div>}
        </>
    )

}

export default WInputi