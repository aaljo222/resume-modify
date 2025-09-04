/** src/App.jsx **/
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Resume } from "./Pages/Resume";
import { Menu as MenuBar } from "./Components/Menu";
import { Menu as menuSchema } from "./Schemas/Menu";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-800">
        {/* Sticky top navigation */}
        <MenuBar {...menuSchema} />
        {/* Content */}
        <Resume />
      </div>
    </BrowserRouter>
  );
}
