<template>
  <div id="home" class="view">
    <div class="content__container home__container">
      <div class="content home__content">
        <div class="hero">
          <div class="heading-XS">SO, YOU WANT TO TRAVEL TO</div>
          <div class="heading-XL">SPACE</div>
          <div class="body">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </div>
        </div>
        <div
          class="btn explore-btn heading-S"
          @click="$router.push({ name: 'destination' })"
        >
          EXPLORE
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#home {
  background-image: url("@/assets/home/background-home-desktop.jpg");
  @include respondTo("tablet") {
    background-image: url("@/assets/home/background-home-tablet.jpg");
  }
  @include respondTo("phone") {
    background-image: url("@/assets/home/background-home-mobile.jpg");
  }
}

.home__container {
  display: flex;
  flex-direction: column;
  justify-content: end;
  .home__content {
    align-items: end;
    justify-content: space-between;
    max-width: 1110px;
    max-height: 632px;
    @include respondTo("tablet") {
      max-width: 688px;
      max-height: 672px;
    }
    @include respondTo("phone") {
      max-width: 327px;
      height: 676px;
      width: calc(100% - 24px * 2) !important;
      margin: 24px;
    }
  }
  @include respondTo("tabletPro") {
    justify-content: space-between;
    .home__content {
      height: 100%;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      max-width: 688px;
      max-height: 900px;
      .hero {
        text-align: center;
        gap: 24px;
      }
      .explore-btn {
        transform: translate(0, 0);
      }
    }
  }
}

.hero {
  max-width: 540px;
  width: 100%;
}

.explore-btn {
  position: relative;
  transform: translate(-88px, -88px);
  width: 272px;
  height: 272px;
  text-align: center;
  line-height: 272px;
  border-radius: 50%;
  color: $very-dark-navy;
  background-color: $white;
  @include respondTo("tablet") {
    transform: translate(0, 0);
  }
  @include respondTo("phone") {
    transform: translate(0, 0);
    width: 144px;
    height: 144px;
    line-height: 144px;
  }
}

.explore-btn::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  border-radius: 50%;
  background-color: rgba($white, 10%);
  transition: all 0.2s ease-in;
}

.explore-btn:hover::before {
  top: -88px;
  left: -88px;
  bottom: -88px;
  right: -88px;
  @include respondTo("phone") {
    top: -44px;
    left: -44px;
    bottom: -44px;
    right: -44px;
  }
}
</style>
