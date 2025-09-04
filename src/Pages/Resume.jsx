/** src/Pages/Resume.jsx **/
import React, { useEffect, useState } from "react";
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

      {/* Hero */}
      <section id="home" className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-50 to-transparent" />
        <div className="container-max py-10">
          <div className="grid items-center gap-8 md:grid-cols-[1fr,1.5fr]">
            <Profile {...profile} />
            <div className="card">
              <AboutMe {...aboutMe} />
              <SocialMedia {...socialMedia} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <main id="bd-container" className="container-max pb-16">
        <div id="area-cv" className="grid gap-6 md:grid-cols-2">
          <section id="skills" className="card">
            <Skills {...skills} />
          </section>
          <section id="experience" className="card">
            <Works {...experience} />
          </section>
          <section id="education" className="card md:col-span-1">
            <Academic {...experience} />
          </section>
          <section id="proyects" className="card md:col-span-2">
            <Proyects {...experience} />
          </section>
        </div>
      </main>
    </>
  );
};
