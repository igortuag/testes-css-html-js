<template>
  <div>
    <h1>Flow Cards Testing</h1>

    <div class="board">
      <RedCard :position="initialPosition" :cardsChild="cards" />
    </div>
  </div>
</template>

<script>
import RedCard from "./RedCard.vue";

export default {
  name: "FlowCards",
  data() {
    return {
      initialPosition: {
        y: "20px",
        x: "20px",
      },
      cards: [
        {
          id: 1,
          name: "Teste 1",
        },
        {
          id: 2,
          name: "Teste 2",
        },
        {
          id: 3,
          name: "Teste 3",
        },
        {
          id: 4,
          name: "Teste 4",
        },
      ],
    };
  },
  components: {
    RedCard,
  },
};
</script>

<style lang="scss" scoped>
.board {
  background: #577284;
  display: block;
  width: 90vw;
  height: 80vh;
  position: relative;
}
</style>
