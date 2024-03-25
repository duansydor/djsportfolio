import Image from 'next/image'
import Project from './Project'
import SocialLinks from './SocialLinks'
import Footer from './Footer'
import { CarouselCustom } from '@/components/component/carousel'
import { ContactForm } from '@/components/component/contact-form'
export default function Home() {
  return (
    <div>
      {/* Text info */}
      <div className='p-10 mt-24 h-auto text-blue-950 flex items-start flex-col md:flex-row md:mt-12'>
      <div className="mt-auto mb-auto">
        <h1 className='mt-auto text-2xl font-bold' id="title">MEU ESPAÇO VIRTUAL</h1>
        <h1 className="text-xl font-bold">sinta-se em casa!</h1>
        <p className=' mt-2 w-96 text-lg font-light mb-auto sm:w-96'>
          Seja bem vindo ao meu Portfólio. Me chamo Duan e sou um desenvolvedor front-end junior da cidade de Guarapuava, no Paraná.
          Atualmente estudo: NextJS, TailwindCSS e NodeJS mas possuo também experiencia básica com Java e Python.
        </p>
        </div>
        <div className='ml-auto mb-8'>
        <Image
                width={600}
                height={600}
                src="/Hero.svg"
                alt="|Hero"
                
            />
            </div>
      </div>
      <div className="space-y-2 m-8">
          <h2 className="text-3xl font-bold">Confira meus projetos</h2>
          <p className="text-gray-500 dark:text-gray-400">Arraste para o lado</p>
        </div>
      <div className='w-max ml-auto mr-auto'>
        <CarouselCustom/>
      </div>
      <div className='p-8'>
        <ContactForm/>
      </div>
      <div className='mt-8 w-full justify-center flex flex-row gap-2 ml-auto mr-auto'>
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
          linksrc="https://www.instagram.com/djsydor_/"
        />
      </div>
      
      <Footer />
    </div>
  )
}
