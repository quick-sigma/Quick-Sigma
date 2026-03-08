import { component$ } from "@builder.io/qwik";
// ✅ No importar CSS aquí

export const HeroCTA = component$(() => {
  return (
    <div id="heroCTA" class="qs-cta">
      <button
        id="cta-button"
        type="button"
        aria-label="Contactar para hablar sobre tu proyecto"
        class="qs-cta__button"
      >
        Hablemos de tu proyecto
        <span class="qs-cta__arrow" aria-hidden="true">→</span>
      </button>

      <a
        href="/portfolio"
        id="secondary-cta"
        class="qs-cta__secondary"
      >
        Ver nuestro trabajo
        <span class="qs-cta__secondary-arrow" aria-hidden="true">→</span>
      </a>
    </div>
  );
});

export default HeroCTA;