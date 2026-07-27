import Project from "@/app/Project"

export function UiUxGrid() {
  return (
    /* 
      Container principal usando CSS Grid:
      - grid-cols-1: 1 projeto por linha no celular
      - md:grid-cols-2: 2 projetos por linha em tablets/telas médias
      - lg:grid-cols-4: 4 projetos por linha em monitores grandes
      - gap-6: Espaçamento de respiro entre os cards
    */
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
      
      {/* PROJETO 1 */}
      {/* <Project
        imgsrc="/FireChat.png"
        alt="FireChat"
        projname="FireChat"
        projlink="https://firechat-tawny.vercel.app/"
        projinfo="Este é um projeto feito para uma vaga específica de Frontend onde tentei usar os requisitos solicitados na vaga para demonstrar minhas habilidades. É meu primeiro projeto utilizando Vue, Vuex, Vue Router e Firebase. o codigo para este projeto pode ser encontrado em github.com/duansydor/firechat/"
        technologies={[
          { id: 1, name: "Vue", width: "100%" },
          { id: 2, name: "Vuex", width: "100" },
          { id: 3, name: "Router", width: "40%" },
          { id: 4, name: "Firebase", width: "40%" },
        ]}
      /> */}

      {/* PROJETO 2 */}
      <Project
        imgsrc="/tarot.png"
        alt="Tarot"
        projname="Tarot"
        projlink="https://tarotreader-jet.vercel.app/"
        projinfo="Este WebApp gera cartas de Tarot aleatórias com seu respectivo significado, foi utilizado apenas HTML, Javscript e CSS e tambem Lottie para as animações"
        technologies={[
          { id: 1, name: "JavaScript", width: "70%" },
          { id: 2, name: "CSS", width: "38.5%" },
          { id: 3, name: "Lootie", width: "90%" }
        ]}
      />

      {/* PROJETO 3 */}
      <Project
        imgsrc="/moldegenerator.png"
        alt="Projeto - gerador de moldes de letras"
        projname="Moldes de letras para E.V.A"
        projlink="https://gerarmoldes.vercel.app/"
        projinfo="Este é um projeto desenvolvido com a finalidade de facilitar a criação de moldes de letras na papelaria onde trabalho, para que posteriormente sejam impressas e utilizadas na criação de letras em E.V.A de forma rápida e simples."
        technologies={[
          { id: 1, name: "NextJS", width: "70%" },
          { id: 2, name: "SCSS", width: "38.5%" },
          { id: 3, name: "Figma", width: "90%" }
        ]}
      />

      {/* PROJETO 4 */}
      <Project
        imgsrc="/duoicon.png"
        alt="DuolingoClone"
        projname="Duolingo Clone"
        projlink="https://duolingoclone-one.vercel.app/"
        projinfo="Este projeto (ainda em desenvolvimento) é uma tentativa de copiar a interface do duolingo para praticar algumas funções do tailwind e de css em geral. foi utilizado React com NextJS para algumas interações, como botões"
        technologies={[
          { id: 1, name: "React", width: "70%" },
          { id: 2, name: "TailwindCSS", width: "38.5%" },
        ]}
      />

    </div>
  )
}