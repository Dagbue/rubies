<template>
  <div>
    <faq-header/>
    <faq-section1/>
    <footer-text/>
    <footer-home/>
  </div>
</template>

<script>
import FaqHeader from "@/components/FAQ/FaqHeader.vue";
import FooterText from "@/components/BaseComponents/FooterText.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import FaqSection1 from "@/components/FAQ/FaqSection1.vue";

export default {
  name: "FaqView",
  components: {FaqSection1, FooterHome, FooterText, FaqHeader}
}
</script>

<style scoped>

</style>