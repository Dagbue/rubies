<template>
  <div class="alpha">
    <div class="section-1-alpha">
      <div class="section-1">
        <p class="text-1">Connect, Chat, Transact: <br/> All in One Place</p>
        <p class="text-2">Connect with family and friends with the chat and messaging feature. <br/>Every message sent
          sparks a wave of financial possibilities. Every message<br/> opens the door to a world of financial convenience.</p>
        <!--        <p class="text-2">Download the Rubies app</p>-->
        <div class="btn-1">
          Get Started
          <img src="@/assets/arrow-right-line.svg" alt="" class="" />
        </div>
        <!--        <div class="play-store">-->
        <!--          <img src="@/assets/applestore.svg" alt="" class="store-image" />-->
        <!--          <img src="@/assets/gogleplay.svg" alt="" class="store-image" />-->
        <!--        </div>-->
      </div>

      <div class="image-section">
        <img src="@/assets/chat.png" alt="" class="image"/>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: "ChatsMessagingHeroSection"
}
</script>

<style scoped>
.alpha{
  background-color: #EBF1FF;
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
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
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
  font-size: 50px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: -0.01em;
  text-align: left;
  margin-bottom: 10px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.text-2{
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: left;
  color: #697582;
  margin-bottom: 15px;
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
  color: #FFFFFF;
  margin-bottom: 86px;
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
    height: 45px;
    padding: 8px 16px;
    gap: 6px;
    width: 170px;
    font-size: 14px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
  }
}

@media (max-width: 500px) {


}
</style>