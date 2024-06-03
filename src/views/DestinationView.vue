<template>
  <div id="destination" class="view">Destination</div>
</template>

<style lang="scss" scoped>
#destination {
  background-image: url("@/assets/destination/background-destination-desktop.jpg");
}

@media screen and (max-width: 850px) {
  #destination {
    background-image: url("@/assets/destination/background-destination-tablet.jpg");
  }
}

@media screen and (max-width: 750px) {
  #destination {
    background-image: url("@/assets/destination/background-destination-mobile.jpg");
  }
}
</style>
