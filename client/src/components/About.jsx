import "./About.css";

const HIGHLIGHTS = [
  { label: "Focus", value: "Responsive, user-friendly UI" },
  { label: "Stack", value: "HTML, CSS, JavaScript, React" },
  { label: "Currently", value: "Seeking Frontend roles" },
];

export default function About() {
  return (
    <section id="about" className="section section-alt about">
      <div className="container">
        <p className="eyebrow">&lt;About/&gt;</p>
        <h2 className="section-heading reveal">Who I am</h2>

        <div className="about__grid">
          <p className="about__text reveal">
            I&apos;m Harani Gayathri, a frontend web developer at the start of my career and
            genuinely excited about building for the web. I care about the details that make a
            site feel good to use — clear layouts, fast load times, and interfaces that work
            just as well on a small phone screen as they do on a desktop monitor.
            <br />
            <br />
            As a fresher, I&apos;ve focused on building a strong foundation in HTML, CSS, and
            JavaScript, and I use React to build reusable, component-driven interfaces. Git and
            GitHub are part of my everyday workflow, so my code stays organized and easy to
            collaborate on. I&apos;m looking for a Frontend Web Developer role where I can keep
            learning, contribute from day one, and grow alongside a team that values good craft.
          </p>

          <ul className="about__highlights reveal">
            {HIGHLIGHTS.map((h) => (
              <li key={h.label}>
                <span className="about__highlight-label">{h.label}</span>
                <span className="about__highlight-value">{h.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
