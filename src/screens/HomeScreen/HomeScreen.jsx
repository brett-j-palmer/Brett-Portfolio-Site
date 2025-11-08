
import Header from '../../components/Header/Header.jsx';
import Intro from '../../components/Intro/Intro.jsx';
import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className = 'homeContainer'>
      <div className = 'scrollContainer'>
        <Header className = 'header' title="Brett Palmer"/>
        <Intro title = "Brett"/>
        <Intro title = "Brett"/>
        <Intro title = "Brett"/>
        <Intro title = "Brett"/>
      </div>
    </div>

  );
};

export default HomeScreen;
