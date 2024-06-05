<template>
  <div id="destination" class="view">
    <div class="content__container destination__container">
      <div class="content destination__content">
        <div class="slogan heading-XS">
          <span style="opacity: 0.25">01</span> PICK YOUR DESTINATION
        </div>
        <div class="planet__container">
          <div
            style="display: flex; justify-content: center; align-items: center"
          >
            <div class="planet__image">
              <img :src="MOON" alt="" />
            </div>
          </div>
          <destination-tab :tabList="tabList" class="tab__container">
            <template #MOON>
              MOON
            </template>
            <template #MARS>
              MARS
            </template>
            <template #EUROPA>
              EUROPA
            </template>
            <template #TITAN>
              TITAN
            </template>
          </destination-tab>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DestinationTab from "@/components/DestinationTab.vue";
import MOON from "@/assets/destination/image-moon.png";

const tabList = ["MOON", "MARS", "EUROPA", "TITAN"];
</script>

<style lang="scss" scoped>
#destination {
  background-image: url("@/assets/destination/background-destination-desktop.jpg");
}

.destination__container {
  .destination__content {
    flex-direction: column;
    align-items: start;
    width: calc(100% - 165px * 2);
    height: calc(100% - 48px * 2);
    padding: 48px 165px;
    gap: 24px;
  }
}

.slogan {
  height: 34px;
}

.planet__container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(max-content, 480px) 1fr;
  gap: 32px;
  .planet__image {
    width: 100%;
    max-width: 480px;
    height: 100%;
    overflow: hidden;
  }
}

@media screen and (max-width: 850px) {
  #destination {
    background-image: url("@/assets/destination/background-destination-tablet.jpg");
  }
}

@media screen and (max-width: 750px) {
  #destination {
    background-image: url("@/assets/destination/background-destination-mobile.jpg");
  }
}
</style>
