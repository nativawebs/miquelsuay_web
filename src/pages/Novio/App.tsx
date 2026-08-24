import React from 'react';
import { MinimalHeader } from '../../components/MinimalHeader';
import { HeroLead } from '../../components/HeroLead';
import { AppointmentForm } from '../../components/AppointmentForm';
import { TrustStrip } from '../../components/TrustStrip';
import { EditorialSection } from '../../components/EditorialSection';
import { ProductEditorialGrid } from '../../components/ProductEditorialGrid';
import { GridSection } from '../../components/GridSection';
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
          eyebrow="COLECCIÓN NOVIO · MIQUEL SUAY"
          headline="Tu traje de novio debería hablar de ti antes de que digas una palabra."
          subtext="Descubre una selección de trajes de ceremonia y vive una experiencia de asesoramiento pensada para encontrar el corte, el estilo y los detalles que realmente te representan."
          imageSlotId="GROOM_HERO"
          imageAltText="Novio con traje Miquel Suay"
          formComponent={<AppointmentForm landingType="novio" defaultCategory="Novio" />}
        />

        <TrustStrip 
          items={[
            { title: "Más de 40 años", description: "De oficio y excelencia en la sastrería y ceremonia." },
            { title: "Atención individual", description: "Un espacio reservado para ti y tus acompañantes." },
            { title: "Taller y ajustes", description: "Confección y adaptación precisa a tus medidas." }
          ]}
        />

        <EditorialSection 
          title="Tu estilo, no un uniforme"
          description="Vestirse para el gran día no consiste en parecer otro. Consiste en verte en tu mejor versión. Cada elección empieza escuchándote: el tipo de celebración, tu forma de vestir y cómo quieres sentirte."
          imageSlotId1="GROOM_STYLE_CLASSIC"
          imageSlotId2="GROOM_STYLE_CONTEMPORARY"
        />

        <ProductEditorialGrid 
          title="Selección Protagonista"
          products={[
            {
              name: "Clásico Contemporáneo",
              description: "Líneas puras, tejidos nobles y un corte impecable que trasciende las temporadas.",
              imageSlotId: "GROOM_STYLE_CHARACTER"
            },
            {
              name: "Ceremonia con Carácter",
              description: "Para quien busca destacar con sutileza a través de texturas, colores profundos y botonaduras especiales.",
              imageSlotId: "GROOM_DETAIL_FABRIC"
            },
            {
              name: "Sofisticación Relajada",
              description: "Trajes desestructurados, tejidos ligeros y una elegancia natural perfecta para enlaces civiles o al aire libre.",
              imageSlotId: "GROOM_ATELIER"
            }
          ]}
        />

        <GridSection 
          title="La experiencia de cita"
          subtitle="Desde la primera prueba hasta el último ajuste, te acompañamos para que todo encaje."
          columns={4}
          items={[
            { title: "Escucha", description: "Conocemos tu estilo, el tipo de evento y lo que buscas transmitir." },
            { title: "Selección", description: "Te proponemos los cortes, tejidos y opciones que mejor encajan." },
            { title: "Prueba y Ajustes", description: "Toma de medidas precisa para que el traje se adapte a ti a la perfección." },
            { title: "Entrega", description: "Revisión final para garantizar que todo está listo para tu gran día." }
          ]}
        />

        <GridSection 
          title="Por qué Miquel Suay"
          theme="dark"
          columns={3}
          items={[
            { title: "Oficio y tradición", description: "Décadas de experiencia vistiendo a hombres en sus momentos más importantes." },
            { title: "Asesoramiento experto", description: "No vendemos ropa, ofrecemos conocimiento estilístico y protocolario." },
            { title: "Atención individual", description: "Cita privada para garantizar la discreción y el foco absoluto en ti." },
            { title: "Selección cuidada", description: "Materiales premium y diseños exclusivos que no encontrarás en otros lugares." },
            { title: "Arreglos precisos", description: "Modistas y sastres propios que entienden cómo debe caer cada tejido." },
            { title: "Acompañamiento", description: "Tranquilidad y confianza desde el primer día hasta la entrega final." }
          ]}
        />

        {/* TODO TESTIMONIALS: Añadir componente de prueba social cuando se tengan citas reales */}

        <FinalAppointmentCTA 
          title="Descubre la colección Novio en nuestro atelier"
          imageSlotId="GROOM_FINAL_CTA"
          onCtaClick={scrollToForm}
        />
      </main>

      <LegalFooter />
    </>
  );
};

export default App;
