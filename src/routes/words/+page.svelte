<script lang="ts">
  import { Prisma } from "@prisma/client";
  import WordList from "$components/WordList.svelte";
  import NewWord from "$components/NewWord.svelte";
  import Button from "@smui/button";
  let open = false;
  export let data: {
    words: Array<Prisma.Word>
  };
  console.log("data: ", data);
</script>

<div style="display:flex; justify-content:space-between">
  <Button on:click={() => (open = true)}>Add New</Button>
</div>
<WordList words={data.words} loaded={true}/>
<NewWord {open} />
