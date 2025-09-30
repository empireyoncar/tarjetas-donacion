import React, { useState, useEffect } from "react";

import './theme.css';
import ApoyoProyecto from "./ApoyoProyecto";

import zerg1 from "./assets/zerg1.jpeg";
import zerg2 from "./assets/zerg2.jpeg";
import zerg3 from "./assets/zerg3.jpeg";
import zerg4 from "./assets/zerg4.jpeg";
import zerg5 from "./assets/zerg5.jpeg";
import zerg6 from "./assets/zerg6.jpeg";

import protoss1 from "./assets/protoss1.jpeg";
import protoss2 from "./assets/protoss2.jpeg";
import protoss3 from "./assets/protoss3.jpeg";
import protoss4 from "./assets/protoss4.jpeg";
import protoss5 from "./assets/protoss5.jpeg";
import protoss6 from "./assets/protoss6.jpeg";
import protoss7 from "./assets/protoss7.jpeg";

import terran1 from "./assets/terran1.jpeg";
import terran2 from "./assets/terran2.jpeg";
import terran3 from "./assets/terran3.jpeg";
import terran4 from "./assets/terran4.jpeg";
import terran5 from "./assets/terran5.jpeg";
import terran6 from "./assets/terran6.jpeg";
import terran7 from "./assets/terran7.jpeg";

import sc2Logo from "./assets/sc2-logo.png"; // Logo de StarCraft 2

