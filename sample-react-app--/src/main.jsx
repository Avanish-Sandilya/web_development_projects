import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Greeting, AnimalList, SportsList } from "./Greetings.jsx";
import Players from "./Player.jsx";
import Equipments from "./equipment.jsx";

import Buttons from "./buttons.jsx";
import { Redirect } from "./linkButtons.jsx";
import Counter from "./Counter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <AnimalList />
    <SportsList />
    <Players />
    <Equipments />
    <Buttons/>
    <Redirect/>
    <Counter/>
  </StrictMode>
);
