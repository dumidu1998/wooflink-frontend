import React from 'react'
import styles from './Styles.module.css'

function WButton(props) {
    return (
        <button className={styles.btn} variant={props.variant} size={props.size ?? 'lg'} type={props.type ?? 'submit'} onClick={props.onClick}>
            {props.icon && <span className='me-2'>
                {props.icon}
            </span>}
            {props.text}
        </button>
    )
}

export default WButton