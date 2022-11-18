<script lang="ts">
  import { Prisma } from "@prisma/client";
  import EditWord from "$components/EditWord.svelte";
  export let data: {
    word: Prisma.Word;
  };
  console.log("data: ", data);
</script>

<EditWord word={data.word}/>
