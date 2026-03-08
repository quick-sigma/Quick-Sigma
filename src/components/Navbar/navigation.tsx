import { component$ } from "@builder.io/qwik";
import styles from "./styles.module.css";

interface NavigationProps {
  activeLink?: string;
}

export const Navigation = component$<NavigationProps>(({ activeLink }) => {
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
                active: activeLink === link.name,
              }}
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: activeLink === link.name ? "1.2rem" : "1rem",
                transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                color: activeLink === link.name ? "#818cf8" : "#94a3b8",
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
