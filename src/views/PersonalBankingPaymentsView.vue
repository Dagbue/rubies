<template>
  <div class="alpha">
    <payments-hero-section/>
    <payments-hero-section1/>
    <open-account-section2/>
    <payments-section2/>
    <footer-text/>
    <footer-home/>
  </div>
</template>

<script>
import PaymentsHeroSection from "@/components/PersonalBankingPayments/PaymentsHeroSection.vue";
import OpenAccountSection2 from "@/components/PersonalBankingOpenAccount/OpenAccountSection2.vue";
import PaymentsHeroSection1 from "@/components/PersonalBankingPayments/PaymentsHeroSection1.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import PaymentsSection2 from "@/components/PersonalBankingPayments/PaymentsSection2.vue";
import FooterText from "@/components/BaseComponents/FooterText.vue";

export default {
  name: "PersonalBankingPaymentsView",
  components: {FooterText, PaymentsSection2, FooterHome, PaymentsHeroSection1, OpenAccountSection2, PaymentsHeroSection}
}
</script>

<style scoped>

</style>