
import Header from '../../components/Header/Header.jsx';
import Intro from '../../components/Intro/Intro.jsx';
import Experience from '../../components/Experience/Experience.jsx';
import Project from '../../components/Project/Project.jsx'
import './HomeScreen.css';

import texasInstrumentsLogo from "../../assets/images/texas-instruments-logo.png";
import uMaineLogo from "../../assets/images/university-of-maine-logo.png"
import iwacApp from "../../assets/images/iwac-app.png"

const texasInstruments = {
  title: "Texas Instruments",
  position: "Software Engineering Intern",
  imageSource: texasInstrumentsLogo,
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
  imageSource: uMaineLogo,
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
  imageSource: uMaineLogo,
  descriptions: [
    "Assisted professor in creating coding exercises and study materials for an introductory Python course with 80+ students", 
    "Conducted office hours to support students in programming coursework and exam preparation",
    "Mentored 40+ students on study strategies, time management, and developing ownership of their learning"],
  startDate: "Jan 2023",
  endDate: "May 2026",
  location: "Orono, ME",
  skills: ["a", "b", "c"]
}

const experiences = [
  texasInstruments,
  uMaineResearch,
  uMaineMLA
]

const project = {
  imageSource: iwacApp,
  imageCaption: "Sample screens from the IWAC Application",
  title: "IWAC Conference Mobile App",
  descriptions: [
    "Developed a full-stack mobile application for the International Writing Across the Curriculum Conference, a non-profit writing conference.",
    "Enabled attendees to manage schedules, connect with others, and build personalized agendas.",
    "Replaced expensive third-party solutions with a streamlined, open-source alternative.",
  ],
  skills: ["Mobile Development", "Project Management", "React Native", "Supabase", "Resend", "Jest"],
  takeaway:
    "Deployed a fully functional mobile app to both iOS and Android, reducing client costs from $8000 to $40.",
};


const HomeScreen = () => {
  return (
    <div className = 'homeContainer'>
      <div className = 'scrollContainer'>
        <Header className = 'header' title="Brett Palmer"/>
        <Intro/>
        <div className = 'experienceSection' >
          <h1 id="experienceHeader" className = 'sectionHeader' > Experience </h1>
          <div className='experienceGrid' >
            {experiences.map((experience, index) => (
              <Experience key = {index} experience = {experience}/>
            ))}
          </div>
        </div>

        <div className = 'projectsSection' >
          <h1 id="projectsHeader" className = 'sectionHeader' > Projects </h1>
          <Project project = {project} />
        </div>

      </div>
    </div>

  );
};

export default HomeScreen;
