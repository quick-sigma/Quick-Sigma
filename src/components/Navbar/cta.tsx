import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./styles.module.css";
import stylesRaw from "./styles.module.css?inline";

export const CTA = component$(() => {
  useStyles$(stylesRaw);
  return (
    <button
      id="callToAction"
      class={styles.cta}
      style={{
        borderRadius: "8px",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        fontFamily: "Quicksand, sans-serif",
        cursor: "pointer",
      }}
    >
      Agenda una cita
    </button>
  );
});

export default CTA;
