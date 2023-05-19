<script lang="ts">
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

    function selectApi(apiType: string) {
        dispatch('message', {
            apiType
        })
    }
</script>

<div class="w-full p-4 bg-gray-700">
    <div class="w-1/3 grid grid-cols-3 gap-4">
        <button class="bg-blue-100 hover:bg-blue-200 text-blue-800 font-bold px-4 py-2 rounded-sm" on:click={() => selectApi('completion')}>Completion API</button>
        <button class="bg-green-100 hover:bg-green-200 text-green-800 font-bold px-4 py-2 rounded-sm" on:click={() => selectApi('image')}>Text-to-image API</button>
        <button class="bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold px-4 py-2 rounded-sm" on:click={() => selectApi('speech')}>Speech-to-text API</button>
    </div>
</div>
