<template>
  <div id="home">Home</div>
</template>

<style lang="scss" scoped>
#home {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/home/background-home-desktop.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}

@media screen and (max-width: 768px) {
  #home {
    background-image: url("@/assets/home/background-home-tablet.jpg");
  }
}

@media screen and (max-width: 500px) {
  #home {
    background-image: url("@/assets/home/background-home-mobile.jpg");
  }
}
</style>
