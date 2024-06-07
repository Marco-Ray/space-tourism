<template>
  <div id="tech" class="view">
    <div class="content__container tech__container">
      <div class="content tech__content">
        <div class="slogan heading-XS">
          <span style="opacity: 0.25">03</span> SPACE LAUNCH 101
        </div>
        <div class="rocket__container">
          <div>{{ page }}</div>
          <pagination-component
            v-model:page="page"
            @update:page="updatePage"
            :page-count="3"
            :direction="'column'"
            :type="'circle'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PaginationComponent from "@/components/PaginationComponent.vue";

const page = ref(1);
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
</style>
