<template>
  <div class="alpha">
    <navigation-view/>

    <!--    <router-view v-slot="{ Component }">-->
    <!--      <transition name="route" mode="out-in">-->
    <!--        <component :is="Component"></component>-->
    <!--      </transition>-->
    <!--    </router-view>-->

    <transition name="slide-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>


<script>
import NavigationView from "@/components/BaseComponents/NavigationView.vue";
export default {
  name: 'App',
  components: {NavigationView},

  mounted() {
    this.initializeSalesIQ();
  },

  methods: {
    initializeSalesIQ() {
      var $zoho = $zoho || {};
      $zoho.salesiq = $zoho.salesiq || {
        widgetcode: "siq48d4961abc52755b8ec0392e03cfe08d891ed13a7249f39985ed2be36badff3a",
        values: {},
        ready: function(){}
      };
      var d = document;
      var s = d.createElement("script");
      s.type = "text/javascript";
      s.id = "zsiqscript";
      s.defer = true;
      s.src = "https://salesiq.zoho.com/widget";
      var t = d.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(s, t);
    }
  }
};
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  cursor: pointer;
  counter-reset: Serial;
  font-family: 'BR-Firma-Regular', sans-serif;
  background: hsla(0, 0%, 100%, 1.0);
}
a{
  text-decoration: none;
}
/*input{*/
/*  font-family: 'Outfit', sans-serif;*/
/*}*/
/*textarea{*/
/*  font-family: 'Outfit', sans-serif;*/
/*}*/
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 1s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 1s ease-in;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to{
  transform: translateX(-250px);
}

.mobile-nav-enter-to{
  transform: translateX(0);
}

.slide-fade-enter {
  opacity: 0;
  transform: translateY(10px);
}

.slide-fade-enter-to {
}

.slide-fade-enter-active {
  transition: all 0.4s ease-in;
}

.slide-fade-leave {
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.slide-fade-leave-active {
  transition: all 0.4s ease-out;
}



</style>
