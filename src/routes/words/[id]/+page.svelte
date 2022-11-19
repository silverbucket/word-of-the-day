<script lang="ts">
  import EditWord from "$components/EditWord.svelte";
  import { onMount } from "svelte";
  import { WordStore } from "$stores/words/WordStore";
  import { get } from "svelte/store";

  export let data;

  onMount(async () => {
    await WordStore.load(data.id);
  });

  async function saveWord() {
    const resp = await WordStore.post();
    const id = get(WordStore).data.id;
    window.location = `/words/${id}`;
  }
</script>

<EditWord word={WordStore} on:save={saveWord}/>
