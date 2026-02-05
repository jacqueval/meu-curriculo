import { useState } from "react";
import { resume as resumePT } from "../data/resume.pt";
import { resume as resumeEN } from "../data/resume.en";

import Header from "../components/Header";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import LanguageToggle from "../components/LanguageToggle";
import Summary from "../components/Summary";


export default function Home() {
  const [lang, setLang] = useState("pt");

  const resume = lang === "pt" ? resumePT : resumeEN;

  return (
    <>
      <LanguageToggle lang={lang} setLang={setLang} />

      <Header resume={resume} />
      <Summary resume={resume} />
      <Experience resume={resume} />
      <Education resume={resume} />
      <Skills resume={resume} />
    </>
  );
}
