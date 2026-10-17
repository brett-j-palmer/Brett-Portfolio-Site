import './Header.css';

function Header({title}) {
    return (
        <header className = 'header'>
            <div className = 'header__section'>
                <p className = 'header__name'> {title} </p>
                <p> Web & Mobile Developer </p>
            </div>
            <div className = 'header__section header__links headerLinkGroup'>
                <a className="headerLink" href="#experienceHeader">Experience</a>
                <a className="headerLink" href="#projectsHeader">Projects</a>
                <a className="headerLink" href="#contactHeader">Contact</a>
            </div>
        </header>
    )
}

export default Header;