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
}

.home__container {
  display: flex;
  flex-direction: column;
  justify-content: end;
  .home__content {
    align-items: end;
    justify-content: space-between;
    padding: 128px 165px;
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
}

.explore-btn::before {
    content: "";
    position: absolute;
    top: -88px;
    left: -88px;
    bottom: -88px;
    right: -88px;
    border-radius: 50%;
    background-color: rgba($white, 10%);
    opacity: 0;
  }

.explore-btn:hover::before {
  opacity: 1;
}

@media screen and (max-width: 1200px) {
  .home__container {
    justify-content: space-between;
    .home__content {
      height: 100%;
      flex-direction: column;
      align-items: center;
      padding: 20px 40px;
      .hero {
        text-align: center;
      }
    }
  }
}

@media screen and (max-width: 850px) {
  #home {
    background-image: url("@/assets/home/background-home-tablet.jpg");
  }
  .home__container {
    .home__content {
      padding: 128px 40px;
    }
  }
}

@media screen and (max-width: 750px) {
  #home {
    background-image: url("@/assets/home/background-home-mobile.jpg");
  }
}
</style>
