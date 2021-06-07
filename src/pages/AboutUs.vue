<template>
  <q-page class="column bg-blue-grey-1">

    <div>
      <q-parallax
        src="Images/VilaRosa/vr_panorama_6.jpg"
        :height="600"
        :speed="0.75"
        class=""
      >
        <q-img src="Logo/sigla_vr_img@2x.png" style="max-width: 300px; margin-bottom: 250px"></q-img>
      </q-parallax>
    </div>

    <!-- menu line -->
    <div class="menu-line q-mb-lg"></div>

    <div class="fit row wrap justify-center items-start content-start">
      <div>
        <div class="container column q-pb-xl">

          <!-- About Us area -->
          <p class="section-title">{{ $t('aboutUs.welcome') }}</p>
          <q-separator />
          <div class="row justify-center">
            <text-box :text-content="[ $t('aboutUs.open') ]" :icon-list='[ "las la-history" ]' text-color="text-red-9"></text-box>
            <text-box :text-content="[ $t('aboutUs.services') ]" :icon-list='[ "las la-hotel" ]' text-color="text-red-9"></text-box>
            <text-box :text-content="[ $t('aboutUs.location') ]" :icon-list='[ "las la-map-marked" ]' text-color="text-red-9"></text-box>
            <text-box :text-content="[ $t('aboutUs.noise') ]" :icon-list='[ "las la-volume-up" ]' text-color="text-red-9"></text-box>
            <text-box :text-content="[ $t('aboutUs.clients') ]" :icon-list='[ "las la-users" ]' text-color="text-red-9"></text-box>
            <text-box :text-content="[ $t('aboutUs.quality') ]" :icon-list='[ "las la-calendar-plus" ]' text-color="text-red-9"></text-box>
          </div>

          <!-- Company area -->
<!--          <div class="row justify-between">-->
<!--            <p class="section-title">{{ $t('company.name') }}</p>-->
<!--            <q-btn-->
<!--              color="primary"-->
<!--              icon="las la-camera"-->
<!--              :label="$t('company.certification.MDRT')"-->
<!--              no-caps-->
<!--              @click="openGallery(0)"-->
<!--              class="section-btn"-->
<!--            />-->
<!--          </div>-->
          <p class="section-title">{{ $t('company.name') }}</p>
          <q-separator />
          <company-box :company="$t('company')"></company-box>

          <!-- Authorities area -->
          <p class="section-title">{{ $t('authorities.title') }}</p>
          <q-separator />
          <div class="row justify-center no-wrap">
            <auth-box id-index="1" :auth="$t('authorities.anpc')"></auth-box>
            <auth-box id-index="2" :auth="$t('authorities.ansvsa')"></auth-box>
            <auth-box id-index="3" :auth="$t('authorities.natcad')"></auth-box>
          </div>
        </div>

      </div>
    </div>

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
}
</script>

<style lang="sass" scoped>
.menu-line
  background-color: darkred
  //height: 5px

.container
  display: flex
  margin: auto
  max-width: 920px

.header-title
  font-size: 1.5rem
  //padding: 2rem 2rem 0rem 2rem
  margin: 0
  color: white

.section-title
  font-size: 1.5rem
  padding: 2rem 2rem 0rem 2rem
  margin: 0
  color: #525252

.section-btn
  font-size: 0.9rem
  margin: 2rem 2rem 0rem 2rem
  padding: 0

.footer
  background-color: $blue-grey-2
  font-size: 0.9rem
  color: grey
  text-align: center
  padding: 5px
</style>

