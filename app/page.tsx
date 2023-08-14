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
          imgsrc="/oldportfolio.png"
          alt="Portfolio(2019)"
          projname="Portfolio(2019)"
          projlink="https://duansydor.github.io/myportfolio/#/"
          projinfo="
          Este é o meu primeiro portfolio de desenvolvedor Web, foi utilizado ReactJs puro junto com CSS, utilizei alguns conhecimentos para criar uma calculadora interativa onde mostro como o React da a liberdade para criar componentes interativos de uma maneira mais facil e limpa."
          technologies={
            [
              {
                id: 1,
                name: "React",
                width: "70%"
              },
              {
                id: 2,
                name: "CSS",
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
