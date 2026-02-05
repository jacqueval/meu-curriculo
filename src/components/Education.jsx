import { resume } from "../data/resume.pt";


export default function Education() {
  return (
    <section>
      <h3>Formação Acadêmica</h3>

      {resume.education.map((edu, index) => (
        <div key={index} className="card">
          <strong>{edu.course}</strong>
          <p>{edu.institution}</p>
          {edu.status && <small>{edu.status}</small>}
        </div>
      ))}
    </section>
  );
}
