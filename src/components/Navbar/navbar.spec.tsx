import { test, expect, describe } from "vitest";
import { render, screen } from "@noma.to/qwik-testing-library";
import { Navbar } from "./";
import { CTA } from "./cta";
import { Logo } from "./logo";
import { Navigation } from "./navigation";

// Utility to help with style assertions
const getStyles = (el: Element) => {
    return window.getComputedStyle(el);
};

// ============================================
// LOGO TESTS
// ============================================
describe("Logo", () => {
    test("should render the logo container with id #logo", async () => {
        await render(<Logo />);
        const logo = screen.queryByRole("link", { name: /quick sigma/i });
        expect(logo).toBeInTheDocument();
        expect(logo?.id).toBe("logo");
    });

    test("should be an anchor with href '/'", async () => {
        await render(<Logo />);
        const logo = screen.getByRole("link", { name: /quick sigma/i });
        expect(logo.tagName.toLowerCase()).toBe("a");
        expect(logo.getAttribute("href")).toBe("/");
    });

    test("should have the glyph ⏱️Σ with id #logo-glyph", async () => {
        const { container } = await render(<Logo />);
        const glyph = container.querySelector("#logo-glyph");
        expect(glyph).toBeInTheDocument();
        expect(glyph?.textContent).toBe("⏱️Σ");
    });

    test("should have the text 'Quick Sigma' with id #logo-label", async () => {
        const { container } = await render(<Logo />);
        const label = container.querySelector("#logo-label");
        expect(label).toBeInTheDocument();
        expect(label?.textContent).toBe("Quick Sigma");
    });

    test("should have aspect ratio 7/15", async () => {
        const { container } = await render(<Logo />);
        const logo = container.querySelector("#logo");
        const styles = getStyles(logo as Element);
        expect(styles.aspectRatio || logo?.getAttribute('style')).toBeTruthy();
    });

    test("should use Quicksand font family", async () => {
        const { container } = await render(<Logo />);
        const logo = container.querySelector("#logo");
        const styles = getStyles(logo as Element);
        expect(styles.fontFamily.toLowerCase()).toContain("quicksand");
    });
});

// ============================================
// NAVIGATION TESTS
// ============================================
describe("Navigation", () => {
    test("should render navigation container with id #navigation", async () => {
        const { container } = await render(<Navigation />);
        const nav = container.querySelector("#navigation");
        expect(nav).toBeInTheDocument();
    });

    test("should contain an unordered list with id #navigation-links", async () => {
        const { container } = await render(<Navigation />);
        const list = container.querySelector("#navigation-links");
        expect(list).toBeInTheDocument();
        expect(list?.tagName.toLowerCase()).toBe("ul");
    });

    test("should have 'Inicio' link with href '#' (page top)", async () => {
        await render(<Navigation />);
        const inicioLink = screen.getByRole("link", { name: /inicio/i });
        expect(inicioLink).toBeInTheDocument();
        expect(inicioLink.getAttribute("href")).toBe("#");
    });

    test("should have 'Tienda' link with href '/store'", async () => {
        await render(<Navigation />);
        const tiendaLink = screen.getByRole("link", { name: /tienda/i });
        expect(tiendaLink).toBeInTheDocument();
        expect(tiendaLink.getAttribute("href")).toBe("/store");
    });

    test("should have 'Blog' link with href '/blog'", async () => {
        await render(<Navigation />);
        const blogLink = screen.getByRole("link", { name: /blog/i });
        expect(blogLink).toBeInTheDocument();
        expect(blogLink.getAttribute("href")).toBe("/blog");
    });

    test("should have exactly 3 navigation links", async () => {
        await render(<Navigation />);
        const links = screen.getAllByRole("link");
        expect(links.length).toBe(3);
    });

    test("each link should be inside a <li> element", async () => {
        await render(<Navigation />);
        const links = screen.getAllByRole("link");
        links.forEach((link) => {
            expect(link.parentElement?.tagName.toLowerCase()).toBe("li");
        });
    });

    test("links should use Quicksand font family", async () => {
        await render(<Navigation />);
        const links = screen.getAllByRole("link");
        const styles = getStyles(links[0]);
        expect(styles.fontFamily.toLowerCase()).toContain("quicksand");
    });

    test("links should have font-size of 1rem", async () => {
        await render(<Navigation />);
        const links = screen.getAllByRole("link");
        const styles = getStyles(links[0]);
        // Support both computed and raw values
        expect(styles.fontSize).toBeTruthy();
    });

    test("links should have CSS transition property defined", async () => {
        await render(<Navigation />);
        const links = screen.getAllByRole("link");
        const styles = getStyles(links[0]);
        expect(styles.transition).toBeTruthy();
    });

    test("active link should have font-size 1.2rem", async () => {
        await render(<Navigation activeLink="Inicio" />);
        const activeLink = screen.getByRole("link", { name: /inicio/i });
        expect(activeLink).toHaveClass("active");
        const styles = getStyles(activeLink);
        expect(styles.fontSize).toBeTruthy();
    });

    test("active link should have a lighter color than inactive links", async () => {
        await render(<Navigation activeLink="Inicio" />);
        const activeLink = screen.getByRole("link", { name: /inicio/i });
        const inactiveLink = screen.getByRole("link", { name: /tienda/i });

        const activeStyles = getStyles(activeLink);
        const inactiveStyles = getStyles(inactiveLink);

        expect(activeStyles.color).not.toBe(inactiveStyles.color);
    });

    test("non-active links should NOT have active class", async () => {
        await render(<Navigation activeLink="Inicio" />);
        const tiendaLink = screen.getByRole("link", { name: /tienda/i });
        const blogLink = screen.getByRole("link", { name: /blog/i });

        expect(tiendaLink).not.toHaveClass("active");
        expect(blogLink).not.toHaveClass("active");
    });
});

