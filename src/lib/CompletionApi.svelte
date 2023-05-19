<script lang="ts">
    import { requestCompletion } from "../api/apiClient";

    let prompt = 'Jesteś specjalistą edycji i montażu filmów na YouTube. O co powinienem zadbać tworząc nowy film, aby widzowie odebrali go pozytywnie?';
    let isLoading = false;
    let chatCompletion = '';

    async function submit() {
      isLoading = true;
      chatCompletion = await requestCompletion(prompt);
      isLoading = false;
    }
</script>

<div class="w-full h-full">
    <div class="flex h-full">
      <div class="w-1/2 bg-gray-100 h-full p-8 border-r-2 border-gray-200">
        <h1 class="text-lg font-bold">Completion API (GPT-4)</h1>
        <div class="mt-4">
          <h2 class="mb-2">Prompt</h2>
          <textarea
            class="w-full p-2 rounded-md border-1 border-gray-200"
            cols="30"
            rows="10"
            bind:value={prompt}
          />
        </div>
        <div class="mt-4">
        <button
            class="bg-green-500 hover:bg-green-400 text-white font-bold px-4 py-2 rounded-sm"
            on:click={submit}>Wyślij</button
        >
        </div>
      </div>
      <div class="w-1/2 bg-white h-full p-8">
        {#if isLoading}
          <p>Oczekiwanie na odpowiedź...</p>
        {/if}
        {chatCompletion}
      </div>
    </div>
  </div>