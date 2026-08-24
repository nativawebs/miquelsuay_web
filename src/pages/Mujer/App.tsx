import React, { useState } from 'react';
import { MinimalHeader } from '../../components/MinimalHeader';
import { HeroLead } from '../../components/HeroLead';
import { AppointmentForm } from '../../components/AppointmentForm';
import { TrustStrip } from '../../components/TrustStrip';
import { CategorySelector } from '../../components/CategorySelector';
import { CategoryBlock } from '../../components/CategoryBlock';
import { AppointmentTimeline } from '../../components/AppointmentTimeline';
import { FinalAppointmentCTA } from '../../components/FinalAppointmentCTA';
import { LegalFooter } from '../../components/LegalFooter';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const scrollToForm = (category?: string) => {
    if (category) {
      setSelectedCategory(category);
    }
    const formElement = document.getElementById('solicitar-cita');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    { id: 'seccion-novia', label: 'Novia', value: 'Novia' },
    { id: 'seccion-festera', label: 'Festera', value: 'Festera' },
    { id: 'seccion-madrina', label: 'Madrina', value: 'Madrina' },
    { id: 'seccion-graduacion', label: 'Graduación', value: 'Graduacion' }
  ];

  return (
    <>
      <MinimalHeader onCtaClick={() => scrollToForm()} ctaText="Solicita tu cita" />
      
      <main>
        <HeroLead 
          variant="mujer"
          eyebrow="Universo Mujer · Miquel Suay"
          headlineTitle="Momentos que merecen"
          headlineItalic="un diseño a la altura"
          headlineEnd="de tu historia."
          subtext="Novia, Festera, Madrina o Graduación: descubre una experiencia de costura individualizada pensada para potenciar tu presencia natural."
          imageSlotId="WOMEN_HERO"
          secondaryImageSlotId="BRIDE_SECONDARY"
          imageAltText="Diseño de ceremonia femenino Miquel Suay"
          formComponent={
            <AppointmentForm 
              landingType="mujer" 
              isCategorySelectable={true} 
              defaultCategory={selectedCategory}
            />
          }
        />

        <CategorySelector 
          categories={categories} 
          onSelectCategory={(val) => setSelectedCategory(val)}
        />

        <TrustStrip 
          theme="dark"
          items={[
            { 
              number: "01", 
              title: "Alta Costura & Atelier", 
              description: "Patronaje impecable y acabados artesanales.",
              highlighted: true 
            },
            { 
              number: "02", 
              title: "Espacio Privado", 
              description: "Probadores exclusivos con calma y reserva absoluta." 
            },
            { 
              number: "03", 
              title: "Asesoramiento Experto", 
              description: "Estilistas guiando cada decisión de tejidos y silueta." 
            }
          ]}
        />

        {/* VARIANT 1: BRIDE */}
        <CategoryBlock
          id="seccion-novia"
          categoryValue="Novia"
          variant="bride"
          eyebrowText="Colección Nupcial"
          title="El vestido empieza"
          titleItalic="con tu propia historia."
          description="Sin encajarte en cánones preestablecidos. Diseñamos o adaptamos la pieza para que refleje tu sensibilidad, la atmósfera de tu boda y tu soltura al caminar."
          ctaText="Descubrir Novia & Reservar Cita"
          imageSlotId1="BRIDE_PRIMARY"
          imageSlotId2="BRIDE_SECONDARY"
          onCtaClick={scrollToForm}
        />

        {/* VARIANT 2: FESTERA */}
        <CategoryBlock
          id="seccion-festera"
          categoryValue="Festera"
          variant="festera"
          eyebrowText="Tradición & Presencia"
          title="Oficio artesanal"
          titleItalic="con carácter propio."
          description="Diseños que honran el arraigo y el valor festivo, manteniendo el equilibrio entre riqueza textil, estructura y comodidad para jornadas intensas."
          ctaText="Solicitar Cita Festera"
          imageSlotId1="FESTERA_PRIMARY"
          imageSlotId2="FESTERA_SECONDARY"
          onCtaClick={scrollToForm}
        />

        {/* VARIANT 3: MADRINA */}
        <CategoryBlock
          id="seccion-madrina"
          categoryValue="Madrina"
          variant="madrina"
          eyebrowText="Distinción & Protocolo"
          title="Elegancia sobria para"
          titleItalic="un papel inolvidable."
          description="Siluetas estilizadas, tonos depurados y caídas nobles pensadas para acompañar a la familia con serenidad, distinción y protagonismo medido."
          ctaText="Solicitar Cita Madrina"
          imageSlotId1="MADRINA_PRIMARY"
          imageSlotId2="MADRINA_SECONDARY"
          onCtaClick={scrollToForm}
        />

        {/* VARIANT 4: GRADUATION */}
        <CategoryBlock
          id="seccion-graduacion"
          categoryValue="Graduacion"
          variant="graduation"
          eyebrowText="Diseño Contemporáneo"
          title="Tu nuevo capítulo"
          titleItalic="empieza con fuerza."
          description="Propuestas frescas, cortes asimétricos y elegancia joven para celebrar la culminación de una etapa y entrar con plena seguridad en la siguiente."
          ctaText="Encontrar mi Look de Graduación"
          imageSlotId1="GRADUATION_PRIMARY"
          imageSlotId2="GRADUATION_SECONDARY"
          onCtaClick={scrollToForm}
        />

        <AppointmentTimeline 
          title="Tu Visita Privada al Atelier"
          subtitle="Cinco pasos diseñados para tu tranquilidad y confianza absoluta."
          steps={[
            {
              number: "01",
              title: "Escucha",
              description: "Entendemos la naturaleza de tu celebración y lo que deseas proyectar."
            },
            {
              number: "02",
              title: "Selección",
              description: "Buscamos los patrones y tejidos que favorecen y encajan con tu estilo."
            },
            {
              number: "03",
              title: "Modelado",
              description: "Adaptamos las líneas de la prenda directamente sobre tu silueta."
            },
            {
              number: "04",
              title: "Ajustes",
              description: "Pruebas de costura en taller propio con modistas experimentadas."
            },
            {
              number: "05",
              title: "Entrega Final",
              description: "Comprobación del acabado impecable para que disfrutes tu gran día."
            }
          ]}
        />

        <TrustStrip 
          title="Garantías del Universo Miquel Suay"
          theme="light"
          items={[
            { title: "Taller Propio de Modistas", description: "Confección y modificaciones realizándolas en nuestras propias manos." },
            { title: "Citas Privadas e Íntimas", description: "Atención sin prisas para que pruebes con total tranquilidad." },
            { title: "Garantía de Entrega", description: "Tiempos asegurados para tu evento sin incertidumbres." }
          ]}
        />

        <FinalAppointmentCTA 
          eyebrow="Universo Mujer"
          title="Descubre la pieza perfecta para tu celebración"
          onCtaClick={() => scrollToForm()}
        />
      </main>

      <LegalFooter />
    </>
  );
};

export default App;
