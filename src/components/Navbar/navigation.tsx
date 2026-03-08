import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./styles.module.css";
import stylesRaw from "./styles.module.css?inline";

interface NavigationProps {
  activeLink?: string;
}

export const Navigation = component$<NavigationProps>(({ activeLink }) => {
  useStyles$(stylesRaw);
  const links = [
    { name: "Inicio", href: "#" },
    { name: "Tienda", href: "/store" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <div id="navigation" class={styles.navigation}>
      <ul id="navigation-links" class={styles.navigationLinks}>
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              id="navigation-link"
              class={{
                [styles.navigationLink]: true,
                [styles.active]: activeLink === link.name,
                ["active"]: activeLink === link.name,
              }}
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: activeLink === link.name ? "1.2rem" : "1rem",
                transition: "all 0.3s ease",
                color: activeLink === link.name ? "#6C5CE7" : "#2D3436",
              }}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Navigation;
