<template>
  <div class="alpha">

    <div class="section-alpha">

      <div class="section-1">
        <p class="text-1">Connect & Transact <br/> Seamlessly</p>
        <p class="text-2">Chat effortlessly with loved ones and handle financial tasks in one secure place. <br/>Send
          money, top up airtime, pay bills, and more with Rubies' integrated chat <br/> and finance features.</p>
        <div class="btn-1">
          Get Started
          <img src="@/assets/arrow-right-line-dark.svg" alt="" class="" />
        </div>
      </div>

      <div class="section-2">
        <img src="@/assets/Group 140.webp" alt="" class="image" />
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "HomeSection2"
}
</script>

<style scoped>
.alpha{
  background-image: url("@/assets/section2background.svg");
  background-color: #cccccc;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
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


.text-1{
  font-size: 56px;
  font-family: 'BR-Firma-Bold', sans-serif;
  line-height: 64px;
  letter-spacing: -0.01em;
  text-align: center;
  margin-bottom: 8px;
  color: #FFFFFF;
}

.text-2{
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: center;
  color: #697582;
  margin-bottom: 24px;
}

/*.btn-1{*/
/*  display: flex;*/
/*  align-items: center;*/
/*  align-content: center;*/
/*  justify-content: center;*/
/*  height: 40px;*/
/*  padding: 8px 16px;*/
/*  border-radius: 5px;*/
/*  gap: 20px;*/
/*  background-color: #191C1F;*/
/*  width: 160px;*/
/*  margin-left: auto;*/
/*  margin-right: auto;*/
/*  color: #FFFFFF;*/
/*  margin-bottom: 50px;*/
/*}*/
.image{
  width: 100%;
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
  width: 175px;
  margin-left: auto;
  margin-right: auto;
  color: #191C1F;
  border: 1px solid  #EEF0F1;
  background:  #FFF;
}



@media (max-width: 700px) {
  .text-1{
    font-size: 40px;
    line-height: 45px;
    margin-bottom: 8px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .text-2{
    font-size: 15px;
    line-height: 22px;
    display: block;
    width: 96%;
    margin-left: auto;
    margin-right: auto;
  }

  .btn-1{
    height: 45px;
    padding: 8px 16px;
    gap: 6px;
    width: 170px;
    font-size: 14px;
  }

  .image{
    width: 98%;
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
  .image{
    width: 100%;
  }
}
</style>