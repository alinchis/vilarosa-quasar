<template>
  <div class="fit q-pa-md">
    <!--  language toggle button  -->
    <q-btn @click="toggleLanguage" round class="absolute-top q-ma-lg z-top">
      <q-img v-if="language === 'ro-ro'" src="~assets/FlagIcons/RO-flag-icon.png"></q-img>
      <q-img v-if="language === 'en-us'" src="~assets/FlagIcons/USA-flag-icon.png"></q-img>
    </q-btn>

    MAP

  </div>
</template>

<script>
import {i18n} from "boot/i18n";

export default {
  name: 'PageIndex',
  data () {
    return {
      language: 'ro-ro',
      slide: 1,
      autoplay: true,
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

  created() {
    // save language choice to localStorage
    i18n.locale = this.language;
    localStorage.setItem('language', this.language);
  }
}
</script>
