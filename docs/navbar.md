# Navbar Component

The `Navbar` is a responsive navigation bar for the Quick Sigma application. It includes a logo, navigation links, and a call-to-action button.

## Architecture

The component is divided into several sub-components for better maintainability:

- **Logo**: Displays the application logo with a glyph ("⏱️Σ") and label ("Quick Sigma").
- **Navigation**: Renders a list of links (Inicio, Tienda, Blog) and handles the active state.
- **CTA**: A "Call to Action" button for primary user interactions.

## Files

- `index.tsx`: Main component entry point.
- `logo.tsx`: Logo sub-component.
- `navigation.tsx`: Navigation sub-component.
- `cta.tsx`: CTA sub-component.
- `styles.modules.css`: Scoped CSS styles using CSS Modules.
- `navbar.spec.tsx`: Automated tests using Vitest and Qwik Testing.

## Usage

```tsx
import { Navbar } from './components/Navbar';

export default component$(() => {
  return (
    <>
      <Navbar />
      <main>
        {/* Page content */}
      </main>
    </>
  );
});
```

## Styling

The component uses a fixed position with a blur effect (`backdrop-filter`) and a subtle shadow for a premium look. It relies on the `Quicksand` font family, which is imported in `global.css`.
