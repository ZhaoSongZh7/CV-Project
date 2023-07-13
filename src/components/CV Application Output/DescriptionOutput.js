export const DescriptionOutput = (props) => {
    return <div>
        <div style={descriptionOutputStyles.description}>{props.descriptionValue}</div>
    </div>
}

const descriptionOutputStyles = {
    description: {
        marginTop: '15px',
        color: 'black'
    }
}