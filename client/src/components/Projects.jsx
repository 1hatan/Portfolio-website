import projects from "../data/projects.js";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section section-alt projects">
      <div className="container">
        <p className="eyebrow">&lt;Projects/&gt;</p>
        <h2 className="section-heading reveal">Things I&apos;ve built</h2>
        <p className="section-sub reveal">
          A mix of practice projects and real builds — each one taught me something new.
        </p>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.id}>
              <div className="project-card__image" aria-hidden="true">
                <span>{project.title}</span>
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>

                <ul className="project-card__tech">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <div className="project-card__actions">
                  <a href={project.demoUrl} className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="btn btn-outline btn-sm" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
