<template>
  <!-- container -->
  <div class="company-container row">

    <!-- company ids -->
    <div
      v-ripple
      class="item-box cursor-pointer col-md-3 col-sm-4 col-xs-6 relative-position"
      @click="copyOnClick(company.id)"
    >
      <div class="icon-box">
        <q-icon name="las la-stamp" class="item-icon"></q-icon>
      </div>
      <div class="item-text">
        {{ company.id }}
      </div>
      <div class="item-text">
        {{ company.orcId }}
      </div>
      <q-tooltip>
        {{ $t('company.tooltipMsg') }}
      </q-tooltip>
    </div>
    <!-- address -->
    <div
      v-ripple
      class="item-box cursor-pointer col-md-3 col-sm-4 col-xs-6 relative-position"
      @click="copyOnClick(`${company.address.city}, ${company.address.street}`)"
    >
      <div class="icon-box">
        <q-icon name="las la-map-marker" class="item-icon"></q-icon>
        <q-icon name="las la-envelope" class="item-icon"></q-icon>
      </div>
      <div class="item-text">
        {{ company.address.city }}
      </div>
      <div class="item-text">
        {{ company.address.street }}
      </div>
      <q-tooltip>
        {{ $t('company.tooltipMsg') }}
      </q-tooltip>
    </div>

    <!-- mobile -->
    <div
      v-ripple
      class="item-box cursor-pointer col-md-3 col-sm-4 col-xs-6 relative-position"
      @click="copyOnClick(company.mobile)"
    >
      <div class="icon-box">
        <q-icon name="las la-phone" class="item-icon"></q-icon>
        <q-icon name="lab la-whatsapp" class="item-icon"></q-icon>
        <q-icon name="las la-sms" class="item-icon"></q-icon>
      </div>
      <div class="item-text">
        {{ company.mobile }}
      </div>
      <q-tooltip>
        {{ $t('company.tooltipMsg') }}
      </q-tooltip>
    </div>
    <!-- phone -->
    <div
      v-ripple
      class="item-box cursor-pointer col-md-3 col-sm-4 col-xs-6 relative-position"
      @click="copyOnClick(company.telephone)"
    >
      <div class="icon-box">
        <q-icon name="las la-phone" class="item-icon"></q-icon>
      </div>
      <div class="item-text">
        {{ company.telephone }}
      </div>
      <q-tooltip>
        {{ $t('company.tooltipMsg') }}
      </q-tooltip>
    </div>

    <!-- email reception -->
    <div
      v-ripple
      class="item-box cursor-pointer col-md-3 col-sm-4 col-xs-6 relative-position"
      @click="copyOnClick(company.email.reception)"
    >
      <div class="icon-box">
<!--        <q-icon name="las la-at" class="item-icon"></q-icon>-->
        <q-icon name="las la-concierge-bell" class="item-icon"></q-icon>
      </div>
      <div class="item-text">
        {{ company.email.reception }}
      </div>
      <q-tooltip>
        {{ $t('company.tooltipMsg') }}
      </q-tooltip>
    </div>

    <!-- email chief reception -->
    <div
      v-ripple
      class="item-box cursor-pointer col-md-3 col-sm-4 col-xs-6 relative-position"
      @click="copyOnClick(company.email.chiefReception)"
    >
      <div class="icon-box">
<!--        <q-icon name="las la-at" class="item-icon"></q-icon>-->
        <q-icon name="las la-hotel" class="item-icon"></q-icon>
      </div>
      <div class="item-text">
        {{ company.email.chiefReception }}
      </div>
      <q-tooltip>
        {{ $t('company.tooltipMsg') }}
      </q-tooltip>
    </div>

    <!-- email reviews -->
    <div
      v-ripple
      class="item-box cursor-pointer col-md-3 col-sm-4 col-xs-6 relative-position"
      @click="copyOnClick(company.email.reviews)"
    >
      <div class="icon-box">
<!--        <q-icon name="las la-at" class="item-icon"></q-icon>-->
        <q-icon name="las la-thumbs-up" class="item-icon"></q-icon>
        <q-icon name="las la-thumbs-down" class="item-icon"></q-icon>
      </div>
      <div class="item-text">
        {{ company.email.reviews }}
      </div>
      <q-tooltip>
        {{ $t('company.tooltipMsg') }}
        cXC-wZI-5Ic-2wC!
      </q-tooltip>
    </div>

    <!-- email gdpr -->
    <div
      v-ripple
      class="item-box cursor-pointer col-md-3 col-sm-4 col-xs-6 relative-position"
      @click="copyOnClick(company.email.gdpr)"
    >
      <div class="icon-box">
<!--        <q-icon name="las la-at" class="item-icon"></q-icon>-->
        <q-icon name="las la-user-check" class="item-icon"></q-icon>
      </div>
      <div class="item-text">
        {{ company.email.gdpr }}
      </div>
      <q-tooltip>
        {{ $t('company.tooltipMsg') }}
      </q-tooltip>
    </div>

  </div>
</template>

<script>
// import { Notify } from 'quasar'
import { copyToClipboard } from 'quasar'

export default {
  name: "AboutUsCompany",

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
  },

  computed: {
    company() {
      return this.$t('company');
    }
  },

}
</script>

<style lang="sass" scoped>
@media (min-width: 320px)
  .company-container
    width: 100%
    margin-top: 0.5rem

  q-btn
    padding: 0 0

  .item-box
    margin-bottom: 0.5rem
    padding: 0.5rem
    //background-color: wheat
    font-weight: normal
    font-size: 0.9rem
    color: gray
    transition: background-color .5s
    border-radius: 10px

  .item-text
    margin-left: 0.5rem
    font-size: 1rem

  .icon-box
    margin-left: 0.5rem

  .item-icon
    font-size: 1.5rem
    margin-left: 0.5rem
    width: 1.5rem
    height: 2rem
    color: $red-9

@media (hover)
  div.item-box:hover
    background-color: white

@media (width < 420px)
  .item-text
    font-size: 0.9rem

// 769-1024 px
//@media only screen and (min-width: 769px) and (max-width: 1024px)
//  .company-card
//    max-width: 405px
//
//  .item-box
//    padding-bottom: 0.5rem
//
//// 641-768 px
//@media only screen and (min-width: 641px) and (max-width: 768px)
//  .company-card
//
//  .item-label
//    flex-direction: column
//
//// 0:640 px
//@media only screen and (max-width: 640px)
//.container
//  flex-direction: column
//
//.company-card
//  width: 100%

</style>
