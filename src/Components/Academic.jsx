/** src/Components/Academic.jsx **/
import React from "react";

export const Academic = ({ academic }) => (
  <div>
    <h2 className="section-title">교육</h2>
    <div className="mt-4 grid gap-4">
      {academic.map((a) => (
        <div key={a.career} className="rounded-xl border border-slate-200 p-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div className="font-medium">{a.career}</div>
            <span className="text-xs text-slate-500">{a.date}</span>
          </div>
          <div className="text-sm text-slate-600">{a.institution}</div>
        </div>
      ))}
    </div>
  </div>
);
