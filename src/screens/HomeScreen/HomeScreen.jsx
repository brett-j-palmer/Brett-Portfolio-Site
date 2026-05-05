
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
    "Built a C# driver translating TCP/IP commands to SECS/GEM protocol, enabling continuous 24/7 load-and-go operations across the factory floor.",
    "Engineered a conveyor control system in C# to automate product transport, improving machine utilization across a fleet of 200+.",
    "Implemented SQL logic to track product locations and log command history, ensuring reliable and auditable factory operations.",
  ],
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
    "Conducted a Wizard-of-Oz study on how users interact with AI, with a focus on trust and skepticism toward LLM-generated outputs.",
    "Built a React application using the OpenAI API to deliberately seed errors into LLM responses for participants to detect and correct.",
    "Experimented with prompt engineering techniques and guardrails to introduce controlled inaccuracies suitable for user evaluation.",
  ],
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
    "Collaborated with the professor to design coding exercises and study materials for an introductory Python course serving 80+ students.",
    "Led weekly office hours to support students through programming assignments and exam preparation.",
    "Mentored 40+ students on study strategies, time management, and building ownership of their own learning.",
  ],
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
    "Designed and built a full-stack mobile application for the International Writing Across the Curriculum Conference, a non-profit academic writing conference.",
    "Gave attendees a single place to browse sessions, build personalized schedules, and connect with others.",
    "Cut client costs by replacing expensive third-party event software with a lean, open-source alternative built from scratch.",
  ],
  skills: ["Mobile Development", "Project Management", "React Native", "Supabase", "Resend", "Jest"],
  takeaway: "Shipped a fully functional app to both iOS and Android, bringing client costs down from $8,000 to $40.",
}

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
