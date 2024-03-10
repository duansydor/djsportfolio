import Image from 'next/image'
import Project from './Project'
import SocialLinks from './SocialLinks'
import Footer from './Footer'
export default function Home() {
  return (
    <div>
      {/* Text info */}
      <div className='grid justify-items-center text-center p-10 mt-12 text-blue-950 font-bold'>
        <h1 className='title'>Quem sou eu?</h1>
        <div className='info float-center lg:w-96'>
          Seja bem vindo ao meu Portfólio. Me chamo Duan e sou um desenvolvedor front-end junior da cidade de Guarapuava, no Paraná.
          Atualmente estudo: NextJS, TailwindCSS e NodeJS mas possuo também experiencia básica com Java e Python.
        </div>
        <p className='.info'>
          Contato:<br />
          josiasduan@gmail.com<br />
          (42) 98409-7698
        </p>
      </div>
      <h1 className='title mb-8 w-full text-center'>Projetos Recentes</h1>
      <div className='w-full grid justify-items-center lg:grid-cols-2 gap-2 lg:w-max m-auto'>
      <Project
          imgsrc="/FireChat.png"
          alt="FireChat"
          projname="FireChat"
          projlink="https://firechat-tawny.vercel.app/"
          projinfo="
          Este é um projeto feito para uma vaga específica de Frontend onde tentei usar os requisitos solicitados na vaga para demonstrar minhas habilidades. É meu primeiro projeto utilizando Vue, Vuex, Vue Router e Firebase.
          o codigo para este projeto pode ser encontrado em https://github.com/duansydor/firechat/"
          technologies={
            [
              {
                id: 1,
                name: "Vue",
                width: "100%"
              },
              {
                id: 2,
                name: "Vuex",
                width: "100"
              },
              {
                id: 3,
                name: "Router",
                width: "40%"
              },
              {
                id: 4,
                name: "Firebase",
                width: "40%"
              },
            ]
          }
        />
        <Project
          imgsrc="/tarot.png"
          alt="Tarot"
          projname="Tarot"
          projlink="https://tarotreader-jet.vercel.app/"
          projinfo="
          Este WebApp gera cartas de Tarot aleatórias com seu respectivo significado, foi utilizado apenas HTML, Javscript e CSS e tambem Lottie para as animações"
          technologies={
            [
              {
                id: 1,
                name: "JavaScript",
                width: "70%"
              },
              {
                id: 2,
                name: "CSS",
                width: "38.5%"
              },
              {
                id: 3,
                name: "Lootie",
                width: "90%"
              }
            ]
          }
        />
        <Project
          imgsrc="/moldegenerator.png"
          alt="Projeto - gerador de moldes de letras"
          projname="Moldes de letras para E.V.A"
          projlink="https://gerarmoldes.vercel.app/"
          projinfo="
          Este é um projeto desenvolvido com a finalidade de facilitar a criação de moldes de letras na papelaria onde trabalho,
          para que posteriormente sejam impressas e utilizadas na criação de letras em E.V.A de forma rápida e simples."
          technologies={
            [
              {
                id: 1,
                name: "NextJS",
                width: "70%"
              },
              {
                id: 2,
                name: "SCSS",
                width: "38.5%"
              },
              {
                id: 3,
                name: "Figma",
                width: "90%"
              }
            ]
          }
        />
        <Project
          imgsrc="/duoicon.png"
          alt="DuolingoClone"
          projname="Duolingo Clone"
          projlink="https://duolingoclone-one.vercel.app/"
          projinfo="Este projeto(ainda em desenvolvimento) é uma tentativa de copiar a interface do duolingo para praticar algumas funções do tailwind e de css em geral.
          foi utilizado React com NextJS para algumas interações, como botões"
          technologies={
            [
              {
                id: 1,
                name: "React",
                width: "70%"
              },
              {
                id: 2,
                name: "TailwindCSS",
                width: "38.5%"
              },
            ]
          }
        />
      </div>
      <h1 className='title mt-8 w-full text-center'>Minhas Redes</h1>
      <div className='mt-8 w-full grid grid-rows-1 grid-cols-1 gap-4 lg:grid-cols-3 justify-items-center lg:w-max m-auto'>
        <SocialLinks
          nome="Github"
          linksrc="https://github.com/duansydor/"
        />
        <SocialLinks
          nome="Linkedin"
          linksrc="https://www.linkedin.com/in/duan-sydor/"
        />
        <SocialLinks
          nome="Instagram"
          linksrc="https://www.instagram.com/ssatanael123/"
        />
      </div>
      <div className='w-full grid justify-items-center mt-8 gap-8'>
        <h1 className='title'>Obrigado pela visita!</h1>
        <Image
          alt=''
          width={200}
          height={200}
          src={"/business.png"}
        />
      </div>
      <Footer />
    </div>
  )
}