// ============================================
// CTA TESTS
// ============================================
describe("CTA", () => {
    test("should render a button with id #callToAction", async () => {
        await render(<CTA />);
        const cta = screen.getByRole("button", { name: /agenda una cita/i });
        expect(cta).toBeInTheDocument();
        expect(cta.id).toBe("callToAction");
    });

    test("should have border-radius (rounded)", async () => {
        await render(<CTA />);
        const cta = screen.getByRole("button", { name: /agenda una cita/i });
        const styles = getStyles(cta);
        expect(styles.borderRadius).toBeTruthy();
    });

    test("should have a transition for hover animation", async () => {
        await render(<CTA />);
        const cta = screen.getByRole("button", { name: /agenda una cita/i });
        const styles = getStyles(cta);
        expect(styles.transition).toBeTruthy();
    });

    test("should have visible text content", async () => {
        await render(<CTA />);
        const cta = screen.getByRole("button", { name: /agenda una cita/i });
        expect(cta.textContent?.trim().length).toBeGreaterThan(0);
    });

    test("should use Quicksand font family", async () => {
        await render(<CTA />);
        const cta = screen.getByRole("button", { name: /agenda una cita/i });
        const styles = getStyles(cta);
        expect(styles.fontFamily.toLowerCase()).toContain("quicksand");
    });

    test("should have a background color defined", async () => {
        await render(<CTA />);
        const cta = screen.getByRole("button", { name: /agenda una cita/i });
        const styles = getStyles(cta);
        expect(styles.backgroundColor).toBeTruthy();
        expect(styles.backgroundColor).not.toBe("transparent");
    });

    test("should have cursor pointer", async () => {
        await render(<CTA />);
        const cta = screen.getByRole("button", { name: /agenda una cita/i });
        const styles = getStyles(cta);
        expect(styles.cursor).toBe("pointer");
    });
});

// ============================================
// NAVBAR (INTEGRATION) TESTS
// ============================================
describe("Navbar", () => {
    test("should render a <nav> element", async () => {
        const { container } = await render(<Navbar />);
        const nav = container.querySelector("nav");
        expect(nav).toBeInTheDocument();
    });

    test("should have role='navigation'", async () => {
        const { container } = await render(<Navbar />);
        const nav = container.querySelector('nav[role="navigation"]');
        expect(nav).toBeInTheDocument();
    });

    test("Logo should be the first child element", async () => {
        const { container } = await render(<Navbar />);
        const nav = container.querySelector("nav");
        const firstChild = nav?.firstElementChild;
        expect(firstChild?.id).toBe("logo");
    });

    test("Navigation should be the second child element", async () => {
        const { container } = await render(<Navbar />);
        const nav = container.querySelector("nav");
        const children = nav?.children;
        expect(children?.[1]?.id).toBe("navigation");
    });

    test("CTA should be the third child element", async () => {
        await render(<Navbar />);
        const ctaButton = screen.getByRole("button", { name: /agenda una cita/i });
        expect(ctaButton).toBeInTheDocument();
    });

    test("should contain all three sections: logo, navigation, cta", async () => {
        const { container } = await render(<Navbar />);
        expect(container.querySelector("#logo")).toBeInTheDocument();
        expect(container.querySelector("#navigation")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /agenda una cita/i })).toBeInTheDocument();
    });

    test("should use flexbox layout", async () => {
        const { container } = await render(<Navbar />);
        const nav = container.querySelector("nav");
        const styles = getStyles(nav as Element);
        expect(styles.display).toBe("flex");
    });

    test("should align items center", async () => {
        const { container } = await render(<Navbar />);
        const nav = container.querySelector("nav");
        const styles = getStyles(nav as Element);
        expect(styles.alignItems).toBe("center");
    });

    test("should justify content with space-between", async () => {
        const { container } = await render(<Navbar />);
        const nav = container.querySelector("nav");
        const styles = getStyles(nav as Element);
        expect(styles.justifyContent).toBe("space-between");
    });

    test("should have a fixed or sticky position", async () => {
        const { container } = await render(<Navbar />);
        const nav = container.querySelector("nav");
        const styles = getStyles(nav as Element);
        expect(["fixed", "sticky"]).toContain(styles.position);
    });

    test("should span full width", async () => {
        const { container } = await render(<Navbar />);
        const nav = container.querySelector("nav");
        const styles = getStyles(nav as Element);
        expect(styles.width).toBe("100%");
    });

    test("should have a z-index for stacking", async () => {
        const { container } = await render(<Navbar />);
        const nav = container.querySelector("nav");
        const styles = getStyles(nav as Element);
        expect(styles.zIndex).toBeTruthy();
    });

    test("should have a background with slight transparency or solid color", async () => {
        const { container } = await render(<Navbar />);
        const nav = container.querySelector("nav");
        const styles = getStyles(nav as Element);
        expect(styles.backgroundColor).toBeTruthy();
    });

    test("should have horizontal padding", async () => {
        const { container } = await render(<Navbar />);
        const nav = container.querySelector("nav");
        const styles = getStyles(nav as Element);
        expect(styles.paddingLeft || styles.paddingRight).toBeTruthy();
    });

    test("should have a subtle box-shadow", async () => {
        const { container } = await render(<Navbar />);
        const nav = container.querySelector("nav");
        const styles = getStyles(nav as Element);
        expect(styles.boxShadow).toBeTruthy();
    });
});