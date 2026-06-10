import { useState } from "react";

export default function ThemeSwitch() {
  const [isDark, setIsDark] = useState(false);

  function toggle() {
    setIsDark((current) => !current);
  }

  return (
    <>
      <div>
        <button className="btn btn-soft btn-info" Info onClick={toggle}>
          Change Mode
        </button>

        <span>
          Current Selection:{" "}
          <strong>{isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}</strong>
        </span>
      </div>
    </>
  );
}
