<template>
  <q-layout view="lHh lpr lFf" class="">
        <!-- language toggle button ---------------------------------------------------------------------------------- -->
<!--    <q-btn v-if="showHeader" @click="toggleLanguage" round class="lang-btn fixed-top-left z-max">-->
<!--      <q-img v-if="language === 'ro-ro'" src="~assets/FlagIcons/RO-flag-icon.png"></q-img>-->
<!--      <q-img v-if="language === 'en-us'" src="~assets/FlagIcons/USA-flag-icon.png"></q-img>-->
<!--    </q-btn>-->
    <!-- header ---------------------------------------------------------------------------------------------------- -->
<!--    <div v-if="showHeader" class="fixed-top bg-transparent z-top row items-center justify-center">-->
<!--            &lt;!&ndash; navigation buttons &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; &ndash;&gt;-->
<!--      <nav-bar></nav-bar>-->
<!--    </div>-->

    <!-- page container -------------------------------------------------------------------------------------------- -->
    <q-page-container class="fit q-pa-none">
      <!-- page ---------------------------------------------------------------------------------------------------- -->
      <router-view/>

<!--      <q-page-sticky position="right" :offset="[18, 18]">-->
<!--        <q-btn round color="accent" icon="arrow_back" class="rotate-45" />-->
<!--      </q-page-sticky>-->

      <!-- fab buttons - top-right 33------------------------------------------------------------------------------- -->
<!--      <q-page-sticky-->
<!--        v-if="showFabs && $q.screen.height >= 460"-->
<!--        position="top-right" class="nav-fabs-sticky" :offset="[10, 60]"-->
<!--      >-->
<!--        <div class="nav-fabs-box column">-->
<!--          <q-btn-->
<!--            fab-->
<!--            no-caps-->
<!--            icon="las la-camera"-->
<!--            color="blue-8"-->
<!--            :hide-label="hideLabels"-->
<!--            @click="openGallery('certification-gallery', 0)"-->
<!--            class="q-mt-md"-->
<!--          >-->
<!--            <q-tooltip anchor="top left" :offset="[42, 36]">{{ $t('photoGallery.title') }}</q-tooltip>-->
<!--          </q-btn>-->
<!--        </div>-->
<!--      </q-page-sticky>-->


      <!-- fab buttons - right ------------------------------------------------------------------------------------- -->
      <q-page-sticky
        v-if="showFabs && $q.screen.height < 460"
        :position="fabPositionPhotos" class="nav-fabs-sticky" :offset="[10, 60]"
      >
        <div class="nav-fabs-box column">
          <q-btn
            fab
            no-caps
            icon="las la-camera"
            color="blue-8"
            :hide-label="hideLabels"
            @click="openGallery('certification-gallery', 0)"
            class="q-mt-md"
          >
            <q-tooltip anchor="top left" :offset="[42, 36]">{{ $t('photoGallery.title') }}</q-tooltip>
          </q-btn>

          <q-btn
            fab
            icon="las la-user-check"
            color="grey-8"
            :hide-label="hideLabels"
            @click="$router.push({ name: 'GDPRclient' })"
            class="q-mt-md"
          >
            <q-tooltip anchor="top left" :offset="[42, 36]">{{ $t('gdpr.title') }}</q-tooltip>
          </q-btn>

          <q-btn
            fab
            icon="las la-certificate"
            color="grey-8"
            :hide-label="hideLabels"
            @click="$router.push({ name: 'Certification' })"
            class="q-mt-md"
          >
            <q-tooltip anchor="top left" :offset="[42, 36]">{{ $t('certification.title') }}</q-tooltip>
          </q-btn>
        </div>
      </q-page-sticky>

      <!-- fab buttons - bottom-right ------------------------------------------------------------------------------ -->
      <q-page-sticky
        v-if="showFabs && $q.screen.height >= 460"
        position="bottom-right" class="" :offset="[10, 60]"
      >
        <div class="nav-fabs-box column">

          <q-btn
            fab
            no-caps
            icon="las la-camera"
            color="blue-8"
            :hide-label="hideLabels"
            @click="openGallery('certification-gallery', 0)"
            class="q-mt-md row"
          >
            <p v-if="$q.screen.gt.sm" class="q-pl-sm q-ma-none">Album</p>
            <q-tooltip anchor="top left" :offset="[42, 36]">{{ $t('photoGallery.title') }}</q-tooltip>
          </q-btn>

          <q-btn
            fab
            icon="las la-user-check"
            color="grey-8"
            :hide-label="hideLabels"
            @click="$router.push({ name: 'GDPRclient' })"
            class="q-mt-md"
          >
            <p v-if="$q.screen.gt.sm" class="q-pl-sm q-ma-none">GDPR</p>
            <q-tooltip anchor="top left" :offset="[42, 36]">{{ $t('gdpr.title') }}</q-tooltip>
          </q-btn>

          <q-btn
            fab
            icon="las la-certificate"
            color="grey-8"
            :hide-label="hideLabels"
            @click="$router.push({ name: 'Certification' })"
            class="q-mt-md"
          >
            <p v-if="$q.screen.gt.sm" class="q-pl-sm q-ma-none">MDRT</p>
            <q-tooltip anchor="top left" :offset="[42, 36]">{{ $t('certification.title') }}</q-tooltip>
          </q-btn>
        </div>
      </q-page-sticky>

    </q-page-container>

    <gdpr-message></gdpr-message>

  </q-layout>
