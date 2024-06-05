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
              <div class="heading-L">MOON</div>
              <div class="body">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </div>
              <div class="divider"></div>
              <div style="display: flex;">
                <div style="display: flex; flex-direction: column;">
                  <div class="subheading-S">AVG. DISTANCE</div>
                  <div class="subheading-L">384,400 km</div>
                </div>
                <div style="display: flex; flex-direction: column;">
                  <div class="subheading-S">Est. travel time</div>
                  <div class="subheading-L">3 days</div>
                </div>
              </div>
            </template>
            <template #MARS>
              <div class="heading-L">MARS</div>
            </template>
            <template #EUROPA>
              <div class="heading-L">EUROPA</div>
            </template>
            <template #TITAN>
              <div class="heading-L">TITAN</div>
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
  @include respondTo("tablet") {
    background-image: url("@/assets/destination/background-destination-tablet.jpg");
  }
  @include respondTo("phone") {
    background-image: url("@/assets/destination/background-destination-mobile.jpg");
  }
}

.destination__container {
  .destination__content {
    flex-direction: column;
    align-items: start;
    max-width: 1110px;
    max-height: 792px;
    // width: calc(100% - 165px * 2);
    // height: calc(100% - 48px * 2);
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

.divider {
  background-color: rgba($white, 25%);
  height: 1px;
}
</style>
