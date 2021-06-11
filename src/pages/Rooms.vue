<template>
  <q-page class="column bg-blue-grey-1">

    <div>
      <q-parallax
        src="Images/Hotel/hotel_panorama_2@2x.jpg"
        :height="600"
        :speed="0.75"
        class=""
      >
        <q-img src="Logo/sigla_vr_bnb.png" style="max-width: 300px; margin-bottom: 0px"></q-img>
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
          <p class="section-notes">{{ $t('rooms.priceInfo.breakfast') }}</p>
        </div>

        <!-- Rooms Info area -->
        <div class="container column q-pb-xl">
          <p class="section-title">{{ $t('rooms.roomsInfoTitle') }}</p>
          <q-separator />
          <!-- rooms info container -->
          <div class="row justify-center">
            <!-- 2* rooms -->
            <info-box
              :header-icons="[ 'las la-star', 'las la-star' ]"
              header-color="text-red-10"
              :icons-list="[ 'wifi', 'lcd_tv', 'hairdryer', 'minibar' ]"
              icons-color=""
              :text-list="$t('rooms.info.rooms2s')"
            ></info-box>
            <!-- 2*+ rooms -->
            <info-box
              :header-icons="[ 'las la-star', 'las la-star', 'las la-star-half-alt' ]"
              header-color="text-red-10"
              :icons-list="[ 'add_sign', 'ac', 'safe_box' ]"
              icons-color=""
              :text-list="$t('rooms.info.rooms2sp')"
            ></info-box>
            <!-- 3* rooms -->
            <info-box
              :header-icons="[ 'las la-star', 'las la-star', 'las la-star' ]"
              header-color="text-red-10"
              :icons-list="[ 'add_sign', 'ac' ]"
              icons-color=""
              :text-list="$t('rooms.info.rooms3s')"
            ></info-box>
          </div>

          <q-separator />

          <div class="row">
            <!-- NO smoking -->
            <div class="row items-center q-pt-md q-pl-md">
              <q-icon name="las la-smoking-ban" size="xl" class="col-auto text-red-10 q-pa-md"></q-icon>
              <p class="col section-subtitle q-ma-none q-pa-md">{{ $t('rooms.info.noSmoking') }}</p>
            </div>
            <!-- Mind the sensors -->
            <div class="row items-center q-pt-md q-pl-md">
              <q-icon name="las la-exclamation-triangle" size="xl" class="col-auto text-red-10 q-pa-md"></q-icon>
              <p class="col section-subtitle q-ma-none q-pa-md">{{ $t('rooms.info.sensors') }}</p>
            </div>
            <!-- NO candles -->
            <div class="row items-center q-pt-md q-pl-md">
              <q-icon name="las la-fire" size="xl" class="col-auto text-red-10 q-pa-md"></q-icon>
              <p class="col section-subtitle q-ma-none q-pa-md">{{ $t('rooms.info.fireSafety') }}</p>
            </div>
            <!-- Mind the power requirements -->
<!--            <div class="row items-center q-pt-md q-pl-md">-->
<!--              <q-icon name="las la-plug" size="xl" class="col-auto text-red-10 q-pa-md"></q-icon>-->
<!--              <p class="col section-subtitle q-ma-none q-pa-md">{{ $t('rooms.info.powerSafety') }}</p>-->
<!--            </div>-->
            <!-- NO extra beds -->
            <div class="row items-center q-pt-md q-pl-md">
              <q-icon name="las la-bed" size="xl" class="col-auto text-red-10 q-pa-md"></q-icon>
              <p class="col section-subtitle q-ma-none q-pa-md">{{ $t('rooms.info.noExtraBeds') }}</p>
            </div>

          </div>
        </div>


        <!-- Info Prices area -->
        <div class="container column q-pb-xl">
          <p class="section-title">{{ $t('rooms.priceInfo.title') }}</p>
          <q-separator/>
          <div class="row justify-around">
            <text-box :text-content="[ $t('rooms.priceInfo.notes') ]" :icon-list='[ "las la-coins" ]' text-color="text-red-10"></text-box>
            <text-box :text-content="[ $t('rooms.priceInfo.rooms') ]" :icon-list='[ "las la-tags" ]' text-color="text-red-10"></text-box>
          </div>
        </div>

        <!-- Vouchers area -->
        <div v-if="$root.$i18n.locale === 'ro-ro' " class="container column q-pb-xl">
                    <p class="section-title">{{ $t('rooms.voucherVacation') }}</p>
          <q-separator class="q-mb-md"/>
          <div class="row justify-around">
            <q-img src="/Vouchers/logo-edenred.svg" alt="Edenred" style="width: 121px; height: 74px;"></q-img>
            <q-img src="/Vouchers/logo-up.png" alt="Up Romania" style="width: 73px; height: 83px;"></q-img>
            <q-img src="/Vouchers/logo-sodexo.png" alt="Sodexo" style="width: 152px; height:50px;"></q-img>
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
import pricesTable from 'components/PricesTable.vue';
import infoBox from 'components/InfoBox.vue';

export default {
  name: 'OurServices',
  components: { textBox, pricesTable, infoBox },
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
  //padding: 1.5rem 2rem 0rem 2rem
  //margin: 0
  color: #525252
  overflow: auto

.section-subtitle2
  font-size: 1rem
  margin: 0

.section-notes
  font-size: 1rem
  padding: 1.5rem 2rem 0rem 2rem
  //margin: 0
  color: #525252
  overflow: auto

.footer
  background-color: $blue-grey-2
  font-size: 0.9rem
  color: grey
  text-align: center
  padding: 5px
</style>

