import { useState } from "react";

export default function Introduction(props) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pass all the collected data up to parent
    props.onUpdate({ name, contact, email });

    // Move to next section
    props.onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Intro Section</h2>

      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Contact:
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>

      <button type="submit">Next</button>
    </form>
  );
}
