import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { Button } from "@/components/ui/button";

export default function TarjetaGenerador() {
  const [nombre, setNombre] = useState("Juan Pérez");
  const [evento, setEvento] = useState("Evento Comunitario");
  const [design, setDesign] = useState(0);
  const cardRef = useRef(null);

  const backgrounds = [
    "bg-gradient-to-r from-green-400 to-blue-500",
    "bg-gradient-to-r from-purple-400 to-pink-500",
    "bg-gradient-to-r from-yellow-400 to-orange-500",
    "bg-gradient-to-r from-indigo-400 to-cyan-500",
    "bg-gradient-to-r from-red-400 to-rose-500"
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
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Generador de Tarjetas de Recuerdo</h1>

      {/* Inputs */}
      <div className="mb-6 grid gap-4 w-full max-w-md">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre del donante"
          className="p-2 border rounded"
        />
        <input
          type="text"
          value={evento}
          onChange={(e) => setEvento(e.target.value)}
          placeholder="Nombre del evento"
          className="p-2 border rounded"
        />

        {/* Selector de diseño */}
        <div className="flex gap-2 justify-center">
          {backgrounds.map((bg, i) => (
            <button
              key={i}
              onClick={() => setDesign(i)}
              className={`w-10 h-10 rounded ${bg} border-2 ${
                design === i ? "border-black" : "border-transparent"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Vista previa */}
      <div
        ref={cardRef}
        className={`w-80 h-48 flex flex-col items-center justify-center text-white font-bold text-center rounded-xl shadow-lg ${backgrounds[design]}`}
      >
        <p className="text-lg">Gracias {nombre}</p>
        <p className="text-sm mt-2">Por tu aporte en</p>
        <p className="text-base">{evento}</p>
      </div>

      {/* Botón de descarga */}
      <Button onClick={downloadCard} className="mt-6">Descargar tarjeta</Button>
    </div>
  );
}
