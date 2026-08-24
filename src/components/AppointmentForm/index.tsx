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
    
    // Simular envío - TODO FORM INTEGRATION
    setTimeout(() => {
      // Para propósitos de demo
      setStatus('success');
      trackEvent('form_submit', { landing_type: landingType, category });
    }, 1200);
  };

  if (status === 'success') {
    return (
      <div className={styles.successMessage} role="alert" aria-live="polite">
        <h3 className={styles.successTitle}>Hemos recibido tu solicitud</h3>
        <p>Nuestro equipo se pondrá en contacto contigo en breve para confirmar la disponibilidad y los detalles de tu cita.</p>
        <button className={styles.resetButton} onClick={() => setStatus('idle')}>
          Volver
        </button>
      </div>
    );
  }

  return (
    <form 
      id="solicitar-cita" 
      className={styles.formContainer} 
      onSubmit={handleSubmit}
      noValidate
    >
      <h2 className={styles.formTitle}>Solicita tu cita privada</h2>
      
      {status === 'error' && (
        <div className={styles.errorMessage} role="alert">
          Hubo un problema al enviar tu solicitud. Por favor, inténtalo de nuevo.
        </div>
      )}

      {/* Categoría oculta si no es seleccionable */}
      {!isCategorySelectable ? (
        <input type="hidden" name="selected_category" value={category} />
      ) : (
        <div className={styles.fieldGroup}>
          <label htmlFor="category" className={styles.label}>Ocasión</label>
          <select 
            id="category" 
            name="selected_category" 
            className={styles.input} 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>Selecciona tu ocasión</option>
            <option value="Novia">Novia</option>
            <option value="Festera">Festera</option>
            <option value="Madrina">Madrina</option>
            <option value="Graduacion">Graduación</option>
          </select>
        </div>
      )}

      <div className={styles.fieldGroup}>
        <label htmlFor="name" className={styles.label}>Nombre y apellidos *</label>
        <input type="text" id="name" name="name" className={styles.input} required aria-required="true" />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="phone" className={styles.label}>Teléfono / WhatsApp *</label>
        <input type="tel" id="phone" name="phone" className={styles.input} required aria-required="true" />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="email" className={styles.label}>Correo electrónico *</label>
        <input type="email" id="email" name="email" className={styles.input} required aria-required="true" />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="boutique" className={styles.label}>Boutique de preferencia *</label>
        <select id="boutique" name="boutique" className={styles.input} required aria-required="true" defaultValue="">
          <option value="" disabled>Selecciona una opción</option>
          {/* TODO BOUTIQUES: Confirmar localizaciones reales */}
          <option value="valencia-centro">Valencia Centro</option>
          <option value="valencia-colon">Valencia Colón</option>
        </select>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="date" className={styles.label}>Fecha aproximada del evento</label>
        <input type="month" id="date" name="date" className={styles.input} />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="comments" className={styles.label}>Comentarios (Opcional)</label>
        <textarea id="comments" name="comments" className={styles.textarea} rows={3}></textarea>
      </div>

      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="privacy" name="privacy" required className={styles.checkbox} aria-required="true" />
        <label htmlFor="privacy" className={styles.checkboxLabel}>
          He leído y acepto la <button type="button" className={styles.inlineLink}>Política de Privacidad</button> *
        </label>
      </div>

      {/* Honeypot para evitar spam */}
      <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <button 
        type="submit" 
        className={styles.submitButton} 
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Enviando...' : 'Solicita tu cita'}
      </button>

      <p className={styles.disclaimer}>
        * Campos obligatorios
      </p>
    </form>
  );
};
