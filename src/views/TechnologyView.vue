<template>
  <div id="tech" class="view">Technology</div>
</template>

<style lang="scss" scoped>
#tech {
  background-image: url("@/assets/technology/background-technology-desktop.jpg");
}

@media screen and (max-width: 850px) {
  #tech {
    background-image: url("@/assets/technology/background-technology-tablet.jpg");
  }
}

@media screen and (max-width: 750px) {
  #tech {
    background-image: url("@/assets/technology/background-technology-mobile.jpg");
  }
}
</style>
