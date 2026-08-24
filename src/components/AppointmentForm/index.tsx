import React, { useState, useEffect } from 'react';
import styles from './AppointmentForm.module.css';
import { trackEvent } from '../../utils/analytics';

interface AppointmentFormProps {
  defaultCategory?: string;
  isCategorySelectable?: boolean;
  landingType: 'novio' | 'mujer';
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  defaultCategory,
  isCategorySelectable = false,
  landingType
}) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [category, setCategory] = useState(defaultCategory || '');
  
  useEffect(() => {
    if (defaultCategory) {
      setCategory(defaultCategory);
    }
  }, [defaultCategory]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    trackEvent('form_start', { landing_type: landingType, category });
    
    setTimeout(() => {
      setStatus('success');
      trackEvent('form_submit', { landing_type: landingType, category });
    }, 1000);
  };

  if (status === 'success') {
    return (
      <div className={styles.successContainer} role="alert" aria-live="polite">
        <div className={styles.successBadge}>✓</div>
        <h3 className={styles.successTitle}>Solicitud Recibida</h3>
        <p className={styles.successDesc}>
          Nos pondremos en contacto contigo para confirmar la disponibilidad y personalizar cada detalle de tu visita privada.
        </p>
        <button className={styles.resetBtn} onClick={() => setStatus('idle')}>
          Solicitar otra cita
        </button>
      </div>
    );
  }

  return (
    <form 
      id="solicitar-cita" 
      className={styles.formCard} 
      onSubmit={handleSubmit}
      noValidate
    >
      <div className={styles.formHeader}>
        <span className="eyebrow">Cita Privada</span>
        <h2 className={styles.formTitle}>Reserva tu Experiencia</h2>
        <p className={styles.formSubtitle}>Atención individualizada en nuestro Atelier</p>
      </div>
      
      {status === 'error' && (
        <div className={styles.errorBanner} role="alert">
          Hubo un problema al enviar tu solicitud. Por favor, inténtalo de nuevo.
        </div>
      )}

      {!isCategorySelectable ? (
        <input type="hidden" name="selected_category" value={category} />
      ) : (
        <div className={styles.fieldGroup}>
          <label htmlFor="category" className={styles.label}>Ocasión / Especialidad *</label>
          <div className={styles.inputWrapper}>
            <select 
              id="category" 
              name="selected_category" 
              className={styles.select} 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled>Selecciona la ocasión</option>
              <option value="Novia">Novia</option>
              <option value="Festera">Festera</option>
              <option value="Madrina">Madrina</option>
              <option value="Graduacion">Graduación</option>
            </select>
            <span className={styles.selectArrow}>▾</span>
          </div>
        </div>
      )}

      <div className={styles.fieldGroup}>
        <label htmlFor="name" className={styles.label}>Nombre y Apellidos *</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          className={styles.input} 
          placeholder="Ej. Carmen García"
          required 
          aria-required="true" 
        />
      </div>

      <div className={styles.gridRow}>
        <div className={styles.fieldGroup}>
          <label htmlFor="phone" className={styles.label}>Teléfono / WhatsApp *</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            className={styles.input} 
            placeholder="+34 600 000 000"
            required 
            aria-required="true" 
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="email" className={styles.label}>Correo Electrónico *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className={styles.input} 
            placeholder="nombre@ejemplo.com"
            required 
            aria-required="true" 
          />
        </div>
      </div>

      <div className={styles.gridRow}>
        <div className={styles.fieldGroup}>
          <label htmlFor="boutique" className={styles.label}>Boutique Preferida *</label>
          <div className={styles.inputWrapper}>
            <select id="boutique" name="boutique" className={styles.select} required aria-required="true" defaultValue="">
              <option value="" disabled>Selecciona Boutique</option>
              <option value="valencia-centro">Valencia Centro</option>
              <option value="valencia-colon">Valencia Colón</option>
            </select>
            <span className={styles.selectArrow}>▾</span>
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="date" className={styles.label}>Fecha Aproximada</label>
          <input type="month" id="date" name="date" className={styles.input} />
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="comments" className={styles.label}>Comentarios u Observaciones</label>
        <textarea 
          id="comments" 
          name="comments" 
          className={styles.textarea} 
          rows={2}
          placeholder="Estilo deseado, fecha del evento, acompañantes..."
        ></textarea>
      </div>

      <div className={styles.checkboxContainer}>
        <input type="checkbox" id="privacy" name="privacy" required className={styles.checkbox} aria-required="true" />
        <label htmlFor="privacy" className={styles.checkboxLabel}>
          He leído y acepto la <a href="#privacy" className={styles.privacyLink}>Política de Privacidad</a> *
        </label>
      </div>

      {/* Honeypot anti-spam */}
      <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <button 
        type="submit" 
        className={styles.submitBtn} 
        disabled={status === 'loading'}
      >
        <span className={styles.btnText}>
          {status === 'loading' ? 'Procesando Cita...' : 'Solicitar Cita Privada'}
        </span>
        <svg className={styles.btnIcon} viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </button>

      <p className={styles.footerNote}>* Campos obligatorios. Cita sin compromiso.</p>
    </form>
  );
};
