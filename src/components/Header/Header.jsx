import './Header.css';

function Header({title}) {
    return (
        <header className = 'header'>
            <div className = 'header__section'>
                <p className = 'header__name'> {title} </p>
                <p> Web & Mobile Developer </p>
            </div>
            <div className = 'header__section header__links'>
                <a href = "#experienceHeader">
                    <p> Experience </p>
                </a>
                <a href = "#projectsHeader">
                    <p> Projects </p>
                </a>
                <a>
                    <p> Contact </p>
                </a>
            </div>
        </header>
    )
}

export default Header;