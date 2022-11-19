<script lang="ts">
  import { onMount } from "svelte";
  import { WordsStore } from "$stores/words/WordsStore";
  import WordList from "$components/WordList.svelte";

  onMount(async () => {
    await WordsStore.load({lang: "en"});
  });
</script>

<WordList words={WordsStore} />
