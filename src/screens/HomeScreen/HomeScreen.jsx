
import Header from '../../components/Header/Header.jsx';
import Intro from '../../components/Intro/Intro.jsx';
import Experience from '../../components/Experience/Experience.jsx';
import Project from '../../components/Project/Project.jsx';
import Contact from '../../components/Contact/Contact.jsx';
import './HomeScreen.css';

import texasInstrumentsLogo from "../../assets/images/texas-instruments-logo.png";
import uMaineLogo from "../../assets/images/university-of-maine-logo.png"
import iwacAppImage from "../../assets/images/iwac-app.png"
import gratitudeImage from "../../assets/images/gratitude.png"
import jobAggregatorImage from "../../assets/images/job-aggregator.png"
import poppinImage from "../../assets/images/poppin.png"

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

const iwacApp = {
  title: "IWAC: Conference Mobile App",
  imageSource: iwacAppImage,
  imageCaption: "Agenda, Session Details, and Profile screens",
  descriptions: [
    "Designed and built a full-stack mobile application for the International Writing Across the Curriculum Conference, a non-profit academic writing conference.",
    "Gave attendees a single place to browse sessions, build personalized schedules, and connect with others.",
    "Cut client costs by replacing expensive third-party event software with a lean, open-source alternative built from scratch.",
  ],
  skills: ["Mobile Development", "Project Management", "React Native", "Supabase", "Resend", "Jest"],
  takeaway: "Shipped a fully functional app to both iOS and Android, bringing client costs down from $8,000 to $40.",
}

const gratitudeApp = {
  title: "Gratitude: Journaling App",
  imageSource: gratitudeImage, 
  imageCaption: "Feed, Login, and Profile screens",
  descriptions: [
    "Architected a cross-platform mobile application with secure authentication, cloud data storage, and real-time synchronization to ensure a seamless user experience.",
    "Implemented scalable social features including profile management, structured post privacy, and dynamic content feeds.",
    "Designed backend data models and client-side state management to support responsive and consistent interactions across devices.",
  ],
  skills: ["Mobile Development", "React Native", "Firebase", "Authentication", "Real-Time Systems"],
  takeaway: "Built a scalable mobile platform with real-time social features and secure cloud integration.",
}

const jobAggregator = {
  title: "Job Search Aggregator",
  imageSource: jobAggregatorImage, 
  imageCaption: "Histograms of Glassdoor (left) and Indeed (right) salary listings",
  descriptions: [
    "Developed automated data pipelines to scrape and process 225+ job listings per minute from multiple online platforms.",
    "Built search and filtering functionality to support job discovery by location, salary, and relevance.",
    "Optimized data processing workflows for efficiency and reliability using structured parsing and transformation techniques.",
  ],
  skills: ["Data Analysis", "Python", "Selenium", "Beautiful Soup", "Pandas"],
  takeaway: "Enabled efficient large-scale job data aggregation and improved usability through targeted filtering tools.",
}

const poppin = {
  title: "Poppin: Social Media Website",
  imageSource: poppinImage,
  imageCaption: "Poppin social media feed, featuring a movie and game review",
  descriptions: [
    "Designed and developed an interest-based social media platform for sharing and discovering creative content.",
    "Engineered backend systems and APIs to support scalable user interactions and data storage.",
    "Implemented personalization logic to deliver customized content feeds based on user behavior.",
  ],
  skills: ["React", "Node.js", "MongoDB", "Full-Stack Development"],
  takeaway: "Created a full-stack social platform with personalized content delivery and scalable infrastructure.",
}

const projects = [iwacApp, gratitudeApp, jobAggregator, poppin];


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
          {projects.map((project, index) => (
            <Project key = {index} project = {project}/>
          ))}
        </div>

        <div className='contactSection'>
          <h1 id="contactHeader" className='sectionHeader'>Contact</h1>
          <Contact/>
        </div>

      </div>
    </div>

  );
};

export default HomeScreen;
