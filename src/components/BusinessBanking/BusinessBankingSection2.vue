<template>
  <div class="alpha">

    <div class="section-2">
      <p class="text-1">Join Rubies and<br>experience greatness</p>

      <p class="text-2">Embrace the power of unified communication and financial management<br>
        with Rubies. Chat, send money, pay bills, and more—all within one<br>innovative app for ultimate convenience and control.</p>
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
  name: "BusinessBankingSection2",
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
  width: 1197px;
  height: 479px;
  flex-shrink: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border-radius: 16px;
  margin-bottom: 5%;
}
.text-1{
  color:  #FFF;
  text-align: center;
  font-feature-settings: 'ss11' on, 'cv09' on, 'liga' off, 'calt' off;
  font-size: 55px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px; /* 100% */
  letter-spacing: -0.64px;
  padding-bottom: 10px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.section-2{
  padding-top: 10%;
}

.text-2{
  color: #868C98;
  text-align: center;
  font-feature-settings: 'ss11' on, 'cv09' on, 'liga' off, 'calt' off;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 133.333% */
  letter-spacing: -0.27px;
}


.btn-1{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 50px;
  padding: 8px 16px;
  border-radius: 5px;
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
  border-radius: 5px;
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

@media (max-width: 850px) {
  .alpha{
    width: 90%;
    height: 479px;
  }
}

@media (max-width: 700px) {

  .text-1{
    font-size: 50px;
    line-height: 60px; /* 100% */
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 5.5%;
  }

  .text-2{
    font-size: 16px;
    line-height: 24px;
  }

}

@media (max-width: 500px) {

}
</style>