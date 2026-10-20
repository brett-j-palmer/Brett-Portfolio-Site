import { useState } from 'react';
import Header from '../../components/Header/Header.jsx';
import Intro from '../../components/Intro/Intro.jsx';
import Experience from '../../components/Experience/Experience.jsx';
import Project from '../../components/Project/Project.jsx';
import Contact from '../../components/Contact/Contact.jsx';
import './HomeScreen.css';

// IMAGES 

import texasInstrumentsLogo from "../../assets/images/texas-instruments-logo.png";
import uMaineLogo from "../../assets/images/university-of-maine-logo.png"

// Coding Project Images
import iwacAppImage from "../../assets/images/coding/iwac-app.png"
import gratitudeImage from "../../assets/images/coding/gratitude.png"
import jobAggregatorImage from "../../assets/images/coding/job-aggregator.png"
import poppinImage from "../../assets/images/coding/poppin.png"

// Art Project Images
import marinaImage from "../../assets/images/art/marina.jpg"
import honeymoonImage from "../../assets/images/art/honeymoon.jpg"
import piecesImage from "../../assets/images/art/pieces.png"
import goldImage from "../../assets/images/art/gold.png"

// Music Images
import backToBlackImage from "../../assets/images/music/back-to-black.png"
import oldMoneyImage from "../../assets/images/music/old-money.png"
import headlineImage from "../../assets/images/music/headline.png"

// EXPERIENCES

const texasInstrumentsFullTime = {
  title: "Texas Instruments",
  position: "Software Engineer",
  imageSource: texasInstrumentsLogo,
  descriptions: [
    "Building a SQL scheduling engine that automates and coordinates 500+ types of qualification runs across the factory.",
    "Increased throughput of an inherited toolset by 40% within the first three months in the role.",
    "Ramped up on an inherited codebase within weeks, becoming the sole engineer maintaining and extending it."
  ],
  startDate: "Jun 2026",
  endDate: "Present",
  location: "Portland, ME",
  skills: ["a", "b", "c"]
}

const texasInstrumentsIntern = {
  title: "Texas Instruments",
  position: "Software Engineering Intern",
  imageSource: texasInstrumentsLogo,
  descriptions: [
    "Engineered a conveyor control system in C# to automate product transport, improving machine utilization across a fleet of 200+.",
    "Built a C# driver translating TCP/IP commands to SECS/GEM protocol, enabling continuous 24/7 load-and-go operations across the factory floor.",
    "Implemented SQL procedures to update product locations and log command history, ensuring reliable factory transportation."
  ],
  startDate: "Summer 2024",
  endDate: "Summer 2025",
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
  texasInstrumentsFullTime,
  texasInstrumentsIntern,
  uMaineResearch,
  uMaineMLA
]

// CODING PROJECTS

