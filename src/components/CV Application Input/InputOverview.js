import { useState } from 'react'
import { GeneralInfo } from './GeneralInfo'
import { EducationalExp } from './EducationalExp'
import { PracticalExp } from './PracticalExp'
import { Description } from './Description'
import '../../styles/InputOverview.css'

export const InputOverview = (props) => {

    return <div>
        <div className="input-overview-container" style={inputOverviewStyles.container}>
            <div><GeneralInfo nameValue={props.mainNameInputValue} setNameValue={props.mainSetNameInputValue} emailValue={props.mainEmailInputValue} setEmailValue={props.mainSetEmailInputValue}
            phoneNumberValue={props.mainPhoneNumberValue} setPhoneNumberValue={props.mainSetPhoneNumberValue}/> </div>
            <div style={inputOverviewStyles.educationalExp}><EducationalExp schoolNameValue={props.mainSchoolNameValue} setSchoolNameValue={props.mainSetSchoolNameValue} titleOfStudyValue={props.mainTitleOfStudyValue}
            setTitleOfStudyValue={props.mainSetTitleOfStudyValue} dateOfStudyValue={props.mainDateOfStudyValue} setDateOfStudyValue={props.mainSetDateOfStudyValue} educationalExpArray={props.mainEducationalExpArray}
            setEducationalExpArray={props.mainSetEducationalExpArray}/> </div>
            <div style={inputOverviewStyles.descriptionInfo}><Description descriptionValue={props.mainDescriptionValue} setDescriptionValue={props.mainSetDescriptionValue}/></div>
            <div style={inputOverviewStyles.practicalExp}><PracticalExp companyNameValue={props.mainCompanyNameValue} setCompanyNameValue={props.mainSetCompanyNameValue}
            positionTitleValue={props.mainPositionTitleValue} setPositionTitleValue={props.mainSetPositionTitleValue} taskArray={props.mainTasksArray} setTaskArray={props.mainSetTasksArray}
            fromDateWorkedValue={props.mainFromDateWorkedValue} setFromDateWorkedValue={props.mainSetFromDateWorkedValue} toDateWorkedValue={props.mainToDateWorkedValue}
            setToDateWorkedValue={props.mainSetToDateWorkedValue} practicalExpArray={props.mainPracticalExpArray} setPracticalExpArray={props.mainSetPracticalExpArray}/> </div>
        </div>
    </div>
}

const inputOverviewStyles = {
    container: {
        position: 'absolute',
        left: '100px',
        marginTop: '165px',
        display: 'grid',
        gridTemplate: '350px / auto auto auto auto auto auto',
        columnGap: '15px',
        zIndex: '210',
    }, generalInfo: {
        gridColumnStart: '1',
        gridColumnEnd: '2'
    }, educationalExp: {
        gridColumnStart: '4',
        gridColumnEnd: '6'
    }, practicalExp: {
        gridRowStart: '2',
        gridColumnStart: '1',
        gridColumnEnd: '6'
    }, descriptionInfo: {
        marginRight: '15px',
        gridColumnStart: '3',
        gridColumnEnd: '4',
        gridRowStart: '1'
    }
}