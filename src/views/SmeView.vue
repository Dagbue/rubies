<template>
  <div>
    <sme-hero-section/>
    <sme-section1/>
    <footer-text/>
    <footer-home/>
  </div>
</template>

<script>
import SmeHeroSection from "@/components/Sme/SmeHeroSection.vue";
import FooterText from "@/components/BaseComponents/FooterText.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import SmeSection1 from "@/components/Sme/SmeSection1.vue";

export default {
  name: "SmeView",
  components: {SmeSection1, FooterHome, FooterText, SmeHeroSection}
}
</script>

<style scoped>

</style>