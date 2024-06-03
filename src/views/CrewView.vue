<template>
  <div id="crew">Crew</div>
</template>
<style lang="scss" scoped>
#crew {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/crew/background-crew-desktop.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}

@media screen and (max-width: 768px) {
  #crew {
    background-image: url("@/assets/crew/background-crew-tablet.jpg");
  }
}

@media screen and (max-width: 500px) {
  #crew {
    background-image: url("@/assets/crew/background-crew-mobile.jpg");
  }
}
</style>