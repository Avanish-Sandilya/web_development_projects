import { useState } from "react";

function Experience() {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    until: "",
  });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="section">
      <h2>Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} />
          <input name="position" placeholder="Position Title" value={formData.position} onChange={handleChange} />
          <textarea name="responsibilities" placeholder="Main Responsibilities" value={formData.responsibilities} onChange={handleChange}></textarea>
          <input name="from" placeholder="From" value={formData.from} onChange={handleChange} />
          <input name="until" placeholder="Until" value={formData.until} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>Company:</strong> {formData.company}</p>
          <p><strong>Position:</strong> {formData.position}</p>
          <p><strong>Responsibilities:</strong> {formData.responsibilities}</p>
          <p><strong>From:</strong> {formData.from}</p>
          <p><strong>Until:</strong> {formData.until}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Experience;
