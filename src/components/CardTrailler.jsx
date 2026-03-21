import React from "react";

function CardTrailler({ titulo, genero, data, imagem }) {
  return (
    <div
      className="relative w-72 h-96 rounded-xl overflow-hidden bg-black text-white shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
      style={{ backgroundImage: `url(${imagem})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay semi-transparente */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Info */}
      <div className="absolute bottom-4 left-4 w-[90%]">
        <p className="bg-yellow-500 text-black text-xs font-bold rounded-lg text-center px-2 py-1 mb-2">
          {genero}
        </p>
        <p className="text-lg font-bold mb-1">{titulo}</p>
        <p className="text-sm">{data}</p>
      </div>
    </div>
  );
}

export default CardTrailler;