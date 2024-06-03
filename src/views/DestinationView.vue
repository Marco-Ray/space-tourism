<template>
  <div id="destination">Destination</div>
</template>

<style lang="scss" scoped>
#destination {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/destination/background-destination-desktop.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}

@media screen and (max-width: 768px) {
  #destination {
    background-image: url("@/assets/destination/background-destination-tablet.jpg");
  }
}

@media screen and (max-width: 500px) {
  #destination {
    background-image: url("@/assets/destination/background-destination-mobile.jpg");
  }
}
</style>