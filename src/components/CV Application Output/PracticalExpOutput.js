import { useState } from 'react'
import '../../styles/PracticalExpOutput.css'

export const PracticalExpOutput = (props) => {
    const [editExpId, setEditExpId] = useState(null)
    const [editedCompanyName, setEditedCompanyName] = useState('')
    const [editedPositionTitle, setEditedPositionTitle] = useState('')
    const [editedMainTasks, setEditedMainTasks] = useState('')
    const [editedFromDateWorked, setEditedFromDateWorked] = useState('')
    const [editedToDateWorked, setEditedToDateWorked] = useState('')

    const handleEditClick = (id) => {
        setEditExpId(id)
    }

    const handleSave = (id, companyName, positionTitle, mainTasks, fromDateWorked, toDateWorked) => {
        const existingExp = props.practicalExpArray.find((exp) => exp.id === id);
        const existingCompanyName = existingExp ? existingExp.companyName : '';
        const existingPositionTitle = existingExp ? existingExp.positionTitle : '';
        const existingMainTasks = existingExp ? existingExp.mainTasks : '';
        const existingFromDateWorked = existingExp ? existingExp.fromDateWorked : '';
        const existingToDateWorked = existingExp ? existingExp.toDateWorked : '';
        let fromMonthYear = '';
        let toMonthYear = '';
        if (fromDateWorked && toDateWorked) {
            const fromDateWorkedValue = new Date(fromDateWorked)
            const toDateWorkedValue = new Date(toDateWorked)
            if (!isNaN(fromDateWorkedValue) && !isNaN(toDateWorkedValue)) {
                const fromMonth = fromDateWorkedValue.getMonth() + 1;
                const toMonth = toDateWorkedValue.getMonth() + 1;
                const fromYear = fromDateWorkedValue.getFullYear() % 100;
                const toYear = toDateWorkedValue.getFullYear() % 100;

                fromMonthYear = `${fromMonth}/${fromYear}`
                toMonthYear = `${toMonth}/${toYear}`
            }
        }

        setEditExpId(null)
        props.setPracticalExpArray((prevExp) => prevExp.map((exp) => {
            if (id === exp.id) {
                exp.companyName = companyName || existingCompanyName;
                exp.positionTitle = positionTitle || existingPositionTitle;
                exp.mainTasks = mainTasks || existingMainTasks;
                exp.fromDateWorked = fromMonthYear || existingFromDateWorked;
                exp.toDateWorked = toMonthYear || existingToDateWorked;
            }
            return exp;
        }))
        setEditedCompanyName('')
        setEditedPositionTitle('')
        setEditedMainTasks('')
        setEditedFromDateWorked('')
        setEditedToDateWorked('')
    }

    return <div>
        {
            props.practicalExpArray.map((exp) => {
                return (
                    <div key={exp.id}>
                        {editExpId === exp.id ? (
                        <div style={practicalExpOutputStyles.container}>
                            <input style={practicalExpOutputStyles.editedDateInput} defaultValue={exp.fromDateWorked} onChange={(e) => setEditedFromDateWorked(e.target.value)} type='date'></input>
                            <input style={practicalExpOutputStyles.editedDateInput} defaultValue={exp.toDateWorked} onChange={(e) => setEditedToDateWorked(e.target.value)} type='date'></input>
                            <div style={practicalExpOutputStyles.editedInputContainer}>
                                <input style={practicalExpOutputStyles.editedInput} defaultValue={exp.positionTitle} onChange={(e) => setEditedPositionTitle(e.target.value)} type='text'></input>
                                <input style={practicalExpOutputStyles.editedInput} defaultValue={exp.companyName} onChange={(e) => setEditedCompanyName(e.target.value)} type='text'></input>
                                <ul>
                                    <li>
                                        <input style={practicalExpOutputStyles.editedInput} defaultValue={exp.mainTasks} onChange={(e) => setEditedMainTasks(e.target.value)} type='text'></input>
                                    </li>
                                </ul>
                            </div>
                            <div style={practicalExpOutputStyles.expButtons}>
                                <a onClick={() => props.handleDelete(exp.id)} rel="noopener" className="deletePractical"/>
                                <div style={practicalExpOutputStyles.editContainer}>
                                    <div onClick={() => handleSave(exp.id, editedCompanyName, editedPositionTitle, editedMainTasks, editedFromDateWorked, editedToDateWorked)} className="savePractical"></div>
                                </div>
                            </div>
                        </div>) : (
                        <div style={practicalExpOutputStyles.container}>
                            <div style={practicalExpOutputStyles.fromToDateWorked}>{exp.fromDateWorked}-{exp.toDateWorked}</div>
                            <div>
                                <div style={practicalExpOutputStyles.positionTitle}>{exp.positionTitle}</div>
                                <div style={practicalExpOutputStyles.companyName}>{exp.companyName}</div>
                                <ul style={practicalExpOutputStyles.list}>
                                    <li style={practicalExpOutputStyles.mainTasks}>{exp.mainTasks}</li>
                                </ul>
                            </div>
                            <div style={practicalExpOutputStyles.expButtons}>
                                <a onClick={() => props.practicalHandleDelete(exp.id)} rel="noopener" className="deletePractical"/>
                                <div style={practicalExpOutputStyles.editContainer}>
                                    <div onClick={() => handleEditClick(exp.id)} className="editPractical"></div>
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

const practicalExpOutputStyles = {
    container: {
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '15px',
        marginTop: '10px'
    }, companyName: {
        width: '200px',
        height: '25px'
    }, positionTitle: {
        width: '200px',
        height: '25px',
        marginRight: '55px'
    }, fromToDateWorked: {
        width: '100px',
        height: '25px'
    }, editContainer: {
        marginRight: '10px'
    }, expButtons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }, mainTasks: {
        width: '400px',
        height: '25px'
    }, editedInputContainer: {
        display: 'flex',
        flexDirection: 'column'
    }, editedInput: {
        width: '100px',
        height: '25px',
    }, list: {
        margin: '0'
    }, editedDateInput: {
        width: '60px',
        height: '25px'
    }
}
