<template>
  <div>
    <h1>Flow Cards Testing</h1>

    <div class="board">
      <RedCard :position="initialPosition" :cardsChild="cardsWithInfo" :columCard="1"/>
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
          cards: [
            {
              id: 5,
              name: "Teste 5",
            },
          ],
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
  methods: {
    getPosition(card) {
      if (!card.cards) {
        card.x = 30;
        card.y = 50;
        return card;
      }
      card.cards.map((el) => this.getPosition(el));
    },
  },
  computed: {
    cardsWithInfo() {
      return this.cards.map((el) => this.getPosition(el));
    },
  },
  components: {
    RedCard,
  },
};
</script>

<style lang="scss" scoped>
.board {

  background: #577284;
  width: 90vw;
  height: 80vh;
  position: relative;

  overflow: scroll;
}
</style>
