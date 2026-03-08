import { component$, useStyles$ } from "@builder.io/qwik";
import HeroText from "./hero-text";
import HeroTiles from "./hero-tiles";
import HeroCTA from "./hero-cta";
import heroStyles from "./hero.css?inline";

export const Hero = component$(() => {
  useStyles$(heroStyles);

  return (
    <section id="hero" class="qs-hero">
      <div class="qs-hero__inner">
        <HeroText />
        <HeroTiles />
        <HeroCTA />
      </div>


    </section>
  );
});

export default Hero;