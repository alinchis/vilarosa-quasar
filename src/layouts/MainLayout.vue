<template>
  <q-layout view="lHh lpr lFf" class="">
    <!-- header -->
    <div v-if="showHeader" class="fixed-top bg-transparent z-top">
      <!-- language toggle button -->
      <q-btn @click="toggleLanguage" round class=" q-ma-md z-top">
        <q-img v-if="language === 'ro-ro'" src="~assets/FlagIcons/RO-flag-icon.png"></q-img>
        <q-img v-if="language === 'en-us'" src="~assets/FlagIcons/USA-flag-icon.png"></q-img>
      </q-btn>

      <!-- navigation buttons -->
      <q-btn-group outline class="absolute-center navBtnGroup">
        <q-btn no-caps size="md" color="red-10" :label="$t('navMenu.aboutUs')" to="/aboutUs"/>
        <q-btn no-caps color="red-10" :label="$t('navMenu.ourServices')" to="/ourServices"/>
        <q-btn no-caps color="red-10" :label="$t('navMenu.prices')" to="/rooms"/>
        <q-btn no-caps color="red-10" :label="$t('navMenu.map')" to="/map"/>
      </q-btn-group>
    </div>

    <!-- page container -->
    <q-page-container class="fit q-pa-none">
      <!-- page -->
      <router-view/>

<!--      <q-page-sticky position="right" :offset="[18, 18]">-->
<!--        <q-btn round color="accent" icon="arrow_back" class="rotate-45" />-->
<!--      </q-page-sticky>-->

      <!-- fab buttons -->
      <q-page-sticky :position="fabPosition" v-if="showFabs" class="nav-fabs-sticky" :offset="[10, 60]">
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

<!--          <div>-->
<!--            <q-fab-->
<!--              v-if="this.language === 'ro-ro'"-->
<!--              icon="las la-user-check"-->
<!--              direction="left"-->
<!--              color="blue-8"-->
<!--              :hide-label="hideLabels"-->
<!--              class="q-mt-md"-->
<!--            >-->
<!--              <q-fab-action @click="$router.push({ name: 'GDPRgroup' })" color="blue-8" icon="las la-user-plus" label="GDPR Grup"/>-->
<!--              <q-fab-action @click="$router.push({ name: 'GDPRclient' })" color="blue-8" icon="las la-user" label="GDPR Individual"/>-->
<!--            </q-fab>-->
<!--            <q-tooltip anchor="top left" :offset="[42, 36]">{{ $t('gdpr.title') }}</q-tooltip>-->
<!--          </div>-->


          <q-btn
            fab
            icon="las la-user-check"
            color="blue-8"
            :hide-label="hideLabels"
            @click="$router.push({ name: 'GDPRclient' })"
            class="q-mt-md"
          >
            <q-tooltip anchor="top left" :offset="[42, 36]">{{ $t('gdpr.title') }}</q-tooltip>
          </q-btn>

          <q-btn
            fab
            icon="las la-certificate"
            color="blue-8"
            :hide-label="hideLabels"
            @click="$router.push({ name: 'Certification' })"
            class="q-mt-md"
          >
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

    fabPosition() {
      // console.log(this.$q.screen.lt.sm);
      return this.$q.screen.lt.sm ? 'bottom-right' : 'right';
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
.navBtnGroup
  margin-top: 0px

.nav-fabs-sticky
  //padding-top: 100px

@media (hover)
  .nav-fabs-sticky
    position: fixed
    margin-right: 20px
    top: 0px

@media (not hover)
  .nav-fabs-sticky
    margin-right: 10px
    margin-bottom: 20px

</style>

