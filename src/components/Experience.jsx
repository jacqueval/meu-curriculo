import { resume } from "../data/resume.pt";


export default function Experience() {
  return (
    <section>
      <h3>Experiência Profissional</h3>

      {resume.experience.map((job, index) => (
        <div className="card" key={index}>
          <div className="job-header">
            <strong>{job.role}</strong>
            <span>{job.company}</span>
          </div>

          <small>{job.period}</small>

          <ul>
            {job.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div className="tech">
            {job.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
