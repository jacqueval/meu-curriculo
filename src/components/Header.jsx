

export default function Header({ resume }) {
  return (
    <header className="header">
      <h1>{resume.name}</h1>
      <h2>{resume.role}</h2>
      <p>{resume.summary}</p>

      <div className="header-info">
        <span>📞 {resume.contact.phone}</span>
        <span>✉️ {resume.contact.email}</span>
        <a href={resume.contact.linkedin} target="_blank">
          🔗 LinkedIn
        </a>

        <a href={resume.contact.github} target="_blank">
           🔗 GitHub
        </a>
      </div>

       <small>{resume.availability}</small>
    </header>
  );
}
