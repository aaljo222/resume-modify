/** src/Components/AboutMe.jsx **/
import React from "react";

export const AboutMe = ({ label, description }) => (
  <div>
    <h2 className="section-title">{label}</h2>
    <ul className="mt-3 grid gap-2 text-slate-700">
      {description.map((d) => (
        <li key={d} className="leading-relaxed">
          {d}
        </li>
      ))}
    </ul>
  </div>
);
