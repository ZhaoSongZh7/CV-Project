export const Description = (props) => {
    const submitHandler = (e) => {
        e.preventDefault()
    }

    return <div>
        <form style={descriptionStyles.formContainer} onSubmit={submitHandler}>
            <div style={descriptionStyles.descriptionInfoTitle}>Summary</div>
            <label htmlFor='description' style={descriptionStyles.label}>Description: </label>
            <textarea value={props.descriptionValue} onChange={(e) => props.setDescriptionValue(e.target.value)} type='text' id='description' rows="7" style={descriptionStyles.input}></textarea>
        </form>
    </div>
}

const descriptionStyles = {
    formContainer: {
        border: '1px solid black',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }, descriptionInfoTitle: {
        marginBottom: '15px',
        fontFamily: "'Cabin', sans-serif",
        fontSize: '25px'
    }, label: {
        marginBottom: '10px'
    }, input: {
        resize: 'none',
        width: '90%',
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