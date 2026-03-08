import { test, expect, describe } from "vitest";
import { render } from "@noma.to/qwik-testing-library";
import { Hero } from "./index";
import { HeroText } from "./hero-text";
import { HeroTextMarquee } from "./hero-text-marquee";
import { HeroTiles } from "./hero-tiles";
import { HeroCTA } from "./hero-cta";

// ============================================
// HERO CONTAINER
// ============================================
describe("Hero Section", () => {
    test("should render a section element with id #hero", async () => {
        const { container } = await render(<Hero />);
        const hero = container.querySelector("#hero.qs-hero");
        expect(hero).toBeInTheDocument();
        expect(hero?.tagName.toLowerCase()).toBe("section");
    });

    test("should contain all 4 child components", async () => {
        const { container } = await render(<Hero />);
        expect(container.querySelector("#heroText.qs-hero-text")).toBeInTheDocument();
        expect(container.querySelector("#textMarqueeAnimation.qs-marquee")).toBeInTheDocument();
        expect(container.querySelector("#tilesGraphics.qs-tiles")).toBeInTheDocument();
        expect(container.querySelector("#heroCTA.qs-cta")).toBeInTheDocument();
    });

    test("should have min-height 100vh", async () => {
        const { container } = await render(<Hero />);
        const hero = container.querySelector("#hero");
        const styles = window.getComputedStyle(hero as Element);
        expect(styles.minHeight).toBe("100vh");
    });

    test("should use flex layout", async () => {
        const { container } = await render(<Hero />);
        const hero = container.querySelector("#hero");
        const styles = window.getComputedStyle(hero as Element);
        expect(styles.display).toBe("flex");
    });

    test("should center content", async () => {
        const { container } = await render(<Hero />);
        const hero = container.querySelector("#hero");
        const styles = window.getComputedStyle(hero as Element);
        expect(styles.alignItems).toBe("center");
        expect(styles.justifyContent).toBe("center");
    });

    test("should have overflow hidden", async () => {
        const { container } = await render(<Hero />);
        const hero = container.querySelector("#hero");
        const styles = window.getComputedStyle(hero as Element);
        expect(styles.overflow).toBe("hidden");
    });

    test("should have dark background", async () => {
        const { container } = await render(<Hero />);
        const hero = container.querySelector("#hero");
        const styles = window.getComputedStyle(hero as Element);
        expect(styles.backgroundColor).toBeTruthy();
        expect(styles.backgroundColor).not.toBe("rgba(0, 0, 0, 0)");
    });

    test("should have isolation isolate for stacking context", async () => {
        const { container } = await render(<Hero />);
        const hero = container.querySelector("#hero");
        const styles = window.getComputedStyle(hero as Element);
        expect(styles.isolation).toBe("isolate");
    });

    test("should contain at least 3 child elements", async () => {
        const { container } = await render(<Hero />);
        const inner = container.querySelector("#hero > .qs-hero__inner");
        expect(inner).toBeInTheDocument();
        expect(inner!.children.length).toBeGreaterThanOrEqual(3);
    });
});

