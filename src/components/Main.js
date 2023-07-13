import { useState } from "react"
import { InputOverview } from "./CV Application Input/InputOverview"
import { OutputOverview } from "./CV Application Output/OutputOverview"
import '../styles/Main.css'

export const Main = () => {
    const [nameInputValue, setNameInputValue] = useState('')
    const [emailInputValue, setEmailInputValue] = useState('')
    const [phoneNumberValue, setPhoneNumberValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')
    const [schoolNameValue, setSchoolNameValue] = useState('')
    const [titleOfStudyValue, setTitleOfStudyValue] = useState('')
    const [dateOfStudyValue, setDateOfStudyValue] = useState('')
    const [educationalExpArray, setEducationalExpArray] = useState([])
    const [companyNameValue, setCompanyNameValue] = useState('')
    const [positionTitleValue, setpositionTitleValue] = useState('')
    const [mainTasks, setMainTasks] = useState('')
    const [fromDateWorkedValue, setFromDateWorkedValue] = useState('')
    const [toDateWorkedValue, setToDateWorkedValue] = useState('')
    const [practicalExpArray, setPracticalExpArray] = useState([])

    const educationalDeleteHandler = (expId) => {
        setEducationalExpArray((prevExp) => prevExp.filter((exp) => exp.id !== expId))
    }

    const practicalDeleteHandler = (expId) => {
        setPracticalExpArray((prevExp) => prevExp.filter((exp) => exp.id !== expId))
    }

    return <div>
        <InputOverview mainNameValue={nameInputValue} mainSetNameInputValue={setNameInputValue} mainEmailInputValue={emailInputValue} mainSetEmailInputValue={setEmailInputValue} 
        mainPhoneNumberValue={phoneNumberValue} mainSetPhoneNumberValue={setPhoneNumberValue} mainDescriptionValue={descriptionValue} mainSetDescriptionValue={setDescriptionValue}
        mainSchoolNameValue={schoolNameValue} mainSetSchoolNameValue={setSchoolNameValue} mainTitleOfStudyValue={titleOfStudyValue} mainSetTitleOfStudyValue={setTitleOfStudyValue}
        mainDateOfStudyValue={dateOfStudyValue} mainSetDateOfStudyValue={setDateOfStudyValue} mainEducationalExpArray={educationalExpArray} mainSetEducationalExpArray={setEducationalExpArray}
        mainCompanyNameValue={companyNameValue} mainSetCompanyNameValue={setCompanyNameValue} mainPositionTitleValue={positionTitleValue} mainSetPositionTitleValue={setpositionTitleValue}
        mainTasksArray={mainTasks} mainSetTasksArray={setMainTasks} mainFromDateWorkedValue={fromDateWorkedValue} mainSetFromDateWorkedValue={setFromDateWorkedValue}
        mainToDateWorkedValue={toDateWorkedValue} mainSetToDateWorkedValue={setToDateWorkedValue} mainPracticalExpArray={practicalExpArray}
        mainSetPracticalExpArray={setPracticalExpArray}/>

        <OutputOverview mainNameValue={nameInputValue} mainEmailInputValue={emailInputValue} mainPhoneNumberValue={phoneNumberValue} mainDescriptionValue={descriptionValue}
        mainSchoolNameValue={schoolNameValue} mainTitleOfStudyValue={titleOfStudyValue} mainDateOfStudyValue={dateOfStudyValue} mainEducationalExpArray={educationalExpArray}
        mainSetEducationalExpArray={setEducationalExpArray} mainEducationalHandleDelete={educationalDeleteHandler} mainCompanyNameValue={companyNameValue} mainPositionTitleValue={positionTitleValue}
        mainTasksArray={mainTasks} mainFromDateWorkedValue={fromDateWorkedValue} mainToDateWorkedValue={toDateWorkedValue} mainPracticalExpArray={practicalExpArray} mainSetPracticalExpArray={setPracticalExpArray}
        mainPracticalDeleteHandler={practicalDeleteHandler}/>
    </div>
}