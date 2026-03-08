import { component$, Slot } from "@builder.io/qwik";
import Navbar from "../components/Navbar";

export default component$(() => {
  return (
    <>
      <Navbar />
      <main>
        <Slot />
      </main>
    </>
  );
});
