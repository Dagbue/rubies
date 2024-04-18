<template>
  <div class="alpha">

    <div class="section-2">
      <p class="text-1">Privacy Policy</p>

      <p class="text-2">By accessing our website, you are agreeing to be bound by these terms of service, all
        applicable laws and regulations, and agree that you are responsible for compliance with any applicable
        local laws.</p>
    </div>

    <!--    <div class="btn-alpha">-->
    <!--      <div class="btn-1">-->
    <!--        Join Now-->
    <!--        <img src="@/assets/arrow-right-line-dark.svg" alt="" class="" />-->
    <!--      </div>-->
    <!--      <div class="btn-2">-->
    <!--        Contact Sales-->
    <!--      </div>-->
    <!--    </div>-->

  </div>
</template>

<script>
export default {
  name: "PrivacyPolicyHeader",
  data() {
    return {
      backgroundImage: require('@/assets/Vector.svg'), // Assuming the image is in the assets folder
    };
  },
}
</script>


<style scoped>
.alpha{
  background-image: url('@/assets/Vector.svg');
  background-color: #0F0F0F;
  height: 75vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
}
.text-1{
  color:  #FFF;
  text-align: center;
  font-feature-settings: 'ss11' on, 'cv09' on, 'liga' off, 'calt' off;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px; /* 100% */
  letter-spacing: -0.64px;
  padding-bottom: 10px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.section-2{
  padding-top: 13%;
}

.text-2{
  color: #868C98;
  text-align: center;
  font-feature-settings: 'ss11' on, 'cv09' on, 'liga' off, 'calt' off;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.27px;
  padding-top: 5px;
  width: 90%;
  display: block;
  margin-right: auto;
  margin-left: auto;
}



@media (max-width: 990px) {
}

@media (max-width: 700px) {
  .alpha{
    height: 100%;
    background-size: cover;
  }
  .section-2{
    padding-top: 25%;
    padding-bottom: 25%;
  }

  .text-1{
    font-size: 60px;
    line-height: 60px;
  }
}

@media (max-width: 500px) {
  .text-1{
    font-size: 55px;
    line-height: 55px;
  }
  .section-2{
    padding-top: 15%;
  }
}
</style>