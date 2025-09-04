/** src/Components/SocialMedia.jsx **/
import React from "react";

export const SocialMedia = ({ label, social }) => (
  <div className="mt-6">
    <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
      {label}
    </h3>
    <div className="mt-3 flex flex-wrap gap-2">
      {social.map((s) => (
        <a
          key={s.url}
          href={s.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:border-primary-300 hover:bg-primary-50"
        >
          <i className={`bx ${s.className}`} /> {s.name}
        </a>
      ))}
    </div>
  </div>
);
