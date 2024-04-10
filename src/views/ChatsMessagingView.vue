<template>
  <div class="alpha">
    <chats-messaging-hero-section/>
    <chats-messaging-section1/>
    <open-account-section2/>
    <footer-text/>
    <footer-home/>
  </div>
</template>

<script>
import ChatsMessagingHeroSection from "@/components/ChatsMessaging/ChatsMessagingHeroSection.vue";
import OpenAccountSection2 from "@/components/PersonalBankingOpenAccount/OpenAccountSection2.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import ChatsMessagingSection1 from "@/components/ChatsMessaging/ChatsMessagingSection1.vue";
import FooterText from "@/components/BaseComponents/FooterText.vue";

export default {
  name: "ChatsMessagingView",
  components: {FooterText, ChatsMessagingSection1, FooterHome, OpenAccountSection2, ChatsMessagingHeroSection}
}
</script>

<style scoped>

</style>