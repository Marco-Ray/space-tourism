<template>
  <div class="tab__container">
    <div class="tabs">
      <div
        v-for="(tab, index) in props.tabList"
        :key="index"
        class="tab-item nav-text"
        @click="toggleTab(index)"
      >
        {{ tab }}
      </div>
    </div>
    <slot v-for="(tab, index) in activeTabList" :name="tab" :key="index" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
// eslint-disable-next-line no-undef
const props = defineProps({
  tabList: Array,
});

// eslint-disable-next-line no-undef
const emits = defineEmits(["selectedPlanet"]);

const activeTab = ref(props.tabList[0]);
const activeTabList = computed(() => {
  return props.tabList.filter((tab) => tab === activeTab.value);
});

function toggleTab(index) {
  activeTab.value = props.tabList[index];
  emits("selectedPlanet", activeTab.value);
  Array.from(document.getElementsByClassName("tab-item")).forEach((element) =>
    element.classList.remove("tab-active")
  );
  document
    .querySelector(`.tab-item:nth-child(${index + 1})`)
    .classList.add("tab-active");
}

onMounted(() => {
  toggleTab(0);
});
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  gap: 32px;
  margin-bottom: 40px;
}

.tab-item {
  cursor: pointer;
  height: 29px;
  border-bottom: 3px solid transparent;
  color: $light-blue;
}

.tab-item:hover {
  border-bottom: 3px solid rgba($white, 50%);
}

.tab-active {
  color: $white;
  border-bottom: 3px solid $white !important;
}
</style>
