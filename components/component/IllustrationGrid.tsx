import ImageProject from "@/app/ImageProject" // Ajuste o caminho se necessário

export function IllustrationGrid() {
  return (
    /* 
      Mesmo Grid do seu portfólio original, garantindo que tudo 
      fique alinhado e responsivo. Adicionei justify-items-center
      para manter os cards centralizados se a tela for muito larga.
    */
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 justify-items-center">
      
      {/* PROJETO 1 - DESIGN (Exemplo de Campanha) */}
      <ImageProject
        imgsrc="/Illustration/creature.jpeg" // Imagem cortada/miniatura para o card
        fullImgSrc="/Illustration/creature.jpeg" // Imagem em alta resolução para abrir no Modal
        alt="Campanha Varal Colaborativo"
        projname="Estudo de Ilustração de personagem"
        projinfo="Com base em inspirações do pinterest, foquei em utilizar tecnicas de traçado e cores para entender como esse estilo foi feito"
        technologies={[
          { id: 1, name: "Adobe Photoshop", width: "100%" },
          { id: 2, name: "Tablet MX002", width: "70%" }
        ]}
      />

      {/* PROJETO 2 - DESIGN INSTITUCIONAL */}
      <ImageProject
        imgsrc="/Illustration/album.jpg"
        fullImgSrc="/Illustration/album.jpg"
        alt="Adaptação de Material Institucional"
        projname="Capa de Album"
        projinfo="Um trabalho experimental para uma capa de album chamada Ghost, a ilustração meio melancolica com uma manipulação de imagem forte com o objetivo de passar uma vibe punk/emo que era o objetivo para esse teste"
        technologies={[
          { id: 1, name: "Adobe Photoshop", width: "100%" },
          { id: 2, name: "Tablet MX002", width: "70%" }
        ]}
      />

      {/* PROJETO 3 - FOTOGRAFIA */}
      <ImageProject
        imgsrc="/Illustration/gato.jpg"
        fullImgSrc="/Illustration/gato.jpg"
        alt="Ensaio Fotográfico"
        projname="Exercício de observação"
        projinfo="Fiz esse sketch como um exercício de observação, onde usei minha gatinha como modelo para entender como as formas e proporções de um gato"
        technologies={[
          { id: 1, name: "Adobe Photoshop", width: "100%" },
          { id: 2, name: "Tablet MX002", width: "70%" }
        ]}
      />

    </div>
  )
}