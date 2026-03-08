import { component$ } from "@builder.io/qwik";
import styles from "./styles.module.css";

export const Logo = component$(() => {
  return (
    <a
      href="/"
      id="logo"
      class={styles.logo}
      style={{ aspectRatio: "7/15", fontFamily: "Quicksand, sans-serif" }}
    >
      <span id="logo-glyph" class={styles.logoGlyph}>
        ⏱️Σ
      </span>
      <span id="logo-label" class={styles.logoLabel}>
        Quick Sigma
      </span>
    </a>
  );
});

export default Logo;
