<template>
  <q-page class="column bg-blue-grey-1">

    <div>
      <q-parallax
        src="Images/Restaurant/restaurant_panorama.jpg"
        :height="$q.screen.width > 1024 ? 600 : 450"
        :speed="0.75"
        class=""
      >
        <q-img src="Logo/sigla_vr_bnb.png" class="parallax-logo"></q-img>
      </q-parallax>
    </div>

    <div class="menu-line q-mb-lg"></div>

    <div class="fit row wrap justify-center items-start content-start">
      <div class="fit">
        <div class="our-services-container column q-pb-xl">

          <!-- Our Services area -->
          <p class="section-title-first">{{ $t('services.welcome') }}</p>
          <q-separator />
          <div class="row justify-center">
            <text-box :text-content="[ $t('services.info') ]" :icon-list='[ "las la-hotel" ]' text-color="text-red-9"></text-box>
            <text-box :text-content="[ $t('services.buildings') ]" :icon-list='[ "las la-building" ]' text-color="text-red-9"></text-box>
            <text-box :text-content="[ $t('services.parking') ]" :icon-list='[ "las la-parking" ]' text-color="text-red-9"></text-box>
            <text-box :text-content="[ $t('services.reception') ]" :icon-list='[ "las la-concierge-bell" ]' text-color="text-red-9"></text-box>
            <text-box :text-content="[ $t('services.reservation') ]" :icon-list='[ "las la-check-double" ]' text-color="text-red-9"></text-box>
            <text-box :text-content="[ $t('services.checkInOut') ]" :icon-list='[ "las la-clock" ]' text-color="text-red-9"></text-box>
            <text-box :text-content="[ $t('services.gdpr') ]" :icon-list='[ "las la-user-check" ]' text-color="text-red-9"></text-box>
            <text-box :text-content="[ $t('services.roomClean') ]" :icon-list='[ "las la-broom" ]' text-color="text-red-9"></text-box>
            <text-box :text-content="[ $t('services.lostObj') ]" :icon-list='[ "las la-exclamation-triangle" ]' text-color="text-red-9"></text-box>
<!--            <text-box :text-content="[ $t('services.breakfast') ]" :icon-list='[ "las la-utensils" ]' text-color="text-red-9"></text-box>-->
            <text-box :text-content="[ $t('services.discounts') ]" :icon-list='[ "las la-percent" ]' text-color="text-red-9"></text-box>
            <text-box :text-content="[ $t('services.payment') ]" :icon-list='[ "las la-hand-holding-usd" ]' text-color="text-red-9"></text-box>
            <text-box :text-content="[ $t('services.pets') ]" :icon-list='[ "las la-paw" ]' text-color="text-red-9"></text-box>
            <text-box :text-content="[ $t('services.smoking') ]" :icon-list='[ "las la-smoking-ban" ]' text-color="text-red-9"></text-box>
          </div>

    <!--    <div class="container column q-pb-xl">-->
    <!--      &lt;!&ndash; GDPR area &ndash;&gt;-->
    <!--      <p class="section-title">{{ $t('gdpr.title') }}</p>-->
    <!--      <q-separator />-->
    <!--      <div class="row justify-center">-->

    <!--      </div>-->
    <!--    </div>-->

          <!-- Management Message area -->
          <p class="section-title">{{ $t('managementMsg.title') }}</p>
          <q-separator />
          <div class="row justify-center">
            <text-box :text-content="[ $t('managementMsg.covid19') ]" :icon-list='[ "las la-biohazard" ]' text-color="text-blue"></text-box>
            <text-box :text-content="[ $t('managementMsg.addInfo') ]" :icon-list='[ "las la-info" ]' text-color="text-blue"></text-box>
            <text-box :text-content="[ $t('managementMsg.complaints') ]" :icon-list='[ "las la-exclamation" ]' text-color="text-blue"></text-box>
            <text-box :text-content="[ $t('managementMsg.feedback') ]" :icon-list='[ "las la-comments" ]' text-color="text-blue"></text-box>
          </div>

          <!-- PRO-Nature Message area -->
          <p class="section-title">{{ $t('proNatureMsg.title') }}</p>
          <q-separator />
          <p class="section-subtitle">{{ $t('proNatureMsg.slogan') }}</p>
          <div class="row justify-center">
            <text-box :text-content="[ $t('proNatureMsg.towels') ]" :icon-list='[ "las la-leaf" ]' text-color="text-green"></text-box>
            <text-box :text-content="[ $t('proNatureMsg.decide'), $t('proNatureMsg.towelsFloor'), $t('proNatureMsg.towelsRail') ]" :icon-list='[ "las la-language" ]' text-color="text-green"></text-box>
          </div>
          <p class="section-subtitle">{{ $t('proNatureMsg.environment') }}</p>
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
import textBox from 'components/TextBox2.vue';

export default {
  name: 'OurServices',
  components: { textBox },
  data () {
    return {
      slide: 1,
      autoplay: true,
    }
  },

}
</script>

<style lang="sass" scoped>
.parallax-logo
  max-width: 350px
  margin-bottom: 0px

.menu-line
  background-color: darkred
  height: 5px

.our-services-container
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
  padding: 2rem 2rem 0rem 2rem
  margin: 0
  color: #525252

.section-subtitle
  font-size: 1rem
  padding: 0.5rem 2rem 0rem 2rem
  margin: 0
  color: #525252

.footer
  background-color: $blue-grey-2
  font-size: 0.75rem
  color: grey
  text-align: center
  padding: 5px

@media (width <= 1024px) and (width > 768px)
  .our-services-container
    padding: 2rem 2rem 2rem 2rem

  .parallax-logo
    max-width: 300px
    margin-bottom: 0px

@media (width <= 768px) and (width > 420px)
  .our-services-container
    padding: 2rem 2rem 2rem 2rem

  .parallax-logo
    max-width: 250px
    margin-bottom: 0px


@media (width <= 420px)
  .parallax-logo
    max-width: 200px
    margin-bottom: 0

  .our-services-container
    padding: 0.5rem 0.5rem 1.5rem 0.5rem

  .section-title-first
    font-size: 1.3rem
    padding: 0rem 2rem 0rem 2rem
    margin: 0

  .section-title
    font-size: 1.3rem
    padding: 2rem 2rem 0rem 2rem
    margin: 0
</style>

