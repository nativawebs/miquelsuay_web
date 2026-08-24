import groomHeroImg from '../assets/groom_hero.jpg';
import groomStyleClassicImg from '../assets/groom_style_classic.jpg';
import groomStyleContemporaryImg from '../assets/groom_style_contemporary.jpg';

/**
 * Manifiesto de imágenes centralizado
 * Documento de la Verdad: Sección 11. Tratamiento obligatorio de imágenes
 * 
 * TODO IMAGES: Sustituir las cadenas vacías por las rutas o importaciones reales
 * una vez aprobadas y provistas por el cliente. No inventar URLs.
 */

export const images: Record<string, string> = {
  // === Landing Hombre ===
  GROOM_HERO: groomHeroImg,
  groomHero: groomHeroImg,
  GROOM_STYLE_CLASSIC: groomStyleClassicImg,
  groomStyleClassic: groomStyleClassicImg,
  GROOM_STYLE_CONTEMPORARY: groomStyleContemporaryImg,
  groomStyleContemporary: groomStyleContemporaryImg,
  groomStyleCharacter: "",
  groomDetailFabric: "",
  groomAtelier: "",
  groomFinalCta: "",

  // === Landing Mujer ===
  WOMEN_HERO: "",
  womenHero: "",
  bridePrimary: "",
  brideSecondary: "",
  festeraPrimary: "",
  festeraSecondary: "",
  madrinaPrimary: "",
  madrinaSecondary: "",
  graduationPrimary: "",
  graduationSecondary: "",
  womenAtelier: "",
  womenFinalCta: "",
};

export const getSlotImage = (slotId?: string): string | undefined => {
  if (!slotId) return undefined;
  if (images[slotId]) return images[slotId];
  const camelKey = slotId
    .toLowerCase()
    .replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
  return images[camelKey] || undefined;
};

