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
}

.logo {
  width: 48px;
  height: 48px;
  margin: 0 64px;
  z-index: 99;
}

.deco {
  position: absolute;
  width: calc(55% - 64px - 48px - 64px);
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
}

#mobile-menu-btn {
  display: none;
  z-index: 99;
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
}

@media screen and (max-width: 768px) {
  #nav-bar {
    margin-top: 0;
  }
  .logo {
    margin: 0 40px;
  }
  .deco {
    display: none;
  }
  .nav-container {
    display: flex;
    min-width: 600px;
  }
}

@media screen and (max-width: 500px) {
  #nav-bar {
    margin: 24px;
  }
  .nav-container {
    min-width: 0;
    background-color: transparent;
    backdrop-filter: none;
    .nav-state {
      display: none;
    }
  }
  .logo {
    width: 40px;
    height: 40px;
    margin: 0;
  }
  #mobile-menu-btn {
    display: block;
  }
  .mobile-menu {
    display: flex;
  }
}
</style>
