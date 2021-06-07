<template>
  <div class="row full-width justify-center no-wrap">

    <q-card class="company-card bg-transparent" flat>
      <q-card-section>
<!--        <div class="item-title">{{ company.name }}</div>-->
        <div class="item-label">
          <q-icon name="las la-stamp" class="auth-icon"></q-icon>
          {{ company.id }}, {{ company.orcId }}
        </div>
        <div class="item-label">
          <q-icon name="las la-map-marker" class="auth-icon"></q-icon>
          {{ company.address }}
        </div>
        <div class="item-label">
          <q-icon name="las la-phone" class="auth-icon"></q-icon>
          <q-icon name="lab la-whatsapp" class="auth-icon"></q-icon>
          <q-icon name="las la-sms" class="auth-icon"></q-icon>
          {{ company.mobile }}
        </div>
        <div class="item-label">
          <q-icon name="las la-phone" class="auth-icon"></q-icon>
          {{ company.telephone }}
        </div>
      </q-card-section>
    </q-card>

    <q-card class="company-card bg-transparent" flat>
      <q-card-section>
      <div class="item-label">
        <q-icon name="las la-at" class="auth-icon"></q-icon>
        {{ company.email.reception }}
      </div>

      <div class="item-label">
        <q-icon name="las la-at" class="auth-icon"></q-icon>
        {{ company.email.office }}
      </div>

      <div class="item-label">
        <q-icon name="las la-at" class="auth-icon"></q-icon>
        {{ company.email.GDPR }}
      </div>

      <div class="item-label">
        <q-icon name="las la-globe-europe" class="auth-icon"></q-icon>
        {{ company.website }}
      </div>
      </q-card-section>
    </q-card>

<!--    <q-card class="company-card bg-transparent" flat>-->
<!--      <q-card-section>-->
<!--        <q-btn-->
<!--          color="red-9"-->
<!--          no-caps-->
<!--          stack-->
<!--          @click="openGallery(0)"-->
<!--          class="fit"-->
<!--        >-->
<!--          <q-icon name="las la-camera" size="3rem"></q-icon>-->
<!--          {{ company.certification.MDRT }}-->
<!--        </q-btn>-->
<!--      </q-card-section>-->
<!--      <light-box-->
<!--        ref="lightbox"-->
<!--        :media="media"-->
<!--        :show-caption="true"-->
<!--        :show-light-box="false"-->
<!--        class="z-top"-->
<!--        @onClosed="onCloseGallery"-->
<!--      ></light-box>-->
<!--    </q-card>-->

  </div>
</template>

<script>
// import LightBox from 'vue-image-lightbox';
// require('vue-image-lightbox/dist/vue-image-lightbox.min.css');

export default {
  name: "AboutUsCompany",
  // components: { LightBox },
  props: [ 'company' ],

  // computed: {
  //   media() {
  //     return [
  //         {
  //           thumb: 'Certification/mdrt_vila_1.jpg',
  //           src: 'Certification/mdrt_vila_1@2x.jpeg',
  //           caption: this.$t('company.certification.gallery.villa2s'),
  //         },
  //         {
  //           thumb: 'Certification/mdrt_vila_2.jpg',
  //           src: 'Certification/mdrt_vila_2@2x.jpeg',
  //           caption: this.$t('company.certification.gallery.villa3s'),
  //         },
  //         {
  //           thumb: 'Certification/mdrt_restaurant.jpg',
  //           src: 'Certification/mdrt_restaurant@2x.jpeg',
  //           caption: this.$t('company.certification.gallery.restaurant'),
  //         },
  //       ];
  //   },
  // },

  // methods: {
  //   openGallery(index) {
  //     this.$refs.lightbox.showImage(index);
  //     this.$emit('hide-header');
  //   },
  //   onCloseGallery() {
  //     // console.log('onCloseGallery');
  //     this.$emit('show-header');
  //   },
  // },
}
</script>

<style lang="sass" scoped>
.company-card
  width: 100%
  max-width: 460px
  margin: 0.5rem

.item-title
  font-size: 1.1rem

.item-label
  font-size: 0.85rem
  color: gray

.auth-icon
  color: $red-9
</style>
