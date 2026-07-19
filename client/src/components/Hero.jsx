import { useEffect, useState } from "react";
import profilePic from "./images/profile.jpg";
import "./Hero.css";


const SOCIALS = [
  { label: "GitHub", href: "https://github.com/1hatan", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/haranigayathri008/", icon: "linkedin" },
  { label: "Email", href: "mailto:gayathri.dev2317@gmail.com", icon: "envelope" },
];

// Lines "typed" into the hero code-editor mockup. Kept as data so the
// animation logic below stays generic and reusable.
const CODE_LINES = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, text: 'name: "Harani Gayathri",' },
  { indent: 1, text: 'role: "Frontend Web Developer",' },
  { indent: 1, text: 'status: "Fresher",' },
  { indent: 1, text: "skills: ['HTML', 'CSS', 'JS', 'React']," },
  { indent: 1, text: "openToWork: true," },
  { indent: 0, text: "};" },
];

export default function Hero() {
  const [typedLines, setTypedLines] = useState([""]);
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let cancelled = false;

    function typeNext() {
      if (cancelled || lineIndex >= CODE_LINES.length) return;

      const currentLine = CODE_LINES[lineIndex].text;

      if (charIndex <= currentLine.length) {
        setTypedLines((prev) => {
          const next = [...prev];
          next[lineIndex] = currentLine.slice(0, charIndex);
          return next;
        });
        charIndex += 1;
        setTimeout(typeNext, 18 + Math.random() * 22);
      } else {
        lineIndex += 1;
        charIndex = 0;
        if (lineIndex < CODE_LINES.length) {
          setTypedLines((prev) => [...prev, ""]);
          setTimeout(typeNext, 160);
        }
      }
    }

    const start = setTimeout(typeNext, 500);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">&lt;Home/&gt;</p>
          <h1 className="hero__title">
            Hi, I&apos;m <span className="hero__title-accent">Harani Gayathri</span>
          </h1>
          <p className="hero__tagline">
            Frontend Web Developer, fresher — turning ideas into clean, responsive interfaces.
          </p>
          <p className="hero__desc">
            I build fast, accessible websites with HTML, CSS, JavaScript and React, and
            I&apos;m actively looking for my first opportunity as a Frontend Web Developer.
          </p>

          <div className="hero__actions">
            <a href="/Harani Gayathri Resume.pdf" download="Harani Gayathri Resume.pdf" className="btn btn-primary">
              Download Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <ul className="hero__socials" aria-label="Social media links">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                  <i className={`bi bi-${s.icon}`} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <button
            type="button"
            className="hero__avatar-button"
            onClick={() => setShowPhoto(true)}
            aria-label="Open profile photo"
          >
            <img
              className="hero__avatar"
              src={profilePic}
              alt="Profile photo of Harani Gayathri"
            />
          </button>

          <div className="hero__editor" aria-hidden="true">
            <div className="hero__editor-bar">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
              <span className="hero__editor-title">intro.js</span>
            </div>
            <pre className="hero__editor-body">
              {typedLines.map((line, i) => (
                <div className="hero__editor-line" key={i}>
                  <span className="hero__editor-lineno">{i + 1}</span>
                  <span>{line}</span>
                  {i === typedLines.length - 1 && <span className="hero__cursor" />}
                </div>
              ))}
            </pre>
          </div>
        </div>
      </div>

      {showPhoto && (
        <div className="hero__photo-overlay" role="dialog" aria-modal="true" aria-label="Profile photo preview" onClick={() => setShowPhoto(false)}>
          <div className="hero__photo-dialog" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="hero__photo-close" onClick={() => setShowPhoto(false)} aria-label="Close photo preview">
              ×
            </button>
            <img className="hero__photo-full" src={profilePic} alt="Full profile photo of Harani Gayathri" />
          </div>
        </div>
      )}
    </section>
  );
}
