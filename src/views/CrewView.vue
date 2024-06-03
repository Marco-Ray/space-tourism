<template>
  <div id="crew" class="view">Crew</div>
</template>
<style lang="scss" scoped>
#crew {
  background-image: url("@/assets/crew/background-crew-desktop.jpg");
}

@media screen and (max-width: 850px) {
  #crew {
    background-image: url("@/assets/crew/background-crew-tablet.jpg");
  }
}

@media screen and (max-width: 750px) {
  #crew {
    background-image: url("@/assets/crew/background-crew-mobile.jpg");
  }
}
</style>