<template>
  <div>
    <terms-header/>
    <terms-section1/>
    <footer-text/>
    <footer-home/>
  </div>
</template>

<script>
import TermsHeader from "@/components/Terms/TermsHeader.vue";
import FooterText from "@/components/BaseComponents/FooterText.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import TermsSection1 from "@/components/Terms/TermsSection1.vue";

export default {
  name: "TermsView",
  components: {TermsSection1, FooterHome, FooterText, TermsHeader}
}
</script>

<style scoped>

</style>