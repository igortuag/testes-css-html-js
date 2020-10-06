<template>
  <div
    class="red-card"
    :style="{
      'grid-column': columCard,
    }"
  >
    <div class="card">
      <h2 class="card__title">RED CARD</h2>
    </div>

    <RedCard
      v-for="(card, index) in cardsChild"
      :key="index"
      :columCard="columCard + 1"
    />
  </div>
</template>

<script>
export default {
  name: "RedCard",
  data() {
    return {
      valueTeste: "Teste 0",
    };
  },
  props: {
    position: {
      type: Object,
      default: null,
    },
    cardsChild: {
      type: Array,
      default: null,
    },
    columCard: {
      type: Number,
      required: true,
    },
  },
  methods: {
    mudandoValor(teste) {
      this.valueTeste = teste;
    },
  },
};
</script>

<style lang="scss" scoped>
.red-card {
  display: grid;
  grid-auto-columns: 100px;
  gap: 10px;
  color: #f3e0be;
  text-align: center;
}

.card {
  min-width: 100px;
  min-height: 100px;
  background: #77212e;
  display: flex;
  justify-content: center;
  align-items: center;

  &__title {
  }
}
</style>
