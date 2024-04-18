<template>
  <div class="alpha">

    <div class="section-alpha">

      <div class="section-2">
        <img src="@/assets/video-card-image.webp" alt="" class="image" />
      </div>

      <div class="section-1">
        <p class="text-1">Simplify Spending, Elevate Life</p>
        <p class="text-2">Make everyday transactions hassle-free with the Rubies debit card. Get your card easily
          and enjoy fee-free maintenance, ensuring a seamless financial experience.</p>
        <div class="btn-1">
          Get your Card
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "HomeSection3",
}
</script>

<style scoped>
.alpha{
  height: 100%;
}
.section-alpha{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
}

.section-1{
  margin-bottom: 80px;
}

.section-2{
  margin-bottom: 80px;
  /*width: 50%;*/
}

video.responsive-video {
  max-width: 60%;
  height: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
}

.text-1{
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: -0.01em;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'BR-Firma-Bold', sans-serif;
  width: 50%;
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
  margin-bottom: 20px;
  width: 70%;
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
  border-radius: 14px;
  gap: 8px;
  background-color: #191C1F;
  width: 180px;
  margin-left: auto;
  margin-right: auto;
  color: #FFFFFF;
  margin-bottom: 86px;
}
.image{
  margin-top: 112px;
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
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
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .text-2{
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .section-1{
    margin-bottom: 60px;
  }
}
</style>