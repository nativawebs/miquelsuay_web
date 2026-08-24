import groomHeroImg from '../assets/groom_hero.jpg';
import groomStyleClassicImg from '../assets/groom_style_classic.jpg';
import groomStyleContemporaryImg from '../assets/groom_style_contemporary.jpg';
import groomStyleCharacterImg from '../assets/groom_style_character.jpg';
import groomDetailFabricImg from '../assets/groom_detail_fabric.png';
import groomAtelierImg from '../assets/groom_atelier.png';
import womenHeroImg from '../assets/women_hero.png';
import brideSecondaryImg from '../assets/bride_secondary.png';
import festeraPrimaryImg from '../assets/festera_primary.png';
import festeraSecondaryImg from '../assets/festera_secondary.jpg';
import graduationPrimaryImg from '../assets/graduation_primary.png';
import bridePrimaryImg from '../assets/women_hero.png';
import madrinaPrimaryImg from '../assets/madrina_primary.png';
import madrinaSecondaryImg from '../assets/madrina_secondary.png';

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
  GROOM_STYLE_CHARACTER: groomStyleCharacterImg,
  groomStyleCharacter: groomStyleCharacterImg,
  GROOM_DETAIL_FABRIC: groomDetailFabricImg,
  groomDetailFabric: groomDetailFabricImg,
  GROOM_ATELIER: groomAtelierImg,
  groomAtelier: groomAtelierImg,
  groomFinalCta: "",

  // === Landing Mujer ===
  WOMEN_HERO: womenHeroImg,
  womenHero: womenHeroImg,
  BRIDE_PRIMARY: bridePrimaryImg,
  bridePrimary: bridePrimaryImg,
  BRIDE_SECONDARY: brideSecondaryImg,
  brideSecondary: brideSecondaryImg,
  FESTERA_PRIMARY: festeraPrimaryImg,
  festeraPrimary: festeraPrimaryImg,
  FESTERA_SECONDARY: festeraSecondaryImg,
  festeraSecondary: festeraSecondaryImg,
  MADRINA_PRIMARY: madrinaPrimaryImg,
  madrinaPrimary: madrinaPrimaryImg,
  MADRINA_SECONDARY: madrinaSecondaryImg,
  madrinaSecondary: madrinaSecondaryImg,
  GRADUATION_PRIMARY: graduationPrimaryImg,
  graduationPrimary: graduationPrimaryImg,
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

