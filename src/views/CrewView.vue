<template>
  <div id="crew" class="view">
    <div class="content__container crew__container">
      <div class="content crew__content">
        <div class="slogan heading-XS">
          <span style="opacity: 0.25">02</span> MEET YOUR CREW
        </div>
        <div class="person__container">
          <div class="person__content">
            <div class="person__info">
              <div class="person__title heading-S">{{ personInfo.title }}</div>
              <div class="person__name heading-M">{{ personInfo.name }}</div>
              <div class="person__description body">
                {{ personInfo.description }}
              </div>
            </div>
            <pagination-component
              v-model:page="page"
              @update:page="updatePage"
              :page-count="4"
              :direction="'row'"
              :type="'dot'"
            />
          </div>
          <div
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
            "
          >
            <div class="person__image">
              <img :src="personInfo.photo" alt="" />
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
import COMMANDER from "@/assets/crew/image-douglas-hurley.png";
import MISSONSPECIALIST from "@/assets/crew/image-mark-shuttleworth.png";
import PILOT from "@/assets/crew/image-victor-glover.png";
import FLIGHTENGINEER from "@/assets/crew/image-anousheh-ansari.png";

const page = ref(1);
function updatePage(val) {
  page.value = val;
}

const personInfoList = [
  {
    title: "COMMANDER",
    name: "DOUGLAS HURLEY",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    photo: COMMANDER,
  },
  {
    title: "MISSON SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    photo: MISSONSPECIALIST,
  },
  {
    title: "PILOT",
    name: "VICTOR GLOVER",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    photo: PILOT,
  },
  {
    title: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    photo: FLIGHTENGINEER,
  },
];
const personInfo = computed(() => {
  return personInfoList[page.value - 1];
});
</script>

<style lang="scss" scoped>
#crew {
  background-image: url("@/assets/crew/background-crew-desktop.jpg");
  @include respondTo("tablet") {
    background-image: url("@/assets/crew/background-crew-tablet.jpg");
  }
  @include respondTo("phone") {
    background-image: url("@/assets/crew/background-crew-mobile.jpg");
  }
}

.crew__container {
  .crew__content {
    flex-direction: column;
    align-items: start;
    max-width: calc(100% - 165px * 2);
    max-height: 792px;
    margin: auto 165px !important;
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

.person__container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  overflow-y: auto;
  .person__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .person__info {
      display: flex;
      flex-direction: column;
      .person__title {
        opacity: 50%;
      }
      .person__name {
        margin-top: 16px;
        margin-bottom: 24px;
        @include respondTo("phone") {
          margin-top: 8px;
        }
      }
      .person__description {
        color: $light-blue;
      }
    }
  }
  @include respondTo("tabletPro") {
    grid-template-columns: auto;
    grid-template-rows: repeat(2, 1fr);
    .person__content {
      align-items: center;
      .person__info {
        align-items: center;
        max-width: 512px;
        height: calc(100% - 100px);
        text-align: center;
      }
    }
  }
  .person__image {
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 539px;
    max-height: 676px;
    margin: auto;
    overflow: hidden;
  }
}
</style>
