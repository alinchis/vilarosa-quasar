<template>
  <div class="column">
    <!--  language toggle button  -->

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

    <div class="container column q-pb-xl">
      <p class="section-title">{{ $t('aboutUs.welcome') }}</p>
      <div class="row justify-center no-wrap">
        <text-box :text-content="$t('aboutUs.open')"></text-box>
        <text-box :text-content="$t('aboutUs.location')"></text-box>
        <text-box :text-content="$t('aboutUs.clients')"></text-box>
<!--        <text-box :text-content="$t('aboutUs.quality')"></text-box>-->
      </div>

      <p class="section-title">{{ $t('company.name') }}</p>
      <company-box :company="$t('company')"></company-box>


      <p class="section-title">{{ $t('authorities.title') }}</p>
      <div class="row justify-center no-wrap">
        <auth-box :auth="$t('authorities.anpc')"></auth-box>
        <auth-box :auth="$t('authorities.ansvsa')"></auth-box>
        <auth-box :auth="$t('authorities.natcad')"></auth-box>
      </div>
    </div>

  </div>
</template>

<script>
import { i18n } from "boot/i18n";
import textBox from '../components/AboutUsTextBox.vue';
import companyBox from '../components/AboutUsCompany.vue';
import authBox from '../components/AboutUsAuthoritiesBox';

export default {
  name: 'PageIndex',
  components: { textBox, companyBox, authBox },
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

<style lang="sass" scoped>
.container
  display: flex
  margin: auto
  max-width: 920px

.section-title
  font-size: 1.5rem
  padding: 2rem 2rem 0.5rem 2rem
  margin: 0
  color: #525252

.my-card
  width: 100%
  max-width: 350px
</style>

