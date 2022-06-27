import React, { useEffect, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import styles from './Styles.module.css'
import 'react-datepicker/dist/react-datepicker.css'

function WdatePicker(props) {

    const [selecedDate, setselecedDate] = useState(props.selectedDate)

    useEffect(() => {
        props.onChange?.(selecedDate)
    }, [props.selectedDate, selecedDate])


    return (
        <ReactDatePicker className={styles.datePicker} placeholder={props.placeholder} selected={selecedDate} onChange={(date) => setselecedDate(date)} />
    )
}

export default WdatePicker