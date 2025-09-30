import React, { useState } from "react";

export default function ApoyoProyecto() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mt-12 text-center">
      {/* Botón principal */}
      <button
        onClick={() => setShowModal(true)}
        className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform"
      >
        💚 Apoya este proyecto
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white rounded-2xl shadow-2xl w-11/12 max-w-md p-6 relative">
            {/* Botón cerrar */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">
              🚀 Apoya el proyecto
            </h2>
            <p className="text-gray-300 mb-6 text-center">
              Gracias por tu interés en apoyar lo que hago 🙌.  
              Puedes ayudarme de las siguientes formas:
            </p>

            <div className="space-y-4">
              {/* PayPal */}
              <a
                href="https://www.paypal.me/TUENLACE" // 👉 cambia por tu enlace PayPal
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 hover:text-white text-xl py-3 rounded-lg text-center font-semibold"
              >
                💳 Donar con PayPal
              </a>

              {/* Binance */}
              <a
                href="https://www.binance.com/" // 👉 pon tu enlace o código QR
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-yellow-500 hover:bg-yellow-600 py-3 rounded-lg text-center font-semibold text-black"
              >
                🪙 Donar con Binance
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/34600000000" // 👉 cambia con tu número
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg text-center font-semibold"
              >
                📲 Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
