import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./Greetings.jsx";
import Quote from "./Quote.jsx";
import AnimalList from "./Animals.jsx";
import BirdList from "./Birds.jsx";
import Todo from "./Todo.jsx";
import Books from "./Books.jsx";
import GetButtons from "./Button.jsx";
import ReferenceButton from "./ReferenceButton.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <Quote />
    <AnimalList />
    <BirdList />
    <Todo/>
    <Books/>
    <GetButtons/>
    <ReferenceButton/>
  </StrictMode>
);