</template>

<script>
import GdprMessage from "components/GdprMessage";
import NavBar from "components/NavBar";

export default {
  name: 'MainLayout',
  components: { GdprMessage },

  data () {
    return {
      language: this.$root.$i18n.locale,
      hideLabels: false,
    }
  },

  computed: {
    showFabs() {
      // console.log(this.$route.name);
      // if current page is one of the following return true, else false
      return this.$route.name === 'AboutUs' || this.$route.name === 'OurServices' || this.$route.name === 'Rooms';
    },

    gdprFlag() {
      return this.$q.sessionStorage.getItem('gdprFlag');
    },

    showHeader() {
      // if current page is one of the following return true, else false
      return this.$route.name === 'AboutUs' || this.$route.name === 'OurServices' || this.$route.name === 'Rooms' || this.$route.name === 'Map';
    },

    fabPositionPhotos() {
      // console.log(this.$q.screen.lt.sm);
      return this.$q.screen.height < 460 ? 'bottom-right' : 'right';
    },

  },

  methods: {
    // toggle site language
    toggleLanguage() {
      // console.log(this.language);
      this.$root.$i18n.locale = this.language === 'ro-ro' ? 'en-us' : 'ro-ro';
      this.language = this.$root.$i18n.locale;
      this.$q.sessionStorage.set('language', this.language);
    },



    // open photo gallery
    openGallery() {
      this.$router.push({ name: 'Albums' });
    },
  },

  created() {
    // save language to sessionStorage
    this.$q.sessionStorage.set('language', this.language);
    // set GDPR Message flag to true /show message
    this.$q.sessionStorage.set('gdprFlag', true);
  },


}
</script>

<style lang="sass" scoped>
.lang-btn
  margin: 1.1rem 1rem 1rem 1rem

.navBtnGroup
  margin-top: 0px

.nav-fabs-sticky
  //padding-top: 100px

#overlay
  position: fixed /* Sit on top of the page content */
  display: none /* Hidden by default */
  width: 100% /* Full width (cover the whole page) */
  height: 100% /* Full height (cover the whole page) */
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: rgba(0,0,0,0.5) /* Black background with opacity */
  z-index: 2 /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer /* Add a pointer on hover */


@media (hover)
  .nav-fabs-sticky
    position: fixed
    margin-right: 20px
    top: 0px

@media (not hover)
  .nav-fabs-sticky
    margin-right: 10px
    margin-bottom: 20px

@media (width <= 768px) and (width > 420px)


@media (width <= 420px)
  .lang-btn
    margin: -1rem 0 0 0.5rem

</style>

