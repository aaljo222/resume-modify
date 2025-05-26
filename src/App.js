import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Resume } from "./Pages/Resume";
import { Menu } from "./Components/Menu";
// App.js 상단에 추가
import './App.css';

const menuData = [
  { label: "소개", section: "home", className: "bx-home" },
  { label: "기술", section: "skills", className: "bx-code" },
  { label: "실무경력", section: "experience", className: "bx-briefcase" },
  { label: "학력", section: "education", className: "bx-book" },
  { label: "교육경력", section: "proyects", className: "bx-briefcase" },
];

function App() {
  return (
    <BrowserRouter>
      <Menu menu={menuData} />
      <Resume />
    </BrowserRouter>
  );
}

export default App;
