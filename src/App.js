import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";

function App() {
  const [nombre, setNombre] = useState("Juan Pérez");
  const [evento, setEvento] = useState("Evento Comunitario");
  const [design, setDesign] = useState(0);
  const cardRef = useRef(null);

  const backgrounds = [
    "linear-gradient(to right, #38b2ac, #4299e1)",
    "linear-gradient(to right, #9f7aea, #ed64a6)",
    "linear-gradient(to right, #f6e05e, #ed8936)",
    "linear-gradient(to right, #667eea, #06b6d4)",
    "linear-gradient(to right, #f56565, #f43f5e)"
  ];

  const downloadCard = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current);
      const link = document.createElement("a");
      link.download = "tarjeta.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px", backgroundColor: "#f7fafc" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Generador de Tarjetas de Recuerdo</h1>

      <div style={{ marginBottom: "20px", display: "grid", gap: "10px", width: "100%", maxWidth: "400px" }}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre del donante"
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          type="text"
          value={evento}
          onChange={(e) => setEvento(e.target.value)}
          placeholder="Nombre del evento"
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />

        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          {backgrounds.map((bg, i) => (
            <button
              key={i}
              onClick={() => setDesign(i)}
              style={{ width: "40px", height: "40px", borderRadius: "5px", border: design === i ? "2px solid black" : "2px solid transparent", background: bg }}
            />
          ))}
        </div>
      </div>

      <div
        ref={cardRef}
        style={{
          width: "320px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          borderRadius: "15px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          background: backgrounds[design]
        }}
      >
        <p style={{ fontSize: "18px", margin: 0 }}>Gracias {nombre}</p>
        <p style={{ fontSize: "14px", margin: 0 }}>Por tu aporte en</p>
        <p style={{ fontSize: "16px", margin: 0 }}>{evento}</p>
      </div>

      <button
        onClick={downloadCard}
        style={{ marginTop: "20px", padding: "10px 20px", borderRadius: "5px", border: "none", backgroundColor: "#3182ce", color: "white", cursor: "pointer" }}
      >
        Descargar tarjeta
      </button>
    </div>
  );
}

export default App;
