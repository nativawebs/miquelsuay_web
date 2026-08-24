/**
 * Utilidad para capa de analítica neutral.
 * Documento de la Verdad: Sección 22. Analítica
 */

export type AnalyticsEvent =
  | 'landing_view'
  | 'cta_click'
  | 'category_select'
  | 'form_start'
  | 'form_error'
  | 'form_submit'
  | 'scroll_depth';

export interface AnalyticsPayload {
  landing_type?: 'novio' | 'mujer';
  category?: string;
  cta_text?: string;
  cta_location?: string;
  form_location?: string;
  scroll_threshold?: number;
  field_name?: string;
  error_type?: string;
  boutique?: string;
  lead_id?: string;
}

export function trackEvent(eventName: AnalyticsEvent, payload: AnalyticsPayload = {}) {
  // Recuperar UTMs de la URL o almacenamiento local (simplificado para la demostración)
  const urlParams = new URLSearchParams(window.location.search);
  const utmData = {
    utm_source: urlParams.get('utm_source'),
    utm_medium: urlParams.get('utm_medium'),
    utm_campaign: urlParams.get('utm_campaign'),
    utm_content: urlParams.get('utm_content'),
    utm_term: urlParams.get('utm_term'),
  };

  const fullPayload = {
    ...payload,
    ...utmData,
    timestamp: new Date().toISOString()
  };

  // TODO ANALYTICS: Conectar con GA4 / Meta Pixel / GTM cuando esté definido.
  // Por ahora, se imprime en consola con propósitos de depuración.
  if (import.meta.env.DEV) {
    console.log(`[Analytics Track]: ${eventName}`, fullPayload);
  }
  
  // push to dataLayer
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...fullPayload
    });
  }
}
