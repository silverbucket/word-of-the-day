<DataTable table$aria-label="User list" style="width: 100%;">
  <Head>
    <Row>
      <Cell numeric>ID</Cell>
      <Cell>Name</Cell>
      <Cell>Language</Cell>
      <Cell>Definition</Cell>
      <Cell>Sentence</Cell>
      <Cell>Image</Cell>
    </Row>
  </Head>
  <Body>
  {#each words as item (item.id)}
    <Row>
      <Cell numeric>{item.id}</Cell>
      <Cell>{item.name}</Cell>
      <Cell>{item.lang}</Cell>
      <Cell>{item.definition}</Cell>
      <Cell>{item.sentence}</Cell>
      <Cell><img width="100" src={item.image?.[0]?.url} alt="" /></Cell>
      <Cell>
        <a href={`/word/${item.id}`}>Edit</a>
        <Button>Delete</Button>
      </Cell>
    </Row>
  {/each}
  </Body>

  <LinearProgress
    indeterminate
    bind:closed={loaded}
    aria-label="Data is being loaded..."
    slot="progress"
  />
</DataTable>


<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
  import LinearProgress from '@smui/linear-progress';
  import Button from '@smui/button';
  import { Prisma } from "@prisma/client";


  export let words: Array<Prisma.Word> = [];
  export let loaded = false
</script>
