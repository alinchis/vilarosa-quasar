<template>
  <q-page class="column bg-blue-grey-1">

    <div>
      <q-parallax
        src="Images/VilaRosa/vr_panorama_6.jpg"
        :height="600"
        :speed="0.75"
        class=""
      >
        <q-img src="Logo/sigla_vr_bnb.png" class="parallax-logo"></q-img>
      </q-parallax>
    </div>

    <!-- menu line -->
    <div class="menu-line q-mb-lg"></div>

    <div class="fit row wrap justify-center items-start content-start">
      <div class="fit">
        <div class="about-us-container column">

          <!-- About Us area -->
          <p class="section-title-first">{{ $t('aboutUs.welcome') }}</p>
          <q-separator />
          <div class="row justify-center">
            <text-box :text-content="[ $t('aboutUs.open') ]" :icon-list='[ "las la-history" ]' text-color="text-red-9"></text-box>
            <text-box :text-content="[ $t('aboutUs.services') ]" :icon-list='[ "las la-hotel" ]' text-color="text-red-9"></text-box>
            <text-box :text-content="[ $t('aboutUs.location') ]" :icon-list='[ "las la-map-marked" ]' text-color="text-red-9"></text-box>
            <text-box :text-content="[ $t('aboutUs.noise') ]" :icon-list='[ "las la-volume-up" ]' text-color="text-red-9"></text-box>
            <text-box :text-content="[ $t('aboutUs.clients') ]" :icon-list='[ "las la-users" ]' text-color="text-red-9"></text-box>
            <text-box :text-content="[ $t('aboutUs.quality') ]" :icon-list='[ "las la-calendar-plus" ]' text-color="text-red-9"></text-box>
          </div>

          <p class="section-title">{{ $t('company.name') }}</p>
          <q-separator />
          <company-box v-on:click-copy="showCopyBanner"></company-box>

          <!-- Authorities area -->
          <p class="section-title">{{ $t('authorities.title') }}</p>
          <q-separator />
          <div class="row">
            <auth-box id-index="1" :auth="$t('authorities.anpc')"></auth-box>
            <auth-box id-index="2" :auth="$t('authorities.ansvsa')"></auth-box>
            <auth-box id-index="3" :auth="$t('authorities.natcad')"></auth-box>
          </div>
        </div>

      </div>
    </div>

    <q-banner
      v-if="copyBannerFlag"
      class="clipboard-banner bg-green fixed-bottom text-white text-center"
    >
      <b>' {{ copyBannerText }} '</b> {{ $t('company.copyToClipboardMsg') }}.
    </q-banner>

    <!-- footer -->
    <div class="footer">
      S.C. 4 Anotimpuri Turism S.R.L. - ®Vila Rosa - 2021
    </div>

  </q-page>
</template>

<script>
import textBox from 'components/TextBox.vue';
import companyBox from '../components/AboutUsCompany.vue';
import authBox from '../components/AboutUsAuthoritiesBox';

export default {
  name: 'AboutUs',
  components: { textBox, companyBox, authBox },

  data() {
    return {
      copyBannerFlag: false,
      copyBannerText: '',
    }
  },

  methods: {
    showCopyBanner(value) {
      // set banner text
      this.copyBannerText = value;
      // show copy to clipboard message banner
      this.copyBannerFlag = true;
      // hide message banner after 1s
      setTimeout(() => {
        this.copyBannerFlag = false;
      },1500)

    }
  }
}
</script>

<style lang="sass" scoped>
.parallax-logo
  max-width: 250px
  margin-bottom: 250px

.menu-line
  background-color: darkred
  height: 5px

.about-us-container
  display: flex
  margin: auto
  max-width: 1020px
  padding: 3rem 1rem 2rem 1rem

.header-title
  font-size: 1.5rem
  //padding: 2rem 2rem 0rem 2rem
  margin: 0
  color: white

.section-title-first
  font-size: 1.5rem
  padding: 0rem 2rem 0rem 2rem
  margin: 0
  color: #525252

.section-title
  font-size: 1.5rem
  padding: 3rem 2rem 0rem 2rem
  margin: 0
  color: #525252

.section-btn
  font-size: 0.9rem
  margin: 2rem 2rem 0rem 2rem
  padding: 0

.clipboard-banner
  font-size: 2rem

.footer
  background-color: $blue-grey-2
  font-size: 0.75rem
  color: grey
  text-align: center
  padding: 5px

@media (width <= 1024px)
  .about-us-container
    padding: 2rem 2rem 2rem 2rem

@media (width <= 768px)


@media (width <= 420px)
  .parallax-logo
    max-width: 200px
    margin-bottom: 250px

  .about-us-container
    padding: 0.5rem 0.5rem 0.5rem 0.5rem

  .section-title-first
    font-size: 1.3rem
    padding: 0rem 2rem 0rem 2rem
    margin: 0

  .section-title
    font-size: 1.3rem
    padding: 2rem 2rem 0rem 2rem
    margin: 0

</style>