// ============================================
// HERO TEXT
// ============================================
describe("HeroText", () => {
    test("should render container with id #heroText", async () => {
        const { container } = await render(<HeroText />);
        const el = container.querySelector("#heroText.qs-hero-text");
        expect(el).toBeInTheDocument();
    });

    test("should use Quicksand font family", async () => {
        const { container } = await render(<HeroText />);
        const el = container.querySelector("#heroText");
        const styles = window.getComputedStyle(el as Element);
        expect(styles.fontFamily.toLowerCase()).toContain("quicksand");
    });

    test("should contain 'Expertos en'", async () => {
        const { container } = await render(<HeroText />);
        expect(container.textContent).toContain("Expertos en");
    });

    test("should contain subheadline about digital and physical solutions", async () => {
        const { container } = await render(<HeroText />);
        expect(container.textContent).toContain(
            "Transformamos ideas en soluciones digitales y físicas"
        );
    });

    test("should have descriptive paragraph longer than 20 chars", async () => {
        const { container } = await render(<HeroText />);
        const paragraph = container.querySelector("#heroText p");
        expect(paragraph).toBeInTheDocument();
        expect(paragraph!.textContent!.length).toBeGreaterThan(20);
    });

    test("should have fadeUp animation defined", async () => {
        const { container } = await render(<HeroText />);
        const el = container.querySelector("#heroText");
        const styles = window.getComputedStyle(el as Element);
        expect(styles.animationName).toBeTruthy();
        expect(styles.animationName).not.toBe("none");
    });

    test("animation should start at opacity 0", async () => {
        const { container } = await render(<HeroText />);
        const el = container.querySelector("#heroText");
        const styles = window.getComputedStyle(el as Element);
        expect(
            styles.opacity === "0" ||
            styles.animationName?.includes("qs-fadeUp") ||
            styles.animationName?.includes("qs-fade")
        ).toBe(true);
    });

    test("animation duration should be >= 1s", async () => {
        const { container } = await render(<HeroText />);
        const el = container.querySelector("#heroText");
        const styles = window.getComputedStyle(el as Element);
        expect(parseFloat(styles.animationDuration)).toBeGreaterThanOrEqual(1);
    });

    test("animation fill mode should be forwards", async () => {
        const { container } = await render(<HeroText />);
        const el = container.querySelector("#heroText");
        const styles = window.getComputedStyle(el as Element);
        expect(styles.animationFillMode).toBe("forwards");
    });

    test("h1 should have font-weight >= 600", async () => {
        const { container } = await render(<HeroText />);
        const h1 = container.querySelector("#heroText h1");
        expect(h1).toBeInTheDocument();
        const styles = window.getComputedStyle(h1 as Element);
        expect(parseInt(styles.fontWeight)).toBeGreaterThanOrEqual(600);
    });

    test("h1 should have letter-spacing for elegance", async () => {
        const { container } = await render(<HeroText />);
        const h1 = container.querySelector("#heroText h1");
        const styles = window.getComputedStyle(h1 as Element);
        expect(styles.letterSpacing).not.toBe("normal");
    });

    test("h1 should have line-height between 1.1 and 1.3", async () => {
        const { container } = await render(<HeroText />);
        const h1 = container.querySelector("#heroText h1");
        const styles = window.getComputedStyle(h1 as Element);
        const lh = parseFloat(styles.lineHeight);
        const fs = parseFloat(styles.fontSize);
        const ratio = lh / fs;
        expect(ratio).toBeGreaterThanOrEqual(1.1);
        expect(ratio).toBeLessThanOrEqual(1.3);
    });

    test("paragraph should have smaller font than h1", async () => {
        const { container } = await render(<HeroText />);
        const h1 = container.querySelector("#heroText h1");
        const p = container.querySelector("#heroText p");
        const h1Size = parseFloat(window.getComputedStyle(h1 as Element).fontSize);
        const pSize = parseFloat(window.getComputedStyle(p as Element).fontSize);
        expect(h1Size).toBeGreaterThan(pSize);
    });

    test("paragraph should have secondary/muted color", async () => {
        const { container } = await render(<HeroText />);
        const h1 = container.querySelector("#heroText h1");
        const p = container.querySelector("#heroText p");
        const h1Color = window.getComputedStyle(h1 as Element).color;
        const pColor = window.getComputedStyle(p as Element).color;
        expect(pColor).not.toBe(h1Color);
    });

    test("paragraph line-height should be >= 1.5 for readability", async () => {
        const { container } = await render(<HeroText />);
        const p = container.querySelector("#heroText p");
        const styles = window.getComputedStyle(p as Element);
        const ratio = parseFloat(styles.lineHeight) / parseFloat(styles.fontSize);
        expect(ratio).toBeGreaterThanOrEqual(1.5);
    });
});

