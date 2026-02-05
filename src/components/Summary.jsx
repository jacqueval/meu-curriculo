export default function Summary() {
  const certifications = [
    {
      label: "Desenvolvimento Web - Front End",
      file: "/certificates/Desenvolvimento Web - Front End.pdf"
    },
    {
      label: "Scrum Foundation",
      file: "/certificates/scrum.jpg"
    }
  ];

  return (
    <section>
      <h3>Certificados</h3>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "8px 14px",
              borderRadius: "8px",
              background: "#2563eb",
              color: "#fff",
              textDecoration: "none",
              fontSize: "0.9rem"
            }}
          >
            🎓 {cert.label}
          </a>
        ))}
      </div>
    </section>
  );
}
