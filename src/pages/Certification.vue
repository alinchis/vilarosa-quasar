<template>
  <div class="q-pa-md bg-grey-9 row justify-center">
    <div class="column fit" style="max-width: 800px">
      <q-img
        v-for="(item, index) in certificationMedia"
        :key="index"
        :src="item.src"
        :alt="item.caption"
        class="fit certification"
      ></q-img>
    </div>

    <!-- return button -->
    <q-page-sticky v-if="!showFabs" style="margin-right: 20px; margin-bottom: 100px;">
      <div class="column">
        <q-btn
          fab
          icon="las la-undo-alt"
          color="accent"
          :hide-label="hideLabels"
          @click="$router.push({ name: currentPage })"
          class="q-mt-md"
        ></q-btn>

        <q-btn
          fab
          icon="las la-file-download"
          color="accent"
          :hide-label="hideLabels"
          class="q-mt-md"

          type="a" href="/Downloads/VilaRosa_Certification.zip"
        ></q-btn>
      </div>
    </q-page-sticky>

  </div>
</template>

<script>
import { exportFile } from 'quasar'

export default {
  name: "Certification",

  data () {
    return {
      hideLabels: false,
    }
  },

  computed: {
    // list of certificates photo gallery
    certificationMedia() {
      return [
        {
          thumb: 'Certification/mdrt_vila_1.jpg',
          src: 'Certification/mdrt_vila_1@2x.jpeg',
          caption: this.$t('certification.gallery.villa2s'),
        },
        {
          thumb: 'Certification/mdrt_vila_2.jpg',
          src: 'Certification/mdrt_vila_2@2x.jpeg',
          caption: this.$t('certification.gallery.villa3s'),
        },
        {
          thumb: 'Certification/mdrt_restaurant.jpg',
          src: 'Certification/mdrt_restaurant@2x.jpeg',
          caption: this.$t('certification.gallery.restaurant'),
        },
      ];
    },

    showFabs() {
      // console.log(this.$route.name);
      if (this.$route.name === 'AboutUs' || this.$route.name === 'OurServices' || this.$route.name === 'Rooms') return true;
      return false;
    },

    currentPage() {
      return sessionStorage.getItem('routeName');
    },
  },

  methods: {
    downloadFile() {
      const file = re
      const status = exportFile('important.txt', 'Vila Rosa - Certification files', 'application/zip');

      if (status === true) {
        // browser allowed it
      }
      else {
        // browser denied it
        console.log('Error: ' + status)
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.container
  display: flex
  justify-content: center
  align-items: center

.certification
  margin: 10px
  //max-width: 600px
  //min-width: 300px

</style>
