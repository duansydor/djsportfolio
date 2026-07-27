import ImageProject from "@/app/ImageProject" // Ajuste o caminho se necessário

export function PhotoGrid() {
  return (
    /* 
      Mesmo Grid do seu portfólio original, garantindo que tudo 
      fique alinhado e responsivo. Adicionei justify-items-center
      para manter os cards centralizados se a tela for muito larga.
    */
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 justify-items-center">
      
      {/* PROJETO 1 - DESIGN (Exemplo de Campanha) */}
      <ImageProject
        imgsrc="/Photo/macro.jpeg" // Imagem cortada/miniatura para o card
        fullImgSrc="/Photo/macro.jpeg" // Imagem em alta resolução para abrir no Modal
        alt="Campanha Varal Colaborativo"
        projname="Fotografia Macro"
        projinfo="Fotografia tirada com o celular, focando nos detalhes da aranha, e com uma composição centralizada para que o olhar seja direcionado para a aranha"
        technologies={[
          { id: 1, name: "Xiaomi Poco C75", width: "90%" },
        ]}
      />

      {/* PROJETO 2 - DESIGN INSTITUCIONAL */}
      <ImageProject
        imgsrc="/Photo/manipulado.jpeg"
        fullImgSrc="/Photo/manipulado.jpeg"
        alt="Adaptação de Material Institucional"
        projname="Manipulação Fotográfica"
        projinfo="Uma fotografia casual mas manipulada com outras fotografias tiradas no mesmo local, foi utilizado efeitos de mesclagem para chegar ao objetivo, e as cores escolhidas para formar um impacto visual forte"
        technologies={[
          { id: 1, name: "Adobe Photoshop", width: "100%" },
          { id: 1, name: "Xiaomi Poco C75", width: "90%" },
        ]}
      />

      {/* PROJETO 3 - FOTOGRAFIA */}
      <ImageProject
        imgsrc="/Photo/natureza.jpg"
        fullImgSrc="/Photo/natureza.jpg"
        alt="Ensaio Fotográfico"
        projname="Fotografia Natural"
        projinfo="Mais uma foto que tinha como objetivo capturar a sensação que o clima passava, um tanto quanto melancólica, onde a composição focou nisso, com o fundo desfocado, dando destaque as gotas presas nas folhagens da arvore"
        technologies={[
          { id: 1, name: "Composição", width: "100%" },
          { id: 1, name: "Xiaomi Poco C75", width: "90%" },
          { id: 3, name: "Adobe Lightroom", width: "85%" }
        ]}
      />

    </div>
  )
}