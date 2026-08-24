import groomHeroImg from '../assets/groom_hero.jpg';

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
  groomStyleClassic: "",
  groomStyleContemporary: "",
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

