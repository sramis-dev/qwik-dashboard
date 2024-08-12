import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const CustomersPage = component$(() => {
  return <main>Customers Page</main>;
});

export default CustomersPage;

export const head: DocumentHead = {
  title: "Customers",
  meta: [
    {
      name: "description",
      content: "Customer page",
    },
  ],
};
