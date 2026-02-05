export default function LanguageToggle({ lang, setLang }) {
  return (
    <div className="language-toggle">
      <button
        className={lang === "pt" ? "active" : ""}
        onClick={() => setLang("pt")}
      >
        BR PT
      </button>

      <button
        className={lang === "en" ? "active" : ""}
        onClick={() => setLang("en")}
      >
        US EN
      </button>
    </div>
  );
}
