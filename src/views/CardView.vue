<template>
  <div class="alpha">
    <card-hero-section/>
    <card-section1/>
    <open-account-section2/>
    <footer-text/>
    <footer-home/>
  </div>
</template>

<script>
import CardHeroSection from "@/components/Card/CardHeroSection.vue";
import OpenAccountSection2 from "@/components/PersonalBankingOpenAccount/OpenAccountSection2.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import CardSection1 from "@/components/Card/CardSection1.vue";
import FooterText from "@/components/BaseComponents/FooterText.vue";

export default {
  name: "CardView",
  components: {FooterText, CardSection1, FooterHome, OpenAccountSection2, CardHeroSection}
}
</script>

<style scoped>

</style>