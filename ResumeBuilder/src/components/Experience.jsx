import { useState } from "react";

export default function Experience({ onUpdate, onNext }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ company, role, duration });
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Experience</h2>

      <label>
        Company:
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
      </label>

      <label>
        Role:
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
      </label>

      <label>
        Duration:
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
      </label>

      <button type="submit">Next</button>
    </form>
  );
}

