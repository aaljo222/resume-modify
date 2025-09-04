/* ============================
10) Components/Works.jsx (Timeline)
============================ */

/** src/Components/Works.jsx **/
import React from "react";

export const Works = ({ works }) => (
  <div>
    <h2 className="section-title">실무경력</h2>
    <ol className="mt-4 relative border-s-2 border-slate-200 ps-5">
      {works.map((w, idx) => (
        <li key={w.title + idx} className="mb-6 ms-2">
          <span className="absolute -start-[9px] mt-1 h-4 w-4 rounded-full bg-primary-500" />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base font-semibold">{w.title}</h3>
            <span className="text-xs text-slate-500">{w.period}</span>
          </div>
          <div className="text-sm text-slate-600">{w.company}</div>
          <ul className="mt-2 list-disc ps-4 text-slate-700">
            {w.description.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </div>
);
