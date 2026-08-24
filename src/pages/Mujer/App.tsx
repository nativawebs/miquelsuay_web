import React, { useState } from 'react';
import { MinimalHeader } from '../../components/MinimalHeader';
import { HeroLead } from '../../components/HeroLead';
import { AppointmentForm } from '../../components/AppointmentForm';
import { TrustStrip } from '../../components/TrustStrip';
import { CategorySelector } from '../../components/CategorySelector';
import { CategoryBlock } from '../../components/CategoryBlock';
import { GridSection } from '../../components/GridSection';
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
    { id: 'seccion-novia', label: 'Novia' },
    { id: 'seccion-festera', label: 'Festera' },
    { id: 'seccion-madrina', label: 'Madrina' },
    { id: 'seccion-graduacion', label: 'Graduación' }
  ];

  return (
    <>
      <MinimalHeader onCtaClick={() => scrollToForm()} ctaText="Solicita tu cita" />
      
      <main>
        <HeroLead 
          eyebrow="UNIVERSO MUJER · MIQUEL SUAY"
          headline="Hay momentos que merecen un diseño a tu altura."
          subtext="Novia, festera, madrina o graduación: encuentra una pieza que refleje quién eres y vive una experiencia de asesoramiento creada alrededor de ti."
          imageSlotId="WOMEN_HERO"
          imageAltText="Mujer con diseño Miquel Suay"
          formComponent={
            <AppointmentForm 
              landingType="mujer" 
              isCategorySelectable={true} 
              defaultCategory={selectedCategory}
            />
          }
        />

        <CategorySelector categories={categories} />

        <TrustStrip 
          items={[
            { title: "Oficio y taller", description: "Artesanía y precisión en cada puntada." },
            { title: "Atención individual", description: "Un espacio donde solo importas tú." },
            { title: "Acompañamiento", description: "Asesoramiento estilístico desde la primera prueba." }
          ]}
        />

        <CategoryBlock
          id="seccion-novia"
          categoryValue="Novia"
          title="El vestido empieza contigo."
          description="No buscamos encajarte en una idea de novia. Te acompañamos a descubrir el diseño que conecta con tu historia, tu celebración y tu manera de sentir."
          ctaText="Quiero encontrar mi vestido"
          imageSlotId1="BRIDE_PRIMARY"
          imageSlotId2="BRIDE_SECONDARY"
          onCtaClick={scrollToForm}
        />

        <CategoryBlock
          id="seccion-festera"
          categoryValue="Festera"
          title="Tradición con una forma muy tuya de vivirla."
          description="Diseños que respetan el valor de la indumentaria festera y expresan presencia, oficio y personalidad."
          ctaText="Solicitar cita Festera"
          imageSlotId1="FESTERA_PRIMARY"
          imageSlotId2="FESTERA_SECONDARY"
          reversed
          onCtaClick={scrollToForm}
        />

        <CategoryBlock
          id="seccion-madrina"
          categoryValue="Madrina"
          title="Elegancia para un papel esencial."
          description="Una selección pensada para acompañarte con seguridad, sofisticación y equilibrio en uno de los días más importantes de la familia."
          ctaText="Solicitar cita Madrina"
          imageSlotId1="MADRINA_PRIMARY"
          imageSlotId2="MADRINA_SECONDARY"
          onCtaClick={scrollToForm}
        />

        <CategoryBlock
          id="seccion-graduacion"
          categoryValue="Graduacion"
          title="Tu siguiente capítulo empieza así."
          description="Looks actuales y especiales para celebrar todo lo que has conseguido y entrar con confianza en lo que viene."
          ctaText="Encontrar mi look"
          imageSlotId1="GRADUATION_PRIMARY"
          imageSlotId2="GRADUATION_SECONDARY"
          reversed
          onCtaClick={scrollToForm}
        />

        <GridSection 
          title="La experiencia de cita"
          subtitle="Desde el primer momento, nuestro equipo trabaja para que te sientas segura de tu elección."
          columns={4}
          items={[
            { title: "Escucha", description: "Entendemos la naturaleza de tu celebración y lo que deseas proyectar." },
            { title: "Selección", description: "Buscamos los patrones y tejidos que favorecen y encajan con tu estilo." },
            { title: "Prueba y Ajustes", description: "Trabajamos en las modificaciones necesarias para un ajuste impecable." },
            { title: "Entrega", description: "Comprobamos el resultado final para garantizar tu tranquilidad." }
          ]}
        />

        <GridSection 
          title="Por qué Miquel Suay"
          theme="dark"
          columns={3}
          items={[
            { title: "Oficio y tradición", description: "Décadas de experiencia creando moda para ceremonias." },
            { title: "Asesoramiento experto", description: "Te ayudamos a encontrar equilibrio entre protocolo y personalidad." },
            { title: "Atención individual", description: "Citas privadas para que puedas probar con calma y confianza." },
            { title: "Selección cuidada", description: "Materiales y diseños exclusivos." },
            { title: "Arreglos precisos", description: "Taller propio con profesionales experimentadas." },
            { title: "Acompañamiento", description: "Estamos contigo en cada paso hasta el día del evento." }
          ]}
        />

        <FinalAppointmentCTA 
          title="Descubre nuestro Universo Mujer"
          imageSlotId="WOMEN_FINAL_CTA"
          onCtaClick={() => scrollToForm()}
        />
      </main>

      <LegalFooter />
    </>
  );
};

export default App;
