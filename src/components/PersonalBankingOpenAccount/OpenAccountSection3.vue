<template>
  <div class="alpha">
    <div class="section-2">
      <img src="@/assets/logo-inverse.svg" alt="" class="logo-inverse" />
      <p class="text-1">Everything You Get <br/> with Rubies Account</p>
    </div>

    <svg class="line" xmlns="http://www.w3.org/2000/svg" width="2" height="84" viewBox="0 0 2 84" fill="none">
      <path d="M1 0V84" stroke="url(#paint0_linear_2390_51890)" stroke-opacity="0.5" stroke-width="2"/>
      <defs>
        <linearGradient id="paint0_linear_2390_51890" x1="1.5" y1="-1.99052" x2="1.5" y2="84" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0"/>
          <stop offset="0.459803" stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
      </defs>
    </svg>

    <div class="section-3-alpha">

      <div class="section-3">

        <div class="seprate">
          <div class="section-3-inner">
            <img src="@/assets/asterisk.svg" alt="" class="section-3-inner-image" />
            <p class="section-3-inner-text">100% digital signup</p>
          </div>
          <div class="section-3-inner">
            <img src="@/assets/asterisk.svg" alt="" class="section-3-inner-image" />
            <p class="section-3-inner-text">No account opening fees</p>
          </div>
          <div class="section-3-inner">
            <img src="@/assets/asterisk.svg" alt="" class="section-3-inner-image" />
            <p class="section-3-inner-text">Zero maintenance charges</p>
          </div>
          <div class="section-3-inner">
            <img src="@/assets/asterisk.svg" alt="" class="section-3-inner-image" />
            <p class="section-3-inner-text">An IBAN for business payments</p>
          </div>
        </div>

        <div class="seprate">
          <div class="section-3-inner">
            <img src="@/assets/asterisk.svg" alt="" class="section-3-inner-image" />
            <p class="section-3-inner-text">Account statements</p>
          </div>
          <div class="section-3-inner">
            <img src="@/assets/asterisk.svg" alt="" class="section-3-inner-image" />
            <p class="section-3-inner-text">Generate payment invoices</p>
          </div>
          <div class="section-3-inner">
            <img src="@/assets/asterisk.svg" alt="" class="section-3-inner-image" />
            <p class="section-3-inner-text">Instant transaction notifications</p>
          </div>
        </div>

        <div class="seprate">
          <div class="section-3-inner">
            <img src="@/assets/asterisk.svg" alt="" class="section-3-inner-image" />
            <p class="section-3-inner-text">proof of account</p>
          </div>
          <div class="section-3-inner">
            <img src="@/assets/asterisk.svg" alt="" class="section-3-inner-image" />
            <p class="section-3-inner-text">Anti-fraud protection</p>
          </div>
          <div class="section-3-inner">
            <img src="@/assets/asterisk.svg" alt="" class="section-3-inner-image" />
            <p class="section-3-inner-text">Low transaction fees</p>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "OpenAccountSection3"
}
</script>

<style scoped>
.alpha{
  background: #191C1F;
  height: 95vh;
}
.section-2{
  /*width: 635px;*/
  padding-top: 80px;
}
.text-1{
  color:  #ffffff;
  padding-top: 20px;
  text-align: center;
  font-feature-settings: 'ss11' on, 'cv09' on, 'liga' off, 'calt' off;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px; /* 114.286% */
  letter-spacing: -0.56px;
}
.logo-inverse{
  display: block;
  margin-left: auto;
  margin-right: auto;
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
.section-3-inner-image{
  width: 11%;
}
.seprate{
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-bottom: 20px;
}
.line{
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 3%;
  margin-bottom: 3%;
}
</style>