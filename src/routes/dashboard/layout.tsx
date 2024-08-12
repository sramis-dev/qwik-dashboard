import { component$, Slot } from "@builder.io/qwik";

import { Sidebar } from "./_components/sidebar";

const DashboardLayout = component$(() => {
  return (
    <div class="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div class="w-full flex-none md:w-64">
        <Sidebar />
      </div>
      <div class="flex-grow p-6 md:overflow-y-auto md:p-12">
        <Slot />
      </div>
    </div>
  );
});

export default DashboardLayout;
