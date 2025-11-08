import './Header.css';

function Header(props) {
    return (
        <header className = 'header'>
            <div className = 'header__section'>
                <p> {props.title} </p>
                <p> Web & Mobile Developer </p>
            </div>
            <div className = 'header__section links'>
                <p> Experience </p>
                <p> Projects </p>
                <p> Contact </p>
            </div>
        </header>
    )
}

export default Header;