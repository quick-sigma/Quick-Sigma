import { component$ } from "@builder.io/qwik";
import HeroTextMarquee from "./hero-text-marquee";
// ✅ No importar CSS aquí

export const HeroText = component$(() => {
  return (
    <div id="heroText" class="qs-hero-text">
      <h1>
        <span class="qs-hero-text__static">Expertos en</span>
        <HeroTextMarquee />
      </h1>
      <p>
        Transformamos ideas en soluciones digitales y físicas.
        Desde software a medida hasta prototipos impresos en 3D,
        llevamos tu visión del concepto a la realidad.
      </p>
    </div>
  );
});

export default HeroText;