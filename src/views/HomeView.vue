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
        <div class="btn explore-btn heading-S">EXPLORE</div>
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
    width: calc(100% - 165px * 2);
    height: calc(100% - 128px * 2);
    padding: 128px 165px;
    @include respondTo("tablet") {
      width: calc(100% - 40px * 2);
      height: calc(100% - 128px * 2);
      padding: 128px 40px;
    }
    @include respondTo("phone") {
      width: calc(100% - 24px * 2);
      height: calc(100% - 24px * 2);
      padding: 24px;
    }
  }
}

.hero {
  max-width: 540px;
}

.explore-btn {
  position: relative;
  width: 272px;
  height: 272px;
  text-align: center;
  line-height: 272px;
  border-radius: 50%;
  color: $very-dark-navy;
  background-color: $white;
  @include respondTo("phone") {
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

@media screen and (max-width: 1200px) {
  .home__container {
    justify-content: space-between;
    .home__content {
      height: 100%;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: calc(100% - 40px * 2);
      height: calc(100% - 20px * 2);
      padding: 20px 40px;
      .hero {
        text-align: center;
      }
    }
  }
}
</style>
