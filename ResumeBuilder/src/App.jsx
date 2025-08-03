import { useState } from "react";
import Introduction from "./components/Introduction";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills"
import './App.css';


export default function App() {
  const [step, setStep] = useState(0);
  const [cvData, setCvData] = useState({
    introduction: {},
    education: {},
    experience: {},
    skills: {},
  });

  const updateSection = (section, data) => {
    setCvData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const goToNextStep = () => setStep((prev) => prev + 1);
  const goToStep = (stepIndex) => setStep(stepIndex);

  return (
    <div>
      <h1>CV Builder</h1>

      {step === 0 && (
        <Introduction
          onUpdate={(data) => updateSection("introduction", data)}
          onNext={goToNextStep}
        />
      )}

      {step === 1 && (
        <Education
          onUpdate={(data) => updateSection("education", data)}
          onNext={goToNextStep}
        />
      )}

      {step === 2 && (
        <Experience
          onUpdate={(data) => updateSection("experience", data)}
          onNext={goToNextStep}
        />
      )}

      {step === 3 && (
        <Skills
          onUpdate={(data) => updateSection("skills", data)}
          onNext={goToNextStep}
        />
      )}

      {step === 4 && (
        <div>
          <h2>CV Preview</h2>

          <section>
            <h3>Introduction</h3>
            <p>Name: {cvData.introduction.name}</p>
            <p>Email:{cvData.introduction.email}</p>
            <p>Contact:{cvData.introduction.contact}</p>
            <button onClick={() => goToStep(0)}>Edit</button>
          </section>

          <section>
            <h3>Education</h3>
            <p>Degree: {cvData.education.degree}</p>
            <p>Institution: {cvData.education.institution}</p>
            <p>Year: {cvData.education.year}</p>
            <button onClick={() => goToStep(1)}>Edit</button>
          </section>

          <section>
            <h3>Experience</h3>
            <p>Company: {cvData.experience.company}</p>
            <p>Role: {cvData.experience.role}</p>
            <p>Duration: {cvData.experience.duration}</p>
            <button onClick={() => goToStep(2)}>Edit</button>
          </section>

          <section>
            <h3>Skills</h3>
            <ul>
              {cvData.skills.skills?.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <button onClick={() => goToStep(3)}>Edit</button>
          </section>

          <button onClick={() => alert("CV Submitted!")}>Submit CV</button>
        </div>
      )}
    </div>
  );
}
