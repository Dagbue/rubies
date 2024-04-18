<template>
  <div>
    <div v-if="this.view === 'one'" class="alpha">

      <div class="section-2">
        <p class="text-1">Send Money in a Snap.</p>

        <p class="text-2">Transfer funds to friends and family with just a few taps. Instantly <br/>
          send money to anyone, anytime, anywhere</p>
      </div>

      <img src="@/assets/you-sent.png" alt=" " class="image" />


      <div class="section-3">

        <div class="seprate">
          <div @click="change" class="section-3-inner-1">

            <p style="color: #191C1F;" class="section-3-inner-text">Funds Transfer</p>
          </div>
          <div @click="change2" class="section-3-inner">

            <p class="section-3-inner-text">Request Money</p>
          </div>
          <div @click="change3" class="section-3-inner">

            <p class="section-3-inner-text">Bills Payment</p>
          </div>
        </div>

      </div>

    </div>
    <div v-if="this.view === 'two'" class="alpha2">

      <div class="section-2">
        <p class="text-1">Ask for Money</p>

        <p class="text-2">Request money from friends and colleagues without the awkwardness.<br/>
          Simply send a request and get paid back with ease.</p>
      </div>

      <img src="@/assets/dammysent.png" alt=" " class="image" />


      <div class="section-3">

        <div class="seprate">
          <div @click="change" class="section-3-inner">

            <p class="section-3-inner-text">Funds Transfer</p>
          </div>
          <div @click="change2" class="section-3-inner-1">

            <p style="color: #191C1F;" class="section-3-inner-text">Request Money</p>
          </div>
          <div @click="change3" class="section-3-inner">

            <p class="section-3-inner-text">Bills Payment</p>
          </div>
        </div>

      </div>

    </div>
    <div v-if="this.view === 'three'" class="alpha3">

      <div class="section-2">
        <p class="text-1">Send Money in a Snap.</p>

        <p class="text-2">Transfer funds to friends and family with just a few taps. Instantly <br/>
          send money to anyone, anytime, anywhere</p>
      </div>

      <img src="@/assets/dammysent-2.png" alt=" " class="image" />


      <div class="section-3">

        <div class="seprate">
          <div @click="change" class="section-3-inner">

            <p  class="section-3-inner-text">Funds Transfer</p>
          </div>
          <div @click="change2" class="section-3-inner">

            <p class="section-3-inner-text">Request Money</p>
          </div>
          <div @click="change3" class="section-3-inner-1">

            <p style="color: #191C1F;" class="section-3-inner-text">Bills Payment</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsHeroSection1",
  data() {
    return {
      backgroundImage: require('@/assets/younghappyman.svg'), // Assuming the image is in the assets folder
      view: "one",
    };
  },
  methods: {
    change(){
      this.view = "one"
    },
    change2(){
      this.view = "two"
    },
    change3(){
      this.view = "three"
    }
  }
}
</script>

<style scoped>
.alpha{
  background-image: url('@/assets/younghappyman.svg');
  background-color: #cccccc;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.alpha2{
  background-image: url('@/assets/smartphone2.svg');
  background-color: #cccccc;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.alpha3{
  background-image: url('@/assets/closeup.svg');
  background-color: #cccccc;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.text-1{
  color:  #FFF;
  text-align: center;
  font-feature-settings: 'ss11' on, 'cv09' on, 'liga' off, 'calt' off;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px; /* 100% */
  letter-spacing: -0.64px;
  padding-top: 60px;
  padding-bottom: 10px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.text-2{
  color: #F7F8F8;
  text-align: center;
  font-feature-settings: 'ss11' on, 'cv09' on, 'liga' off, 'calt' off;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.27px;
}

.image{
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
}

.section-3{
  margin-top: 55px;
}
.section-3-inner{
  display: flex;
  align-content: center;
  align-items: center;
  padding: 10px  30px;
  gap: 7px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.11);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(32px);
}

.section-3-inner-1{
  display: flex;
  align-content: center;
  align-items: center;
  padding: 10px  30px;
  gap: 7px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.11);
  background: #FFF;
  backdrop-filter: blur(32px);
}
.section-3-inner-text{
  color: #FFF;
  text-align: center;
  font-feature-settings: 'ss11' on, 'cv09' on, 'liga' off, 'calt' off;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  /*line-height: 24px; !* 133.333% *!*/
  letter-spacing: -0.27px;
}
.seprate{
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

@media (max-width: 990px) {

  .section-3{
    padding-bottom: 55px;
  }
}

@media (max-width: 700px) {
  .alpha{
    height: 100%;
  }
  .alpha2{
    height: 100%;
  }
  .alpha3{
    height: 100%;
  }
  .text-1{
    font-size: 60px;
    line-height: 60px;
  }

}

@media (max-width: 500px) {

  .text-1{
    font-size: 55px;
    line-height: 55px;
    width: 95%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .text-2{
    font-size: 17px;
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .section-3-inner-text{
    color: #FFF;
    text-align: center;
    font-feature-settings: 'ss11' on, 'cv09' on, 'liga' off, 'calt' off;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    /*line-height: 24px; !* 133.333% *!*/
    letter-spacing: -0.27px;
  }

}
</style>