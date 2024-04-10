<template>
  <div>
    <contact-us-header/>
    <contact-us-section1/>
    <footer-text/>
    <footer-home/>
  </div>
</template>

<script>
import ContactUsHeader from "@/components/Contact/ContactUsHeader.vue";
import FooterText from "@/components/BaseComponents/FooterText.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import ContactUsSection1 from "@/components/Contact/ContactUsSection1.vue";

export default {
  name: "ContactView",
  components: {ContactUsSection1, FooterHome, FooterText, ContactUsHeader}
}
</script>

<style scoped>

</style>