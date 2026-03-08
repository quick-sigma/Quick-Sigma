import { component$ } from "@builder.io/qwik";
import Logo from "./logo";
import Navigation from "./navigation";
import CTA from "./cta";
import styles from "./styles.module.css";

export const Navbar = component$(() => {
  return (
    <nav
      role="navigation"
      class={styles.navbar}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        width: "100%",
        zIndex: "1000",
        backgroundColor: "rgba(9, 9, 11, 0.8)",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        boxShadow: "0 1px 0 rgba(255, 255, 255, 0.05)",
      }}
    >
      <Logo />
      <Navigation />
      <CTA />
    </nav>
  );
});

export default Navbar;
