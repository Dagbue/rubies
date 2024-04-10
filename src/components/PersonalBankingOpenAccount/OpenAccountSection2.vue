<template>
  <div class="alpha">

    <div class="section-2">
      <p class="text-1">Power of <span class="color">Rubies</span> in Their <br/> Own Words</p>
    </div>

    <div class="section-1">

<!--      <img src="@/assets/card-main-1.svg" alt="" class=""/>-->
<!--      <img src="@/assets/card-main-2.svg" alt="" class=""/>-->
<!--      <img src="@/assets/card-main-3.svg" alt="" class=""/>-->

      <div class="section-1-content">
        <!--        <img src="https://www.interactivebrokers.com/images/web/crd-low-cost.svg" alt="crd-low-cost" class="section-1-content-image">-->
        <img src="@/assets/card-1.svg" alt="" class="section-1-content-image">

          <p class="section-1-content-text-2">
            Wealth management involves the expertise of an advisor or advisory team in delivering a wide range of
            financial services and products to affluent clients through a consultative approach.
          </p>

        <p class="last-text">Chidinma Okeke</p>
        </div>


      <div class="section-2-content">
        <!--        <img src="https://www.interactivebrokers.com/images/web/crd-global-access.svg" alt="crd-low-cost" class="section-1-content-image">-->
        <img src="@/assets/card-2.svg" alt="" class="section-1-content-image">

          <p class="section-1-content-text-2">
            Although stocks are often perceived as higher-risk investments due to market volatility, they also offer
            the potential for significant returns. Let us help you adeptly manage your portfolio and offer valuable
            financial advice.
          </p>

        <p class="last-text">Chidinma Okeke</p>
      </div>


      <div class="section-3-content">
        <!--        <img src="https://www.interactivebrokers.com/images/web/crd-vault-icon.svg" alt="crd-low-cost" class="section-1-content-image">-->
        <img src="@/assets/card-3.svg" alt="" class="section-1-content-image">

          <p class="section-1-content-text-2">
            Attaining financial balance is a crucial element of personal finance. It's essential to understand that
            saving for retirement and saving for college are not mutually exclusive objectives.
          </p>

        <p class="last-text">Chidinma Okeke</p>
        </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "OpenAccountSection2"
}
</script>

<style scoped>
.alpha{
  height: 100vh;
}
.section-2{
  /*width: 635px;*/
  padding-top: 80px;
}
.text-1{
  color:  #191C1F;
  text-align: center;
  font-feature-settings: 'ss11' on, 'cv09' on, 'liga' off, 'calt' off;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px; /* 114.286% */
  letter-spacing: -0.56px;
}
.color{
  color:  #DF1C41;
  font-feature-settings: 'ss11' on, 'cv09' on, 'liga' off, 'calt' off;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: -0.56px;
}


.section-1{
  display: flex;
  justify-content: center;
  padding-top: 80px;
  gap: 20px;
}

.section-1-content{
  height: 377px;
  width: 390px;
  padding:  24px;
  border-radius: 24px;
  background:  #EBF1FF;
}

.section-2-content{
  height: 377px;
  width: 390px;
  padding:  24px;
  border-radius: 24px;
  background:  #EEEBFF;
}

.section-3-content{
  height: 377px;
  width: 390px;
  padding:  24px;
  border-radius: 24px;
  background: #FEF3EB;
}

.section-4-content{
  height: 377px;
  width: 390px;
  padding:  24px;
  border-radius: 24px;
  background:  #EBF1FF;
}

.section-5-content{
  height: 377px;
  width: 390px;
  padding:  24px;
  border-radius: 24px;
  background:  #EBF1FF;
}

.section-1-content{
  height: 377px;
  width: 390px;
  padding:  24px;
  border-radius: 24px;
  background:  #EBF1FF;
}

.section-1-content{
  height: 377px;
  width: 390px;
  padding:  24px;
  border-radius: 24px;
  background:  #EBF1FF;
}

.section-1-content-text-1{
  font-weight: 600;
  color: #071333;
  margin-top: 0;
  font-size: 17px;
  margin-bottom: 3%;
  padding-top: 0;
  padding-bottom: 0;
}
.section-1-content-text-2{
  /*margin: 0;*/
  font-size: .9rem;
  color: #818a91;
  width: 95%;
  line-height: 1.5;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
}

.section-1-content-image{
  height: 80px;
  width: 80px;
  object-fit: cover;
  margin-bottom: 0;
  padding-bottom: 0;
}

.last-text{
  padding-top: 25%;
}

@media (max-width: 1000px) {
  .section-1-content-text-2{
    font-size: .750rem;
    width: 95%;
  }

  .section-1-content-text-1{
    font-size: 16px;
  }
}

@media (max-width: 700px) {
  .section-1{
    display: block;
    margin: 2.5% 2% 2.5% 4%;
  }

  .section-1-content{
    margin-bottom: 4%;
  }

  .section-1-content-text-2{
    font-size: .875rem;
    width: 95%;
  }

  .section-1-content-text-1{
    font-size: 18px;
  }


}

@media (max-width: 500px) {

}
</style>