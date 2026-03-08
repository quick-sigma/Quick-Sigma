import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "../components/Hero";

export default component$(() => {
  return (
    <main>
      <Hero />
    </main>
  );
});

export const head: DocumentHead = {
  title: "Quick Sigma",
  meta: [
    {
      name: "description",
      content: "Quick Sigma application",
    },
  ],
};
