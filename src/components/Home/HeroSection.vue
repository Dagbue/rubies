<template>
  <div class="alpha">

    <div class="section-alpha">

      <div class="section-1">
        <p class="text-1">Experience the future of <br/> chat and finance</p>
        <p class="text-2">Rubies is the all-in-one chat and financial transactions app that allows <br/> you to connect with friends and
          family while managing your finances securely.</p>
        <div class="btn-1">
          Get Started
          <img src="@/assets/arrow-right-line.svg" alt="" class="" />
        </div>
      </div>

      <div class="section-2">
        <img src="@/assets/HeroImage.png" alt="" class="image" />
      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: "HeroSection"
}
</script>

<style scoped>
.section-alpha{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
}

.section-1{
  margin-top: 75px;
}

.section-2{
  margin-bottom: -10px;
}

.text-1{
  font-size: 56px;
  font-family: 'BR-Firma-Bold', sans-serif;
  line-height: 64px;
  letter-spacing: -0.01em;
  text-align: center;
  margin-bottom: 8px;
}

.text-2{
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: center;
  color: #697582;
  margin-bottom: 24px;
}

.btn-1{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 50px;
  padding: 8px 16px;
  border-radius: 14px;
  gap: 8px;
  background-color: #191C1F;
  width: 175px;
  margin-left: auto;
  margin-right: auto;
  color: #FFFFFF;
  margin-bottom: 86px;
}

.image{
  width: 100%;
}

@media (max-width: 990px) {

}

@media (max-width: 700px) {



  .text-1{
    font-size: 45px;
    line-height: 50px;
    margin-bottom: 8px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .text-2{
    font-size: 16px;
    line-height: 22px;
  }
}

@media (max-width: 500px) {
  .text-1{
    font-size: 35px;
    line-height: 40px;
    margin-bottom: 9px;
  }



  .text-2{
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>