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
              <img :src="planetImage" alt="" />
            </div>
          </div>
          <destination-tab
            :tabList="tabList"
            class="tab__container"
            @selectedPlanet="selectedPlanet"
          >
            <template #MOON>
              <div class="heading-L planet-name">MOON</div>
              <div class="body">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </div>
              <div class="divider"></div>
              <div class="info">
                <div class="info-item">
                  <div class="subheading-S">AVG. DISTANCE</div>
                  <div class="subheading-L">384,400 km</div>
                </div>
                <div class="info-item">
                  <div class="subheading-S">Est. travel time</div>
                  <div class="subheading-L">3 days</div>
                </div>
              </div>
            </template>
            <template #MARS>
              <div class="heading-L planet-name">MARS</div>
              <div class="body">
                Don’t forget to pack your hiking boots. You’ll need them to
                tackle Olympus Mons, the tallest planetary mountain in our solar
                system. It’s two and a half times the size of Everest!
              </div>
              <div class="divider"></div>
              <div class="info">
                <div class="info-item">
                  <div class="subheading-S">AVG. DISTANCE</div>
                  <div class="subheading-L">225 MIL. km</div>
                </div>
                <div class="info-item">
                  <div class="subheading-S">Est. travel time</div>
                  <div class="subheading-L">9 months</div>
                </div>
              </div>
            </template>
            <template #EUROPA>
              <div class="heading-L planet-name">EUROPA</div>
              <div class="body">
                The smallest of the four Galilean moons orbiting Jupiter, Europa
                is a winter lover’s dream. With an icy surface, it’s perfect for
                a bit of ice skating, curling, hockey, or simple relaxation in
                your snug wintery cabin.
              </div>
              <div class="divider"></div>
              <div class="info">
                <div class="info-item">
                  <div class="subheading-S">AVG. DISTANCE</div>
                  <div class="subheading-L">628 MIL. km</div>
                </div>
                <div class="info-item">
                  <div class="subheading-S">Est. travel time</div>
                  <div class="subheading-L">3 years</div>
                </div>
              </div>
            </template>
            <template #TITAN>
              <div class="heading-L planet-name">TITAN</div>
              <div class="body">
                The only moon known to have a dense atmosphere other than Earth,
                Titan is a home away from home (just a few hundred degrees
                colder!). As a bonus, you get striking views of the Rings of
                Saturn.
              </div>
              <div class="divider"></div>
              <div class="info">
                <div class="info-item">
                  <div class="subheading-S">AVG. DISTANCE</div>
                  <div class="subheading-L">1.6 BIL. km</div>
                </div>
                <div class="info-item">
                  <div class="subheading-S">Est. travel time</div>
                  <div class="subheading-L">7 years</div>
                </div>
              </div>
            </template>
          </destination-tab>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DestinationTab from "@/components/DestinationTab.vue";
import MOON from "@/assets/destination/image-moon.png";
import MARS from "@/assets/destination/image-mars.png";
import EUROPA from "@/assets/destination/image-europa.png";
import TITAN from "@/assets/destination/image-titan.png";

const tabList = ["MOON", "MARS", "EUROPA", "TITAN"];
const imageMap = {
  MOON: MOON,
  MARS: MARS,
  EUROPA: EUROPA,
  TITAN: TITAN,
};
const planetImage = ref(tabList[0]);

function selectedPlanet(planetName) {
  planetImage.value = imageMap[planetName];
}
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
    max-width: calc(100% - calc(64px * 2 + 48px) * 2);
    max-height: 792px;
    margin: auto calc(64px * 2 + 48px) !important;
    padding-top: 48px;
    height: calc(100% - 48px) !important;
    gap: 24px;
    @include respondTo("tabletPro") {
      max-width: calc(100% - 40px * 2);
      max-height: fit-content;
      margin: auto 40px !important;
      padding-top: 40px;
      height: calc(100% - 40px) !important;
    }
    @include respondTo("tablet") {
      max-width: 688px;
      max-height: 848px;
      margin: auto auto !important;
    }
    @include respondTo("phone") {
      max-width: 327px;
      max-height: 744px;
      margin: auto auto !important;
      padding-top: 24px;
      height: calc(100% - 24px) !important;
    }
  }
}

.slogan {
  height: 34px;
  @include respondTo("tabletPro") {
    height: 24px;
  }
  @include respondTo("phone") {
    width: 100%;
    height: 19px;
    text-align: center;
  }
}

.planet__container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  overflow-y: auto;
  .planet__image {
    width: 100%;
    max-width: 480px;
    height: 100%;
    overflow: hidden;
  }
  .tab__container {
    max-width: 480px;
    min-height: 400px;
    margin: auto 47px;
    .planet-name {
      margin-bottom: 16px;
    }
    .body {
      min-height: 130px;
      color: $light-blue;
    }
    .divider {
      width: 100%;
      margin: 40px 0;
      background-color: rgba($white, 25%);
      height: 1px;
    }
    .info {
      display: flex;
      width: 100%;
      .info-item {
        .subheading-S {
          color: $light-blue;
        }
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
    }
  }
  @include respondTo("tabletPro") {
    grid-template-columns: auto;
    grid-template-rows: repeat(2, 1fr);
    .planet__image {
      max-width: 400px;
    }
    .tab__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 600px;
      margin: auto auto;
      .body {
        min-height: 90px;
      }
      .divider {
        margin: 24px 0;
      }
      .info {
        text-align: center;
      }
    }
  }
  @include respondTo("phone") {
    grid-template-rows: 200px 1fr;
    .planet__image {
      max-width: 150px;
    }
    .tab__container {
      text-align: center;
      .info {
        flex-direction: column;
      }
    }
  }
}
</style>
