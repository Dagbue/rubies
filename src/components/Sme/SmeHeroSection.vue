<template>
  <div class="alpha">
    <div class="section-1-alpha">
      <div class="section-1">
        <p class="text-1">Small Business,<br/>Big Solutions</p>
        <p class="text-2">Our SME banking services are designed to cater to the unique <br/>
          needs of small and medium enterprises, offering a range of <br/> financial solutions to help your business
          thrive and grow.</p>
        <!--        <p class="text-2">Download the Rubies app</p>-->
        <div class="btn-sep">
          <div class="btn-1">
            Join Now
            <img src="@/assets/arrow-right-line-dark.svg" alt="" class="" />
          </div>
          <div class="btn-2">
            contact sales
          </div>
        </div>
        <!--        <div class="play-store">-->
        <!--          <img src="@/assets/applestore.svg" alt="" class="store-image" />-->
        <!--          <img src="@/assets/gogleplay.svg" alt="" class="store-image" />-->
        <!--        </div>-->
      </div>

      <div class="image-section">
        <img src="@/assets/smehero.png" alt="" class="image"/>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: "SmeHeroSection"
}
</script>

<style scoped>
.alpha{
  background-color: #6E3FF3;
}
.section-1{
  /*margin-top: 75px;*/
  width: 50%;
  margin-left: 10%;
}

.image-section{
  width: 50%;
  margin-right: 4%;
}

.image{
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  /*margin-bottom: -101px;*/
}

.section-1-alpha{
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  padding-top: 5%;
  /*padding-bottom: 5%;*/
}

.text-1{
  font-size: 55px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: -0.01em;
  text-align: left;
  margin-bottom: 10px;
  color: #FFFFFF;
}

.text-2{
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: left;
  color: #F7F8F8;
  margin-bottom: 15px;
}



.btn-1{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 40px;
  padding: 8px 16px;
  border-radius: 12px;
  gap: 8px;
  background-color: #FFF;
  width: 170px;
  color: #191C1F;
  margin-bottom: 86px;
}

.btn-2 {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 40px;
  padding: 8px 16px;
  border-radius: 12px;
  gap: 8px;
  background-color: transparent;
  border: 0.5px solid #FFFFFF;
  width: 170px;
  color: #FFFFFF;
  margin-bottom: 86px;
}

.btn-sep{
  display: flex;
  gap: 20px;
  margin-top: 1%;
}




@media (max-width: 990px) {
}

@media (max-width: 700px) {
  .section-1-alpha{
    display: block;
  }
  .section-1{
    width: 100%;
    margin-left: unset;
  }

  .image-section{
    width: 100%;
    margin-right: unset;
  }
  .text-1{
    font-size: 44px;
    line-height: 45px;
    margin-bottom: 8px;
    text-align: center;
  }

  .text-2{
    font-size: 17px;
    line-height: 25px;
    text-align: center;
  }


  .btn-1{
    margin-bottom: unset;
  }

  .btn-sep{
    justify-content: center;
    gap: 15px;
  }
}

@media (max-width: 500px) {


}
</style>