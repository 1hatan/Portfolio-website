import { useEffect, useRef, useState } from "react";
import skills from "../data/skills.js";
import "./Skills.css";

export default function Skills() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills" ref={sectionRef}>
      <div className="container">
        <p className="eyebrow">&lt;Skills /&gt;</p>
        <h2 className="section-heading reveal">What I work with</h2>
        <p className="section-sub reveal">
          Tools and technologies I use to design and build interfaces.
        </p>

        <div className="skills__grid">
          {skills.map((skill) => (
            <div className="skill-card reveal" key={skill.name}>
              <div className="skill-card__top">
                <span className="skill-card__name">{skill.name}</span>
                <span className="skill-card__level">{skill.level}%</span>
              </div>
              <div className="skill-card__track">
                <div
                  className="skill-card__fill"
                  style={{ width: animate ? `${skill.level}%` : "0%" }}
                />
              </div>
              <span className="skill-card__category">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