// ============================================
// HERO TEXT MARQUEE
// ============================================
describe("HeroTextMarquee", () => {
    test("should render container with id #textMarqueeAnimation", async () => {
        const { container } = await render(<HeroTextMarquee />);
        const el = container.querySelector("#textMarqueeAnimation.qs-marquee");
        expect(el).toBeInTheDocument();
    });

    test("should contain ul with id #textToAnimate", async () => {
        const { container } = await render(<HeroTextMarquee />);
        const list = container.querySelector("#textToAnimate");
        expect(list).toBeInTheDocument();
        expect(list!.tagName.toLowerCase()).toBe("ul");
    });

    test("should have at least 5 animated text items", async () => {
        const { container } = await render(<HeroTextMarquee />);
        const items = container.querySelectorAll("#animatedText");
        expect(items.length).toBeGreaterThanOrEqual(5);
    });

    const expectedTexts = [
        "Crear Software",
        "Diseñar Soluciones",
        "Escalar tu Negocio",
        "Fabricar Prototipos",
        "Materializar Ideas",
    ];

    expectedTexts.forEach((text) => {
        test(`should contain '${text}'`, async () => {
            const { container } = await render(<HeroTextMarquee />);
            const items = container.querySelectorAll("#animatedText");
            const texts = Array.from(items).map((el) => el.textContent?.trim());
            expect(texts).toContain(text);
        });
    });

    test("container should have overflow hidden", async () => {
        const { container } = await render(<HeroTextMarquee />);
        const el = container.querySelector("#textMarqueeAnimation.qs-marquee");
        const styles = window.getComputedStyle(el as Element);
        expect(styles.overflow).toBe("hidden");
    });

    test("container should have fixed height", async () => {
        const { container } = await render(<HeroTextMarquee />);
        const el = container.querySelector("#textMarqueeAnimation.qs-marquee");
        const styles = window.getComputedStyle(el as Element);
        expect(parseFloat(styles.height)).toBeGreaterThan(0);
    });

    test("container should display inline-block", async () => {
        const { container } = await render(<HeroTextMarquee />);
        const el = container.querySelector("#textMarqueeAnimation.qs-marquee");
        const styles = window.getComputedStyle(el as Element);
        // Matching 'inline-block' from CSS
        expect(styles.display).toBe("inline-block");
    });

    test("list should have animation defined", async () => {
        const { container } = await render(<HeroTextMarquee />);
        const list = container.querySelector("#textToAnimate");
        const styles = window.getComputedStyle(list as Element);
        expect(styles.animationName).toBeTruthy();
        expect(styles.animationName).not.toBe("none");
    });

    test("animation should be infinite", async () => {
        const { container } = await render(<HeroTextMarquee />);
        const list = container.querySelector("#textToAnimate");
        const styles = window.getComputedStyle(list as Element);
        expect(styles.animationIterationCount).toBe("infinite");
    });

    test("animation duration should be 6-15s", async () => {
        const { container } = await render(<HeroTextMarquee />);
        const list = container.querySelector("#textToAnimate");
        const styles = window.getComputedStyle(list as Element);
        const d = parseFloat(styles.animationDuration);
        expect(d).toBeGreaterThanOrEqual(6);
        expect(d).toBeLessThanOrEqual(15);
    });

    test("animated text should have accent color (not black)", async () => {
        const { container } = await render(<HeroTextMarquee />);
        const item = container.querySelector("#animatedText");
        const styles = window.getComputedStyle(item as Element);
        expect(styles.color).not.toBe("rgb(0, 0, 0)");
    });

    test("animated text should have font-weight >= 600", async () => {
        const { container } = await render(<HeroTextMarquee />);
        const item = container.querySelector("#animatedText");
        const styles = window.getComputedStyle(item as Element);
        expect(parseInt(styles.fontWeight)).toBeGreaterThanOrEqual(600);
    });

    test("list should have no list-style", async () => {
        const { container } = await render(<HeroTextMarquee />);
        const list = container.querySelector("#textToAnimate");
        const styles = window.getComputedStyle(list as Element);
        expect(styles.listStyleType).toBe("none");
    });
});

