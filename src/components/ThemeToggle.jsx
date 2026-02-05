export default function ThemeToggle() {
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <button className="toggle" onClick={toggleTheme}>
      🌙 Dark Mode
    </button>
  );
}
