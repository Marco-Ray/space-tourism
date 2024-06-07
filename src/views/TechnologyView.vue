<template>
  <div id="tech" class="view">
    <div class="content__container tech__container">
      <div class="content tech__content">
        <div class="slogan heading-XS">
          <span style="opacity: 0.25">03</span> SPACE LAUNCH 101
        </div>
        <div class="rocket__container">
          <div class="rocket__content">
            <pagination-component
              v-model:page="page"
              @update:page="updatePage"
              :page-count="3"
              :direction="mode==='portrait' ? 'column' : 'row'"
              :type="'circle'"
            />
            <div class="rocket__info">
              <div class="rocket__title heading-S">THE TERMINOLOGY…</div>
              <div class="rocket__term heading-M">{{ rocketInfo.term }}</div>
              <div class="rocket__description body">
                {{ rocketInfo.description }}
              </div>
            </div>
          </div>
          <div class="image__container">
            <div class="rocket__image">
              <img :src="rocketInfo.photo[mode]" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import LAUNCHVEHICLE_portrait from "@/assets/technology/image-launch-vehicle-portrait.jpg";
import LAUNCHVEHICLE_landscape from "@/assets/technology/image-launch-vehicle-landscape.jpg";
import SPACEPORT_portrait from "@/assets/technology/image-spaceport-portrait.jpg";
import SPACEPORT_landscape from "@/assets/technology/image-spaceport-landscape.jpg";
import SPACECAPSULE_portrait from "@/assets/technology/image-space-capsule-portrait.jpg";
import SPACECAPSULE_landscape from "@/assets/technology/image-space-capsule-landscape.jpg";

const tabletProSizeWatcher = window.matchMedia("(max-width: 1200px)");
tabletProSizeWatcher.addEventListener("change", () => {
  mode.value = tabletProSizeWatcher.matches ? "landscape" : "portrait";
});
const mode = ref(tabletProSizeWatcher.matches ? "landscape" : "portrait");

const page = ref(1);
const rocketInfoList = [
  {
    term: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    photo: {
      portrait: LAUNCHVEHICLE_portrait,
      landscape: LAUNCHVEHICLE_landscape,
    },
  },
  {
    term: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    photo: {
      portrait: SPACEPORT_portrait,
      landscape: SPACEPORT_landscape,
    },
  },
  {
    term: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    photo: {
      portrait: SPACECAPSULE_portrait,
      landscape: SPACECAPSULE_landscape,
    },
  },
];

const rocketInfo = computed(() => {
  return rocketInfoList[page.value - 1];
});
</script>

<style lang="scss" scoped>
#tech {
  background-image: url("@/assets/technology/background-technology-desktop.jpg");
  @include respondTo("tabletPro") {
    background-image: url("@/assets/technology/background-technology-tablet.jpg");
  }
  @include respondTo("phone") {
    background-image: url("@/assets/technology/background-technology-mobile.jpg");
  }
}

.tech__container {
  .tech__content {
    flex-direction: column;
    align-items: start;
    max-width: calc(100% - 165px);
    max-height: 792px;
    margin: auto 0 auto 165px !important;
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

.rocket__container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  overflow-y: auto;
  .rocket__content {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 64px;
    .rocket__info {
      .rocket__title {
        opacity: 50%;
      }
      .rocket__term {
        margin-top: 16px;
        margin-bottom: 24px;
      }
      .rocket__description {
        color: $light-blue;
      }
    }
  }
  @include respondTo("tabletPro") {
    display: flex;
    flex-direction: column-reverse;
    .rocket__content {
      flex-direction: column;
      align-items: center;
      .rocket__info {
        align-items: center;
        max-width: 512px;
        height: calc(100% - 50px);
        text-align: center;
      }
    }
  }
  .image__container {
    display: flex;
    justify-content: end;
    align-items: center;
    position: relative;
    .rocket__image {
      position: absolute;
      width: 100%;
      height: 100%;
      max-width: 608px;
      max-height: 600px;
      margin: auto;
      overflow: hidden;
      @include respondTo("tabletPro") {
        position: inherit;
        margin: 64px 0 32px 0;
        max-width: unset;
      }
    }
    @include respondTo("tabletPro") {
      justify-content: center;
    }
  }
}
</style>
