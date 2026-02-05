import { useState } from "react";
import { resume as resumePT } from "./data/resume.pt";
import { resume as resumeEN } from "./data/resume.en";


import Header from "./components/Header";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import ThemeToggle from "./components/ThemeToggle";
import DownloadPDF from "./components/DownloadPDF";
import LanguageToggle from "./components/LanguageToggle";
import AnimatedSection from "./components/AnimatedSection";

import "./index.css";

export default function App() {
 const [lang, setLang] = useState("pt");
  const resume = lang === "pt" ? resumePT : resumeEN;

  return (
    <main className="container">
      <ThemeToggle />
      <DownloadPDF />
      <LanguageToggle setLang={setLang} />

      <div id="resume">
        <AnimatedSection>
        <Header resume={resume}/>
        </AnimatedSection>
        
        <AnimatedSection>
        <Summary />
        </AnimatedSection>

        <AnimatedSection>
        <Experience />
        </AnimatedSection>

        <AnimatedSection>
        <Education />
        </AnimatedSection>

        <AnimatedSection>
        <Skills />
        </AnimatedSection>
        
      </div>
      
    </main>
  );
}


