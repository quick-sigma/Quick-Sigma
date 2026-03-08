import "@testing-library/jest-dom/vitest";
import { afterEach } from 'vitest';
import { cleanup } from '@noma.to/qwik-testing-library';

afterEach(() => {
  cleanup();
});
