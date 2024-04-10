<template>
  <div class="alpha">
    <div class="section-1-alpha">
      <div class="section-1">
        <p class="text-1">Join Rubies and <br/> experience greatness</p>
        <p class="text-2">Embrace the power of unified communication and financial management <br/> with Rubies. Chat,
          send money, pay bills, and more—all within one <br/> innovative app for ultimate convenience and control.</p>
        <p class="text-2">Download the Rubies app</p>
        <!--        <div class="btn-1">-->
        <!--          Get Started-->
        <!--        </div>-->
        <div class="play-store">
          <img src="@/assets/applestore.svg" alt="" class="store-image" />
          <img src="@/assets/gogleplay.svg" alt="" class="store-image" />
        </div>
      </div>

      <div class="image-section">
        <img src="@/assets/footer-image.svg" alt="" class="image"/>
      </div>
    </div>

<!--    <div class="reduce">-->
<!--      <div class="section-2">-->

<!--        <img src="@/assets/Logo.svg" alt="icon-logo" class="icon-logo"/>-->

<!--        <div class="section-alpha">-->
<!--          <img src="@/assets/facebook.svg" alt="icon-socials" class="icon-socials"/>-->
<!--          <img src="@/assets/Instagram.svg" alt="icon-socials" class="icon-socials"/>-->
<!--          <img src="@/assets/Twitter.svg" alt="icon-socials" class="icon-socials"/>-->
<!--          <img src="@/assets/LinkedIn.svg" alt="icon-socials" class="icon-socials"/>-->
<!--          <img src="@/assets/TikTok.svg" alt="icon-socials" class="icon-socials"/>-->
<!--        </div>-->

<!--      </div>-->

<!--      <hr class="new1">-->

<!--      <div class="section-3">-->

<!--        <div class="section-3-inner">-->
<!--          <p class="text-3">Personal</p>-->
<!--          <p class="text-4">Funds Transfer</p>-->
<!--          <p class="text-4">Bills Payment</p>-->
<!--          <p class="text-4">Chats & Messaging</p>-->
<!--          <p class="text-4">Cards</p>-->
<!--          <p class="text-4">Savings<span>Coming Soon</span></p>-->
<!--        </div>-->

<!--        <div class="section-3-inner">-->
<!--          <p class="text-3">SMEs</p>-->
<!--          <p class="text-4">Funds Transfer</p>-->
<!--          <p class="text-4">Bills Payment</p>-->
<!--          <p class="text-4">Chats & Messaging</p>-->
<!--          <p class="text-4">Cards</p>-->
<!--          <p class="text-4">Savings<span>Coming Soon</span></p>-->
<!--        </div>-->

<!--        <div class="section-3-inner">-->
<!--          <p class="text-3">Business</p>-->
<!--          <p class="text-4">Funds Transfer</p>-->
<!--          <p class="text-4">Bills Payment</p>-->
<!--          <p class="text-4">Chats & Messaging</p>-->
<!--          <p class="text-4">Cards</p>-->
<!--          <p class="text-4">Savings<span>Coming Soon</span></p>-->
<!--        </div>-->

<!--        <div class="section-3-inner">-->
<!--          <p class="text-3">Company</p>-->
<!--          <router-link to="/about"><p class="text-4">About Us</p></router-link>-->
<!--          <p class="text-4">Contact</p>-->
<!--          <p class="text-4">FAQs</p>-->
<!--          <p class="text-4">Terms & Condition</p>-->
<!--          <p class="text-4">Privacy Policy</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

  </div>
</template>

<script>
export default {
  name: "FooterText"
}
</script>

<style scoped>
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
  margin-top: 5%;
  margin-bottom: 5%;
}

.text-1{
  font-size: 50px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: -0.01em;
  text-align: left;
  margin-bottom: 10px;
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


.play-store{
  display: flex;
  gap: 20px;
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
  background-color: #191C1F;
  width: 180px;
  margin-left: auto;
  margin-right: auto;
  color: #FFFFFF;
  margin-bottom: 86px;
}

.section-2{
  display: flex;
  justify-content: space-between;
}

/* Red border */
hr.new1 {
  border-top: 1px solid #EEF0F1;
  margin-top: 15px;
}

.reduce{
  width: 80%;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.section-3{
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-bottom: 3%;
}
.text-3{
  color: #191C1F;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 128.571% */
  letter-spacing: 0.12px;
}
.text-4{
  color: #697582;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px; /* 128.571% */
  letter-spacing: 0.18px;
}
span{
  padding: 3px 15px;
  align-items: center;
  gap: 4px;
  background-color: #EFFAF6;
  color: #2D9F75;
  border-radius: 100px;
  margin-left: 5px;
}
@media (max-width: 990px) {
}

@media (max-width: 700px) {

  .text-1{
    font-size: 45px;
    line-height: 50px;
    margin-bottom: 8px;
  }

  .text-2{
    font-size: 16px;
    line-height: 22px;
  }

  .section-3{
    /*display: block;*/
    display: flex;
    flex-direction: column;
    /*margin-left: auto;*/
    /*margin-right: auto;*/
  }

  .section-3-inner{
    margin-bottom: 10px;
  }

  .text-3{
    font-size: 15px;
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