<template>
  <div>
    <privacy-policy-header/>
    <privacy-policy-section1/>
  </div>
</template>

<script>
import PrivacyPolicyHeader from "@/components/PrivacyPolicy/PrivacyPolicyHeader.vue";
import PrivacyPolicySection1 from "@/components/PrivacyPolicy/PrivacyPolicySection1.vue";

export default {
  name: "PrivacyPolicyView",
  components: {PrivacyPolicySection1, PrivacyPolicyHeader}
}
</script>

<style scoped>

</style>