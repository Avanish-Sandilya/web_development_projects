A minimal yet functional Todo List App built using vanilla JavaScript (ES6 Modules) with no frameworks or bundlers. The app allows users to organize tasks into multiple projects, set priorities, due dates, and store all data in the browser using localStorage.

🔍 Features
✅ Create and manage multiple projects

✅ Add, view, and delete todos under each project

✅ Each todo has:

Title

Description

Due Date

Priority (Low, Medium, High)

Notes

✅ Color-coded priorities

✅ Persistent storage using localStorage

✅ Clean, modular code using ES6 modules

✅ Fully responsive layout using CSS Flex and Grid


Project Structure
less
Copy
Edit
todo-app/
├── index.html
├── styles.css
├── /src
│   ├── main.js         // Entry point
│   ├── dom.js          // Handles all DOM manipulations
│   ├── storage.js      // Handles localStorage
│   ├── todo.js         // Todo class definition
│   └── project.js      // Project class definition



Getting Started
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/your-username/todo-app.git
cd todo-app
2. Open in browser
Just open index.html in any modern browser. No build tools required!

⚠️ Ensure your files are served using a local server (e.g. VSCode Live Server) if you face module loading issues due to CORS.



🔧 Technologies Used
HTML5

CSS3 (Flexbox + Grid)

JavaScript (ES6 Modules)

Web Storage API (localStorage)

📦 Future Improvements
 Add checkbox-based checklists in todos

 Add edit functionality

 Add date picker UI

 Add search/filter for todos

 Use date-fns for better date formatting

 Add responsive mobile layout

🙌 Acknowledgements
Inspired by Todoist, Things, and Any.do

Project idea and guidance: The Odin Project
