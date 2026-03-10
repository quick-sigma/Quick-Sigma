import { component$, useStyles$ } from "@builder.io/qwik";
import HeroText from "./hero-text";
import HeroTiles from "./hero-tiles";
import HeroCTA from "./hero-cta";
import HeroStars from "./hero-stars";
import heroStyles from "./hero.css?inline";
import starsStyles from "./hero-stars.css?inline";

export const Hero = component$(() => {
  useStyles$(heroStyles);
  useStyles$(starsStyles);

  return (
    <section id="hero" class="qs-hero">
      <HeroStars />
      <div class="qs-hero__inner">
        <HeroText />
        <HeroTiles />
        <HeroCTA />
      </div>
    </section>
  );
});

export default Hero;