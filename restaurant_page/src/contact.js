export default function loadContact() {
  const content = document.getElementById('content');
  const contactDiv = document.createElement('div');
  contactDiv.innerHTML = `
    <h1>Contact Us</h1>
    <p>Email: contact@peacefulbites.com</p>
    <p>Phone: +91-9876543210</p>
  `;
  content.appendChild(contactDiv);
}

