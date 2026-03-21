import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-[#171717] text-white px-4 py-6">
      
      {/* Container principal */}
      <div className="flex flex-wrap justify-between gap-6 mb-12">

        {/* Plataforma */}
        <div className="max-w-sm">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent mb-2">
            CineTeatro
          </h2>
          <p className="leading-relaxed text-sm">
            A plataforma dedicada à exibição e divulgação de filmes e peças teatrais gravadas.
            Descubra produções incríveis de estúdios e grupos teatrais de todo o país.
          </p>
        </div>

        {/* Links rápidos */}
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Links Rápidos</h2>
          <div className="flex flex-col items-center gap-1 text-sm">
            <Link to="/" className="hover:text-red-500 hover:underline">Início</Link>
            <Link to="/login" className="hover:text-red-500 hover:underline">Entrar</Link>
            <Link to="/cadastro" className="hover:text-red-500 hover:underline">Cadastrar</Link>
          </div>
        </div>

        {/* Redes sociais */}
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Redes Sociais</h2>

          <div className="flex justify-center gap-4 mt-2">
            
            <a href="#" className="p-2 rounded-lg hover:bg-red-600 transition">
              <img src="/img/icones_social_media/fb.png" alt="Facebook" className="w-10 h-10"/>
            </a>

            <a href="#" className="p-2 rounded-lg hover:bg-red-600 transition">
              <img src="/img/icones_social_media/instagram.png" alt="Instagram" className="w-10 h-10"/>
            </a>

            <a href="#" className="p-2 rounded-lg hover:bg-red-600 transition">
              <img src="/img/icones_social_media/whatsapp.png" alt="WhatsApp" className="w-10 h-10"/>
            </a>

          </div>
        </div>

      </div>

      {/* Linha */}
      <hr className="border-gray-600" />

      {/* Notas */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
        <p>&copy; 2026 Cine Teatro. Todos os direitos reservados</p>
        <Link to="/termos" className="hover:text-red-500 hover:underline">
          Termos de Uso
        </Link>
        <Link to="/privacidade" className="hover:text-red-500 hover:underline">
          Política de Privacidade
        </Link>
      </div>

    </footer>
  )
}

export default Footer