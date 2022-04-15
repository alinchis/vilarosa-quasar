<template>
  <q-page class="column bg-blue-grey-1">

    <div>
      <q-parallax
        src="Images/Hotel/hotel_panorama_2@2x.jpg"
        :height="$q.screen.width > 1024 ? 600 : 450"
        :speed="0.75"
        class="parallax"
      >
        <q-img src="Logo/sigla_vr_bnb.png" class="parallax-logo"></q-img>
      </q-parallax>
    </div>

    <!-- menu line ------------------------------------------------------------------------------------------------- -->
    <div class="menu-line q-mb-lg"></div>

    <div class="fit row wrap justify-center items-start content-start">
      <div  class="fit rooms-container column q-pb-xl">

        <!-- Holiday Message area ---------------------------------------------------------------------------------- -->
        <div class="reservation-container column q-pb-xl text-amber-1">
          <p class="section-title-first">{{ $t('rooms.EasterHoliday.title') }}</p>
          <q-separator />
          <div class="reservation-box">
            <div class="row">
              <p class="section-subtitle2-first">{{ $t('rooms.EasterHoliday.text') }}</p>
            </div>
          </div>
        </div>

        <!-- Reservations area ------------------------------------------------------------------------------------- -->
        <div class="reservation-container column">
          <p class="section-title-first">{{ $t('rooms.reservations.title') }}</p>
          <q-separator />
          <div class="reservation-box">
            <div class="row">
              <p class="section-subtitle2-first">{{ $t('rooms.reservations.text') }}</p>
            </div>

            <div class="row fit justify-center">

              <p
                class="contact-info cursor-pointer"
                @click="copyOnClick($t('company.mobile'))"
              >
                <q-icon name="las la-phone" class="item-icon"></q-icon>
                <q-icon name="lab la-telegram"></q-icon>: {{ $t('company.mobile') }}
                <q-tooltip>{{ $t('company.tooltipMsg') }}</q-tooltip>
              </p>

              <p
                class="contact-info cursor-pointer"
                @click="copyOnClick($t('company.email.reception'))"
              >
                <q-icon name="las la-at"></q-icon>: {{ $t('company.email.reception') }}
                <q-tooltip>{{ $t('company.tooltipMsg') }}</q-tooltip>
              </p>
            </div>
          </div>
        </div>

        <!-- Prices area ------------------------------------------------------------------------------------------- -->
        <div class="column">
          <div class="prices-title-box">
            <div class="prices-title">{{ $t('rooms.recPriceTitle') }}</div>
            <div class="prices-subtitle">/ {{ $t('rooms.noBreakfast') }}:</div>
          </div>
          <q-separator />
          <div class="row justify-center">
            <prices-table></prices-table>
          </div>
          <p class="section-notes">{{ $t('rooms.priceInfo.breakfast') }}</p>
        </div>

        <!-- Rooms Services area ----------------------------------------------------------------------------------- -->
        <div class="column">
          <p class="section-title">{{ $t('rooms.services.title') }}</p>
          <q-separator />
          <!-- rooms info rooms-container -->
          <div class="row justify-center bg-transparent">
            <!-- 2* rooms -->
            <services-box
              :header-icons="[ 'las la-star', 'las la-star' ]"
              header-color="text-red-10"
              :icons-list="[ 'wifi', 'lcd_tv', 'hairdryer', 'minibar' ]"
              icons-color=""
              :text-list="$t('rooms.services.rooms2s')"
            ></services-box>
            <!-- 2*+ rooms -->
            <services-box
              :header-icons="[ 'las la-star', 'las la-star', 'lar la-star' ]"
              header-color="text-red-10"
              :icons-list="[ 'add_sign', 'ac', 'safe_box' ]"
              icons-color=""
              :text-list="$t('rooms.services.rooms2sp')"
            ></services-box>
            <!-- 3* rooms -->
            <services-box
              :header-icons="[ 'las la-star', 'las la-star', 'las la-star' ]"
              header-color="text-red-10"
              :icons-list="[ 'add_sign', 'ac' ]"
              icons-color=""
              :text-list="$t('rooms.services.rooms3s')"
            ></services-box>
          </div>
        </div>

        <!-- Rooms Important area ---------------------------------------------------------------------------------- -->
        <div class="column">
          <p class="section-title">{{ $t('rooms.important.title') }}</p>
          <q-separator />
          <div class="row justify-around">
            <!-- NO smoking -->
            <text-box :text-content="[ $t('rooms.important.noSmoking') ]" :icon-list='[ "las la-smoking" ]' text-color="text-red-10"></text-box>
            <!-- Mind the sensors -->
            <text-box :text-content="[ $t('rooms.important.sensors') ]" :icon-list='[ "las la-exclamation-triangle" ]' text-color="text-red-10"></text-box>
            <!-- NO candles -->
            <text-box :text-content="[ $t('rooms.important.fireSafety') ]" :icon-list='[ "las la-fire" ]' text-color="text-red-10"></text-box>
            <!-- Mind the power requirements -->
