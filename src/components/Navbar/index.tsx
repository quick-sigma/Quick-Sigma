import { component$, useStyles$ } from "@builder.io/qwik";
import Logo from "./logo";
import Navigation from "./navigation";
import CTA from "./cta";
import styles from "./styles.module.css";
import stylesRaw from "./styles.module.css?inline";

export const Navbar = component$(() => {
  useStyles$(stylesRaw);
  return (
    <nav
      role="navigation"
      class={styles.navbar}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        width: "100%",
        zIndex: "1000",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Logo />
      <Navigation />
      <CTA />
    </nav>
  );
});

export default Navbar;
