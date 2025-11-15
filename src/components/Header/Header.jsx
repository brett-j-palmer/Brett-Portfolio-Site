import './Header.css';

function Header({title}) {
    return (
        <header className = 'header'>
            <div className = 'header__section'>
                <p className = 'header__name'> {title} </p>
                <p> Web & Mobile Developer </p>
            </div>
            <div className = 'header__section header__links'>
                <p> Experience </p>
                <p> Projects </p>
                <p> Contact </p>
            </div>
        </header>
    )
}

export default Header;