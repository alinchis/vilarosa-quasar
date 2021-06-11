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
        <q-btn size="md" color="red-10" :label="$t('navMenu.aboutUs')" to="/aboutUs"/>
        <q-btn color="red-10" :label="$t('navMenu.ourServices')" to="/ourServices"/>
        <q-btn color="red-10" :label="$t('navMenu.prices')" to="/rooms"/>
        <q-btn color="red-10" :label="$t('navMenu.map')" to="/map"/>
      </q-btn-group>
    </div>

    <!-- page container -->
    <q-page-container class="fit q-pa-none">
      <!-- page -->
      <router-view/>

      <!-- fab buttons -->
      <q-page-sticky v-if="showFabs" style="margin-right: 20px; margin-bottom: 100px;">
        <div class="column">
          <q-btn
            fab
            icon="las la-camera"
            color="accent"
            :hide-label="hideLabels"
            @click="openGallery('certification-gallery', 0)"
            class="q-mt-md"
          ></q-btn>

          <q-fab
            v-if="this.language === 'ro-ro'"
            icon="las la-user-check"
            direction="left"
            color="accent"
            :hide-label="hideLabels"
            class="q-mt-md"
          >
            <q-fab-action @click="$router.push({ name: 'GDPRgroup' })" color="primary" icon="las la-user-friends" />
            <q-fab-action @click="$router.push({ name: 'GDPRclient' })" color="primary" icon="las la-user" />
          </q-fab>

          <q-btn
            v-if="this.language !== 'ro-ro'"
            fab
            icon="las la-user-check"
            color="accent"
            :hide-label="hideLabels"
            @click="$router.push({ name: 'GDPRclient' })"
            class="q-mt-md"
          ></q-btn>

          <q-btn
            fab
            icon="las la-certificate"
            color="accent"
            :hide-label="hideLabels"
            @click="$router.push({ name: 'Certification' })"
            class="q-mt-md"
          ></q-btn>
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
      // showHeader: true,
      hideLabels: false,
    }
  },

  computed: {
    showFabs() {
      // console.log(this.$route.name);
      // if current page is one of the following return true, else false
      return this.$route.name === 'AboutUs' || this.$route.name === 'OurServices' || this.$route.name === 'Rooms';

    },

    showHeader() {
      // if current page is one of the following return true, else false
      return this.$route.name === 'AboutUs' || this.$route.name === 'OurServices' || this.$route.name === 'Rooms' || this.$route.name === 'Map';
    },

    // gdprFlag: {
    //   get() {
    //     return this.$q.sessionStorage.getItem('gdprFlag');
    //   },
    //   set(value) {
    //     this.$q.sessionStorage.set('gdprFlag', value);
    //   }
    // }
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
    this.$q.sessionStorage.set('language', this.language);
    this.$q.sessionStorage.set('gdprFlag', true);
  },


}
</script>

<style lang="sass" scoped>
.navBtnGroup
  margin-top: 0px

</style>

