<template>
  <div class="alpha">

    <div class="section-alpha">

      <div class="section-1">
        <p class="text-1">We change the way  you do money!</p>
        <p class="text-2">Rubies helps you spend, send, and save smarter. Welcome to your new  favourite way to do all things money.</p>


        <div class="btn-1">
          Get Started
          <img src="@/assets/arrow-right-line.svg" alt="" class="" />
        </div>
      </div>

      <div class="section-2">
        <img src="@/assets/about-hero-img.svg" alt="" class="image" />
      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: "AboutHeroSection"
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
  margin-bottom: -5px;
}

.text-1{
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: -0.01em;
  text-align: center;
  margin-bottom: 8px;
  font-family: 'BR-Firma-Bold', sans-serif;
  width: 65%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.text-2{
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: center;
  color: #697582;
  margin-bottom: 24px;
  width: 65%;
  display: block;
  margin-left: auto;
  margin-right: auto;
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
  background-color: #191C1F;
  width: 180px;
  margin-left: auto;
  margin-right: auto;
  color: #FFFFFF;
  margin-bottom: 86px;
}

@media (max-width: 990px) {
  .image{
    width: 100%;
  }
}

@media (max-width: 700px) {
  .image{
    width: 100%;
  }

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

  .btn-1{
    height: 48px;
  }
}

@media (max-width: 500px) {


  .image{
    width: 100%;
  }


  .text-1{
    width: 100%;
    font-size: 43px;
    line-height: 44px;
    margin-bottom: 9px;
  }


  .text-2{
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>