// ============================================
// HERO TILES (SIGMA)
// ============================================
describe("HeroTiles", () => {
    test("should render container with id #tilesGraphics", async () => {
        const { container } = await render(<HeroTiles />);
        const el = container.querySelector("#tilesGraphics.qs-tiles");
        expect(el).toBeInTheDocument();
    });

    test("should contain >= 15 tile elements", async () => {
        const { container } = await render(<HeroTiles />);
        const tiles = container.querySelectorAll("[data-tile]");
        expect(tiles.length).toBeGreaterThanOrEqual(15);
    });

    test("each tile should have data-row and data-col", async () => {
        const { container } = await render(<HeroTiles />);
        const tiles = container.querySelectorAll("[data-tile]");
        tiles.forEach((tile) => {
            expect(tile.getAttribute("data-row")).toBeTruthy();
            expect(tile.getAttribute("data-col")).toBeTruthy();
        });
    });

    test("should form sigma Σ with top bar", async () => {
        const { container } = await render(<HeroTiles />);
        const tiles = container.querySelectorAll("[data-tile]");
        const positions = Array.from(tiles).map((t) => ({
            row: parseInt(t.getAttribute("data-row")!),
            col: parseInt(t.getAttribute("data-col")!),
        }));
        const topBar = positions.filter((p) => p.row === 0);
        expect(topBar.length).toBeGreaterThanOrEqual(3);
    });

    test("should form sigma Σ with bottom bar", async () => {
        const { container } = await render(<HeroTiles />);
        const tiles = container.querySelectorAll("[data-tile]");
        const positions = Array.from(tiles).map((t) => ({
            row: parseInt(t.getAttribute("data-row")!),
            col: parseInt(t.getAttribute("data-col")!),
        }));
        const maxRow = Math.max(...positions.map((p) => p.row));
        const bottomBar = positions.filter((p) => p.row === maxRow);
        expect(bottomBar.length).toBeGreaterThanOrEqual(3);
    });

    test("should form sigma Σ with middle convergence point", async () => {
        const { container } = await render(<HeroTiles />);
        const tiles = container.querySelectorAll("[data-tile]");
        const positions = Array.from(tiles).map((t) => ({
            row: parseInt(t.getAttribute("data-row")!),
            col: parseInt(t.getAttribute("data-col")!),
        }));
        const maxRow = Math.max(...positions.map((p) => p.row));
        const midRow = Math.floor(maxRow / 2);
        const middle = positions.filter(
            (p) => p.row >= midRow - 1 && p.row <= midRow + 1
        );
        expect(middle.length).toBeGreaterThanOrEqual(1);
    });

    test("tiles should be square", async () => {
        const { container } = await render(<HeroTiles />);
        const tile = container.querySelector("[data-tile]");
        const styles = window.getComputedStyle(tile as Element);
        expect(styles.width).toBe(styles.height);
    });

    test("tiles should have border-radius", async () => {
        const { container } = await render(<HeroTiles />);
        const tile = container.querySelector("[data-tile]");
        const styles = window.getComputedStyle(tile as Element);
        expect(parseFloat(styles.borderRadius)).toBeGreaterThan(0);
    });

    test("tiles should have background color", async () => {
        const { container } = await render(<HeroTiles />);
        const tile = container.querySelector("[data-tile]");
        const styles = window.getComputedStyle(tile as Element);
        expect(styles.backgroundColor).not.toBe("rgba(0, 0, 0, 0)");
    });

    test("container should have 3D transform (isometric)", async () => {
        const { container } = await render(<HeroTiles />);
        const el = container.querySelector("#tilesGraphics.qs-tiles");
        const styles = window.getComputedStyle(el as Element);
        expect(styles.transform).not.toBe("none");
    });

    test("container should preserve-3d", async () => {
        const { container } = await render(<HeroTiles />);
        const el = container.querySelector("#tilesGraphics.qs-tiles");
        const styles = window.getComputedStyle(el as Element);
        expect(styles.transformStyle).toBe("preserve-3d");
    });

    test("tiles should have transition for hover", async () => {
        const { container } = await render(<HeroTiles />);
        const tile = container.querySelector("[data-tile]");
        const styles = window.getComputedStyle(tile as Element);
        expect(styles.transition).toBeTruthy();
        expect(styles.transition).not.toBe("none");
    });

    test("tile transition should cover transform, bg, and shadow", async () => {
        const { container } = await render(<HeroTiles />);
        const tile = container.querySelector("[data-tile]");
        const styles = window.getComputedStyle(tile as Element);
        const t = styles.transition || "";
        expect(
            t.includes("all") ||
            (t.includes("transform") && t.includes("background"))
        ).toBe(true);
    });

    test("tile transition 200-500ms", async () => {
        const { container } = await render(<HeroTiles />);
        const tile = container.querySelector("[data-tile]");
        const styles = window.getComputedStyle(tile as Element);
        const ms = parseFloat(styles.transitionDuration) * 1000;
        expect(ms).toBeGreaterThanOrEqual(200);
        expect(ms).toBeLessThanOrEqual(500);
    });

    test("tiles should have cursor pointer", async () => {
        const { container } = await render(<HeroTiles />);
        const tile = container.querySelector("[data-tile]");
        const styles = window.getComputedStyle(tile as Element);
        expect(styles.cursor).toBe("pointer");
    });

    test("container should use CSS grid", async () => {
        const { container } = await render(<HeroTiles />);
        const el = container.querySelector("#tilesGraphics.qs-tiles");
        const styles = window.getComputedStyle(el as Element);
        expect(styles.display).toContain("grid");
    });

    test("grid should have gap > 0", async () => {
        const { container } = await render(<HeroTiles />);
        const el = container.querySelector("#tilesGraphics.qs-tiles");
        const styles = window.getComputedStyle(el as Element);
        expect(parseFloat(styles.gap || "0")).toBeGreaterThan(0);
    });

    test("tiles should have staggered animation delay", async () => {
        const { container } = await render(<HeroTiles />);
        const tiles = container.querySelectorAll("[data-tile]");
        const delays = Array.from(tiles).map((t) =>
            parseFloat(window.getComputedStyle(t as Element).animationDelay || "0")
        );
        expect(new Set(delays).size).toBeGreaterThan(1);
    });

    test("tiles should have entrance animation", async () => {
        const { container } = await render(<HeroTiles />);
        const tile = container.querySelector("[data-tile]");
        const styles = window.getComputedStyle(tile as Element);
        expect(styles.animationName).not.toBe("none");
    });
});

