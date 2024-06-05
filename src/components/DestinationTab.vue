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
import { ref, computed } from "vue";
// eslint-disable-next-line no-undef
const props = defineProps({
  tabList: Array,
});

const activeTab = ref(props.tabList[0]);
const activeTabList = computed(() => {
  return props.tabList.filter((tab) => tab === activeTab.value);
});

function toggleTab(index) {
  activeTab.value = props.tabList[index];
}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  gap: 32px;
}

.tab-item {
  cursor: pointer;
  height: 29px;
  border-bottom: 3px solid $white;
  color: $white;
}
</style>
