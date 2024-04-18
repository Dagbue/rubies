<template>
  <div class="alpha">
    <div class="section-1-alpha">
      <div class="section-1">
        <p class="text-1">Our Vision</p>
        <p class="text-2">Our vision is to revolutionise the traditional banking experience by intertwining
          seamless chats with secure and efficient financial transactions, setting a new standard in the industry.</p>
        <!--        <div class="btn-1">-->
        <!--          Get Started-->
        <!--        </div>-->

        <div class="btn-alpha">
          <div class="btn-1">
            Join Now
            <img src="@/assets/arrow-right-line-dark.svg" alt="" class="" />
          </div>
          <div class="btn-2">
            Contact Sales
          </div>
        </div>

<!--        <div class="play-store">-->
<!--          <img src="@/assets/applestore.svg" alt="" class="store-image" />-->
<!--          <img src="@/assets/gogleplay.svg" alt="" class="store-image" />-->
<!--        </div>-->
      </div>

      <div class="image-section">

        <div class="image-parent">
          <div class="container-image-text">
            <p class="image-1">2M+</p>
            <p class="image-2">Tickets Delivered This Month</p>
          </div>
        </div>
        <hr class="new1">
        <div class="image-parent">
          <div class="container-image-text">
            <p class="image-1">46K+</p>
            <p class="image-2">Active Customers Rate</p>
          </div>
        </div>
        <hr class="new1">
        <div class="image-parent">
          <div class="container-image-text">
            <p class="image-1">99%</p>
            <p class="image-2">Customer Satisfaction Rate</p>
          </div>
        </div>
        <hr class="new1">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection1"
}
</script>

<style scoped>
.alpha{
  background-color: #0F0F0F;
  height: 95vh;
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
  width: 75%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.section-1-alpha{
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  padding-top: 10%;
  /*padding-bottom: 5%;*/
}

.text-1{
  font-size: 50px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: -0.01em;
  text-align: left;
  margin-bottom: 10px;
  color: #ffffff;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.text-2{
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: left;
  color: #ffffff;
  margin-bottom: 15px;
  width: 90%;
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
  height: 40px;
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
  gap: 30px;
  margin-top: 20px;
}

.image-parent{
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.70);
  /*width: 425px;*/
  height: 150px;
  flex-shrink: 0;
}

.image-1{
  color: #FFF;

  /* Semi-bold/60px */
  font-size: 55px;
  font-style: normal;
  font-weight: 400;
  line-height: 66px; /* 110% */
}

.image-2{
  color: #A1A1AA;
  /* Regular/18px */
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
}

.container-image-text{
  display: block;
  padding-top: 20px;
  margin-left: 55px;
}

hr.new1 {
  border-top: 1px solid rgba(127, 96, 249, 0.5);
  border-radius: 10px;
  /*background: linear-gradient(98deg, #6DDCFF 0%, #7F60F9 100%);*/
}

@media (max-width: 990px) {
}

@media (max-width: 700px) {

  .text-1{
    font-size: 48px;
    line-height: 50px;
    margin-bottom: 8px;
    text-align: center;
  }

  .text-2{
    font-size: 18px;
    line-height: 22px;
    text-align: center;
  }

  .section-1-alpha{
    display: block;
  }

  .section-1{
    width: 100%;
    margin-left: unset;
  }

  .image-section{
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .btn-alpha{
    gap: 20px;
    justify-content: center;
    margin-bottom: 5%;
  }

}

@media (max-width: 500px) {
  .text-1{
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 9px;
  }

  .text-2{
    margin-left: auto;
    margin-right: auto;
    line-height: 24px;
    width: 90%;
  }

  .image-section{
    padding-bottom: 5%;
  }

  .section-1-alpha{
    padding-bottom: 20%;
  }

}
</style>