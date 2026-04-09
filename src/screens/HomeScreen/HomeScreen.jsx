
import Header from '../../components/Header/Header.jsx';
import Intro from '../../components/Intro/Intro.jsx';
import Experience from '../../components/Experience/Experience.jsx';
import './HomeScreen.css';

const texasInstruments = {
  title: "Texas Instruments",
  position: "Software Engineering Intern",
  imageSource: "/images/texas-instruments-logo.png",
  descriptions: [
    "Built a C# driver translating TCP/IP commands to SECS/GEM protocol, enabling 24/7 load-and-go operations", 
    "Engineered a C# conveyor control system to automate product transport and improve utilization across 200+ machines", 
    "Implemented SQL logic to update product locations and log command history, ensuring reliable factory operations"],
  startDate: "May 2024",
  endDate: "Aug 2025",
  location: "Portland, ME",
  skills: ["a", "b", "c"]
}

const uMaineResearch = {
  title: "University of Maine",
  position: "AI Research Assistant",
  imageSource: "/images/university-of-maine-logo.png",
  descriptions: [
    "Conducted a Wizard-of-Oz study on user interaction with artificial intelligence, focusing on trust in LLM outputs", 
    "Developed a React application using the OpenAI API to seed errors in LLM outputs for participants to detect and correct",
    "Experimented with prompt engineering and guardrails to introduce controlled LLM inaccuracies for user evaluation"],
  startDate: "Sep 2024",
  endDate: "May 2025",
  location: "Orono, ME",
  skills: ["a", "b", "c"]
}

const uMaineMLA = {
  title: "University of Maine",
  position: "Maine Learning Assistant",
  imageSource: "/images/university-of-maine-logo.png",
  descriptions: [
    "Assisted professor in creating coding exercises and study materials for an introductory Python course with 80+ students", 
    "Conducted office hours to support students in programming coursework and exam preparation",
    "Mentored 40+ students on study strategies, time management, and developing ownership of their learning"],
  startDate: "Jan 2023",
  endDate: "May 2026",
  location: "Orono, ME",
  skills: ["a", "b", "c"]
}


const HomeScreen = () => {
  return (
    <div className = 'homeContainer'>
      <div className = 'scrollContainer'>
        <Header className = 'header' title="Brett Palmer"/>
        <Experience experience = {texasInstruments}/>
        <Experience experience = {uMaineResearch}/>
        <Experience experience = {uMaineMLA}/>
        {/* <Intro title = "Built a C# driver translating TCP/IP commands to SECS/GEM protocol, enabling 24/7 load-and-go operations"/>
        <Intro title = "Brett"/>
        <Intro title = "Brett"/> */}
      </div>
    </div>

  );
};

export default HomeScreen;
