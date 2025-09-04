// src/Components/Proyects.jsx
import React from "react";

export const Proyects = ({ proyects }) => (
  <div>
    <h2 className="section-title">교육경력</h2>

    {/* ✅ 2열은 넓은 화면에서만. 좁으면 1열로 -> 제목 눌림 방지 */}
    <div className="mt-4 grid gap-4 lg:grid-cols-1 xl:grid-cols-2">
      {proyects.map((p) => (
        <article
          key={p.name + p.period}
          className="min-w-0 rounded-2xl border border-slate-200 p-5 hover:shadow-lg"
        >
          {/* ✅ 헤더: 왼쪽 제목은 flex-1 + min-w, 오른쪽 기간은 shrink-0 */}
          <header className="flex items-start gap-3 flex-wrap">
            <div className="flex-1 min-w-[260px]">
              <h3 className="font-semibold text-lg leading-snug break-keep break-words whitespace-normal">
                {p.name}
              </h3>
              <div className="text-sm text-slate-600 break-keep">{p.company}</div>
            </div>
            <span className="tag shrink-0 whitespace-nowrap text-xs sm:text-[13px]">
              {p.period}
            </span>
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
