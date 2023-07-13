import uniqid from 'uniqid'

export const EducationalExp = (props) => {

    const submitHandler = (e) => {
        e.preventDefault()
        const dateOfStudy = new Date(props.dateOfStudyValue)
        const month = dateOfStudy.getMonth() + 1;
        const year = dateOfStudy.getFullYear() % 100;
        const dateOfStudyV = `${month}/${year}`
        const newEducationalExp = {
            schoolName: props.schoolNameValue,
            titleOfStudy: props.titleOfStudyValue,
            dateOfStudyV: dateOfStudyV,
            id: uniqid()
        }
        props.setEducationalExpArray((exp) => [...exp, newEducationalExp])
        props.setSchoolNameValue('')
        props.setTitleOfStudyValue('')
        props.setDateOfStudyValue('')
    }

    return <div>
        <form  onSubmit={submitHandler} style={educationalExperienceStyles.formContainer}>
            <div style={educationalExperienceStyles.educationalExpInfoTitle}>Educational Experience</div>
            <label htmlFor='school-name' style={educationalExperienceStyles.label}>School Name: </label>
            <input value={props.schoolNameValue} onChange={(e) => props.setSchoolNameValue(e.target.value)} type='text' id='school-name' style={educationalExperienceStyles.input}></input>
            <label htmlFor='title-of-study' style={educationalExperienceStyles.label}>Title of Study: </label>
            <input value={props.titleOfStudyValue} onChange={(e) => props.setTitleOfStudyValue(e.target.value)} type='text' id='title-of-study' style={educationalExperienceStyles.input}></input>
            <label htmlFor='date-of-study' style={educationalExperienceStyles.label}>Date of Study: </label>
            <input value={props.dateOfStudyValue} onChange={(e) => props.setDateOfStudyValue(e.target.value)} type='date' id='date-of-study' style={educationalExperienceStyles.input}></input>
            <button type='submit' style={educationalExperienceStyles.submitButton}>Add</button>
        </form>
    </div>
}

const educationalExperienceStyles = {
    formContainer: {
        border: '1px solid black',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }, educationalExpInfoTitle: {
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