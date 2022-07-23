<script>
  import { onMount } from "svelte";

  let print = undefined;
  onMount(() => {
    print = () => window.print();
  });
</script>

<div class="fixed bottom-5 right-5">
  <button
    on:click={print}
    type="button"
    aria-label="Print Resume"
    class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white transition-all border border-sky-900 rounded-md border-b-3 hover:border-b-2 opacity-75 bg-sky-600 print:hidden hover:opacity-90 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
  >
    <div class="i-ic:baseline-local-printshop bg-[length:100%_100%] w-6 h-6" />
  </button>
</div>
