import { useState } from "react";

function Education() {
  const [formData, setFormData] = useState({
    school: "",
    title: "",
    date: "",
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
      <h2>Education</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            name="school"
            placeholder="School Name"
            value={formData.school}
            onChange={handleChange}
          />
          <input
            name="title"
            placeholder="Title of Study"
            value={formData.title}
            onChange={handleChange}
          />
          <input
            name="date"
            placeholder="Date of Study"
            value={formData.date}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>
            <strong>School:</strong> {formData.school}
          </p>
          <p>
            <strong>Title:</strong> {formData.title}
          </p>
          <p>
            <strong>Date:</strong> {formData.date}
          </p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Education;
