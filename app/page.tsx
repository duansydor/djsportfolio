import Image from 'next/image'
import '@fontsource-variable/caveat';
import SocialLinks from './SocialLinks'
import Footer from './Footer'
import { ProjectsGrid } from '@/components/component/ProjectsGrid'
import { ContactForm } from '@/components/component/contact-form'
import { UiUxGrid } from '@/components/component/UiUxGrid'
import { DesignGrid } from '@/components/component/DesignGrid'
import { PhotoGrid } from '@/components/component/PhotoGrid'
import { IllustrationGrid } from '@/components/component/IllustrationGrid'
export default function Home() {

  const email_keys = {
    public_key : process.env.EMAIL_PUBLIC_KEY,
    service_id : process.env.EMAIL_SERVICE_ID,
    template_id : process.env.EMAIL_TEMPLATE_ID
  }
  return (
    <div>
      {/* Text info */}
      <div className='p-10 h-auto text-blue-950 flex items-start flex-col md:flex-row md:mt-12'>
    
        <div className='ml-auto mb-8'>
          <Image
            width={1920}
            height={1080}
            src="/hero.jpg"
            alt="|Hero"
          />
        {/* <Image
                width={600}
                height={600}
                src="/Hero.svg"
                alt="|Hero"
                
            />
        */}
            </div> 
            <div id="projetos"></div>
      </div>
       {/* Design */}
      <div  className="w-full max-w-6xl mx-auto flex justify-center px-4 mb-10" >
          <h2  className="text-5xl font-bold text-[#212e53]">Design</h2>
        </div>
      <div className='w-full max-w-6xl mx-auto flex justify-center px-4' >
        <DesignGrid/>
      </div>
      {/* UI/UX */}
      <div  className="w-full max-w-6xl mx-auto flex justify-center px-4 mb-10 mt-10" >
          <h2  className="text-5xl font-bold text-[#212e53]">UI/UX</h2>
        </div>
      <div className='w-full max-w-6xl mx-auto flex justify-center px-4' >
        <UiUxGrid/>
      </div>
      {/* Fotografia*/}
      <div  className="w-full max-w-6xl mx-auto flex justify-center px-4 mb-10 mt-10" >
          <h2  className="text-5xl font-bold text-[#212e53]">Fotografia</h2>
        </div>
      <div className='w-full max-w-6xl mx-auto flex justify-center px-4' >
        <PhotoGrid/>
      </div>
      {/* Ilustração*/}
      <div  className="w-full max-w-6xl mx-auto flex justify-center px-4 mb-10 mt-10" >
          <h2  className="text-5xl font-bold text-[#212e53]">Ilustração</h2>
        </div>
      <div className='w-full max-w-6xl mx-auto flex justify-center px-4' >
        <IllustrationGrid/>
      </div>
      <div id="contato" className='mb-8'></div>
  
      {/* <div className='p-8' >
        <ContactForm email_keys={email_keys}/>
      </div> */}
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
          linksrc="https://www.instagram.com/ssatanael/"
        />
      </div>
      
      <Footer />
    </div>
  )
}
