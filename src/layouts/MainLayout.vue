<template>
  <q-layout view="lHh lpr lFf">
    <!-- header -->
    <div class="fixed-top bg-transparent z-top">
      <!-- language toggle button -->
      <q-btn @click="toggleLanguage" round class=" q-ma-md z-top">
        <q-img v-if="language === 'ro-ro'" src="~assets/FlagIcons/RO-flag-icon.png"></q-img>
        <q-img v-if="language === 'en-us'" src="~assets/FlagIcons/USA-flag-icon.png"></q-img>
      </q-btn>

      <!-- navigation buttons -->
      <q-btn-group outline class="absolute-center navBtnGroup">
        <q-btn size="md" color="red-10" :label="$t('navMenu.aboutUs')" to="/aboutUs"/>
        <q-btn color="red-10" :label="$t('navMenu.ourServices')" to="/ourServices"/>
        <q-btn color="red-10" :label="$t('navMenu.prices')" to="/prices"/>
        <q-btn color="red-10" :label="$t('navMenu.map')" to="/map"/>
      </q-btn-group>
    </div>

    <!-- page container -->
    <q-page-container class="fit q-pa-none">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  data () {
    return {
      language: this.$root.$i18n.locale,
      tab: 'ourServices',
    }
  },

  methods: {
    toggleLanguage() {
      // console.log(this.language);
      this.$root.$i18n.locale = this.language === 'ro-ro' ? 'en-us' : 'ro-ro';
      this.language = this.$root.$i18n.locale;
      // localStorage.setItem('language', this.language);
    },
  },

}
</script>

<style lang="sass" scoped>
.navBtnGroup
  margin-top: 0px

</style>

