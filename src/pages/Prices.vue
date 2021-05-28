<template>
  <div class="fit q-pa-md">
    <!--  language toggle button  -->
    <q-btn @click="toggleLanguage" round class="absolute-top q-ma-lg z-top">
      <q-img v-if="language === 'ro-ro'" src="~assets/FlagIcons/RO-flag-icon.png"></q-img>
      <q-img v-if="language === 'en-us'" src="~assets/FlagIcons/USA-flag-icon.png"></q-img>
    </q-btn>
<!--    <div class="row justify-between">-->

<!--      <q-img-->
<!--        src="~assets/VilaRosa/vr_panorama_6.jpg"-->
<!--        srcset="~assets/VilaRosa/vr_panorama_6@2x.jpg 2x"-->
<!--      >-->
<!--        <h1 class="text-white">Basic</h1>-->
<!--      </q-img>-->

<!--    </div>-->
    <div>
<!--      <q-img src="~assets/Logo/vr_sigla_header.png" class="absolute-center q-mt-xl z-top" style="width: 200px"></q-img>-->
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" img-src="~assets/VilaRosa/vr_panorama_6.jpg" />
        <q-carousel-slide :name="2" img-src="~assets/Hotel/hotel_panorama_2.jpg" />
        <q-carousel-slide :name="3" img-src="~assets/Restaurant/restaurant_panorama.jpg" />
        <!--      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />-->
      </q-carousel>
    </div>

    <h5>{{ $t('welcome') }}</h5>

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
