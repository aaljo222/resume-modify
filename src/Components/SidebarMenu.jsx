// src/Components/SidebarMenu.jsx
import React from "react";

export default function SidebarMenu() {
  const items = [
    { label: "교육", href: "#education", icon: "bx-book" },
    { label: "실무경력", href: "#experience", icon: "bx-briefcase" },
    { label: "교육경력", href: "#projects", icon: "bx-award" },
  ];

  return (
    <aside className="sticky top-24 h-fit rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-4 shadow-soft">
      <div className="mb-2 text-sm font-medium text-slate-500">메뉴</div>
      <ul className="list-none grid gap-1">
        {items.map((m) => (
          <li key={m.href}>
            <a
              href={m.href}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-700 hover:bg-primary-50 hover:text-primary-700"
            >
              <i className={`bx ${m.icon} text-base`} />
              <span>{m.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
