<script lang="ts">
  import { Title, Content, Actions } from "@smui/dialog";
  import Textfield from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text";
  import CharacterCounter from "@smui/textfield/character-counter";
  import Card from "@smui/card";
  import Button from "@smui/button";
  import type { WordStore } from "$stores/words/WordStore";
  import { createEventDispatcher } from "svelte";

  export let word: typeof WordStore;
  $: loaded = !word.loading;

  const dispatch = createEventDispatcher();

  function saveEvent() {
    console.log('SAVE EVENT');
    dispatch('save');
  }
</script>


<div>
  <Title id="list-title">{$word.data.name}</Title>
  <Content id="mandatory-content">
    <Card padded>
      <Textfield variant="outlined" bind:value={$word.data.name} label="Word">
        <HelperText slot="Title">Word to define</HelperText>
      </Textfield>
      <br />
      <div>
        <span>Image</span>
        {#if $word.data.image}
          <img alt={$word.data.name} src={$word.data.image}/>
        {/if}
      </div>
      <br />
      <div>
        <label for="lang">
          Language:
        </label>
        <span id="lang">{$word.data.lang}</span>
      </div>
      <br />
      <Textfield textarea input$maxlength={2500} bind:value={$word.data.definition} label="Definition">
        <CharacterCounter slot="internalCounter">0 / 100</CharacterCounter>
      </Textfield>
      <br />
      <Textfield textarea input$maxlength={2500} bind:value={$word.data.sentence} label="Sentence">
        <CharacterCounter slot="internalCounter">0 / 100</CharacterCounter>
      </Textfield>
      <br />
      <Button on:click={saveEvent}>Save</Button>
    </Card>
  </Content>
  <Actions>
    <a href="/words" class="mdc-button">Close</a>
  </Actions>
</div>
