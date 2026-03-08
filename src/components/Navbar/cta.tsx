import { component$ } from "@builder.io/qwik";
import styles from "./styles.module.css";

export const CTA = component$(() => {
  return (
    <button
      id="callToAction"
      class={styles.cta}
      style={{
        borderRadius: "10px",
        transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
        fontFamily: "Quicksand, sans-serif",
        cursor: "pointer",
      }}
    >
      Agenda una reunión
    </button>
  );
});

export default CTA;
