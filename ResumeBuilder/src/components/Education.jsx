import { useState } from "react";

export default function Education({ onUpdate, onNext }) {
  const [degree, setDegree] = useState("");
  const [institution, setInstitution] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ degree, institution, year });
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Education</h2>

      <label>
        Degree:
        <input
          type="text"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          required
        />
      </label>

      <label>
        Institution:
        <input
          type="text"
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
          required
        />
      </label>

      <label>
        Year of Graduation:
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </label>

      <button type="submit">Next</button>
    </form>
  );
}

