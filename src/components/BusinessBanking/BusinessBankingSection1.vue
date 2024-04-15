<template>
  <div class="alpha">

    <div class="section-alpha">

      <div class="section-1">
        <div class="btn-1">
          Get Started
        </div>
        <p class="text-1">The all-in-one business<br/>manager you need.</p>
        <p class="text-2">Send invoices, receive POS payments, pay business bills, make bulk <br/> transfers, and free up time for the rest of your life.</p>
      </div>

    </div>

    <div class="section-2">
      <img src="@/assets/card-business-1.svg" alt="" class="image" />
      <img src="@/assets/card-business-2.svg" alt="" class="image" />
      <img src="@/assets/card-business-3.svg" alt="" class="image" />
    </div>

    <div class="section-3">
      <img src="@/assets/card-business-4.svg" alt="" class="image" />
      <img src="@/assets/card-business-5.svg" alt="" class="image" />
      <img src="@/assets/card-business-6.svg" alt="" class="image" />
    </div>

  </div>
</template>

<script>
export default {
  name: "BusinessBankingSection1"
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
  font-size: 54px;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: -0.01em;
  text-align: center;
  margin-bottom: 9px;
  font-family: 'BR-Firma-Bold', sans-serif;
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

.btn-1{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-radius: 12px;
  background-color: #EEEBFF;
  width: 140px;
  margin-left: auto;
  margin-right: auto;
  color: #6E3FF3;
  height: 31px;
  padding: 0px 12px;
  gap: 4px;
  font-size: 14px;
  margin-bottom: 20px;
  padding-top: 2.5px;
}

.section-2{
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  margin-top: 2%;
}

.section-3{
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 5%;
}

@media (max-width: 990px) {
  .image{
    width: 100%;
  }
}

@media (max-width: 700px) {
  .image{
    width: 85%;
    padding-bottom: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
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

  .section-2{
    display: block;
  }

  .section-3{
    display: block;
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