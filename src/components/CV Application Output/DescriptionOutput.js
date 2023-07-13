export const DescriptionOutput = (props) => {
    return <div>
        <div style={descriptionOutputStyles.description}>{props.descriptionValue}</div>
    </div>
}

const descriptionOutputStyles = {
    description: {
        marginLeft: '30px',
        marginTop: '15px',
        color: 'black'
    }
}