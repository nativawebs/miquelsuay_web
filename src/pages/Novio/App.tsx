import React from 'react';
import { MinimalHeader } from '../../components/MinimalHeader';
import { HeroLead } from '../../components/HeroLead';
import { AppointmentForm } from '../../components/AppointmentForm';
import { TrustStrip } from '../../components/TrustStrip';
import { EditorialSection } from '../../components/EditorialSection';
import { ProductEditorialGrid } from '../../components/ProductEditorialGrid';
import { AppointmentTimeline } from '../../components/AppointmentTimeline';
import { FinalAppointmentCTA } from '../../components/FinalAppointmentCTA';
import { LegalFooter } from '../../components/LegalFooter';

const App: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('solicitar-cita');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <MinimalHeader onCtaClick={scrollToForm} />
      
      <main>
        <HeroLead 
          variant="novio"
          eyebrow="Colección Novio · Miquel Suay"
          headlineTitle="Tu traje debería hablar de ti"
          headlineItalic="antes de que digas"
          headlineEnd="una sola palabra."
          subtext="Diseño de alta costura y un protocolo personalizado para encontrar la caída, el corte y los detalles que representan tu carácter."
          imageSlotId="GROOM_HERO"
          imageAltText="Novio vistiendo traje de alta costura Miquel Suay"
          formComponent={<AppointmentForm landingType="novio" defaultCategory="Novio" />}
        />

        <TrustStrip 
          theme="dark"
          items={[
            { 
              number: "01", 
              title: "+40 Años de Oficio", 
              description: "Maestría sastrera tradicional fusionada con patronaje contemporáneo.",
              highlighted: true 
            },
            { 
              number: "02", 
              title: "Atención Individual", 
              description: "Espacio y tiempo reservados en exclusiva para ti y tus acompañantes." 
            },
            { 
              number: "03", 
              title: "Ajuste en Atelier", 
              description: "Modistas y sastres propios afinando cada milímetro de tu pieza." 
            }
          ]}
        />

        <EditorialSection 
          numberTag="01"
          eyebrow="Filosofía de Alta Costura"
          title="Tu estilo verdadero,"
          titleItalic="no un uniforme."
          description="El traje para tu enlace no consiste en encajar en un molde prediseñado, sino en proyectar tu mejor versión. Escuchamos tu idea de celebración, tu fisonomía y el lugar del evento antes de trazar la primera aguja."
          imageSlotId1="GROOM_STYLE_CLASSIC"
          imageSlotId2="GROOM_STYLE_CONTEMPORARY"
        />

        <ProductEditorialGrid 
          title="Selección Protagonista"
          subtitle="Explora los tres pilares de estilo que definen nuestra visión de la ceremonia masculina."
          onCtaClick={scrollToForm}
          products={[
            {
              name: "Clásico Contemporáneo",
              description: "Líneas puras, solapas depuradas y tejidos nobles de lana virgen y seda que trascienden el tiempo.",
              imageSlotId: "GROOM_STYLE_CHARACTER"
            },
            {
              name: "Ceremonia con Carácter",
              description: "Para quien busca presencia rotunda mediante colores profundos, chalecos con personalidad y botonaduras exclusivas.",
              imageSlotId: "GROOM_DETAIL_FABRIC"
            },
            {
              name: "Sofisticación Relajada",
              description: "Patronaje ligero y desestructurado en mezclas de lino y seda refinada, ideal para enlaces al aire libre o marinos.",
              imageSlotId: "GROOM_ATELIER"
            }
          ]}
        />

        <AppointmentTimeline 
          title="La Experiencia de tu Cita"
          subtitle="Un recorrido estructurado y tranquilo desde la primera conversación hasta la entrega final."
          steps={[
            {
              number: "01",
              title: "Escucha",
              description: "Profundizamos en el concepto del evento, tus referencias y protocolo deseado."
            },
            {
              number: "02",
              title: "Selección",
              description: "Probamos siluetas, solapas y selecciones de tejidos de los mejores telares europeos."
            },
            {
              number: "03",
              title: "Toma de Medidas",
              description: "Modelado preciso para que la caída de la prenda se adapte como una segunda piel."
            },
            {
              number: "04",
              title: "Prueba y Ajuste",
              description: "Retoque en taller propio con la pieza avanzada para garantizar libertad de movimiento."
            },
            {
              number: "05",
              title: "Entrega",
              description: "Revisión final de planchado y presentación para que todo esté perfecto en tu gran día."
            }
          ]}
        />

        <TrustStrip 
          title="Por qué elegir Miquel Suay"
          theme="light"
          items={[
            { title: "Asesoramiento de Estilo", description: "Orientación experta sobre protocolo y armonía con el vestido de la pareja." },
            { title: "Materiales Exclusivos", description: "Paños de lana Super 130s, sedas naturales y mezclas de alta gama." },
            { title: "Garantía de Ajuste", description: "Ningún traje sale del atelier sin nuestra supervisión minuciosa." }
          ]}
        />

        <FinalAppointmentCTA 
          eyebrow="Atelier Privado"
          title="Descubre tu traje en una experiencia única"
          imageSlotId="GROOM_FINAL_CTA"
          onCtaClick={scrollToForm}
        />
      </main>

      <LegalFooter />
    </>
  );
};

export default App;
