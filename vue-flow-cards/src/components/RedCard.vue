<template>
  <div
    class="red-card"
    :style="{
      top: position.y,
      left: position.x,
    }"
  >
    <div class="card">
      <h2 class="card__title">RED CARD</h2>
    </div>

    <div v-for="(item, index) in cardsChild" :key="item.id">
      {{ item.name }} index: {{ index }}
    </div>
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
  background: #77212e;
  min-width: 100px;
  min-height: 100px;
  position: absolute;

  color: #f3e0be;
  text-align: center;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;

  &__title {
  }
}
</style>
