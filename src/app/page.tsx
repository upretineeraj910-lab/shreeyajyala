"use client";

import Image from "next/image";
import { useState } from "react";
import "./election.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="election-page">

      {/* NAVBAR */}
      <nav className="election-navbar">

        <div className="nav-logo">
          <span>SY</span>
        </div>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About Shreya
          </a>

          <a href="#vote" onClick={() => setMenuOpen(false)}>
            Vote Now
          </a>
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


      {/* HERO */}
      <section className="hero-section" id="home">

        {/* Background Image */}
        <div className="hero-image">
          <Image
            src="/shreeya1.jpg"
            alt="Vote for Shreya Jyala"
            fill
            priority
            sizes="100vw"
            className="hero-photo"
          />
        </div>

        {/* Overlay */}
        <div className="hero-overlay" />


        {/* Hero Content */}
        <div className="hero-content">

          <p className="hero-kicker">
            COLLEGE PRESIDENT ELECTION
          </p>

          <h1>
            VOTE
            <span>FOR</span>
            <strong>SHREYA</strong>
          </h1>

          <p className="hero-subtitle">
            Your voice. Your choice. Your president.
          </p>

          <a href="#vote" className="vote-button">
            VOTE FOR SHREYA
            <span>→</span>
          </a>

          <div className="ballot-number">
            <span>BALLOT</span>
            <strong>NO. 2</strong>
          </div>

        </div>


        {/* Scroll Indicator */}
        <a href="#about" className="scroll-indicator">
          <span>SCROLL</span>
          <i />
        </a>

      </section>


      {/* ABOUT */}
      <section className="about-section" id="about">

        <div className="section-label">
          01 / ABOUT
        </div>

        <div className="about-content">

          <div>
            <p className="small-heading">
              MEET YOUR CANDIDATE
            </p>

            <h2>
              A voice
              <br />
              <span>for students.</span>
            </h2>
          </div>

          <p className="about-text">
            Shreya believes that college should be a place where every
            student feels heard, included, and represented. This campaign
            is about bringing students together and creating a stronger
            student community.
          </p>

        </div>

      </section>


      {/* VOTE SECTION */}
      <section className="vote-section" id="vote">

        <div className="vote-card">

          <p className="vote-small">
            YOUR VOTE MATTERS
          </p>

          <h2>
            MAKE IT
            <span>COUNT.</span>
          </h2>

          <div className="ballot-box">
            <span>BALLOT NUMBER</span>
            <strong>02</strong>
          </div>

          <p className="vote-description">
            Support Shreya Jyala for College President.
          </p>

          <button className="final-vote-button">
            VOTE FOR SHREYA
          </button>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="election-footer">
        <span>SHREYA JYALA</span>
        <span>BALLOT NO. 2</span>
      </footer>

    </main>
  );
}