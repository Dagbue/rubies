<template>
  <div v-if="!$route.meta.hideNavigation" >

    <div class="separate">

      <div>
        <div v-if="$route.name === 'personalBankingOpenAccount'" class="style-4-1">

          <img alt="company logo" src="@/assets/Logo.svg" class="logo" @click="home" />


          <ul v-show="!mobile" class="menu-4" >

            <li class="link">
              <div class="dropdown-navigation" @click="toggleDropdown">
                Personal
                <!--              <i class='bx bxs-chevron-down'></i>-->
                <div v-if="showDropdown" class="dropdown-content">
                  <router-link class="hover" to="/personalBankingOpenAccount">
                    <p class="text-1">Account Opening</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover"  to="/personalBankingPayments">
                    <p class="text-1">Payments</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover" to="/chatsMessagingView">
                    <p class="text-1">Chats & Messaging</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover" to="/cardView">
                    <p class="text-1">Cards</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                </div>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link  to="/businessBanking">Business</router-link>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link  to="/smeView">SMEs</router-link>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation" @click="toggleDropdown">

                Company
                <div v-if="showDropdown" class="dropdown-content">
                  <router-link class="hover" to="/about">
                    <p class="text-1">About Us</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover"  to="/contactView">
                    <p class="text-1">Contact</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover" to="/faqView">
                    <p class="text-1">FAQs</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover" to="/termsView">
                    <p class="text-1">Terms & Condition</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover" to="">
                    <p class="text-1">Privacy Policy</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                </div>
              </div>
            </li>

          </ul>

          <div v-show="!mobile" class="button-part">
            <p class="auth">Log In</p>
            <p class="auth2">Sign Up</p>
          </div>

        </div>

        <div v-else-if="$route.name === 'personalBankingPayments'" class="style-4-2">

          <img alt="company logo" src="@/assets/Logo.svg" class="logo" @click="home" />


          <ul v-show="!mobile" class="menu-4" >

            <li class="link">
              <div class="dropdown-navigation" @click="toggleDropdown">
                Personal
                <!--              <i class='bx bxs-chevron-down'></i>-->
                <div v-if="showDropdown" class="dropdown-content-2">
                  <router-link class="hover-2" to="/personalBankingOpenAccount">
                    <p class="text-1">Account Opening</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-2"  to="/personalBankingPayments">
                    <p class="text-1">Payments</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-2" to="/chatsMessagingView">
                    <p class="text-1">Chats & Messaging</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-2" to="/cardView">
                    <p class="text-1">Cards</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                </div>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link  to="/businessBanking">Business</router-link>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link  to="/smeView">SMEs</router-link>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation" @click="toggleDropdown">

                Company
                <div v-if="showDropdown" class="dropdown-content-2">
                  <router-link class="hover-2" to="/about">
                    <p class="text-1">About Us</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-2"  to="/contactView">
                    <p class="text-1">Contact</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-2" to="/faqView">
                    <p class="text-1">FAQs</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-2" to="/termsView">
                    <p class="text-1">Terms & Condition</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-2" to="">
                    <p class="text-1">Privacy Policy</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                </div>
              </div>
            </li>



          </ul>

          <div v-show="!mobile" class="button-part">
            <p class="auth">Log In</p>
            <p class="auth2">Sign Up</p>
          </div>

        </div>

        <div v-else-if="$route.name === 'chatsMessagingView'" class="style-4-3">

          <img alt="company logo" src="@/assets/Logo.svg" class="logo" @click="home" />

          <ul v-show="!mobile" class="menu-4" >

            <li class="link">
              <div class="dropdown-navigation" @click="toggleDropdown">
                Personal
                <!--              <i class='bx bxs-chevron-down'></i>-->
                <div v-if="showDropdown" class="dropdown-content-3">
                  <router-link class="hover-3" to="/personalBankingOpenAccount">
                    <p class="text-1">Account Opening</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-3"  to="/personalBankingPayments">
                    <p class="text-1">Payments</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-3" to="/chatsMessagingView">
                    <p class="text-1">Chats & Messaging</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-3" to="/cardView">
                    <p class="text-1">Cards</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                </div>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link  to="/businessBanking">Business</router-link>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link  to="/smeView">SMEs</router-link>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation" @click="toggleDropdown">

                Company
                <div v-if="showDropdown" class="dropdown-content-3">
                  <router-link class="hover-3" to="/about">
                    <p class="text-1">About Us</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-3"  to="/contactView">
                    <p class="text-1">Contact</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-3" to="/faqView">
                    <p class="text-1">FAQs</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-3" to="/termsView">
                    <p class="text-1">Terms & Condition</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-3" to="">
                    <p class="text-1">Privacy Policy</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                </div>
              </div>
            </li>



          </ul>

          <div v-show="!mobile" class="button-part">
            <p class="auth">Log In</p>
            <p class="auth2">Sign Up</p>
          </div>

        </div>

        <div v-else-if="$route.name === 'cardView'" class="style-4-4">

          <img alt="company logo" src="@/assets/Logo.svg" class="logo" @click="home" />

          <ul v-show="!mobile" class="menu-4" >

            <li class="link">
              <div class="dropdown-navigation" @click="toggleDropdown">
                Personal
                <!--              <i class='bx bxs-chevron-down'></i>-->
                <div v-if="showDropdown" class="dropdown-content-4">
                  <router-link class="hover-4" to="/personalBankingOpenAccount">
                    <p class="text-1">Account Opening</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-4"  to="/personalBankingPayments">
                    <p class="text-1">Payments</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-4" to="/chatsMessagingView">
                    <p class="text-1">Chats & Messaging</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-4" to="/cardView">
                    <p class="text-1">Cards</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                </div>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link  to="/businessBanking">Business</router-link>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link  to="/smeView">SMEs</router-link>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation" @click="toggleDropdown">

                Company
                <div v-if="showDropdown" class="dropdown-content-4">
                  <router-link class="hover-4" to="/about">
                    <p class="text-1">About Us</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-4"  to="/contactView">
                    <p class="text-1">Contact</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-4" to="/faqView">
                    <p class="text-1">FAQs</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-4" to="/termsView">
                    <p class="text-1">Terms & Condition</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-4" to="">
                    <p class="text-1">Privacy Policy</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                </div>
              </div>
            </li>


          </ul>

          <div v-show="!mobile" class="button-part">
            <p class="auth">Log In</p>
            <p class="auth2">Sign Up</p>
          </div>

        </div>

        <div v-else-if="$route.name === 'businessBanking'" class="style-4-5">

          <img alt="company logo" src="@/assets/logo-inverse.svg" class="logo" @click="home" />

          <ul v-show="!mobile" class="menu-4" >

            <li class="link">
              <div style="color: #ffffff" class="dropdown-navigation" @click="toggleDropdown">
                Personal
                <!--              <i class='bx bxs-chevron-down'></i>-->
                <div v-if="showDropdown" class="dropdown-content-5">
                  <router-link class="hover-5" to="/personalBankingOpenAccount">
                    <p class="text-1">Account Opening</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-5"  to="/personalBankingPayments">
                    <p class="text-1">Payments</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-5" to="/chatsMessagingView">
                    <p class="text-1">Chats & Messaging</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-5" to="/cardView">
                    <p class="text-1">Cards</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                </div>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link style="color: #ffffff"  to="/businessBanking">Business</router-link>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link style="color: #ffffff" to="/smeView">SMEs</router-link>
              </div>
            </li>
            <li class="link">
              <div style="color: #ffffff" class="dropdown-navigation" @click="toggleDropdown">
                Company
                <div v-if="showDropdown" class="dropdown-content-5">
                  <router-link class="hover-5" to="/about">
                    <p class="text-1">About Us</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-5"  to="/contactView">
                    <p class="text-1">Contact</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-5" to="/faqView">
                    <p class="text-1">FAQs</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-5" to="/termsView">
                    <p class="text-1">Terms & Condition</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-5" to="">
                    <p class="text-1">Privacy Policy</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                </div>
              </div>
            </li>


          </ul>

          <div v-show="!mobile" class="button-part">
            <p style="color: #ffffff" class="auth">Log In</p>
            <p class="auth3">Sign Up</p>
          </div>

        </div>

        <div v-else-if="$route.name === 'smeView'" class="style-4-6">

          <img alt="company logo" src="@/assets/logo-inverse-2.svg" class="logo" @click="home" />

          <ul v-show="!mobile" class="menu-4" >

            <li class="link">
              <div style="color: #ffffff" class="dropdown-navigation" @click="toggleDropdown">
                Personal
                <!--              <i class='bx bxs-chevron-down'></i>-->
                <div v-if="showDropdown" class="dropdown-content-6">
                  <router-link class="hover-6" to="/personalBankingOpenAccount">
                    <p class="text-1 sme-hover">Account Opening</p>
                    <p class="text-2 sme-hover">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-6"  to="/personalBankingPayments">
                    <p class="text-1 sme-hover">Payments</p>
                    <p class="text-2 sme-hover">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-6" to="/chatsMessagingView">
                    <p class="text-1 sme-hover">Chats & Messaging</p>
                    <p class="text-2 sme-hover">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-6" to="/cardView">
                    <p class="text-1 sme-hover">Cards</p>
                    <p class="text-2 sme-hover">Access worldwide banking services</p>
                  </router-link>
                </div>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link style="color: #ffffff"  to="/businessBanking">Business</router-link>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link style="color: #ffffff" to="/smeView">SMEs</router-link>
              </div>
            </li>
            <li class="link">
              <div style="color: #ffffff" class="dropdown-navigation" @click="toggleDropdown">
                Company
                <div v-if="showDropdown" class="dropdown-content-6">
                  <router-link class="hover-6" to="/about">
                    <p class="text-1">About Us</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-6"  to="/contactView">
                    <p class="text-1">Contact</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-6" to="/faqView">
                    <p class="text-1">FAQs</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-6" to="/termsView">
                    <p class="text-1">Terms & Condition</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-6" to="">
                    <p class="text-1">Privacy Policy</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                </div>
              </div>
            </li>


          </ul>

          <div v-show="!mobile" class="button-part">
            <p style="color: #ffffff" class="auth">Log In</p>
            <p class="auth3">Sign Up</p>
          </div>

        </div>

        <div v-else-if="$route.name === 'contactView'" class="style-4-5">

          <img alt="company logo" src="@/assets/logo-inverse.svg" class="logo" @click="home" />

          <ul v-show="!mobile" class="menu-4" >

            <li class="link">
              <div style="color: #ffffff" class="dropdown-navigation" @click="toggleDropdown">
                Personal
                <!--              <i class='bx bxs-chevron-down'></i>-->
                <div v-if="showDropdown" class="dropdown-content-5">
                  <router-link class="hover-5" to="/personalBankingOpenAccount">
                    <p class="text-1 sme-hover">Account Opening</p>
                    <p class="text-2 sme-hover">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-5"  to="/personalBankingPayments">
                    <p class="text-1 sme-hover">Payments</p>
                    <p class="text-2 sme-hover">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-5" to="/chatsMessagingView">
                    <p class="text-1 sme-hover">Chats & Messaging</p>
                    <p class="text-2 sme-hover">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-5" to="/cardView">
                    <p class="text-1 sme-hover">Cards</p>
                    <p class="text-2 sme-hover">Access worldwide banking services</p>
                  </router-link>
                </div>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link style="color: #ffffff"  to="/businessBanking">Business</router-link>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link style="color: #ffffff" to="/smeView">SMEs</router-link>
              </div>
            </li>
            <li class="link">
              <div style="color: #ffffff" class="dropdown-navigation" @click="toggleDropdown">
                Company
                <div v-if="showDropdown" class="dropdown-content-5">
                  <router-link class="hover-5" to="/about">
                    <p class="text-1">About Us</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-5"  to="/contactView">
                    <p class="text-1">Contact</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-5" to="/faqView">
                    <p class="text-1">FAQs</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-5" to="/termsView">
                    <p class="text-1">Terms & Condition</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-5" to="">
                    <p class="text-1">Privacy Policy</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                </div>
              </div>
            </li>


          </ul>

          <div v-show="!mobile" class="button-part">
            <p style="color: #ffffff" class="auth">Log In</p>
            <p class="auth3">Sign Up</p>
          </div>

        </div>

        <div v-else-if="$route.name === 'faqView'" class="style-4-5">

          <img alt="company logo" src="@/assets/logo-inverse.svg" class="logo" @click="home" />

          <ul v-show="!mobile" class="menu-4" >

            <li class="link">
              <div style="color: #ffffff" class="dropdown-navigation" @click="toggleDropdown">
                Personal
                <!--              <i class='bx bxs-chevron-down'></i>-->
                <div v-if="showDropdown" class="dropdown-content-5">
                  <router-link class="hover-5" to="/personalBankingOpenAccount">
                    <p class="text-1 sme-hover">Account Opening</p>
                    <p class="text-2 sme-hover">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-5"  to="/personalBankingPayments">
                    <p class="text-1 sme-hover">Payments</p>
                    <p class="text-2 sme-hover">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-5" to="/chatsMessagingView">
                    <p class="text-1 sme-hover">Chats & Messaging</p>
                    <p class="text-2 sme-hover">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-5" to="/cardView">
                    <p class="text-1 sme-hover">Cards</p>
                    <p class="text-2 sme-hover">Access worldwide banking services</p>
                  </router-link>
                </div>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link style="color: #ffffff"  to="/businessBanking">Business</router-link>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link style="color: #ffffff" to="/smeView">SMEs</router-link>
              </div>
            </li>
            <li class="link">
              <div style="color: #ffffff" class="dropdown-navigation" @click="toggleDropdown">
                Company
                <div v-if="showDropdown" class="dropdown-content-5">
                  <router-link class="hover-5" to="/about">
                    <p class="text-1">About Us</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-5"  to="/contactView">
                    <p class="text-1">Contact</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-5" to="/faqView">
                    <p class="text-1">FAQs</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-5" to="/termsView">
                    <p class="text-1">Terms & Condition</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-5" to="">
                    <p class="text-1">Privacy Policy</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                </div>
              </div>
            </li>


          </ul>

          <div v-show="!mobile" class="button-part">
            <p style="color: #ffffff" class="auth">Log In</p>
            <p class="auth3">Sign Up</p>
          </div>

        </div>

        <div v-else-if="$route.name === 'termsView'" class="style-4-5">

          <img alt="company logo" src="@/assets/logo-inverse.svg" class="logo" @click="home" />

          <ul v-show="!mobile" class="menu-4" >

            <li class="link">
              <div style="color: #ffffff" class="dropdown-navigation" @click="toggleDropdown">
                Personal
                <!--              <i class='bx bxs-chevron-down'></i>-->
                <div v-if="showDropdown" class="dropdown-content-5">
                  <router-link class="hover-5" to="/personalBankingOpenAccount">
                    <p class="text-1 sme-hover">Account Opening</p>
                    <p class="text-2 sme-hover">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-5"  to="/personalBankingPayments">
                    <p class="text-1 sme-hover">Payments</p>
                    <p class="text-2 sme-hover">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-5" to="/chatsMessagingView">
                    <p class="text-1 sme-hover">Chats & Messaging</p>
                    <p class="text-2 sme-hover">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover-5" to="/cardView">
                    <p class="text-1 sme-hover">Cards</p>
                    <p class="text-2 sme-hover">Access worldwide banking services</p>
                  </router-link>
                </div>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link style="color: #ffffff"  to="/businessBanking">Business</router-link>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link style="color: #ffffff" to="/smeView">SMEs</router-link>
              </div>
            </li>
            <li class="link">
              <div style="color: #ffffff" class="dropdown-navigation" @click="toggleDropdown">
                Company
                <div v-if="showDropdown" class="dropdown-content-5">
                  <router-link class="hover-5" to="/about">
                    <p class="text-1">About Us</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-5"  to="/contactView">
                    <p class="text-1">Contact</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-5" to="/faqView">
                    <p class="text-1">FAQs</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-5" to="/termsView">
                    <p class="text-1">Terms & Condition</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover-5" to="">
                    <p class="text-1">Privacy Policy</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                </div>
              </div>
            </li>


          </ul>

          <div v-show="!mobile" class="button-part">
            <p style="color: #ffffff" class="auth">Log In</p>
            <p class="auth3">Sign Up</p>
          </div>

        </div>

        <div v-else class="style-4">

          <img alt="company logo" src="@/assets/Logo.svg" class="logo" @click="home" />


          <ul v-show="!mobile" class="menu-4" >

            <li class="link">
              <div class="dropdown-navigation" @click="toggleDropdown">
                Personal
                <!--              <i class='bx bxs-chevron-down'></i>-->
                <div v-if="showDropdown" class="dropdown-content">
                  <router-link class="hover" to="/personalBankingOpenAccount">
                    <p class="text-1">Account Opening</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover"  to="/personalBankingPayments">
                    <p class="text-1">Payments</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover" to="/chatsMessagingView">
                    <p class="text-1">Chats & Messaging</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                  <router-link class="hover" to="/cardView">
                    <p class="text-1">Cards</p>
                    <p class="text-2">Access worldwide banking services</p>
                  </router-link>
                </div>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link  to="/businessBanking">Business</router-link>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation">
                <router-link  to="/smeView">SMEs</router-link>
              </div>
            </li>
            <li class="link">
              <div class="dropdown-navigation" @click="toggleDropdown">

                Company
                <div v-if="showDropdown" class="dropdown-content">
                  <router-link class="hover" to="/about">
                    <p class="text-1">About Us</p>
