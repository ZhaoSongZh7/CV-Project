export const GeneralInfoOutput = (props) => {

    return <div style={GeneralInfoOutputStyles.container}>
        <div style={GeneralInfoOutputStyles.nameVal}>{props.nameValue}</div>
        <div style={GeneralInfoOutputStyles.phoneAndEmailContainer}>
            <div style={GeneralInfoOutputStyles.emailVal}>{props.emailValue}</div>
            <div style={GeneralInfoOutputStyles.dot}>&middot;</div>
            <div>{props.phoneNumberValue}</div>
        </div>
    </div>
}

const GeneralInfoOutputStyles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }, nameVal: {
        fontSize: '40px',
        fontWeight: '700',
    }, emailVal: {
        fontSize: '18px'
    }, phoneAndEmailContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }, dot: {
        fontSize: '30px'
    }
}