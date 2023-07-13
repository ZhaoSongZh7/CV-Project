import '../../styles/EducationalExpOutput.css'
import { useState } from 'react'

export const EducationalExpOutput = (props) => {
    const [editExpId, setEditExpId] = useState(null)
    const [editedSchoolNameValue, setEditedSchoolNameValue] = useState('')
    const [editedTitleOfStudyValue, setEditedTitleOfStudyValue] = useState('')
    const [editedDateOfStudyValue, setEditedDateOfStudyValue] = useState('')

    const handleEditClick = (id) => {
        setEditExpId(id)
    }

    const handleSave = (id, schoolName, titleOfStudy, dateOfStudy) => {
        const existingExp = props.educationalExpArray.find((exp) => exp.id === id);
        const existingSchoolName = existingExp ? existingExp.schoolName : '';
        const existingTitleOfStudy = existingExp ? existingExp.titleOfStudy : '';
        const existingDateOfStudy = existingExp ? existingExp.dateOfStudyV : '';
        let finishedDateOfStudyV = '';
        if (dateOfStudy) {
            const dateOfStudyValue = new Date(dateOfStudy)
            if (!isNaN(dateOfStudyValue)) {
                const month = dateOfStudyValue.getMonth() + 1;
                const year = dateOfStudyValue.getFullYear() % 100;
                finishedDateOfStudyV = `${month}/${year}`
            }
        }

        setEditExpId(null)
        props.setEducationalExpArray((prevExp) => prevExp.map((exp) => {
            if (id === exp.id) {
                exp.schoolName = schoolName || existingSchoolName;
                exp.titleOfStudy = titleOfStudy || existingTitleOfStudy;
                exp.dateOfStudyV = finishedDateOfStudyV || existingDateOfStudy
            }
            return exp;
        }))
        setEditedSchoolNameValue('')
        setEditedTitleOfStudyValue('')
        setEditedDateOfStudyValue('')
    }

    return <div>
        {
            props.educationalExpArray.map((exp) => {
                return (
                    <div key={exp.id}>
                        {editExpId === exp.id ? (
                        <div style={educationalExpOutputStyles.container}>
                            <input defaultValue={exp.dateOfStudyV} onChange={(e) => setEditedDateOfStudyValue(e.target.value)} type='date'></input>
                            <input defaultValue={exp.schoolName} onChange={(e) => setEditedSchoolNameValue(e.target.value)} type='text'></input>
                            <input defaultValue={exp.titleOfStudy} onChange={(e) => setEditedTitleOfStudyValue(e.target.value)} type='text'></input>
                            <div style={educationalExpOutputStyles.expButtons}>
                                <a onClick={() => props.educationalHandleDelete(exp.id)} rel="noopener" className="delete"/>
                                <div style={educationalExpOutputStyles.editContainer}>
                                    <div onClick={() => handleSave(exp.id, editedSchoolNameValue, editedTitleOfStudyValue, editedDateOfStudyValue)} className="save"></div>
                                </div>
                            </div>
                        </div>) : (
                        <div style={educationalExpOutputStyles.container}>
                            <div style={educationalExpOutputStyles.dateOfStudy}>{exp.dateOfStudyV}</div>
                            <div style={educationalExpOutputStyles.schoolName}>{exp.schoolName}</div>
                            <div style={educationalExpOutputStyles.titleOfStudy}>{exp.titleOfStudy}</div>
                            <div style={educationalExpOutputStyles.expButtons}>
                                <a onClick={() => props.educationalHandleDelete(exp.id)} rel="noopener" className="delete"/>
                                <div style={educationalExpOutputStyles.editContainer}>
                                    <div onClick={() => handleEditClick(exp.id)} className="edit"></div>
                                </div>
                            </div>
                        </div>
                        )
                        }
                    </div>
                )
            })
        }
    </div>
}

const educationalExpOutputStyles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px',
        marginTop: '15px'
    }, schoolName: {
        width: '200px',
        height: '25px'
    }, titleOfStudy: {
        width: '200px',
        height: '25px',
        marginRight: '55px'
    }, dateOfStudy: {
        width: '100px',
        height: '25px'
    }, editContainer: {
        marginRight: '10px'
    }, expButtons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}