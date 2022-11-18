<div>
  <Title id="list-title">{word.name}</Title>
  <Content id="mandatory-content">
    <Card padded>
      <Textfield variant="outlined" bind:value={word.name} label="Word">
        <HelperText slot="Title">Word to define</HelperText>
      </Textfield>
      <br />
      <div>
        <span>Image</span>
        {#if word.image}
          <img alt={word.name} src={word.image}/>
        {/if}
      </div>
      <br />
      <div>
        <label for="lang">
          Language:
        </label>
        <span id="lang">{word.lang}</span>
      </div>
      <br />
      <Textfield textarea input$maxlength={2500} bind:value={word.definition} label="Definition">
        <CharacterCounter slot="internalCounter">0 / 100</CharacterCounter>
      </Textfield>
      <br />
      <Textfield textarea input$maxlength={2500} bind:value={word.sentence} label="Sentence">
        <CharacterCounter slot="internalCounter">0 / 100</CharacterCounter>
      </Textfield>
      <br />
      <Button on:click={saveWord}>Save</Button>
    </Card>
  </Content>
  <Actions>
    <a href="/words" class="mdc-button">Close</a>
  </Actions>
</div>

<script lang="ts">
  import { Prisma } from "@prisma/client";
  import { Title, Content, Actions } from "@smui/dialog";
  import Textfield from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text";
  import CharacterCounter from "@smui/textfield/character-counter";
  import Card from "@smui/card";
  import Button from "@smui/button";

  export let word: Prisma.Word;

  function saveWord() {}
</script>
