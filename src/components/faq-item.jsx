import { useState } from "react";

export default function FaqItem() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((current) => !current);
  }

  return (
    <div>
      <div onClick={toggle}>
        <span>What is a Custom Hook?</span>
        <span>{isOpen ? "🔼" : "🔽"}</span>
      </div>

      {isOpen && (
        <p>
          A Custom Hook is a JavaScript function that starts with "use" and can
          call other Hooks. It allows you to reuse stateful logic across
          different components!
        </p>
      )}
    </div>
  );
}
