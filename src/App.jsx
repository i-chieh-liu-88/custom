import { useState } from "react";
import "./App.css";
import { ThemeSwitch } from "./components/theme-switch";
import FaqItem from "./components/faq-item";
import NotificationPanel from "./components/notification-panel";

function App() {
  return (
    <>
      <header className="flex flex-col items-center justify-center">
        <h1>🪝 Custom Hooks Playground</h1>
      </header>

      <main className="flex flex-col h-screen items-center justify-center bg-base-200">
        <section>
          <h2>Component 1: FAQ Item</h2>
          <FaqItem />
        </section>

        <section>
          <h2>Component 2: Notification Panel</h2>
          <NotificationPanel />
        </section>

        <section>
          <h2>Component 3: Theme Switch</h2>
          <div className="flex flex-col items-center justify-center">
            <ThemeSwitch />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