const iwacApp = {
  title: "IWAC: Conference Mobile App",
  sourceURL: "https://github.com/umaine-capstone-iwac/IWAC-Conference-App",
  linkIcon: "github",
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
  sourceURL: "https://snack.expo.dev/@brettpalmer/brett-gratitude-final",
  linkIcon: "github",
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
  sourceURL: "https://github.com/brett-j-palmer/JobSearch-DataAggregator",
  linkIcon: "github",
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
  sourceURL: "https://github.com/brett-j-palmer/WEBMB_Poppin",
  linkIcon: "github",
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

// ART PROJECTS

const pieces = {
  title: "Pieces of You: Watercolor Triptych",
  imageSource: piecesImage,
  skills: ["Watercolor", "Storytelling"],
  descriptions: [
    "I am proud of this piece's demonstration of my ability to tell a story with artwork. I've always painted to cope with stress, but this was the first time I directly processed heavy themes through art.",
    "Each painting in this set represents my memories of someone who I have grieved. If you look closely, you will notice a wax-resist that creates ambiguity between presence and absence of the objects.",
    "This reflects my experience with mementos that keep me in limbo between physical reality and the company of those who I miss. This triptych is my greatest success at painting my thoughts and feelings in a manner that can move others.",
  ],
}

const marina = {
  title: "Marina: Graphite Portrait",
  imageSource: marinaImage,
  skills: ["Graphite", "Realism", "Portraiture"],
  descriptions: [
    "This portrait of musician Marina Diamandis is my most photorealistic portrait to date. It embodies my commitment to detail, with considerable attention given to accurately representing each strand of hair and eyelash.",
    "As an independently signed indie pop musician, Marina has inspired me to never confine my work to traditional genres and standards.",
    "In 2020, I presented to this portrait to her at a meet and greet following one of her concerts. From a distance, she thought I was holding a poster of her to sign. I was truly flattered that one of my greatest inspirations enjoyed my portrait of her.",
  ],
}

const honeymoon = {
  title: "Honeymoon: Acrylic Painting",
  imageSource: honeymoonImage,
  skills: ["Acrylic", "Abstract"],
  descriptions: [
    "This painting represents my first major departure from realism. I found myself becoming too comfortable with colored pencil portraiture, so I challenged myself to try something completely different.",
    "To make this piece, I listened to the album Honeymoon by Lana Del Rey and tried to paint what I hear. In the way I typically work to accurately portray facial features and expressions, I focused on reflecting the dreaminess and subtle darkness of the music.",
    "This piece was the first in a series of others with the same concept. That series taught me how to translate non-visual tones and themes into visual pieces, which has improved the emotions expressed in my portraiture.",
  ],
}

const gold = {
  title: "Golden Ray: 3D Model",
  imageSource: goldImage,
  skills: ["3D Modeling", "Blender"],
  descriptions: [
    "I created this still life when presented with the challenge of building a compelling scene from simple objects: a fork, spoon, mug, and apple.",
    "All objects and most of the textures from this scene were made from scratch. I loved tailoring each component to develop intrigue surrounding the gun on the windowsill."
  ],
}

// MUSIC PROJECTS

const headline = {
  title: "Headline Is My Hometown",
  sourceURL: "https://www.youtube.com/watch?v=adfA-SnrtRQ",
  linkIcon: "youtube",
  imageSource: headlineImage,
  descriptions: [
  "When the 2023 Lewiston, Maine shooting occurred 30 minutes from my home, I was at a loss for words. It wasn't until I wrote this song that I could process what happened.",
  <>
    In rural Maine, you're often told that such atrocities could never happen
    in your town. It's a dismissive sentiment that I challenge with the lyrics
    of the song: <em>"All the news it felt so far. There's search parties out
    on my yard."</em>
  </>,
  "Releasing this song connected me with members of my community and helped us bond over an urgency for change. I was grateful that my music could facilitate part of that conversation.",
],
  skills: ["Songwriting", "Music Production", "Guitar", "Vocals"],
}

const backToBlack = {
  title: "Back to Black: Amy Winehouse Cover",
  sourceURL: "https://www.youtube.com/watch?v=8fj9Tx3-iWU",
  linkIcon: "youtube",
  imageSource: backToBlackImage,
  descriptions: [
    <>
      <em>Back to Black</em> by Amy Winehouse is one of my favorite songs due to its raw honesty with the listener.
      When covering the song with my friend Ruby Colwell, I took great care in capturing that same vulnerability with our performance.
    </>,
    "The aspect of this cover I take the most pride in is the instrumentation. Every single sound besides our vocals is a stock instrument from Logic Pro X. I challenged myself to make each one sound as acoustic as possible, and learned a lot about sound engineering in the process.",
  ],
  skills: ["Music Production", "Vocals"],
}

const oldMoney = {
  title: "Old Money: Lana Del Rey Cover",
  sourceURL: "https://www.youtube.com/watch?v=y_3V9IEoTyQ",
  linkIcon: "youtube",
  imageSource: oldMoneyImage,
  descriptions: [
    <>
      <em>Old Money</em> by Lana Del Rey is the first song I ever covered. 
      Made with GarageBand in the 10th grade, this piece is still one of the dearest to me.
    </>,
    "The piece's music video is what sets it apart from my other work. I created a video montage of clips that seem arbitrary on their own: a couple aimlessly walking the streets, Road Runner, a surging crowd on Black Friday.",
    "But pieced together, narrated by the music, they paint a greater picture of the decades of media that shaped my perception of the world as a teenager surfing the internet."

  ],
  skills: ["Music Production", "Vocals", "Video Collage"],
}


const codingProjects = [iwacApp, gratitudeApp, jobAggregator, poppin];
const artProjects = [marina, gold, honeymoon, pieces];
const musicProjects = [headline, backToBlack, oldMoney];

const projectsByCategory = {
  Coding: codingProjects,
  Art: artProjects,
  Music: musicProjects,
};
const projectCategories = Object.keys(projectsByCategory);


const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(projectCategories[0]);

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
          <div
            className="headerLinkGroup projectCategoryPicker"
            role="group"
            aria-label="Project categories"
          >
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                className="headerLink projectCategoryButton"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div
            className="projectList"
            role="region"
            aria-label={`${activeCategory} projects`}
          >
            {projectsByCategory[activeCategory].map((project, index) => (
              <Project key={`${project.title}-${index}`} project={project}/>
            ))}
          </div>
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