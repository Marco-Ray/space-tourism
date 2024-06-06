<template>
  <div id="crew" class="view">
    <div class="content__container crew__container">
      <div class="content crew__content"></div>
    </div>
  </div>
</template>
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
</style>