<!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover"  to="/contactView">
                    <p class="text-1">Contact</p>
<!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover" to="/faqView">
                    <p class="text-1">FAQs</p>
<!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover" to="/termsView">
                    <p class="text-1">Terms & Condition</p>
<!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                  <router-link class="hover" to="">
                    <p class="text-1">Privacy Policy</p>
                    <!--                    <p class="text-2">Access worldwide banking services</p>-->
                  </router-link>
                </div>
              </div>
            </li>


          </ul>

          <div v-show="!mobile" class="button-part">
            <p class="auth">Log In</p>
            <p class="auth2">Sign Up</p>
          </div>

        </div>
      </div>

      <div class="mobile" v-show="mobile">
        <div>
          <ul class="dropdown-nav" v-show="mobileNav">
            <img alt="company logo" src="@/assets/Logo.svg" class="logo2" />

            <label class="accordion-wrapper">
              <input type="checkbox" class="accordion" hidden />
              <div class="title">
                <div class="title-content">
                  <p class="title-content-para">Personal</p>
                </div>
<!--                <svg viewBox="0 0 256 512" width="8" title="angle-right" class="side-icon" fill="#01675b">-->
<!--                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />-->
<!--                </svg>-->
<!--                <svg viewBox="0 0 320 512" height="20" title="angle-down" class="down-icon" fill="#01675b">-->
<!--                  <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />-->
<!--                </svg>-->
              </div>

