import uniqid from 'uniqid'

export const PracticalExp = (props) => {
    const submitHandler = (e) => {
        e.preventDefault()
        const fromDateWorked = new Date(props.fromDateWorkedValue)
        const toDateWorked = new Date(props.toDateWorkedValue)
        const fromMonth = fromDateWorked.getMonth() + 1;
        const toMonth = toDateWorked.getMonth() + 1;
        const fromYear = fromDateWorked.getFullYear() % 100;
        const toYear = toDateWorked.getFullYear() % 100;

        const fromMonthYear = `${fromMonth}/${fromYear}`
        const toMonthYear = `${toMonth}/${toYear}`

        const newPracticalExp = {
            companyName: props.companyNameValue,
            positionTitle: props.positionTitleValue,
            mainTasks: props.taskArray,
            fromDateWorked: fromMonthYear,
            toDateWorked: toMonthYear,
            id: uniqid()
        }
        props.setPracticalExpArray((exp) => [...exp, newPracticalExp])
        props.setCompanyNameValue('')
        props.setPositionTitleValue('')
        props.setTaskArray('')
        props.setFromDateWorkedValue('')
        props.setToDateWorkedValue('')
    }

    return <div>
        <form onSubmit={submitHandler} style={practicalExperienceStyles.formContainer}>
            <div style={practicalExperienceStyles.practicalExperienceTitle}>Practical Experience</div>
            <label htmlFor='company-name' style={practicalExperienceStyles.label}>Company Name: </label>
            <input value={props.companyNameValue} onChange={(e) => props.setCompanyNameValue(e.target.value)} type='text' id='company-name' style={practicalExperienceStyles.input}></input>
            <label htmlFor='position-title' style={practicalExperienceStyles.label}>Position Title: </label>
            <input value={props.positionTitleValue} onChange={(e) => props.setPositionTitleValue(e.target.value)} type='text' id='position-title' style={practicalExperienceStyles.input}></input>
            <label htmlFor='main-tasks' style={practicalExperienceStyles.label}>Main Task: </label>
            <input value={props.taskArray} onChange={(e) => props.setTaskArray(e.target.value)} type='text' id='main-tasks' style={practicalExperienceStyles.input}></input>
            <label htmlFor='date-worked' style={practicalExperienceStyles.label}>Date Worked There: </label>
            <div style={practicalExperienceStyles.dateWorkedContainer}>
                <input value={props.fromDateWorkedValue} onChange={(e) => props.setFromDateWorkedValue(e.target.value)} type='date' id='from-date-worked' style={practicalExperienceStyles.input}></input>
                <div style={practicalExperienceStyles.dateWorkedText}>to</div>
                <input value={props.toDateWorkedValue} onChange={(e) => props.setToDateWorkedValue(e.target.value)} type='date' id='to-date-worked' style={practicalExperienceStyles.input}></input>
            </div>
            <button type='submit' style={practicalExperienceStyles.submitButton}>Add</button>
        </form>
    </div>
}

const practicalExperienceStyles = {
    formContainer: {
        border: '1px solid black',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }, practicalExperienceTitle: {
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
    }, dateWorkedContainer: {
        display: 'flex',
    }, dateWorkedText: {
        marginLeft: '10px',
        marginRight: '10px'
    }
}