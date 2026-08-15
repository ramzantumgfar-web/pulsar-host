import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial", color: "white", background: "#0b0b0f", minHeight: "100vh" }}>
      <h1>Pulsar Host</h1>
      <p>Игровой хостинг запущен 🚀</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
