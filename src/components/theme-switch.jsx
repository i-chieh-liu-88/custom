import { useState } from "react";

export function ThemeSwitch() {
  const [isDark, setIsDark] = useState(false);

  function toggle() {
    setIsDark((current) => !current);
  }

  return (
    <>
      <div>
        <button onClick={toggle}>Change Mode</button>
      </div>
    </>
  );
}
