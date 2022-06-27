import React, { useMemo } from 'react'
import ReactDatePicker from 'react-datepicker'
import styles from './Styles.module.css'
import 'react-datepicker/dist/react-datepicker.css'

function WdatePicker(props) {
    const selectedDate = useMemo(() => {
        return props.selectedDate ? props.selectedDate : new Date()
    }, [props.selectedDate])
    return (
        <ReactDatePicker className={styles.datePicker} placeholder={props.placeholder} selected={selectedDate} onChange={(date) => props.onChange?.(date)} />
    )
}

export default WdatePicker