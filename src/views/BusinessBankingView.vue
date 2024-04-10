<template>
  <div class="alpha">
    <business-banking-header/>
    <business-banking-section1/>
    <business-banking-section2/>
    <footer-home/>
  </div>
</template>

<script>
import BusinessBankingHeader from "@/components/BusinessBanking/BusinessBankingHeader.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import BusinessBankingSection1 from "@/components/BusinessBanking/BusinessBankingSection1.vue";
import BusinessBankingSection2 from "@/components/BusinessBanking/BusinessBankingSection2.vue";

export default {
  name: "BusinessBankingView",
  components: {BusinessBankingSection2, BusinessBankingSection1, FooterHome, BusinessBankingHeader}
}
</script>

<style scoped>

</style>