export default function TarjetaGenerador() {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [comunidad, setComunidad] = useState("");
  const [pais, setPais] = useState("");
  const [codigo, setCodigo] = useState("");
  const [fecha, setFecha] = useState("");

  const [raza, setRaza] = useState("zerg");
  const [design, setDesign] = useState(0);

  const fondos = {
    zerg: [zerg1, zerg2, zerg3, zerg4, zerg5, zerg6],
    protoss: [protoss1, protoss2, protoss3, protoss4, protoss5, protoss6, protoss7],
    terran: [terran1, terran2, terran3, terran4, terran5, terran6, terran7],
  };

  useEffect(() => {
    document.body.style.backgroundColor = "black";
    document.body.style.margin = 0;
    generarFecha();
    generarCodigo();
  }, []);

  // Generar fecha automática
  const generarFecha = () => {
    const hoy = new Date();
    const dia = String(hoy.getDate()).padStart(2, "0");
    const mes = String(hoy.getMonth() + 1).padStart(2, "0");
    const anio = hoy.getFullYear();
    setFecha(`${dia}/${mes}/${anio}`);
  };

  // Generar código automático
  const generarCodigo = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let nuevoCodigo = "";
    for (let i = 0; i < 8; i++) {
      nuevoCodigo += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCodigo(nuevoCodigo);
  };

  const handleRazaChange = (nuevaRaza) => {
    setRaza(nuevaRaza);
    const opciones = fondos[nuevaRaza];
    let random;
    do {
      random = Math.floor(Math.random() * opciones.length);
    } while (random === design);
    setDesign(random);
    generarCodigo();
    generarFecha();
  };

  const downloadCard = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 1792;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = fondos[raza][design];
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Letras esquina superior izquierda con contorno
      ctx.font = "25px Lucida Console";
      ctx.textBaseline = "top";
      const padding = 20;
      const lineHeight = 30;
      const lines = [
        `Nombre: ${nombre}`,
        `Apellidos: ${apellidos}`,
        `Comunidad: ${comunidad}`,
        `Fecha expedición: ${fecha}`,
        `País: ${pais}`,
        `Código de Documento: ${codigo}`
      ];

      ctx.fillStyle = "white";
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      let y = padding;
      lines.forEach(line => {
        ctx.strokeText(line, padding, y);
        ctx.fillText(line, padding, y);
        y += lineHeight;
      });

      // Título centrado inferior con Copperplate Gothic y contorno
      ctx.font = "60px 'Copperplate', 'Copperplate Gothic', fantasy";
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.strokeStyle = "black";
      ctx.lineWidth = 3;
      ctx.textBaseline = "bottom";
      ctx.strokeText("PRIMERA COLABORACION CASTERS", canvas.width / 2, canvas.height - 100);
      ctx.fillText("PRIMERA COLABORACION CASTERS", canvas.width / 2, canvas.height - 100);

      // Logo StarCraft 2
      const logoImg = new Image();
      logoImg.src = sc2Logo;
      logoImg.onload = () => {
        const logoWidth = 200;
        const logoHeight = (logoImg.height / logoImg.width) * logoWidth;
        ctx.drawImage(logoImg, canvas.width / 2 - logoWidth / 2, canvas.height - 100, logoWidth, logoHeight);

        // @empireyoncar esquina inferior derecha
        ctx.font = "30px Lucida Console";
        ctx.textAlign = "right";
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.strokeText("@empireyoncar", canvas.width - 20, canvas.height - 20);
        ctx.fillText("@empireyoncar", canvas.width - 20, canvas.height - 20);

        // Descargar imagen final
        const link = document.createElement("a");
        link.download = "tarjeta.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      };
    };
  };

  const previewWidth = 320;
  const previewHeight = (previewWidth * 1792) / 1024;

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      <h1 className="text-2xl font-bold mb-4 text-white">Generador de Tarjetas</h1>

      {/* Inputs visibles */}
      <div className="mb-6 grid gap-2 w-full max-w-md text-white">
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" className="p-2 rounded w-full text-black"/>
        <input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} placeholder="Apellidos" className="p-2 rounded w-full text-black"/>
        <input type="text" value={comunidad} onChange={(e) => setComunidad(e.target.value)} placeholder="Comunidad" className="p-2 rounded w-full text-black"/>
        <input type="text" value={pais} onChange={(e) => setPais(e.target.value)} placeholder="País" className="p-2 rounded w-full text-black"/>
      </div>

      {/* Selector de raza */}
      <div className="flex gap-4 mb-6">
        <button onClick={() => handleRazaChange("zerg")} className={`px-6 py-3 rounded font-bold ${raza === "zerg" ? "bg-green-600 text-white" : "bg-gray-700 text-white"}`}>Zerg</button>
        <button onClick={() => handleRazaChange("protoss")} className={`px-6 py-3 rounded font-bold ${raza === "protoss" ? "bg-yellow-600 text-white" : "bg-gray-700 text-white"}`}>Protoss</button>
        <button onClick={() => handleRazaChange("terran")} className={`px-6 py-3 rounded font-bold ${raza === "terran" ? "bg-blue-600 text-white" : "bg-gray-700 text-white"}`}>Terran</button>
      </div>

      {/* Vista previa */}
      <div
        style={{
          backgroundImage: `url(${fondos[raza][design]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: `${previewWidth}px`,
          height: `${previewHeight}px`,
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "8px",
          color: "white",
          fontFamily: "Lucida Console",
          fontSize: "10px",
          lineHeight: "1.0",
          textShadow: "1px 1px 2px black",
          textAlign: "left",
          margin: "0 auto",
          position: "relative"
        }}
      >
        <p style={{ margin: 0 }}>Nombre: {nombre}</p>
        <p style={{ margin: 0 }}>Apellidos: {apellidos}</p>
        <p style={{ margin: 0 }}>Comunidad: {comunidad}</p>
        <p style={{ margin: 0 }}>Fecha expedición: {fecha}</p>
        <p style={{ margin: 0 }}>País: {pais}</p>
        <p style={{ margin: 0 }}>Código de Documento: {codigo}</p>

        {/* Título inferior */}
        <p style={{
          position: "absolute",
          bottom: "80px",
          width: "100%",
          textAlign: "center",
          fontFamily: "'Copperplate', 'Copperplate Gothic', fantasy",
          color: "white",
          textShadow: "2px 2px 4px black",
          fontSize: "16px"
        }}>
          PRIMERA COLABORACION CASTERS
        </p>

        {/* Logo Starcraft2 */}
        <img 
          src={sc2Logo} 
          alt="StarCraft 2 Logo" 
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "120px",
            height: "auto"
          }}
        />

        {/* @empireyoncar */}
        <p style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          fontSize: "10px",
          fontFamily: "Lucida Console",
          color: "white",
          textShadow: "1px 1px 2px black"
        }}>
          @empireyoncar
        </p>
      </div>

      {/* Botón descargar */}
      <button
        onClick={downloadCard}
        disabled={!nombre.trim() || !apellidos.trim() || !comunidad.trim() || !pais.trim()}
        className={`mt-6 px-6 py-3 font-bold rounded transition-colors ${
          !nombre || !apellidos || !comunidad || !pais
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-700"
        }`}
      >
        Descargar tarjeta
      </button>
      // Dentro del return, debajo del botón:
      <ApoyoProyecto />
    </div>
  );
}
