// import ContactBar from '../ContactBar';
import './Intro.css';

function Intro(props) {
    return (
        <div className = 'intro-container'>
            <img
                src='/images/react-logo.png'
                alt = 'Logo'
                className = 'logo'
            />
            <h1 className='nameText'>Brett Palmer</h1>
            <p className='subtitleText'>
                Software Engineer & Mobile Developer
            </p>
            {/* <ContactBar /> */}
        </div>
    )
}

export default Intro;