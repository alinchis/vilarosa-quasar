<template>
  <div class="container q-pa-md bg-grey-9 row justify-center">
    <div class="column fit" style="max-width: 800px">
      <q-img
        v-for="(item, index) in gdprMedia"
        :key="index"
        :src="item.src"
        :alt="item.caption"
        class="fit certification"
      ></q-img>
    </div>

    <!-- return button -->
    <q-page-sticky v-if="!showFabs" :position="fabPosition" :offset="[10, 132]">
      <div class="column">
        <q-btn
          fab
          icon="las la-undo-alt"
          color="blue-8"
          :hide-label="hideLabels"
          @click="closePage"
          class="q-mt-md"
        ></q-btn>
      </div>
    </q-page-sticky>

    <!-- download button -->
    <q-page-sticky v-if="!showFabs" position="top-right" :offset="[10, 10]">
      <div>
        <q-btn
          v-if="this.$root.$i18n.locale === 'ro-ro'"
          fab
          icon="las la-file-download"
          color="blue-8"
          :hide-label="hideLabels"
          class="q-mt-md"

          type="a" href="/Downloads/2021.06.11 GDPR_group_RO.pdf"
        ></q-btn>

<!--        <q-btn-->
<!--          v-if="this.$root.$i18n.locale !== 'ro-ro'"-->
<!--          fab-->
<!--          icon="las la-file-download"-->
<!--          color="blue-8"-->
<!--          :hide-label="hideLabels"-->
<!--          class="q-mt-md"-->

<!--          type="a" href="/Downloads/2021.06.11 GDPR_group_EN.pdf"-->
<!--        ></q-btn>-->
      </div>
    </q-page-sticky>

  </div>
</template>

<script>
export default {
  name: "GDPRgroup",

  data () {
    return {
      hideLabels: false,
    }
  },

  computed: {
    // list of certificates photo gallery
    gdprMedia() {
      if (this.$root.$i18n.locale === 'ro-ro') {
        return [
          {
            thumb: 'GDPR/2021.06.11 GDPR_group_RO_1.png',
            src: 'GDPR/2021.06.11 GDPR_group_RO_1.png',
            caption: '',
          },
          {
            thumb: 'GDPR/2021.06.11 GDPR_group_RO_2.png',
            src: 'GDPR/2021.06.11 GDPR_group_RO_2.png',
            caption: '',
          },
          {
            thumb: 'GDPR/2021.06.11 GDPR_group_RO_3.png',
            src: 'GDPR/2021.06.11 GDPR_group_RO_3.png',
            caption: '',
          },
        ];
      } else {
        return [
          {
            thumb: 'GDPR/2021.06.11 GDPR_group_EN_1.png',
            src: 'GDPR/2021.06.11 GDPR_group_EN_1.png',
            caption: '',
          },
          {
            thumb: 'GDPR/2021.06.11 GDPR_group_EN_2.png',
            src: 'GDPR/2021.06.11 GDPR_group_EN_2.png',
            caption: '',
          },
          {
            thumb: 'GDPR/2021.06.11 GDPR_group_EN_3.png',
            src: 'GDPR/2021.06.11 GDPR_group_EN_3.png',
            caption: '',
          },
        ];
      }
    },

    showFabs() {
      // console.log(this.$route.name);
      if (this.$route.name === 'AboutUs' || this.$route.name === 'OurServices' || this.$route.name === 'Rooms') return true;
      return false;
    },

    fabPosition() {
      // console.log(this.$q.screen.lt.sm);
      return this.$q.screen.lt.sm ? 'bottom-right' : 'right';
    },
  },

  methods: {
    closePage: function () {
      // return to page where gdpr page was opened
      if(sessionStorage.routeName) {
        this.$router.push({ name: sessionStorage.routeName });
        // if user loaded directly a secondary page, no routeName is saved in sessionStorage, route to 'Rooms' page
      } else {
        this.$router.push({ name: 'Rooms' });
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.container
  padding-right: 36px

.certification
  margin: 10px
//max-width: 600px
//min-width: 300px

</style>
