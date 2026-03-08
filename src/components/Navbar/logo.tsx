import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./styles.module.css";
import stylesRaw from "./styles.module.css?inline";

export const Logo = component$(() => {
  useStyles$(stylesRaw);
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
