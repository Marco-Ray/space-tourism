<template>
  <div class="pagination__container" :class="props.direction">
    <div
      class="page-item"
      :class="[props.type, { 'heading-S': props.type === 'circle' }]"
      v-for="page in props.pageCount"
      :key="page"
      @click="selectPage(page)"
    >
      {{ page }}
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

// eslint-disable-next-line no-undef
const props = defineProps({
  page: Number,
  pageCount: Number,
  type: String,
  direction: String,
});

// eslint-disable-next-line no-undef
const emits = defineEmits(["update:page"]);
function selectPage(page) {
  emits("update:page", page);
  Array.from(document.getElementsByClassName("page-item")).forEach((e) =>
    e.classList.remove("active")
  );
  document
    .querySelector(`.page-item:nth-child(${page})`)
    .classList.add("active");
}

onMounted(() => {
  selectPage(props.page);
});
</script>

<style lang="scss" scoped>
.pagination__container {
  display: flex;
  &.row {
    flex-direction: row;
    gap: 40px;
    @include respondTo("tabletPro") {
      gap: 16px;
    }
  }
  &.column {
    flex-direction: column;
    gap: 32px;
  }
  .page-item {
    cursor: pointer;
    &.dot {
      color: transparent;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: $white;
      opacity: 17%;
      text-align: center;
      &.active {
        opacity: 1 !important;
      }
      &:hover {
        opacity: 50%;
      }
      @include respondTo("tabletPro") {
        width: 10px;
        height: 10px;
      }
    }
    &.circle {
      width: 80px;
      height: 80px;
      border: 1px solid rgba($white, 25%);
      border-radius: 50%;
      color: $white;
      text-align: center;
      line-height: 80px;
      &.active {
        background-color: $white;
        color: $very-dark-navy;
      }
      &:hover {
        border: 1px solid $white;
      }
      @include respondTo("tabletPro") {
        width: 56px;
        height: 56px;
        line-height: 56px;
      }
      @include respondTo("phone") {
        width: 40px;
        height: 40px;
        line-height: 40px;
      }
    }
  }
}
</style>
