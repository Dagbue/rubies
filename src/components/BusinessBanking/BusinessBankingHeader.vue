<template>
  <div class="alpha">

    <div class="section-2">
      <p class="text-1">Empower <br> Your Business Today!.</p>

      <p class="text-2">Join our platform and unlock a world of tailored business banking services designed to <br>
        help your enterprise thrive. Register now to access a suite of financial tools and resources <br> tailored to meet your business needs.</p>
    </div>

    <div class="btn-alpha">
      <div class="btn-1">
        Join Now
        <img src="@/assets/arrow-right-line-dark.svg" alt="" class="" />
      </div>
      <div class="btn-2">
        Contact Sales
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "BusinessBankingHeader",
  data() {
    return {
      backgroundImage: require('@/assets/business-banking-hero.svg'), // Assuming the image is in the assets folder
    };
  },
}
</script>

<style scoped>
.alpha{
  background-image: url('@/assets/business-banking-hero.svg');
  background-color: #cccccc;
  height: 95vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  line-height: 25px; /* 133.333% */
  letter-spacing: -0.27px;
}


.btn-1{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 50px;
  padding: 8px 16px;
  border-radius: 12px;
  gap: 8px;
  background-color: #F7F8F8;
  width: 170px;
  /*margin-left: auto;*/
  /*margin-right: auto;*/
  color: #191C1F;
}

.btn-2{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 50px;
  padding: 8px 16px;
  border-radius: 12px;
  gap: 8px;
  background-color: #191C1F;
  width: 170px;
  /*margin-left: auto;*/
  /*margin-right: auto;*/
  color: #FFFFFF;
}
.btn-alpha{
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 25px;
}

@media (max-width: 990px) {

}

@media (max-width: 700px) {
  .alpha{
    height: 90vh;
  }

  .text-1{
    font-size: 60px;
    line-height: 60px;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }


  .text-2{
    color: #868C98;
    text-align: center;
    font-feature-settings: 'ss11' on, 'cv09' on, 'liga' off, 'calt' off;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 133.333% */
    letter-spacing: -0.27px;
  }
}

@media (max-width: 500px) {

}
</style>