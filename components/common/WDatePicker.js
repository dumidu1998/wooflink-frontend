import React, { useEffect, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import styles from './Styles.module.css'
import 'react-datepicker/dist/react-datepicker.css'

function WdatePicker(props) {

    const [selectedDate, setselectedDate] = useState(props.selectedDate ?? new Date())

    useEffect(() => {
        props.onChange?.(selectedDate)
    }, [props.selectedDate, selectedDate])


    return (
        <ReactDatePicker className={styles.datePicker} placeholder={props.placeholder} selected={selectedDate} onChange={(date) => setselectedDate(date)} />
    )
}

export default WdatePicker