import { useState } from "react";

export default function NotificationPanel() {
  const [isVisible, setIsVisible] = useState(false);

  function toggle() {
    setIsVisible((current) => !current);
  }

  return (
    <div>
      <button className="btn btn-soft btn-info" onClick={toggle}>
        {isVisible ? "Hide Notification" : "Show Notification"}
      </button>

      {isVisible && (
        <ul>
          <li>Log: Project setup successful.</li>
          <li>React 19 initialized properly.</li>
          <li>Local state components loaded.</li>
        </ul>
      )}
    </div>
  );
}
