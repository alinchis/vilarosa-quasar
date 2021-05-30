<template>
  <q-page class="column bg-blue-grey-1">

    <div>
      <q-parallax
        src="~assets/VilaRosa/vr_panorama_6.jpg"
        :height="600"
        class=""
      >
        <q-img src="~assets/Logo/sigla_vr_img@2x.png" style="max-width: 300px;"></q-img>
      </q-parallax>
    </div>

    <div class="menu-line">

    </div>

    <div class="container column q-pb-xl">
      <!-- About Us area -->
      <p class="section-title">{{ $t('aboutUs.welcome') }}</p>
      <q-separator />
      <div class="row justify-center">
        <text-box :text-content="$t('aboutUs.open')" icon-name="las la-history"></text-box>
        <text-box :text-content="$t('aboutUs.services')" icon-name="las la-hotel"></text-box>
        <text-box :text-content="$t('aboutUs.location')" icon-name="las la-map-marked"></text-box>
        <text-box :text-content="$t('aboutUs.noise')" icon-name="las la-volume-up"></text-box>
        <text-box :text-content="$t('aboutUs.clients')" icon-name="las la-users"></text-box>
        <text-box :text-content="$t('aboutUs.quality')" icon-name="las la-calendar-plus"></text-box>
      </div>

<!--      <q-separator />-->

      <!-- Company area -->
      <p class="section-title">{{ $t('company.name') }}</p>
      <q-separator />
      <company-box :company="$t('company')"></company-box>

<!--      <q-separator />-->

      <!-- Authorities area -->
      <p class="section-title">{{ $t('authorities.title') }}</p>
      <q-separator />
      <div class="row justify-center no-wrap">
        <auth-box id-index="1" :auth="$t('authorities.anpc')"></auth-box>
        <auth-box id-index="2" :auth="$t('authorities.ansvsa')"></auth-box>
        <auth-box id-index="3" :auth="$t('authorities.natcad')"></auth-box>
      </div>
    </div>

    <!-- footer -->
    <div class="footer">
      S.C. 4 Anotimpuri Turism S.R.L. - ®Vila Rosa - 2021
    </div>

  </q-page>
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
      slide: 1,
      autoplay: true,
    }
  },

}
</script>

<style lang="sass" scoped>
.menu-line
  background-color: darkred
  height: 5px

.container
  display: flex
  margin: auto
  max-width: 920px

.section-title
  font-size: 1.5rem
  padding: 2rem 2rem 0rem 2rem
  margin: 0
  color: #525252

.footer
  background-color: $blue-grey-2
  font-size: 0.9rem
  color: grey
  text-align: center
  padding: 5px
</style>

