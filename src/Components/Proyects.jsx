/** src/Components/Proyects.jsx **/
import React from "react";

export const Proyects = ({ proyects }) => (
  <div>
    <h2 className="section-title">교육경력</h2>
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      {proyects.map((p) => (
        <article
          key={p.name + p.period}
          className="rounded-2xl border border-slate-200 p-5 hover:shadow-soft"
        >
          <header className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold">{p.name}</h3>
              <div className="text-sm text-slate-600">{p.company}</div>
            </div>
            <span className="tag whitespace-nowrap">{p.period}</span>
          </header>
          <ul className="mt-3 list-disc ps-5 text-sm text-slate-700">
            {p.description.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </div>
);
