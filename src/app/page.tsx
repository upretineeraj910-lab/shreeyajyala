"use client";

import Image from "next/image";
import { useState } from "react";
import "./election.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="election-page">

      {/* ================= NAVBAR ================= */}
      <nav className="election-navbar">

        <a href="#home" className="nav-logo" onClick={closeMenu}>
          SY
        </a>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About Me</a>
          <a href="#vision" onClick={closeMenu}>My Vision</a>
          <a href="#vote" onClick={closeMenu}>Vote</a>
        </div>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

      </nav>


      {/* ================= HERO ================= */}
      <section className="hero-section" id="home">

        {/* FULL BANNER — no cropping */}
        <div className="hero-banner">
          <Image
            src="/shreeya2.jpeg"
            alt="Vote for Shreeya Jyala — Candidate for President, BCSU, Ballot No. 02"
            width={1280}
            height={341}
            priority
            sizes="100vw"
            className="hero-banner-img"
          />
        </div>

        {/* TEXT BELOW THE IMAGE */}
        <div className="hero-content">

          <div className="hero-rule" />

          <p className="hero-tagline">
            For a Bharati that listens,
            <br />
            includes and moves forward.
          </p>

          <p className="hero-intro">
            I’m not running for a title.
            <br />
            I’m running because I believe Bharati can be more.
          </p>

          <a href="#vote" className="vote-button">
            VOTE FOR SHREEYA
            <span>→</span>
          </a>

          <div className="hero-meta">
            <span>BCSU PRESIDENTIAL ELECTION</span>
            <span>CANDIDATE FOR PRESIDENT</span>
            <span>BALLOT NO. 02</span>
          </div>

        </div>

        <a href="#about" className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <i />
        </a>

      </section>


      {/* ================= ABOUT ================= */}
      <section className="about-section" id="about">

        <div className="section-label">
          01 / ABOUT ME
        </div>

        <div className="about-grid">

          <div className="about-heading">
            <p className="small-heading">
              MEET YOUR CANDIDATE
            </p>

            <h2>
              Hi,
              <br />
              I’m <span>Shreeya.</span>
            </h2>
          </div>

          <div className="about-text">

            <p>
              I’m a Journalism student, a host, a creator, an organiser —
              and most importantly, someone who believes in speaking up.
            </p>

            <p>
              I’ve spent years working with people, leading teams,
              organising events and putting myself out there.
            </p>

            <p>
              Now, I want to put that experience to work for Bharati.
            </p>

            <p className="highlight-text">
              I don’t just see students.
              <br />
              I see the stories behind them.
            </p>

            <p>
              And I want to be a President who stays among the students,
              not away from them.
            </p>

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}
      <section className="experience-section">

        <div className="section-label">
          02 / EXPERIENCE
        </div>

        <div className="experience-header">
          <div>
            <p className="small-heading">
              LEADERSHIP BY DOING
            </p>

            <h2>
              I’ve learnt
              <br />
              <span>leadership by doing.</span>
            </h2>
          </div>

          <p className="experience-intro">
            From hosting stages to leading teams, managing events,
            working in media and building communities — every experience
            has taught me how to communicate, collaborate and take
            responsibility.
          </p>
        </div>

        <div className="experience-list">

          <div className="experience-item">
            <span className="experience-number">01</span>
            <div>
              <h3>EVENTS</h3>
              <p>
                Experience in hosting, organising and being part of
                large-scale student events.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <span className="experience-number">02</span>
            <div>
              <h3>MEDIA</h3>
              <p>
                Journalism, content creation and communication built
                around telling stories that matter.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <span className="experience-number">03</span>
            <div>
              <h3>PR &amp; CONTENT</h3>
              <p>
                Working with people, building connections and managing
                communication across different platforms.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <span className="experience-number">04</span>
            <div>
              <h3>LEADERSHIP</h3>
              <p>
                Leading teams, taking responsibility and getting people
                moving towards a common goal.
              </p>
            </div>
          </div>

        </div>

        <div className="experience-bottom">
          <span>EVENTS.</span>
          <span>MEDIA.</span>
          <span>PR.</span>
          <span>CONTENT.</span>
          <span>LEADERSHIP.</span>
          <span>COMMUNITY.</span>
        </div>

      </section>


      {/* ================= VISION ================= */}
      <section className="vision-section" id="vision">

        <div className="section-label">
          03 / MY VISION
        </div>

        <div className="vision-heading">
          <p className="small-heading">
            FOR A BETTER BHARATI
          </p>

          <h2>
            A better Bharati
            <br />
            starts with the <span>basics.</span>
          </h2>
        </div>

        <div className="vision-grid">

          <article className="vision-card">
            <span>01</span>
            <h3>OPPORTUNITIES</h3>
            <p>
              Regular internship &amp; career fairs, networking opportunities
              and industry exposure.
            </p>
          </article>

          <article className="vision-card">
            <span>02</span>
            <h3>STUDENT LIFE</h3>
            <p>
              More events, volunteering opportunities and spaces where
              every student can participate and lead.
            </p>
          </article>

          <article className="vision-card">
            <span>03</span>
            <h3>CAMPUS</h3>
            <p>
              Better hygiene, washrooms, hostel amenities and essential
              facilities.
            </p>
          </article>

          <article className="vision-card">
            <span>04</span>
            <h3>SPORTS</h3>
            <p>
              Fair participation, better opportunities and more
              inter-college exposure.
            </p>
          </article>

          <article className="vision-card">
            <span>05</span>
            <h3>CONNECTIONS</h3>
            <p>
              Collaborations with other colleges, universities,
              organisations and communities.
            </p>
          </article>

          <article className="vision-card">
            <span>06</span>
            <h3>GROWTH</h3>
            <p>
              Regular workshops on public speaking, leadership, careers
              and skills beyond the classroom.
            </p>
          </article>

        </div>

        <div className="vision-statement">
          <span>THE IDEA</span>
          <p>
            Because college should be more than just classrooms
            and attendance.
          </p>
        </div>

      </section>


      {/* ================= WHY SHREEYA ================= */}
      <section className="why-section">

        <div className="section-label">
          04 / WHY SHREEYA?
        </div>

        <div className="why-grid">

          <div className="why-heading">
            <p className="small-heading">
              THE CHOICE IS YOURS
            </p>

            <h2>
              I’m not afraid
              <br />
              <span>to speak.</span>
            </h2>
          </div>

          <div className="why-content">

            <p className="why-big">
              I have the guts, the audacity and the confidence
              to ask for more — and the responsibility to follow through.
            </p>

            <div className="why-points">
              <div>
                <strong>01</strong>
                <span>I know how to stand on a stage.</span>
              </div>

              <div>
                <strong>02</strong>
                <span>I know how to lead a team.</span>
              </div>

              <div>
                <strong>03</strong>
                <span>I know how to build connections.</span>
              </div>

              <div>
                <strong>04</strong>
                <span>And I know how to listen.</span>
              </div>
            </div>

            <p className="why-ending">
              I choose to speak up — and I want to make sure
              your voice is heard too.
            </p>

          </div>

        </div>

      </section>


      {/* ================= YOUR BHARATI ================= */}
      <section className="bharati-section">

        <div className="bharati-inner">

          <div className="section-label">
            05 / YOUR BHARATI
          </div>

          <p className="small-heading">
            THIS CAMPAIGN ISN’T JUST MINE.
          </p>

          <h2>
            I have a vision
            <br />
            <span>for Bharati.</span>
          </h2>

          <p className="bharati-text">
            I want to know yours.
          </p>

          <p className="bharati-description">
            Tell me what you want to change, add, build or experience
            at Bharati.
          </p>

          <div className="bharati-line">
            <span>FOR THE STUDENTS.</span>
            <span>BY THE STUDENTS.</span>
            <span>OF THE STUDENTS.</span>
          </div>

          <a href="#vote" className="idea-button">
            SHARE YOUR IDEA
            <span>→</span>
          </a>

        </div>

      </section>


      {/* ================= FINAL VOTE ================= */}
      <section className="vote-section" id="vote">

        <div className="vote-card">

          <p className="vote-small">
            BCSU PRESIDENTIAL ELECTION
          </p>

          <p className="vote-label">
            BALLOT NO.
          </p>

          <div className="final-ballot">
            02
          </div>

          <h2>
            SHREEYA
            <span>JYALA</span>
          </h2>

          <p className="vote-description">
            Let’s make Bharati better — together.
          </p>

          <div className="final-divider" />

          <p className="instagram">
            @shreeya4prez.bcsu
          </p>

          <a href="#home" className="final-vote-button">
            VOTE FOR SHREEYA
            <span>↑</span>
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="election-footer">

        <span>SHREEYA JYALA</span>

        <span>
          CANDIDATE FOR PRESIDENT, BCSU
        </span>

        <span>
          BALLOT NO. 2
        </span>

      </footer>

    </main>
  );
}
