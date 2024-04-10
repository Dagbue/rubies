<template>
  <div class="alpha">

    <div class="section-1">
      <p class="text-1">Where Finance and <br/> Friendship Flourish Together</p>
    </div>

    <div class="section-2">
      <img src="@/assets/ao-img-13.svg" alt="" class="image" />
      <img src="@/assets/ao-img-14.svg" alt="" class="image" />
    </div>

  </div>
</template>

<script>
export default {
  name: "CardSection1"
}
</script>

<style scoped>
.alpha{
  background: #0F0F0F;
  height: 100%;
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
}

.section-2{
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 5%;
  padding-bottom: 5%;
}

</style>