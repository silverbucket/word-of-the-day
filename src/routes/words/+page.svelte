<script lang="ts">
  import { Prisma } from "@prisma/client";
  import WordList from "$components/WordList.svelte";
  export let data: {
    words: Array<Prisma.Word>;
  };
</script>

<WordList words={data.words} loaded={true} />
