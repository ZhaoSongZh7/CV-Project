import '../../styles/OutputOverview.css'
import { DescriptionOutput } from './DescriptionOutput'
import { GeneralInfoOutput } from "./GeneralInfoOutput"
import { EducationalExpOutput } from './EducationalExpOutput'
import { PracticalExpOutput } from './PracticalExpOutput'
import { eventWrapper } from '@testing-library/user-event/dist/utils'

export const OutputOverview = (props) => {
    return <div>
        <div className="output-overview-container" style={outputOverviewStyles.container}>
            <div style={outputOverviewStyles.overviewHeader}>
                <div style={outputOverviewStyles.info}><GeneralInfoOutput nameValue={props.mainNameValue} emailValue={props.mainEmailInputValue} phoneNumberValue={props.mainPhoneNumberValue}/> </div>
            </div>
            <div>
                <div style={outputOverviewStyles.summary}>
                    <div style={outputOverviewStyles.summaryTitle}>Summary</div>
                    <DescriptionOutput descriptionValue={props.mainDescriptionValue}/>
                </div>

                <div style={outputOverviewStyles.educationalExp}>
                    <div style={outputOverviewStyles.educationalExpTitle}>Educational Experience</div>
                    <EducationalExpOutput schoolNameValue={props.mainSchoolNameValue} titleOfStudyValue={props.mainTitleOfStudyValue}
                    dateOfStudyValue={props.mainDateOfStudyValue} educationalExpArray={props.mainEducationalExpArray} 
                    setEducationalExpArray={props.mainSetEducationalExpArray} educationalHandleDelete={props.mainEducationalHandleDelete}/>
                </div>

                <div style={outputOverviewStyles.practicalExp}>
                    <div style={outputOverviewStyles.practicalExpTitle}>Practical Experience</div>
                    <PracticalExpOutput companyNameValue={props.mainCompanyNameValue} positionTitleValue={props.mainPositionTitleValue} 
                    taskArray={props.mainTasksArray} fromDateWorkedValue={props.mainFromDateWorkedValue} toDateWorkedValue={props.mainToDateWorkedValue}
                    practicalExpArray={props.mainPracticalExpArray} setPracticalExpArray={props.mainSetPracticalExpArray}
                    practicalHandleDelete={props.mainPracticalDeleteHandler}/>
                </div>
            </div>
        </div>
    </div>
}

const outputOverviewStyles = {
    container: {
        position: 'absolute',
        fontFamily: "'Times New Roman', Times, serif",
        display: 'flex',
        marginTop: '165px',
        marginBottom: '200px',
        width: '700px',
        height: '730px',
        right: '100px',
        boxShadow: '1px 1px 8px black',
        zIndex: '200',
        overflow: 'scroll'
    }, overviewHeader: {
        position: 'absolute',
        left: '0',
        right: '0',
        height: '100px',
        backgroundColor: '#d9dadb',
        overflow: 'hidden',
    }, info: {
        position: 'absolute',
        // left: '20px',
        width: '100%',
        whiteSpace: 'nowrap'
    }, summary: {
        marginTop: '130px',
        marginLeft: '30px',
        width: '640px',
        height: '100px',
        wordWrap: 'break-word',
        textAlign: 'left'
    }, summaryTitle: {
        width: '90%',
        marginLeft: '30px',
        fontSize: '23px',
        fontWeight: 'bold',
        borderBottom: '1px solid gray',
        paddingBottom: '3px'
    }, educationalExpTitle: {
        marginLeft: '30px',
        // marginTop: '200px',
        width: '90%',
        fontSize: '23px',
        fontWeight: 'bold',
        borderBottom: '1px solid gray',
        paddingBottom: '3px'
    }, educationalExp: {
        marginLeft: '30px',
        width: '640px',
        wordWrap: 'break-word',
        textAlign: 'left'
    }, practicalExp: {
        // position: 'absolute',
        marginLeft: '30px',
        width: '640px',
        wordWrap: 'break-word',
        textAlign: 'left'
    }, practicalExpTitle: {
        // position: 'absolute',
        // marginTop: '600px',
        marginLeft: '30px',
        marginTop: '50px',
        width: '90%',
        fontSize: '23px',
        fontWeight: 'bold',
        borderBottom: '1px solid gray',
        paddingBottom: '3px'
    }
}