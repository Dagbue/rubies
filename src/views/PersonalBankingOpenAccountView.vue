<template>
  <div class="alpha">
    <open-account-hero-section/>
    <open-account-section1/>
    <open-account-section2/>
    <open-account-section3/>
    <footer-text/>
    <footer-home/>
  </div>
</template>

<script>
import OpenAccountHeroSection from "@/components/PersonalBankingOpenAccount/OpenAccountHeroSection.vue";
import OpenAccountSection1 from "@/components/PersonalBankingOpenAccount/OpenAccountSection1.vue";
import OpenAccountSection2 from "@/components/PersonalBankingOpenAccount/OpenAccountSection2.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import OpenAccountSection3 from "@/components/PersonalBankingOpenAccount/OpenAccountSection3.vue";
import FooterText from "@/components/BaseComponents/FooterText.vue";

export default {
  name: "PersonalBankingOpenAccountView",
  components: {
    FooterText,
    OpenAccountSection3, FooterHome, OpenAccountSection2, OpenAccountSection1, OpenAccountHeroSection}
}
</script>

<style scoped>

</style>