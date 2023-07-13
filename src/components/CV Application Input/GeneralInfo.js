import '../../styles/GeneralInfo.css'
import { useState } from 'react'
import { GeneralInfoOutput } from '../CV Application Output/GeneralInfoOutput'

export const GeneralInfo = (props) => {

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return <div>
        <form style={generalInfoStyles.formContainer} onSubmit={(e) => submitHandler(e)}>
            <div style={generalInfoStyles.generalInfoTitle}>General Information</div>
            <label htmlFor='name' style={generalInfoStyles.label}>Name: </label>
            <input value={props.nameValue} onChange={(e) => props.setNameValue(e.target.value)} type='text' id='name' style={generalInfoStyles.input}></input>
            <label htmlFor='email' style={generalInfoStyles.label}>Email: </label>
            <input value={props.emailValue} onChange={(e) => props.setEmailValue(e.target.value)} type='email' id='email' style={generalInfoStyles.input}></input>
            <label htmlFor='phone-number' style={generalInfoStyles.label}>Phone Number: </label>
            <input value={props.phoneNumberValue} onChange={(e) => props.setPhoneNumberValue(e.target.value)} type='text' id='phone-number' style={generalInfoStyles.input}></input>
        </form>
    </div>
} 

const generalInfoStyles = {
    formContainer: {
        border: '1px solid black',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }, generalInfoTitle: {
        marginBottom: '15px',
        fontFamily: "'Cabin', sans-serif",
        fontSize: '25px'
    }, label: {
        marginBottom: '10px'
    }, input: {
        width: '75%',
        marginBottom: '7px'
    }, submitButton: {
        border: 'none',
        backgroundColor: 'green',
        color: 'white',
        padding: '10px 30px 10px 30px',
        marginTop: '20px',
        borderRadius: '4px'
    }
}