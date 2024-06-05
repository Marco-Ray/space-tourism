<template>
  <div id="nav-bar">
    <div class="logo">
      <img :src="LOGO" alt="" />
    </div>
    <div class="deco"></div>
    <div class="nav-container">
      <nav-states
        class="nav-text"
        v-for="(item, index) in menuItems"
        :menu="item"
        :index="index"
        :key="index"
      />
      <strong id="mobile-menu-btn" @click="toggleMobileMenu">
        <img :src="MENU" alt="mobile menu" v-show="!showMobileMenu" />
        <img :src="CLOSE" alt="close mobile menu" v-show="showMobileMenu" />
      </strong>
    </div>
    <div class="mobile-menu" v-show="showMobileMenu">
      <nav-states
        class="nav-text"
        v-for="(item, index) in menuItems"
        :menu="item"
        :index="index"
        :key="index"
      />
    </div>
  </div>
</template>

<script setup>
import NavStates from "@/components/NavStates.vue";
import LOGO from "@/assets/shared/logo.svg";
import MENU from "@/assets/shared/icon-hamburger.svg";
import CLOSE from "@/assets/shared/icon-close.svg";

import { ref } from "vue";
const menuItems = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];

// function activate(index) {
//   Array.from(document.getElementsByClassName("nav-state")).forEach(
//     (element) => {
//       element.classList.remove("active");
//     }
//   );
//   const mql = window.matchMedia("(max-width:500px)");

//   if (mql.matches) {
//     document
//       .querySelector(`.mobile-menu > .nav-state:nth-child(${index + 1})`)
//       .classList.add("active");
//   } else {
//     document
//       .querySelector(`.nav-state:nth-child(${index + 1})`)
//       .classList.add("active");
//     console.log(
//       document.querySelector(`.nav-state:nth-child(${index + 1})`).classList
//     );
//   }
// }

const showMobileMenu = ref(false);
function toggleMobileMenu() {
  showMobileMenu.value = !showMobileMenu.value;
}
</script>

<style lang="scss" scoped>
#nav-bar {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  @include respondTo("tablet") {
    margin-top: 0;
  }
  @include respondTo("phone") {
    padding: 24px;
    width: calc(100vw - 48px);
  }
}

.logo {
  width: 48px;
  height: 48px;
  margin: 0 64px;
  z-index: 99;
  @include respondTo("tablet") {
    margin: 0 40px;
  }
  @include respondTo("phone") {
    width: 40px;
    height: 40px;
    margin: 0;
  }
}

.deco {
  position: absolute;
  width: 44%;
  left: calc(64px + 48px + 64px);
  height: 1px;
  background-color: #979797;
  z-index: 10;
}

.nav-container {
  display: flex;
  gap: 48px;
  justify-content: center;
  min-width: 664px;
  width: 50%;
  background-color: rgba($white, 5%);
  backdrop-filter: blur(80px);
  @include respondTo("tablet") {
    display: flex;
    min-width: 600px;
  }
  @include respondTo("phone") {
    min-width: 0;
    background-color: transparent;
    backdrop-filter: none;
    justify-content: end;
    .nav-state {
      display: none;
    }
  }
}

#mobile-menu-btn {
  display: none;
  z-index: 99;
  @include respondTo("phone") {
    display: block;
  }
}

.mobile-menu {
  display: none;
  flex-direction: column;
  align-items: start;
  position: absolute;
  top: 0;
  right: 0;
  width: 254px;
  height: 100vh;
  gap: 32px;
  padding-left: 32px;
  background-color: rgba(#0b0d17, 15%);
  backdrop-filter: blur(80px);
  .nav-state:nth-child(1) {
    margin-top: 133px;
  }
  @include respondTo("phone") {
    display: flex;
  }
}

@media screen and (max-width: 1000px) {
  .deco {
    display: none;
  }
}

</style>
