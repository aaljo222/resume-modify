// src/Pages/Resume.jsx
import React, { useEffect, useState } from "react";
import { Profile } from "../Components/Profile";
import { Academic } from "../Components/Academic";
import { Skills } from "../Components/Skills";
import { Proyects } from "../Components/Proyects";
import { Works } from "../Components/Works";
import { SocialMedia } from "../Components/SocialMedia";
import { AboutMe } from "../Components/AboutMe";
import { SEO } from "../Components/SEO";
import SidebarMenu from "../Components/SidebarMenu"; // ✅ 새로 추가
import { Data as dataSchema } from "../Schemas/Data";

export const Resume = () => {
  const query = "(min-width: 968px)";
  const [matches, setMatches] = useState(window.matchMedia(query).matches);
  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches]);

  const { profile, aboutMe, skills, socialMedia, experience } = dataSchema;

  return (
    <>
      <SEO {...profile} {...aboutMe} />

      {/* 상단 히어로는 얇은 배경만 */}
      <section id="home" className="relative scroll-mt-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-50/60 to-transparent" />
        <div className="container-max py-6" />
      </section>

      {/* 메인 2열: 왼쪽 콘텐츠 / 오른쪽 메뉴 */}
      <main className="container-max pb-16">
        {/* ✅ 12컬럼 그리드: 왼쪽 8~9, 오른쪽 4~3 */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left column (사진 → Technology → Skills → Profile → Education/Experience/Projects) */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9">
            {/* 1) 사진(프로필 카드) */}
            <section id="profile" className="card scroll-mt-24">
              <div className="flex flex-col gap-6 md:flex-row">
                <Profile {...profile} />
                <div className="flex-1">
                  <AboutMe {...aboutMe} />
                  <SocialMedia {...socialMedia} />
                </div>
              </div>
            </section>

            {/* 2) Technology */}
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

            {/* 3) Skills */}
            <section id="skills" className="card scroll-mt-24">
              <Skills
                technicalLabel="Skills"
                softLabel=""
                technicalSkills={skills.softSkills}
                softSkills={[]}
              />
            </section>

            {/* 4) Profile(추가 설명) */}
            <section id="profile-more" className="card scroll-mt-24">
              <h2 className="section-title">Profile</h2>
              <p className="mt-3 text-slate-700">{aboutMe.description[0]}</p>
            </section>

            {/* 아래 3개는 오른쪽 메뉴가 가리키는 대상들 */}
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

          {/* Right column: sticky side menu */}
          <div className="order-first md:order-none">
            <SidebarMenu />
          </div>
        </div>
      </main>
    </>
  );
};