<!--              <div class="content" >-->
<!--                <div class="title-content content-2">-->
<!--               <router-link to="/checking"><p @click="toggleMobileNav2" class="title-content-para">Checking</p></router-link>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="content" >-->
<!--                <div class="title-content content-2">-->
<!--                  <router-link to="/saving"><p @click="toggleMobileNav2" class="title-content-para">Saving</p></router-link>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="content" >-->
<!--                <div class="title-content content-2">-->
<!--                  <router-link to="/iraview"><p @click="toggleMobileNav2" class="title-content-para">IRA Account</p></router-link>-->
<!--                </div>-->
<!--              </div>-->


            </label>

            <label class="accordion-wrapper">
              <input type="checkbox" class="accordion" hidden />
              <div class="title">
                <div class="title-content">
                  <p class="title-content-para">Business</p>
                </div>
<!--                <svg viewBox="0 0 256 512" width="8" title="angle-right" class="side-icon" fill="#01675b">-->
<!--                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />-->
<!--                </svg>-->
<!--                <svg viewBox="0 0 320 512" height="20" title="angle-down" class="down-icon" fill="#01675b">-->
<!--                  <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />-->
<!--                </svg>-->
              </div>

<!--              <div class="content" >-->
<!--                <div class="title-content content-2">-->
<!--                  <router-link to="/personalLoans"><p @click="toggleMobileNav2" class="title-content-para">Personal Loans</p></router-link>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="content" >-->
<!--                <div class="title-content content-2">-->
<!--                  <router-link to="/mortgagesView"><p @click="toggleMobileNav2" class="title-content-para">Mortgages</p></router-link>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="content" >-->
<!--                <div class="title-content content-2">-->
<!--                  <router-link to="/studentLoan"><p @click="toggleMobileNav2" class="title-content-para">Student Loan</p></router-link>-->
<!--                </div>-->
<!--              </div>-->


            </label>

            <label class="accordion-wrapper">
              <input type="checkbox" class="accordion" hidden />
              <div class="title">
                <div class="title-content">
                  <p class="title-content-para">SMEs</p>
                </div>
