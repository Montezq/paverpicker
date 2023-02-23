<template>
  <div class="wrapper main overflow_auto">
    <Header />
    <main class="error-page d_flex align-items_center">
      <div class="error-page__container">
        <div class="d_flex align-items_center error-page__row">
          <div class="error-page__img">
            <Img :img="`404-img`" :alt="'404'"/>
          </div>
          <div class="error-page__text ">
            <h1 class="text_center fs_r32 fw_regular">The page you're looking for can't be found.</h1>
            <button @click="handleError" class="text_uppercase btn btn_primary">Go to Home Page</button>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
<style lang="scss">
  .error-page{
    max-width: 1200px;
    padding: 200px 40px 142px;
    margin: 0 auto;
    flex: 1;
    width: 100%;
    @include tabletsPortrait{
      padding: 120px 20px 100px;
    }
    @include phoneLandscape{
      padding: 80px 30px 50px;
      max-width: 700px;
    }
  }
  .error-page__row{
    @include tabletsPortrait{
      flex-direction: column;
    }
  }
  .error-page__container{
    width: 100%;
  }
  .error-page__img{
    flex: 0 0 clamp(300px, 35vw, 454px);
    margin-right: 20px;
    @include phoneLandscape{
      flex: 0 0 200px;
      width: 200px;
    }
    @include tabletsPortrait{
      flex: 0 0 240px;
      width: 240px;
    }
    img{
      width: 100%;
    }
  }
  .error-page__text{
    margin-left: auto;
    @include tabletsPortrait{
      margin: 0 auto;
    }
    h1{
      margin-bottom: 40px;
      &.fs_r32{
        @include tabletsPortrait{
          margin-top: 20px;
          font-size: 20px;
          margin-bottom: 30px;
        }
        @include phoneLandscape{
          font-size: 20px;
        }
      }
    }
    button{
      margin: 0 auto;
      padding: 24px 27px 25px;
      font-size: 24px;
      @include segoe(semibold);
      letter-spacing: 3px;
      font-weight: 500;
      box-shadow: 0 0 10px #000000;
      opacity: .8;
      @include tabletPortrait{
        font-size: 20px;
        padding: 20px 24px 21px;
      }
      @include tabletsPortrait{
        font-size: 16px;
        padding: 18px 20px;
      }
      @include phoneLandscape{
        font-size: 16px;
        padding: 18px 20px;
      }
      &:hover{
        opacity: .1rem;
      }
    }
  }
</style>
<script setup>
  const props = defineProps({
    error: Object
  })
  const handleError = () => clearError({ redirect: '/' })
</script>