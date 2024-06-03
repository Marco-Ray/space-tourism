<template>
  <router-link :to="{name: props.menu.toLowerCase()}" class="nav-state" activeClass="active">
    {{ props.index.length === 2 ? props.index : "0" + props.index }}
    {{ props.menu }}
  </router-link>
</template>

<script setup>
import { RouterLink } from "vue-router";

// eslint-disable-next-line no-undef
const props = defineProps({
  index: Number,
  menu: String,
});

// const key = computed(() => {
//   return getCurrentInstance().vnode.key.length === 2
//     ? getCurrentInstance().vnode.key
//     : "0" + getCurrentInstance().vnode.key;
// });
</script>

<style lang="scss" scoped>
.nav-state {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 96px;
  border-bottom: 3px solid transparent;
}
.nav-state:hover {
  border-bottom: 3px solid $light-blue;
}
.active {
  border-bottom: 3px solid $white;
}
.nav-state.active:hover {
  border-bottom: 3px solid $white;
}

@media screen and (max-width: 500px) {
  .nav-state {
    justify-content: center;
    align-items: start;
    width: calc(100% - 29px);
    height: 19px;
    border-bottom: none;
    border-right: 3px solid transparent;
  }
  .nav-state:hover {
    border-bottom: none;
    border-right: 3px solid $light-blue;
  }
  .active {
    border-bottom: none;
    border-right: 3px solid $white;
  }
  .nav-state.active:hover {
    border-bottom: none;
    border-right: 3px solid $white;
  }
}
</style>