<!--                <svg viewBox="0 0 256 512" width="8" title="angle-right" class="side-icon" fill="#01675b">-->
<!--                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />-->
<!--                </svg>-->
<!--                <svg viewBox="0 0 320 512" height="20" title="angle-down" class="down-icon" fill="#01675b">-->
<!--                  <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />-->
<!--                </svg>-->
              </div>

<!--              <div class="content" >-->
<!--                <div class="title-content content-2">-->
<!--                  <router-link to="/wealthManagementView"><p @click="toggleMobileNav2" class="title-content-para">Wealth Management</p></router-link>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="content" >-->
<!--                <div class="title-content content-2">-->
<!--                  <router-link to="/individualRetirementView"><p @click="toggleMobileNav2" class="title-content-para">Individual Retirement</p></router-link>-->
<!--                </div>-->
<!--              </div>-->

            </label>

            <label class="accordion-wrapper">
              <input type="checkbox" class="accordion" hidden />
              <div class="title">
                <div class="title-content">
                  <p class="title-content-para">Company</p>
                </div>
<!--                <svg viewBox="0 0 256 512" width="8" title="angle-right" class="side-icon" fill="#01675b">-->
<!--                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />-->
<!--                </svg>-->
<!--                <svg viewBox="0 0 320 512" height="20" title="angle-down" class="down-icon" fill="#01675b">-->
<!--                  <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />-->
<!--                </svg>-->
              </div>