// ============================================
// HERO CTA
// ============================================
describe("HeroCTA", () => {
    test("should render container #heroCTA", async () => {
        const { container } = await render(<HeroCTA />);
        expect(container.querySelector("#heroCTA.qs-cta")).toBeInTheDocument();
    });

    test("should contain a button", async () => {
        const { container } = await render(<HeroCTA />);
        expect(container.querySelector("#heroCTA button")).toBeInTheDocument();
    });

    test("button text should be 'Hablemos de tu proyecto'", async () => {
        const { container } = await render(<HeroCTA />);
        const btn = container.querySelector("#heroCTA button");
        expect(btn!.textContent).toContain("Hablemos de tu proyecto");
    });

    test("button type='button'", async () => {
        const { container } = await render(<HeroCTA />);
        const btn = container.querySelector("#heroCTA button");
        expect(btn!.getAttribute("type")).toBe("button");
    });

    test("button has aria-label", async () => {
        const { container } = await render(<HeroCTA />);
        const btn = container.querySelector("#heroCTA button");
        expect(btn!.getAttribute("aria-label")).toBeTruthy();
    });

    test("button tabindex is not -1", async () => {
        const { container } = await render(<HeroCTA />);
        const btn = container.querySelector("#heroCTA button");
        expect(btn!.getAttribute("tabindex")).not.toBe("-1");
    });

    test("button border-radius >= 8px", async () => {
        const { container } = await render(<HeroCTA />);
        const btn = container.querySelector("#heroCTA button");
        const s = window.getComputedStyle(btn as Element);
        expect(parseFloat(s.borderRadius)).toBeGreaterThanOrEqual(8);
    });

    test("button has solid background", async () => {
        const { container } = await render(<HeroCTA />);
        const btn = container.querySelector("#heroCTA button");
        const s = window.getComputedStyle(btn as Element);
        expect(s.backgroundColor).not.toBe("rgba(0, 0, 0, 0)");
        expect(s.backgroundColor).not.toBe("transparent");
    });

    test("button text color differs from background", async () => {
        const { container } = await render(<HeroCTA />);
        const btn = container.querySelector("#heroCTA button");
        const s = window.getComputedStyle(btn as Element);
        expect(s.color).not.toBe(s.backgroundColor);
    });

    test("button uses Quicksand font", async () => {
        const { container } = await render(<HeroCTA />);
        const btn = container.querySelector("#heroCTA button");
        const s = window.getComputedStyle(btn as Element);
        expect(s.fontFamily.toLowerCase()).toContain("quicksand");
    });

    test("button font-weight >= 600", async () => {
        const { container } = await render(<HeroCTA />);
        const btn = container.querySelector("#heroCTA button");
        const s = window.getComputedStyle(btn as Element);
        expect(parseInt(s.fontWeight)).toBeGreaterThanOrEqual(600);
    });

    test("button font-size 16-24px", async () => {
        const { container } = await render(<HeroCTA />);
        const btn = container.querySelector("#heroCTA button");
        const size = parseFloat(window.getComputedStyle(btn as Element).fontSize);
        expect(size).toBeGreaterThanOrEqual(16);
        expect(size).toBeLessThanOrEqual(24);
    });

    test("button horizontal padding >= 24px", async () => {
        const { container } = await render(<HeroCTA />);
        const btn = container.querySelector("#heroCTA button");
        const s = window.getComputedStyle(btn as Element);
        expect(parseFloat(s.paddingLeft)).toBeGreaterThanOrEqual(24);
        expect(parseFloat(s.paddingRight)).toBeGreaterThanOrEqual(24);
    });

    test("button vertical padding >= 12px", async () => {
        const { container } = await render(<HeroCTA />);
        const btn = container.querySelector("#heroCTA button");
        const s = window.getComputedStyle(btn as Element);
        expect(parseFloat(s.paddingTop)).toBeGreaterThanOrEqual(12);
        expect(parseFloat(s.paddingBottom)).toBeGreaterThanOrEqual(12);
    });

    test("button cursor pointer", async () => {
        const { container } = await render(<HeroCTA />);
        const btn = container.querySelector("#heroCTA button");
        expect(window.getComputedStyle(btn as Element).cursor).toBe("pointer");
    });

    test("button has no border", async () => {
        const { container } = await render(<HeroCTA />);
        const btn = container.querySelector("#heroCTA button");
        const s = window.getComputedStyle(btn as Element);
        expect(
            s.borderStyle === "none" || s.borderWidth === "0px"
        ).toBe(true);
    });

    test("button has transition", async () => {
        const { container } = await render(<HeroCTA />);
        const btn = container.querySelector("#heroCTA button");
        const s = window.getComputedStyle(btn as Element);
        expect(s.transition).toBeTruthy();
        expect(s.transition).not.toBe("none");
    });

    test("button transition 200-400ms", async () => {
        const { container } = await render(<HeroCTA />);
        const btn = container.querySelector("#heroCTA button");
        const s = window.getComputedStyle(btn as Element);
        const ms = parseFloat(s.transitionDuration) * 1000;
        expect(ms).toBeGreaterThanOrEqual(200);
        expect(ms).toBeLessThanOrEqual(400);
    });

    test("button has box-shadow", async () => {
        const { container } = await render(<HeroCTA />);
        const btn = container.querySelector("#heroCTA button");
        const s = window.getComputedStyle(btn as Element);
        expect(s.boxShadow).not.toBe("none");
    });

    test("CTA container has entrance animation", async () => {
        const { container } = await render(<HeroCTA />);
        const el = container.querySelector("#heroCTA.qs-cta");
        const s = window.getComputedStyle(el as Element);
        expect(s.animationName).not.toBe("none");
    });

    test("CTA animation has delay > 0", async () => {
        const { container } = await render(<HeroCTA />);
        const el = container.querySelector("#heroCTA.qs-cta");
        const s = window.getComputedStyle(el as Element);
        expect(parseFloat(s.animationDelay)).toBeGreaterThan(0);
    });

    test("CTA animation fill-mode forwards", async () => {
        const { container } = await render(<HeroCTA />);
        const el = container.querySelector("#heroCTA.qs-cta");
        const s = window.getComputedStyle(el as Element);
        expect(s.animationFillMode).toBe("forwards");
    });

    test("secondary link exists", async () => {
        const { container } = await render(<HeroCTA />);
        expect(container.querySelector("#heroCTA a")).toBeInTheDocument();
    });

    test("secondary link says 'Ver nuestro trabajo'", async () => {
        const { container } = await render(<HeroCTA />);
        const link = container.querySelector("#heroCTA a");
        expect(link!.textContent).toContain("Ver nuestro trabajo");
    });

    test("secondary link href is /portfolio", async () => {
        const { container } = await render(<HeroCTA />);
        const link = container.querySelector("#heroCTA a");
        expect(link!.getAttribute("href")).toBe("/portfolio");
    });

    test("secondary link has no text-decoration", async () => {
        const { container } = await render(<HeroCTA />);
        const link = container.querySelector("#heroCTA a");
        const s = window.getComputedStyle(link as Element);
        expect(s.textDecoration).toContain("none");
    });

    test("secondary link has transition", async () => {
        const { container } = await render(<HeroCTA />);
        const link = container.querySelector("#heroCTA a");
        const s = window.getComputedStyle(link as Element);
        expect(s.transition).toBeTruthy();
    });
});