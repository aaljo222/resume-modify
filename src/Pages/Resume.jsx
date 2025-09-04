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
import SidebarMenu from "../Components/SidebarMenu";
import { Data as dataSchema } from "../Schemas/Data";

export const Resume = () => {
  const { profile, aboutMe, skills, socialMedia, experience } = dataSchema;

  return (
    <>
      <SEO {...profile} {...aboutMe} />

      {/* 얇은 히어로 배경 */}
      <section id="home" className="relative scroll-mt-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-50/60 to-transparent" />
        <div className="container-max py-6" />
      </section>

      <main className="container-max pb-16">
        {/* ✅ 12컬럼: 왼쪽 8, 오른쪽 4 (md↑에서 2열 고정) */}
        <div className="grid grid-cols-12 gap-6">
          {/* LEFT: 사진 → Technology → Skills → Profile */}
          <div className="col-span-12 md:col-span-5 lg:col-span-5 space-y-6">
            {/* Profile(사진+소개+소셜) */}
            <section id="profile" className="card scroll-mt-24">
              <div className="flex flex-col gap-6 md:flex-row">
                <Profile {...profile} />
                <div className="flex-1">
                  <AboutMe {...aboutMe} />
                  <SocialMedia {...socialMedia} />
                </div>
              </div>
            </section>

            {/* Technology */}
            <section id="technology" className="card scroll-mt-24">
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
            <section id="skills" className="card scroll-mt-24">
              <Skills
                technicalLabel="Skills"
                softLabel=""
                technicalSkills={skills.softSkills}
                softSkills={[]}
              />
            </section>

            {/* Profile 상세(원하면 유지/삭제) */}
            <section id="profile-more" className="card scroll-mt-24">
              <h2 className="section-title">Profile</h2>
              <p className="mt-3 text-slate-700">{aboutMe.description[0]}</p>
            </section>
          </div>

          {/* RIGHT: 사이드 메뉴 + 교육/실무경력/교육경력 */}
          <div className="col-span-12 md:col-span-7 lg:col-span-7 space-y-6 lg:border-s lg:ps-6">
            <SidebarMenu />

            <section id="education" className="card scroll-mt-24">
              <Academic {...experience} />
            </section>

            <section id="experience" className="card scroll-mt-24">
              <Works {...experience} />
            </section>

            <section id="projects" className="card scroll-mt-24">
              <Proyects {...experience} />
            </section>
          </div>
        </div>
      </main>
    </>
  );
};
