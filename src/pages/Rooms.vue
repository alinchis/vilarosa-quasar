<template>
  <q-page class="column bg-blue-grey-1">

    <div>
      <q-parallax
        src="~assets/Restaurant/restaurant_panorama.jpg"
        :height="600"
        :speed="0.75"
        class=""
      >
        <q-img src="~assets/Logo/sigla_vr_img@2x.png" style="max-width: 300px; margin-bottom: 250px"></q-img>
      </q-parallax>
    </div>

    <div class="menu-line q-mb-lg"></div>

    <div class="fit row wrap justify-center items-start content-start">
      <div>

        <!-- Reservations area -->
        <div class="container column q-pb-xl">
          <p class="section-title">{{ $t('rooms.reservations.title') }}</p>
          <q-separator />
          <div class="row">
            <p class="section-subtitle2" style="padding: 1.5rem 0rem 0rem 2rem; color: #525252;">{{ $t('rooms.reservations.text1') }}</p>
            <p class="section-subtitle2" style="padding: 1.5rem 0rem 0rem 0.5rem; color: darkred; font-weight: bold;">{{ $t('company.mobile') }}</p>
            <p class="section-subtitle2" style="padding: 1.5rem 0rem 0rem 0.5rem; color: #525252;">{{ $t('rooms.reservations.text2') }}</p>
            <p class="section-subtitle2" style="padding: 1.5rem 0rem 0rem 0.5rem; color: darkred; font-weight: bold;">{{ $t('company.email.reception') }}</p>
            <p class="section-subtitle2" style="padding: 1.5rem 0rem 0rem 0.5rem; color: #525252;">{{ $t('rooms.reservations.text3') }}</p>
          </div>
        </div>

        <!-- Prices area -->
        <div class="container column q-pb-xl">
          <div class="row section-title">
            <p class="q-mb-none">{{ $t('rooms.recPriceTitle') }} -</p>
            <p class="q-mb-none">- {{ $t('rooms.noBreakfast') }}</p>
          </div>
          <q-separator />
          <div class="row justify-center">
            <prices-table></prices-table>
          </div>
          <p class="section-subtitle">{{ $t('rooms.priceInfo.breakfast') }}</p>
        </div>

        <!-- Rooms Info area -->
        <div class="container column q-pb-xl">
          <p class="section-title">{{ $t('rooms.roomsInfoTitle') }}</p>
          <q-separator />
          <div class="row justify-center">
            <info-table></info-table>
          </div>
        </div>

        <!-- Info Prices area -->
        <div class="container column q-pb-xl">
          <p class="section-title">{{ $t('rooms.priceInfo.title') }}</p>
          <q-separator/>
          <div class="row justify-around">
            <text-box :text-content="[ $t('rooms.priceInfo.notes') ]" :icon-list='[ "las la-coins" ]' text-color="text-red-9"></text-box>
            <text-box :text-content="[ $t('rooms.priceInfo.rooms') ]" :icon-list='[ "las la-tags" ]' text-color="text-red-9"></text-box>
          </div>
        </div>

        <!-- Vouchers area -->
        <div class="container column q-pb-xl">
                    <p class="section-title">{{ $t('rooms.voucherVacation') }}</p>
          <q-separator class="q-mb-md"/>
          <div class="row justify-around">
            <q-img src="~assets/Vouchers/logo-edenred.svg" alt="Edenred" style="width: 121px; height: 74px;"></q-img>
            <q-img src="~assets/Vouchers/logo-up.png" alt="Up Romania" style="width: 73px; height: 83px;"></q-img>
            <q-img src="~assets/Vouchers/logo-sodexo.png" alt="Sodexo" style="width: 152px; height:50px;"></q-img>
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
import { i18n } from "boot/i18n";
import textBox from 'components/TextBox.vue';
import pricesTable from 'components/PricesTable.vue';
import infoTable from 'components/InfoTable.vue';
import companyBox from '../components/AboutUsCompany.vue';
import authBox from '../components/AboutUsAuthoritiesBox';

export default {
  name: 'OurServices',
  components: { textBox, pricesTable, infoTable },
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
  //margin: auto
  max-width: 920px

.section-title
  font-size: 1.5rem
  padding: 2rem 2rem 0rem 2rem
  margin: 0
  color: #525252

.section-subtitle
  font-size: 1rem
  padding: 1.5rem 2rem 0rem 2rem
  margin: 0
  color: #525252

.section-subtitle2
  font-size: 1rem
  margin: 0

.footer
  background-color: $blue-grey-2
  font-size: 0.9rem
  color: grey
  text-align: center
  padding: 5px
</style>

