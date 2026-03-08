import { component$ } from "@builder.io/qwik";
// ✅ No importar CSS aquí

const MARQUEE_ITEMS = [
  "Crear Software",
  "Diseñar Soluciones",
  "Escalar tu Negocio",
  "Fabricar Prototipos",
  "Materializar Ideas",
];

export const HeroTextMarquee = component$(() => {
  return (
    <span id="textMarqueeAnimation" class="qs-marquee">
      <ul id="textToAnimate" class="qs-marquee__list">
        {MARQUEE_ITEMS.map((item, index) => (
          <li key={index} id="animatedText" class="qs-marquee__item">
            {item}
          </li>
        ))}
      </ul>
    </span>
  );
});

export default HeroTextMarquee;