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
              {/* PayPal USD, EUR */}
              <a
                href="https://www.paypal.com/paypalme/empireyoncarespa" // 👉 cambia por tu enlace PayPal
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg text-center font-semibold text-white"
              >
                💳 Donar con PayPal
              </a>

              {/* Binance USDT*/}
              <a
                href="https://drive.google.com/file/d/1JkHdOMmhP9jLE4XP7B_JDq13Y3jeFW6l/view" // 👉 pon tu enlace o código QR
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-yellow-500 hover:bg-yellow-600 py-3 rounded-lg text-center font-semibold text-white"
              >
                🪙 Donar con Binance
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/34643948196 " // 👉 cambia con tu número
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg text-center font-semibold text-white"
              >
                📲Hablar por WhatsApp
                Nota 1: Para evitar comisiones si es Posible usa BINANCE, o Aprende a usarlo. Como miembro de la comunidad es necesario entender las criptomonedas para desarrollarnos.
                Nota 2: si no puedes donar ni por payal, ni por binance me puedes escribir por whatsapp y vemos que medio usamos yape, zelle, bizum, pago movil.
                Nota 3: Si eres programador y quieres ayudar en el Desarrollo del proyecto de la comunidad, escribeme al whatsapp, y unete al discord, estos proyecto te serviran mucho en un curriculum.
                Nota 4: Gracias por ser parte de Esto.
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
