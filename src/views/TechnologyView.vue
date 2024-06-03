<template>
  <div id="tech">Technology</div>
</template>

<style lang="scss" scoped>
#tech {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/technology/background-technology-desktop.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}

@media screen and (max-width: 768px) {
  #tech {
    background-image: url("@/assets/technology/background-technology-tablet.jpg");
  }
}

@media screen and (max-width: 500px) {
  #tech {
    background-image: url("@/assets/technology/background-technology-mobile.jpg");
  }
}
</style>
