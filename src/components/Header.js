import '../styles/Header.css'

export const Header = () => {
    return <div className="header-container" style={headerStyles.headerContainer}>
        <div style={headerStyles.headerTitle}>CV Maker</div>
    </div>
}

const headerStyles = {
    headerContainer: {
        position: 'absolute',
        right: '0',
        left: '0',
        padding: '20px',
        boxShadow: '4px 4px 8px #d9d9d9',
        fontFamily: "'Belanosima', sans-serif",
    }, headerTitle: {
        fontSize: '50px',
    }
}