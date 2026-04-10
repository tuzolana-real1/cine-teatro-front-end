import React from "react";

function CardAnuncio({ titulo, descricao, data, status, imagem }) {
  return (
    <div className="relative w-80 md:w-96 rounded-xl overflow-hidden bg-black shadow-md hover:shadow-[2px_2px_10px_#afaf35,_-2px_-2px_10px_#afaf35] hover:shadow-xl hover:scale-105 transition-transform duration-300">
      {/* Status */}
      <p
        className={`absolute top-4 left-4 px-3 py-1 font-bold text-white rounded-md shadow ${
          status === "Trailer" ? "bg-red-600" : "bg-green-600"
        }`}
      >
        {status}
      </p>

      {/* Foto */}
      <div
        className="w-full h-48 bg-center bg-cover"
        style={{ backgroundImage: `url(${imagem})` }}
      ></div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xl font-bold mb-2">{titulo}</p>
        <p className="text-sm font-light mb-2">{descricao}</p>
        <p className="text-xs">{data}</p>
      </div>
    </div>
  );
}

export default CardAnuncio;