<!--            <text-box :text-content="[ $t('rooms.important.powerSafety') ]" :icon-list='[ "las la-plug" ]' text-color="text-red-10"></text-box>-->
            <!-- NO extra beds -->
            <text-box :text-content="[ $t('rooms.important.noExtraBeds') ]" :icon-list='[ "las la-bed" ]' text-color="text-red-10"></text-box>
          </div>
        </div>


        <!-- Info Prices area -------------------------------------------------------------------------------------- -->
        <div class="column">
          <p class="section-title">{{ $t('rooms.priceInfo.title') }}</p>
          <q-separator/>
          <div class="row justify-around">
            <text-box :text-content="[ $t('rooms.priceInfo.notes') ]" :icon-list='[ "las la-coins" ]' text-color="text-red-10"></text-box>
            <text-box :text-content="[ $t('rooms.priceInfo.rooms') ]" :icon-list='[ "las la-tags" ]' text-color="text-red-10"></text-box>
          </div>
        </div>

        <!-- Vouchers area ----------------------------------------------------------------------------------------- -->
        <div v-if="$root.$i18n.locale === 'ro-ro' " class="column">
                    <p class="section-title">{{ $t('rooms.voucherVacation') }}</p>
          <q-separator class="q-mb-md"/>
          <div class="row justify-around">
            <q-img src="/Vouchers/logo-edenred.svg" alt="Edenred" class="edenred-logo"></q-img>
            <q-img src="/Vouchers/logo-up.png" alt="Up Romania" class="up-logo"></q-img>
            <q-img src="/Vouchers/logo-sodexo.png" alt="Sodexo" class="sodexo-logo"></q-img>
          </div>
        </div>

      </div>

    </div>

    <!-- footer ---------------------------------------------------------------------------------------------------- -->
    <div class="footer">
      S.C. 4 Anotimpuri Turism S.R.L. - ®Vila Rosa - 2021
    </div>

  </q-page>
</template>

<script>
import textBox from 'components/TextBox2.vue';
import pricesTable from 'components/PricesTable.vue';
import servicesBox from 'components/ServicesBox.vue';
import { copyToClipboard } from "quasar";

export default {
  name: 'OurServices',
  components: { textBox, pricesTable, servicesBox },

  data() {
    return {
      copyBannerFlag: false,
      copyBannerText: '',
    }
  },

  methods: {
    copyOnClick(value) {
      console.log('@click');
      // this.$emit('click-copy', value);
      this.$q.notify({
        message: `\" ${value} \" ${ this.$t('company.copyToClipboardMsg') }.`,
        color: 'green',
        timeout: 1500,
      });
      copyToClipboard(value)
        .then(() => {
          // success!
        })
        .catch(() => {
          // fail
        })
    }
  }
}
</script>

<style lang="sass" scoped>
.parallax-logo
  max-width: 350px
  margin-bottom: 0px

.menu-line
  background-color: darkred
  height: 5px

.rooms-container
  display: flex
  margin: auto
  max-width: 1020px
  padding: 3rem 1rem 2rem 1rem

.section-title-first
  font-size: 1.5rem
  padding: 0 2rem 0 2rem
  margin: 0
  color: #525252

.section-title
  font-size: 1.5rem
  padding: 2rem 2rem 0 2rem
  margin: 0
  color: #525252

.prices-title-box
  display: flex
  flex-direction: row
  align-items: flex-end