<!--              <div class="content" >-->
<!--                <div class="title-content content-2">-->
<!--                  <router-link to="/guidesView"><p @click="toggleMobileNav2" class="title-content-para">Guides</p></router-link>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="content" >-->
<!--                <div class="title-content content-2">-->
<!--                  <router-link to="/resourcesView"><p @click="toggleMobileNav2" class="title-content-para">Resources</p></router-link>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="content" >-->
<!--                <div class="title-content content-2">-->
<!--                  <router-link to="/faqView"><p @click="toggleMobileNav2" class="title-content-para">FAQ's</p></router-link>-->
<!--                </div>-->
<!--              </div>-->

            </label>


              <p class="mobile-auth">Log In</p>
            <br/>
              <p class="mobile-auth">Sign Up</p>


<!--            <li class="link"><router-link  to="/loginWithEmail" class="auth-2">Login</router-link></li>-->

          </ul>

        </div>
        <div class="icon">
          <i @click="toggleMobileNav" class='bx bx-menu' v-show="mobile" :class="{'icon-active' : mobileNav}"></i>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "NavigationView",
  data()  {
    return {
      value1: false,
      mobile: false,
      mobileNav: false,
      windowWidth: false,
      showDropdown: false,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    home(){
      this.$router.push("/");
      window.scrollTo(0, 0);
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    toggleMobileNav2(){
      this.mobileNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 990){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  }
}
</script>

<style scoped>
.bx-bell{
  color: #191C1F;
  font-size: 30px;
}

.bx-menu{
  font-size: 30px;
  cursor: pointer;
  transition: .8s ease all;
  color: #191C1F;
}
.icon-active{
  transform: rotate(180deg);
}

.logo {
  /*width: 10.5%;*/
  /*margin-left: 9%;*/
  /*margin-top: 1.1%;*/
  /*margin-bottom: 1.1%;*/
}

.style-4 {
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.style-4-1 {
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #FEF7EC;
}

.style-4-2 {
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #FDECF0;
}

.style-4-3 {
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #EBF1FF;
}

.style-4-4 {
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #FDEBFF;
}
.style-4-5 {
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #0F0F0F;
}
.style-4-6 {
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #6E3FF3;
}

.link {
  display: inline-block;
  list-style: outside none none;
  /*margin: 0 0.8em;*/
  overflow: hidden;
  font-weight: bold;
  font-size: 15px;
  align-items: center;
  align-content: center;
}


.bxs-chevron-down{
  color: #191C1F;
  font-size: 15px;
}

.bxs-chevron-right{
  color: #191C1F;
  font-size: 15px;
}


.link-2:hover{
  color: #191C1F;
}

.menu-4{
  display: flex;
  align-content: center;
  align-items: center;
  gap: 30px;
}

.mobile-auth{
  border: 1px solid #191C1F;
  background-color: #191C1F;
  color: #ffffff;
  padding: 0.4em 30px 0.5em 30px;
  border-radius: 5px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
  margin: 0 2.5px;
  width: 120px;
  text-align: center;
  font-size: 14px;
}

.mobile-auth:hover{
  background-color: #191C1F;
  border: 1px solid #191C1F;
  color: #FFFFFF;
}

.auth{
  background-color: transparent;
  border: 0.5px solid #EEF0F1;
  color: #191C1F;
  padding: 0.4em 30px 0.5em 30px;
  border-radius: 5px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
  margin: 0 2.5px;
  width: 120px;
  text-align: center;
  font-size: 14px;
}
/*.auth:hover{*/
/*  background-color: #191C1F;*/
/*  border: 1px solid #191C1F;*/
/*  color: #FFFFFF;*/
/*}*/

.auth2{
  background-color: #191C1F;
  border: 1px solid #191C1F;
  color: #ffffff;
  padding: 0.4em 30px 0.5em 30px;
  border-radius: 5px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
  margin: 0 2.5px;
  width: 120px;
  text-align: center;
  font-size: 14px;
}
/*.auth2:hover{*/
/*  background-color: transparent;*/
/*  border: 1px solid #191C1F;*/
/*  color: #191C1F;*/
/*}*/

.auth3{
  background-color: #ffffff;
  border: 1px solid #ffffff;
  color: #191C1F;
  padding: 0.4em 30px 0.5em 30px;
  border-radius: 5px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
  margin: 0 2.5px;
  width: 120px;
  text-align: center;
  font-size: 14px;
}

/*.auth3:hover{*/
/*  border: 1px solid #191C1F*/
/*}*/


.link-2 {
  padding: 0.3em 0;
  color:  #191C1F;
  position: relative;
  display: inline-block;
  margin: 0;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
}


.topmost-header {
  /*background-color: #143159;*/
  padding-top: 10px;
  padding-bottom: 10.5px;
  color: #FFFFFF;
  /*display: flex;*/
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  background-color: #191C1F;
}

.topmost-header-1 {
  display: flex;
  justify-content: right;
}

.topmost-header-text {
  font-size: 15px;
  padding-right: 28px;
  display: flex;
  align-items: center;
  align-content: center;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  font-weight: 900;
}
.topmost-header-text:hover {
  text-decoration: underline;
}



.topmost-header-2 {
  text-align: center;
  /*background-color: #143159;*/
  padding-top: 10px;
  padding-bottom: 10.5px;
  color: #ffffff;
  /*display: flex;*/
  /*box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);*/
  background-color: #3a3a3a;
}

.topmost-header-1-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.topmost-header-text-2 {
  font-size: 15px;
  padding-left: 28px;
  font-weight: 900;
}
.topmost-header-text-3 {
  text-decoration: underline;
  padding-left: 5px;
}


i{
  padding-right: 4px;
  font-size: 14px;
}

.dropdown-nav{
  display: flex;
  align-items: center;
  align-content: center;
  list-style: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  max-width: 240px;
  height: 100%;
  background-color: #f9f9f9;
  font-size: 20px;
  /*text-align: left;*/
  /*padding-left: 20px;*/
}

.logo2{
  width: 80%;
  margin-top: 10px;
  margin-bottom: 10px;
}

.dropdown-nav li {
  /*margin-top: 12%;*/
  overflow: hidden;
  list-style: none;
  height: 100%;
}

.dropdown-nav * {
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.dropdown-nav a {
  padding: 0.3em 0;
  color: #ffffff;
  position: relative;
  display: inline-block;
  letter-spacing: 1px;
  margin: 0;
  text-decoration: none;
}

.dropdown-nav a:before,
.dropdown-nav a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.dropdown-nav a:before {
  bottom: 100%;
  display: block;
  height: 3px;
  width: 100%;
  content: "";
  /*background-color: #D23535;*/
}

.dropdown-nav a:after {
  padding: 0.3em 0;
  position: absolute;
  bottom: 100%;
  left: 0;
  content: attr(data-hover);
  color: #676767;
  white-space: nowrap;
}

/*.dropdown-nav li:hover a,*/
/*.dropdown-nav.current a {*/
/*  color: #D23535;*/
/*}*/

hr {
  color: white;
  width: 100%;
  background-color: white;
  border: 1px solid white;
  margin-top: 95px;
}


.fg--search {
  background: white;
  position: relative;
  width: 210px;
}
.fg--search input {
  width: 100%;
  padding: 9px;
  display: block;
  background: #FFFFFF;
  border: 1px solid #E9F0FFFF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 7px;
}

.fg--search button {
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  margin-top: 3.5px;
}

.fa-search{
  color: #667085;
  /*margin-right: 10px;*/
}



ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

a {
  display: block;
  color: #191C1F;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}



.dropdown-navigation {
  display: inline-block;
  color: #191C1F;
}


.dropdown-content {
  display: none;
  position: absolute;
  background-color: #FFF;
  min-width: 250px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
  z-index: 1;
  padding: 10px 20px;
  border-radius: 26px;
  border: 10px solid #FEF7EC;
}


.dropdown-content-2 {
  display: none;
  position: absolute;
  background-color: #FFF;
  min-width: 250px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
  z-index: 1;
  padding: 10px 20px;
  border-radius: 26px;
  border: 10px solid #FDECF0;
}
.hover-2:hover{
  background-color: #FDECF0;
  border-radius: 12px;
}
.dropdown-navigation:hover .dropdown-content-2 {
  display: block;
}
.dropdown-navigation-2:hover .dropdown-content-2 {
  display: block;
}


.dropdown-content-3 {
  display: none;
  position: absolute;
  background-color: #FFF;
  min-width: 250px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
  z-index: 1;
  padding: 10px 20px;
  border-radius: 26px;
  border: 10px solid #EBF1FF;
}
.hover-3:hover{
  background-color: #EBF1FF;
  border-radius: 12px;
}
.dropdown-navigation:hover .dropdown-content-3 {
  display: block;
}
.dropdown-navigation-2:hover .dropdown-content-3 {
  display: block;
}

.dropdown-content-4 {
  display: none;
  position: absolute;
  background-color: #FFF;
  min-width: 250px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
  z-index: 1;
  padding: 10px 20px;
  border-radius: 26px;
  border: 10px solid #FDEBFF;
}
.hover-4:hover{
  background-color: #FDEBFF;
  border-radius: 12px;
}
.dropdown-navigation:hover .dropdown-content-4 {
  display: block;
}
.dropdown-navigation-2:hover .dropdown-content-4 {
  display: block;
}


.dropdown-content-5 {
  display: none;
  position: absolute;
  background-color: #F7F8F8;
  min-width: 250px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
  z-index: 1;
  padding: 10px 20px;
  border-radius: 26px;
  border: 10px solid #191C1F;
}
.hover-5:hover{
  background-color: #e5e7e7;
  border-radius: 12px;
}
.dropdown-navigation:hover .dropdown-content-5 {
  display: block;
}
.dropdown-navigation-2:hover .dropdown-content-5 {
  display: block;
}



 .dropdown-content-6 {
   display: none;
   position: absolute;
   background-color: #F7F8F8;
   min-width: 250px;
   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
   z-index: 1;
   padding: 10px 20px;
   border-radius: 26px;
   border: 10px solid #6E3FF3;
 }
.hover-6:hover{
  background-color: #6E3FF3;
  border-radius: 12px;
}
.hover-6:hover p{
  color: #FFFFFF;
}
.dropdown-navigation:hover .dropdown-content-6 {
  display: block;
}
.dropdown-navigation-2:hover .dropdown-content-6 {
  display: block;
}

.text-1{
  color:  #191C1F;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
  text-align: left;
  margin-bottom: 5px;
}

.text-2{
  color: #697582;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 138.462% */
  text-align: left;
}


.hover:hover{
  background-color: #FEF7EC;
  border-radius: 12px;
}

.dropdown-navigation:hover .dropdown-content {
  display: block;
}

.dropdown-navigation-2:hover .dropdown-content {
  display: block;
}


.accordion-wrapper {
  display: block;
  /*box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);*/
  /*max-width: 500px;*/
  margin: 0 auto;
  margin-top: 12px;
  margin-bottom: 12px;
}

.accordion + .title {
  user-select: none;
  cursor: pointer;
  display: flex;
  align-content: center;
  align-items: center;
  /*justify-content: space-between;*/
  padding: 10px 20px;
  /*background: #1565C0;*/
  /*border: 1px solid #EAECF0;*/
  /*padding-top: 10px;*/
  /*padding-left: 7.5px;*/
  /*padding-bottom: 9px;*/
  border-radius: 5px;
  /*background-color: #FFFFFF;*/
}

.accordion ~ .title strong {
  line-height: 24px;
}

.accordion ~ .title .side-icon {
  display: block;
  padding-top: 3px;
}

.accordion:checked ~ .title .side-icon {
  display: none;
}

.accordion ~ .title .down-icon {
  display: none;
  padding-top: 3px;
}

.accordion:checked ~ .title .down-icon {
  display: block;
}

.accordion ~ .content {
  display: none;
  padding: 2px;
  cursor: pointer;
  /*background-color: #FFFFFF;*/
  /*border: 1px solid #EAECF0;*/
  border-radius: 5px;
}

.accordion:checked ~ .content {
  display: block;
}

.content-inner{
  display: flex;
  align-items: center;
  align-content: center;
}

.content-inner p{
  padding-left: 2%;
  color: #191C1F;
}

.title-content{
  display: flex;
  align-content: center;
  align-items: center;
}

.bxs-dashboard{
  color: #01675b;
  font-size: 20px;
}

.title-content-para{
  padding-left: 5px;
  padding-right: 8px;
  font-size: 17px;
  color: #191C1F;
}


.content-2{
  padding-left: 10px;
}



@media (min-width: 1286px) {
  .hamburger {
    display: none;
  }
  /*.menu-4{*/
  /*  display: flex;*/
  /*}*/
}

@media (max-width: 990px) {
  .style-4 {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }
  .logo {
    width: 100%;
    margin-left: unset;
    padding-left: unset;
    margin-left: 5px;
  }
  .separate{
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }
}

@media (max-width: 861px) {
  .topmost-header {
    display: none;
  }
}

@media (max-width: 600px) {
  .bx-menu{
    font-size: 35px;
  }
  .logo {
    min-width: 28%;
    padding-left: unset;
  }


  .dropdown-nav{
    padding-right: unset;
    max-width: 220px;
    font-size: 12px;
  }

  .dropdown-nav li {
    margin-top: 8%;
  }

  hr {
    margin-top: 95%;
  }


  .topmost-header-text-2 {
    font-size: 12px;
    padding-left: 5px;
  }

  .topmost-header-text-3 {
    text-decoration: underline;
    padding-left: 4px;
  }

  .bx-bell{
    font-size: 25px;
  }
}

</style>