// src/Components/Proyects.jsx
import React from "react";

export const Proyects = ({ proyects }) => (
  <div>
    <h2 className="section-title">교육경력</h2>
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      {proyects.map((p) => (
        <article
          key={p.name + p.period}
          className="rounded-2xl border border-slate-200 p-5 hover:shadow-lg"
        >
          {/* 🔧 헤더 구조 수정 */}
          <header className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg leading-tight break-keep">
                {p.name}
              </h3>
              <div className="text-sm text-slate-600 break-keep">
                {p.company}
              </div>
            </div>
            <span className="tag shrink-0 whitespace-nowrap">{p.period}</span>
          </header>

          <ul className="mt-3 list-disc ps-5 text-sm text-slate-700 break-keep">
            {p.description.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </div>
);