.prices-title
  font-size: 1.5rem
  padding: 2rem 0.5rem 0 2rem
  margin: 0
  color: #525252

.prices-subtitle
  font-size: 1.3rem
  padding: 2rem 2rem 0 0
  margin: 0
  color: #525252

.section-subtitle
  font-size: 1rem
  padding: 0.5rem 2rem 0 2rem
  margin: 0
  color: #525252

.section-subtitle2-first
  font-size: 1rem
  //padding: 1.5rem 0 0 2rem
  padding: 0
  margin: 0 0 0 2rem
  color: #525252

.section-subtitle2
  font-size: 1rem
  //margin: 1.5rem 0 0 0.5rem
  margin: 0 0 0 0.5rem
  padding: 0
  color: #525252

.reservation-container
  margin: 0 0 1rem 0

.reservation-box
  display: flex
  flex-direction: row
  flex-wrap: wrap
  padding: 1.5rem 0 0 0

.contact-info
  display: flex
  align-items: center
  border-radius: 5px
  font-weight: bold
  color: darkred
  text-align: center
  background-color: #f2f6f8
  border: 1px solid
  font-size: 1.1rem
  margin: 1rem
  padding: 0.5rem

.section-notes
  font-size: 1rem
  padding: 1.5rem 2rem 0 2rem
  //margin: 0
  color: #525252
  overflow: auto

.edenred-logo
  width: 121px
  height: 74px

.up-logo
  width: 73px
  height: 83px

.sodexo-logo
  width: 152px
  height: 50px

.footer
  background-color: $blue-grey-2
  font-size: 0.75rem
  color: grey
  text-align: center
  padding: 5px

@media (hover)
  .contact-info:hover
    background-color: white

@media (width <= 1024px) and (width > 768px)
  .parallax-logo
    max-width: 300px
    margin-bottom: 0px

  .rooms-container
    padding: 2rem 2rem 2rem 2rem

  .reservation-box
    display: flex
    flex-direction: column
    flex-wrap: nowrap

  .contact-info
    background-color: #f2f6f8
    border: 1px solid
    font-size: 1.1rem
    margin: 1rem
    padding: 0.5rem
    //padding: 0
    text-align: center

  .edenred-logo
    width: 98px
    height: 60px

  .up-logo
    width: 58px
    height: 66px

  .sodexo-logo
    width: 122px
    height: 40px

@media (width <= 768px) and (width > 420px)
  .parallax-logo
    max-width: 250px
    margin-bottom: 0px

  .rooms-container
    padding: 2rem 2rem 2rem 2rem

  .reservation-box
    display: flex
    flex-direction: column
    flex-wrap: nowrap

  .contact-info
    background-color: #f2f6f8
    border:1px solid
    font-size: 1.1rem
    margin: 1rem
    padding: 0.5rem
    //padding: 0
    text-align: center

  .edenred-logo
    width: 98px
    height: 60px

  .up-logo
    width: 58px
    height: 66px

  .sodexo-logo
    width: 122px
    height: 40px


@media (width <= 420px)
  .parallax-logo
    max-width: 200px
    margin-bottom: 0px

  .rooms-container
    padding: 0.5rem 0.5rem 1.5rem 0.5rem

  .section-title-first
    font-size: 1.3rem
    padding: 0 2rem 0 2rem
    margin: 0

  .section-title
    font-size: 1.3rem
    padding: 2rem 2rem 0 2rem
    margin: 0

  .section-title2
    font-size: 1.3rem
    padding: 2rem 2rem 0 2rem
    margin: 0

  .prices-title
    font-size: 1.3rem
    padding: 2rem 0.5rem 0 2rem
    margin: 0

  .prices-subtitle
    font-size: 1.1rem
    padding: 2rem 2rem 0 0
    margin: 0

  .contact-info
    background-color: #f6f6f6
    border:1px solid
    font-size: 1.1rem
    margin: 1rem 1rem 0 1rem
    padding: 0.5rem
    //padding: 0
    text-align: center

  .edenred-logo
    width: 60px
    height: 37px

  .up-logo
    width: 37px
    height: 42px

  .sodexo-logo
    width: 76px
    height: 25px
</style>

