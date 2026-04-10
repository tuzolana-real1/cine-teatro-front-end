
import imgWomen from "../assets/women.jpg"
import imgKid from "../assets/kid.jpg"
import imgSombras from "../assets/sombras.jpg"
import imgKandonga from "../assets/kandonga.jpg"
import Section from "../components/Section"
import CardTrailler from "../components/CardTrailler" 
import CardAnuncio from "../components/CardAnuncio"

function Home () {
    return(
      <div className="bg-black min-h-screen p-6">
            {/*section de anuncios*/}
      <Section titulo="Anúncios">
        <CardAnuncio
          titulo="Njinga: O eco do tambor"
          descricao="Filme histórico angolano"
          data="2026 - 1h30"
          status="Trailer"
          imagem={imgWomen}
        />

        <CardAnuncio
          titulo="Kandogueiro das malambas"
          descricao="Grande produção nacional"
          data="2025 - 2h"
          status="Disponível"
          imagem={imgKandonga}
        />

        <CardAnuncio
          titulo="O despertar do Java"
          descricao="Filme que retrata o despertar de uma grande linguagem de proramação"
          data="2025 - 2h"
          status="Estreia"
          imagem={imgKid}
        />
      </Section>
        {/*section de traillers*/}
      <Section titulo="Traillers">
        <CardTrailler
          titulo="Sombras do INSTIC"
          genero="Drama Histórico"
          data="2026 - 1h30"
          imagem={imgSombras}
        />

        <CardTrailler
          titulo="Filme X"
          genero="Ação"
          data="2025 - 2h"
          imagem={imgKid}
        />

        <CardTrailler
          titulo="Filme X"
          genero="Ação"
          data="2025 - 2h"
          imagem={imgKid}
        />
      </Section>
        {/*section de filmes*/}
      <Section titulo="Filmes">
        <CardTrailler
          titulo="Njinga"
          genero="Drama Histórico"
          data="2026 - 1h30"
          imagem={imgSombras}
        />

        <CardTrailler
          titulo="Filme X"
          genero="Ação"
          data="2025 - 2h"
          imagem={imgSombras}
        />
      </Section>
       {/*section de peças teatrais*/}
      <Section titulo="Peças Teatrais">
        <CardTrailler
          titulo="Njinga"
          genero="Drama Histórico"
          data="2026 - 1h30"
          imagem={imgWomen}
        />

        <CardTrailler
          titulo="Filme X"
          genero="Ação"
          data="2025 - 2h"
          imagem={imgWomen}
        />
      </Section>

    </div>
    )
}

export default Home