// src/Pages/Resume.jsx
import React from "react";
import { Profile } from "../Components/Profile";
import { Academic } from "../Components/Academic";
import { Skills } from "../Components/Skills";
import { Proyects } from "../Components/Proyects";
import { Works } from "../Components/Works";
import { SocialMedia } from "../Components/SocialMedia";
import { AboutMe } from "../Components/AboutMe";
import { SEO } from "../Components/SEO";
import { Data as dataSchema } from "../Schemas/Data";

export const Resume = () => {
  const { profile, aboutMe, skills, socialMedia, experience } = dataSchema;

  return (
    <>
      <SEO {...profile} {...aboutMe} />

      {/* 얇은 히어로 배경 */}
      <section id="home" className="relative scroll-mt-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-50/60 to-transparent" />
        <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-8 py-6" />
      </section>

      <main className="mx-auto w-full max-w-[1600px] px-6 lg:px-8 pb-16 text-[15px] md:text-base lg:text-[17px]">
        {/* ✅ 12컬럼: 왼쪽 5, 오른쪽 7 (초대형에서는 6:6) */}
        <div className="grid grid-cols-12 gap-6 xl:gap-8 2xl:gap-10">
          {/* LEFT: Technology → Skills → Profile → Profile-Detail */}
          <div className="col-span-12 md:col-span-5 2xl:col-span-6 space-y-6">
            {/* Technology */}
            <section id="technology" className="card lg:p-8 scroll-mt-28">
              <h2 className="section-title">Technology</h2>
              <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {skills.technicalSkills.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </section>

            {/* Skills */}
            <section id="skills" className="card lg:p-8 scroll-mt-28">
              <Skills
                technicalLabel="Skills"
                softLabel=""
                technicalSkills={skills.softSkills}
                softSkills={[]}
              />
            </section>

            {/* ⬇️ Profile(사진+소개+소셜) — 아래로 이동 */}
            <section id="profile" className="card lg:p-8 scroll-mt-28">
              <div className="flex flex-col gap-6 md:flex-row">
                <Profile {...profile} />
                <div className="flex-1">
                  <AboutMe {...aboutMe} />
                  <SocialMedia {...socialMedia} />
                </div>
              </div>
            </section>

            {/* Profile 상세(선택) */}
            <section id="profile-more" className="card lg:p-8 scroll-mt-28">
              <h2 className="section-title">Profile</h2>
              <p className="mt-3 text-slate-700">{aboutMe.description[0]}</p>
            </section>

            {/* Technology */}
            <section id="technology" className="card lg:p-8 scroll-mt-28">
              <h2 className="section-title">Technology</h2>
              <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {skills.technicalSkills.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </section>

            {/* Skills */}
            <section id="skills" className="card lg:p-8 scroll-mt-28">
              <Skills
                technicalLabel="Skills"
                softLabel=""
                technicalSkills={skills.softSkills}
                softSkills={[]}
              />
            </section>
          </div>

          {/* RIGHT: 사이드 메뉴 + 교육/실무경력/교육경력 */}
          <div className="col-span-12 md:col-span-7 2xl:col-span-6 space-y-6 lg:border-s lg:ps-6">
            <section id="education" className="card lg:p-8 scroll-mt-28">
              <Academic {...experience} />
            </section>

            <section id="experience" className="card lg:p-8 scroll-mt-28">
              <Works {...experience} />
            </section>

            <section id="projects" className="card lg:p-8 scroll-mt-28">
              <Proyects {...experience} />
            </section>
          </div>
        </div>
      </main>
    </>
  );
};
