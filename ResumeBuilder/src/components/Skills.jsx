import { useState } from "react";

export default function Skills({ onUpdate, onNext }) {
  const [skills, setSkills] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Split comma-separated skills into an array
    const skillList = skills.split(",").map(skill => skill.trim());
    onUpdate({ skills: skillList });

    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Skills</h2>

      <label>
        List your skills (comma separated):
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          required
        />
      </label>

      <button type="submit">Finish</button>
    </form>
  );
}

