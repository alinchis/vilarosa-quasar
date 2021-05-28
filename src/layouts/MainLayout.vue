<template>
  <q-layout view="lHh lpr lFf">
<!--    <q-header class="desktop-only bg-transparent text-black">-->
<!--      <q-tabs v-model="tab" align="center">-->
<!--        <q-route-tab to="/aboutUs" name="aboutUs" :label="$t('navMenu.aboutUs')" icon="mail"/>-->
<!--        <q-route-tab to="/ourServices" name="ourServices" :label="$t('navMenu.ourServices')" icon="hotel_class"/>-->
<!--        <q-route-tab to="/prices" name="prices" :label="$t('navMenu.prices')" icon="euro"/>-->
<!--        <q-route-tab to="/map" name="map" :label="$t('navMenu.map')" icon="explore"/>-->
<!--      </q-tabs>-->
<!--    </q-header>-->

    <q-btn @click="toggleLanguage" round class="fixed-top q-ma-lg z-top">
      <q-img v-if="language === 'ro-ro'" src="~assets/FlagIcons/RO-flag-icon.png"></q-img>
      <q-img v-if="language === 'en-us'" src="~assets/FlagIcons/USA-flag-icon.png"></q-img>
    </q-btn>

    <q-btn-group rounded class="fixed-top z-top">
      <q-btn color="brown" label="About Us" to="/aboutUs" />
      <q-btn color="brown" label="Second" icon-right="las la-at" />
      <q-btn color="brown" label="Map" to="/map"/>
    </q-btn-group>

<!--    <q-tab-panels v-model="tab" animated class="q-mt-xl">-->
<!--      <q-tab-panel name="aboutUs">-->
<!--        <div class="text-h6">Mails</div>-->
<!--        About Us-->
<!--      </q-tab-panel>-->

<!--      <q-tab-panel name="ourServices">-->
<!--        <div class="text-h6">Alarms</div>-->
<!--        Our Services-->
<!--      </q-tab-panel>-->

<!--      <q-tab-panel name="prices">-->
<!--        <div class="text-h6">Movies</div>-->
<!--        Prices-->
<!--      </q-tab-panel>-->

<!--      <q-tab-panel name="map">-->
<!--        <div class="text-h6">Movies</div>-->
<!--        MAP-->
<!--      </q-tab-panel>-->
<!--    </q-tab-panels>-->

        <q-page-container class="q-pa-none">
          <router-view />
        </q-page-container>
  </q-layout>
</template>

<script>

import {i18n} from "boot/i18n";

export default {
  name: 'MainLayout',
  // components: { EssentialLink },
  data () {
    return {
      language: 'ro-ro',
      tab: 'ourServices',
    }
  },

  methods: {
    toggleLanguage() {
      // console.log(this.language);
      this.language = this.language === 'ro-ro' ? 'en-us' : 'ro-ro';
      i18n.locale = this.language;
      localStorage.setItem('language', this.language);
    },
  },
}
</script>

