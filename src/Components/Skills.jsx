/** src/Components/Skills.jsx **/
import React from "react";

export const Skills = ({
  technicalLabel,
  softLabel,
  technicalSkills,
  softSkills,
}) => {
  return (
    <div>
      <div>
        <h2 className="section-title">{technicalLabel}</h2>
        <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {technicalSkills.map((s) => (
            <SkillPill key={s} text={s} />
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="section-title">{softLabel}</h2>
        <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {softSkills.map((s) => (
            <SkillPill key={s} text={s} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const SkillPill = ({ text }) => <li className="tag">{text}</li>;
