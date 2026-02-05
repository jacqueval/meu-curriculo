import { resume } from "../data/resume.pt";


export default function Skills() {
  return (
    <section>
      <h3>Competências Técnicas</h3>

      {resume.skills.map((group, index) => (
        <div key={index}>
          <strong>{group.category}</strong>
          <div className="skills">
            {group.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
