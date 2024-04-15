<template>
  <div class="alpha">
    <section>
      <details>
        <summary style="text-transform: uppercase;">Is there a free trial available?</summary>
        <p>
          Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute
          onboarding call to get you up and running as soon as possible.
        </p>
      </details>
    </section>

    <section>
      <details>
        <summary style="text-transform: uppercase;">Can I change my plan later?</summary>
<!--        <p>-->
<!--          Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute-->
<!--          onboarding call to get you up and running as soon as possible.-->
<!--        </p>-->
      </details>
    </section>

    <section>
      <details>
        <summary style="text-transform: uppercase;">What is your cancellation policy?</summary>
        <!--        <p>-->
        <!--          Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute-->
        <!--          onboarding call to get you up and running as soon as possible.-->
        <!--        </p>-->
      </details>
    </section>

    <section>
      <details>
        <summary style="text-transform: uppercase;">Can other info be added to an invoice?</summary>
        <!--        <p>-->
        <!--          Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute-->
        <!--          onboarding call to get you up and running as soon as possible.-->
        <!--        </p>-->
      </details>
    </section>

    <section>
      <details>
        <summary style="text-transform: uppercase;">How does billing work?</summary>
        <!--        <p>-->
        <!--          Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute-->
        <!--          onboarding call to get you up and running as soon as possible.-->
        <!--        </p>-->
      </details>
    </section>

    <section>
      <details>
        <summary style="text-transform: uppercase;">How do I change my account email?</summary>
        <!--        <p>-->
        <!--          Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute-->
        <!--          onboarding call to get you up and running as soon as possible.-->
        <!--        </p>-->
      </details>
    </section>

    <div class="alpha-2">
      <div class="section-1">
        <p class="last-text">Still have questions?</p>

        <button class="button">
          Contact Us
          <img src="@/assets/arrow-right-line.svg" alt="btn-image" class="btn-image" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FaqSection1"
}
</script>

<style scoped>

.alpha{
  margin-top: 3%;
}

.alpha-2{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
  height: 244px;
  background-color: #F9FAFB;
  border-radius: 16px;
  margin-top: 1%;
}

.section-1{
  text-align: center;
}

.last-text{
  color: #101828;
  font-size: 30px;
  line-height: 44px;
  padding-top: 6%;
  padding-bottom: 2%;
  font-family: 'BR-Firma-Bold', sans-serif;
}

section {
  /*padding-top: 4%;*/
  width: 45%;
  margin: auto;
  padding-bottom: 2%;
}

details[open] summary ~ * {
  animation: open 0.4s ease-in;
}

@keyframes open {
  0% {
    transform: translateY(-60px);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  60% {
    transform: translateX(10px);
  }
  70% {
    transform: translateX(-10px);
  }
  80% {
    transform: translateX(5px);
  }
  90% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
details summary::-webkit-details-marker {
  display: none;
}

details summary {
  width: 100%;
  position: relative;
  cursor: pointer;
  font-size: 16px;
  /*font-weight: 300;*/
  list-style: none;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #101828;
}

/*details summary:after {*/
/*  content: "+";*/
/*  color: #071333;*/
/*  position: absolute;*/
/*  font-size: 1.75rem;*/
/*  line-height: 0;*/
/*  margin-top: 0.75rem;*/
/*  right: 0;*/
/*  !*font-weight: bold;*!*/
/*  transform-origin: center;*/
/*  transition: 200ms linear;*/
/*}*/

details summary:after {
  content: "+";
  color: #98A2B3;
  position: absolute;
  font-size: 1.4rem;
  line-height: 0;
  margin-top: 9.5px;
  /*margin-top: 0.75rem;*/
  left: 0; /* Change from right to left */
  margin-left: -30px; /* Adjust this value as needed to align the + symbol correctly */
  transform-origin: center;
  transition: 200ms linear;
}
details[open] summary:after {
  transform: rotate(45deg);
  font-size: 2rem;
}
details summary {
  outline: 0;
}
details p {
  font-size: 15px;
  margin: 0 0 1rem;
  /*padding-top: 1rem;*/
  color: #475467;
}
details {
  box-shadow: 0 0 7px #F9FAFB;
  border: 1px solid #f2f3f5;
  background-color: #F9FAFB;
  position: relative;
  padding: 25px 45px;
  /*margin-bottom: 5%;*/
  border-radius: 12px;
}

/*details[open] {*/
/*  box-shadow: 0 0 7px #F9FAFB;*/
/*  background-color: #F9FAFB;*/
/*}*/

.button {
  background: #191C1F;
  border: solid 1px #191C1F;
  color: white;
  cursor: pointer;
  padding: 12px 40px;
  text-align: center;
  border-radius: 12px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 2.5px;
  font-size: 15px;
}

 button{
   display: block;
   margin-left: auto;
   margin-right: auto;
 }

.button:hover {
  background: #0f171c;
  border: solid 1px #0f171c;
}

.btn-image{
  width: 15%;
}

@media (max-width: 700px){
  .details summary {
    font-size: 19px;
  }
  details p {
    font-size: 16px;
    margin: 0 0 1rem;
    padding-top: 1rem;
  }
  summary{
    font-size: 18px;
  }
  section {
    width: 82%;
  }

  .alpha-2{
    width: 95%;
    height: unset;
    padding-bottom: 6%;
  }
  .last-text{
    font-size: 27px;
  }
}
</style>