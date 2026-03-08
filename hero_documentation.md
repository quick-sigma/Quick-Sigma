# Component: Hero

The `Hero` component is the high-impact introduction section for the Quick Sigma website. It follows a TDD (Test-Driven Development) approach and is built with Qwik and CSS Modules.

## Architecture

The `Hero` component is composed of several specialized sub-components:

- **HeroText**: Handles the main headlines and descriptive paragraph. Includes a vertical marquee for dynamic service text.
- **HeroTextMarquee**: A list-based vertical animation that rotates through different service offerings.
- **HeroTiles**: An isometric 3D grid that forms a "Sigma" (Σ) shape, featuring staggered entrance animations.
- **HeroCTA**: The primary call-to-action area with a high-contrast button and a secondary portfolio link.

## Implementation Details

- **Technology**: Qwik, CSS Modules.
- **Styling**: Uses standard CSS Modules for layout and animations. For testing compatibility with Happy DOM, some explicit properties are applied inline.
- **Animations**:
  - `fadeIn`: Used for text and CTA entrance.
  - `tileEntrance`: Staggered 3D entrance for the Sigma tiles.
  - `marqueeVertical`: Continuous loop for the headline text rotation.

## ID Reference (for Testing/Analytics)

| Element | ID |
|---------|----|
| Section Container | `#hero` |
| Text Container | `#heroText` |
| Marquee Animation | `#textMarqueeAnimation` |
| Sigma Tiles Container | `#tilesGraphics` |
| CTA Area | `#heroCTA` |
| Main Button | `#cta-button` |

## Usage

```tsx
import { Hero } from '~/components/Hero';

export default component$(() => {
  return <Hero />;
});
```
