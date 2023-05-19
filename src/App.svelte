<script lang="ts">
  import Header from './lib/Header.svelte';
  import ApiSelector from './lib/ApiSelector.svelte';
  import CompletionApi from './lib/CompletionApi.svelte';
  import ImageApi from './lib/ImageApi.svelte';
  import SpeechApi from './lib/SpeechApi.svelte';

  let selectedApi = 'completion';

  function handleApiType({ detail: { apiType } }) {
    selectedApi = apiType;
  }
</script>

<main class="h-full">
  <div class="flex h-full flex-col">
    <Header />
    <ApiSelector on:message={handleApiType} />

    {#if selectedApi === 'completion'}
      <CompletionApi />
    {:else if selectedApi === 'image'}
      <ImageApi />
    {:else if selectedApi === 'speech'}
      <SpeechApi />
    {/if}
  </div>
</main>

<style>
</style>
