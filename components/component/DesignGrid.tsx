import ImageProject from "@/app/ImageProject" // Ajuste o caminho se necessário

export function DesignGrid() {
  return (
    /* 
      Mesmo Grid do seu portfólio original, garantindo que tudo 
      fique alinhado e responsivo. Adicionei justify-items-center
      para manter os cards centralizados se a tela for muito larga.
    */
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 justify-items-center">
      
      {/* PROJETO 1 - DESIGN (Exemplo de Campanha) */}
      <ImageProject
        imgsrc="/Design/varal_v3.jpg" // Imagem cortada/miniatura para o card
        fullImgSrc="/Design/varal_v3.jpg" // Imagem em alta resolução para abrir no Modal
        alt="Campanha Varal Colaborativo"
        projname="Campanha: Varal Colaborativo"
        projinfo="O varal colaborativo é uma campanha para arrecadação de roupas para o inverno, então foi utilizados elementos que remetem a isso e também para passar um sentimento mais aconchegante e mais emotiva"
        technologies={[
          { id: 1, name: "Adobe Illustrator", width: "90%" },
          { id: 2, name: "Adobe Photoshop", width: "80%" }
        ]}
      />

      {/* PROJETO 2 - DESIGN INSTITUCIONAL */}
      <ImageProject
        imgsrc="/Design/feira.jpg"
        fullImgSrc="/Design/feira.jpg"
        alt="Adaptação de Material Institucional"
        projname="Campanha: Feira Ecologica"
        projinfo="Design feito para a feira agroecologica da unicentro, buscando um design mais aconchegante e natural de acordo com a proposta da campanha"
        technologies={[
           { id: 1, name: "Adobe Illustrator", width: "90%" },
          { id: 2, name: "Adobe Photoshop", width: "80%" }
        ]}
      />

      {/* PROJETO 3 - FOTOGRAFIA */}
      <ImageProject
        imgsrc="/Design/advogado.jpg"
        fullImgSrc="/Design/advogado.jpg"
        alt="Ensaio Fotográfico"
        projname="Arte para o dia do Advogado"
        projinfo="A arte foi uma adaptação de uma imagem anterior gerada com IA mas que nao seguia a proposta do evento, então alguns elementos foram alterados para que a imagem fosse chamativa e com bom equilibrio"
        technologies={[
           { id: 1, name: "Adobe Illustrator", width: "90%" },
          { id: 2, name: "Adobe Photoshop", width: "80%" }
        ]}
      />

    </div>
  )
}