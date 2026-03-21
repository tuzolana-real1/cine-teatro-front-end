import React from "react";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white p-6">
      {/* Título */}
      <h1 className="text-3xl font-bold text-orange-500 mb-2">
        Dashboard
      </h1>
      <p className="text-gray-400 mb-6">
        Gerencie seus conteúdos e anúncios
      </p>

      {/* Cards de métricas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        
        {/* Card */}
        <div className="bg-[#171717] p-4 rounded-xl border border-gray-700 flex items-center gap-4">
          <div className="bg-red-600 p-3 rounded-lg">🎬</div>
          <div>
            <p className="text-xl font-bold">0</p>
            <p className="text-sm text-gray-400">Publicações</p>
          </div>
        </div>

        <div className="bg-[#171717] p-4 rounded-xl border border-gray-700 flex items-center gap-4">
          <div className="bg-yellow-500 p-3 rounded-lg">👁</div>
          <div>
            <p className="text-xl font-bold">0</p>
            <p className="text-sm text-gray-400">Visualizações</p>
          </div>
        </div>

        <div className="bg-[#171717] p-4 rounded-xl border border-gray-700 flex items-center gap-4">
          <div className="bg-yellow-600 p-3 rounded-lg">⭐</div>
          <div>
            <p className="text-xl font-bold">0.0</p>
            <p className="text-sm text-gray-400">Avaliação Média</p>
          </div>
        </div>

        <div className="bg-[#171717] p-4 rounded-xl border border-gray-700 flex items-center gap-4">
          <div className="bg-yellow-700 p-3 rounded-lg">❤️</div>
          <div>
            <p className="text-xl font-bold">0</p>
            <p className="text-sm text-gray-400">Total Gostos</p>
          </div>
        </div>

        <div className="bg-[#171717] p-4 rounded-xl border border-gray-700 flex items-center gap-4">
          <div className="bg-red-700 p-3 rounded-lg">💬</div>
          <div>
            <p className="text-xl font-bold">0</p>
            <p className="text-sm text-gray-400">Comentários</p>
          </div>
        </div>
      </div>

      {/* Botões topo */}
      <div className="flex justify-end gap-3 mb-6">
        <button className="border border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-800">
          Novo Anúncio
        </button>
        <button className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700">
          + Novo Conteúdo
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-4">
        <button className="bg-[#171717] px-4 py-2 rounded-lg border border-gray-700">
          Conteúdos
        </button>
        <button className="px-4 py-2 text-gray-400 hover:text-white">
          Anúncios
        </button>
        <button className="px-4 py-2 text-gray-400 hover:text-white">
          Comentários
        </button>
      </div>

      {/* Conteúdo vazio */}
      <div className="bg-[#171717] border border-gray-700 rounded-xl p-10 flex flex-col items-center justify-center text-center">
        <div className="text-5xl mb-4 text-gray-500">🎞</div>
        <p className="text-gray-400 mb-4">
          Você ainda não publicou nenhum conteúdo.
        </p>

        <button className="bg-red-600 px-6 py-2 rounded-lg hover:bg-red-700">
          Publicar Primeiro Conteúdo
        </button>
      </div>
    </div>
  );
}

export default Dashboard;