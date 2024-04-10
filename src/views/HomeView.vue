<template>
  <div class="alpha">
    <hero-section/>
    <home-section2/>
    <home-section3/>
    <home-section4/>
    <footer-text/>
    <footer-home/>
  </div>
</template>

<script>
// @ is an alias to /src


import HeroSection from "@/components/Home/HeroSection.vue";
import HomeSection2 from "@/components/Home/HomeSection2.vue";
import HomeSection3 from "@/components/Home/HomeSection3.vue";
import HomeSection4 from "@/components/Home/HomeSection4.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import FooterText from "@/components/BaseComponents/FooterText.vue";

export default {
  name: 'HomeView',
  components: {FooterText, FooterHome, HomeSection4, HomeSection3, HomeSection2, HeroSection},
}
</script>
