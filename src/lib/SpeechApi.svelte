<script lang="ts">
  import { requestTranscription } from '../api/apiClient';

  let transcriptionResult = '';
  let isLoading = false;

  async function submit(e: Event) {
    e.preventDefault();
    const data = new FormData();
    data.append('file', (e.target as HTMLFormElement).querySelector('input').files[0]);
    isLoading = true;
    transcriptionResult = await requestTranscription(data);
    isLoading = false;
  }
</script>

<div class="w-full h-full">
  <div class="flex h-full">
    <div class="w-1/2 bg-gray-100 h-full p-8 border-r-2 border-gray-200">
      <h1 class="text-lg font-bold">Speech-to-text API (Whisper)</h1>
      <div class="mt-4">
        <form class="flex flex-col" on:submit={submit}>
          <label>
            Wybierz plik do transkrypcji
            <input type="file" />
          </label>
          <div>
            <button class="bg-green-500 hover:bg-green-400 text-white font-bold px-4 py-2 rounded-sm">Wyślij</button>
          </div>
        </form>
      </div>
    </div>
    <div class="w-1/2 bg-white h-full p-8">
      {#if isLoading}
        <p>Oczekiwanie na odpowiedź...</p>
      {/if}
      <p>{transcriptionResult}</p>
    </div>
  </div>
</div>
