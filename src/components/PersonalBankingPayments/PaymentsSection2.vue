<template>
  <div class="alpha">

    <div class="section-1">
      <p class="text-1">Where Finance and  Friendship Flourish Together</p>
    </div>

    <div class="section-2">
      <img src="@/assets/ao-img-4.svg" alt="" class="image" />
      <img src="@/assets/ao-img-5.svg" alt="" class="image" />
      <img src="@/assets/ao-img-6.svg" alt="" class="image" />
    </div>

  </div>
</template>

<script>
export default {
  name: "PaymentsSection2"
}
</script>

<style scoped>
.alpha{
  background: #0F0F0F;
  height: 100vh;
}
.section-1{
  /*margin-top: 75px;*/
  width: 50%;
  margin-left: 10%;
}

.text-1{
  font-size: 50px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: -0.01em;
  text-align: left;
  margin-bottom: 10px;
  color: #FFFFFF;
  padding-top: 80px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.section-2{
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 5%;
}

@media (max-width: 990px) {

}

@media (max-width: 700px) {
  .alpha{
    height: 100%;
    padding-bottom: 11%;
  }
  .section-2{
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .image{
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 30px;
  }


  .section-1{
    /*margin-top: 75px;*/
    width: 100%;
    margin-left: unset;
  }

  .text-1{
    text-align: center;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

}

@media (max-width: 500px) {

  .text-1{
    font-size: 55px;
    line-height: 60px;
    width: 95%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

}
</style>