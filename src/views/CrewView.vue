<template>
  <div id="crew" class="view">
    <div class="content__container crew__container">
      <div class="content crew__content">
        <div class="slogan heading-XS">
          <span style="opacity: 0.25">02</span> MEET YOUR CREW
        </div>
        <div class="person__container">
          <div>
            {{  page }}
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
              <img :src="COMMANDER" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import COMMANDER from "@/assets/crew/image-douglas-hurley.png";

const page = ref(1);
function updatePage(val) {
  page.value = val;
}
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

.person__container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  overflow-y: auto;
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
