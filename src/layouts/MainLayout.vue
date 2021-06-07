<template>
  <q-layout view="lHh lpr lFf">
    <!-- header -->
    <div v-if="showHeader" class="fixed-top bg-transparent z-top">
      <!-- language toggle button -->
      <q-btn @click="toggleLanguage" round class=" q-ma-md z-top">
        <q-img v-if="language === 'ro-ro'" src="~assets/FlagIcons/RO-flag-icon.png"></q-img>
        <q-img v-if="language === 'en-us'" src="~assets/FlagIcons/USA-flag-icon.png"></q-img>
      </q-btn>

      <!-- navigation buttons -->
      <q-btn-group outline class="absolute-center navBtnGroup">
        <q-btn size="md" color="red-10" :label="$t('navMenu.aboutUs')" to="/aboutUs"/>
        <q-btn color="red-10" :label="$t('navMenu.ourServices')" to="/ourServices"/>
        <q-btn color="red-10" :label="$t('navMenu.prices')" to="/rooms"/>
        <q-btn color="red-10" :label="$t('navMenu.map')" to="/map"/>
      </q-btn-group>
    </div>

    <!-- page container -->
    <q-page-container class="fit q-pa-none">
      <!-- page -->
      <router-view @hide-header="showHeader=false" @show-header="showHeader=true"/>

      <!-- fab buttons -->
      <q-page-sticky v-if="showFabs" style="margin-right: 20px; margin-bottom: 100px;">
        <div class="column">
          <q-fab
            icon="las la-camera"
            direction="left"
            color="accent"
            :hide-label="hideLabels"
          >
            <q-fab-action @click="openGallery('rooms2s-gallery', 0)" color="primary" icon="person_add" />
            <q-fab-action @click="openGallery('rooms2sp-gallery', 0)" color="primary" icon="person_add" />
            <q-fab-action @click="openGallery('rooms3s-gallery', 0)" color="primary" icon="person_add" />
          </q-fab>

          <q-fab
            icon="las la-user-check"
            direction="left"
            color="accent"
            :hide-label="hideLabels"
          >
            <q-fab-action to="/GDPR" color="primary" icon="las la-user-friends" />
            <q-fab-action color="primary" icon="las la-user" />
          </q-fab>

          <q-btn
            fab
            icon="las la-certificate"
            color="accent"
            :hide-label="hideLabels"
            @click="openGallery('certification-gallery', 0)"
          ></q-btn>
        </div>

      </q-page-sticky>
    </q-page-container>

    <!-- PDF viewer page -->
<!--    <pdf file-path="/GDPR/GDPR_RO.pdf"></pdf>-->

    <!-- 2* Rooms Photo Gallery -->
    <light-box
      ref="rooms2s-gallery"
      :media="rooms2sMedia"
      :show-caption="true"
      :show-light-box="false"
      :nThumbs="galleryThumbs"
      class="z-top"
      @onClosed="onCloseGallery"
    ></light-box>

    <!-- 2*+ Rooms Photo Gallery -->
    <light-box
      ref="rooms2sp-gallery"
      :media="rooms2spMedia"
      :show-caption="true"
      :show-light-box="false"
      :nThumbs="galleryThumbs"
      class="z-top"
      @onClosed="onCloseGallery"
    ></light-box>

    <!-- #* Rooms Photo Gallery -->
    <light-box
      ref="rooms3s-gallery"
      :media="rooms3sMedia"
      :show-caption="true"
      :show-light-box="false"
      :nThumbs="galleryThumbs"
      class="z-top"
      @onClosed="onCloseGallery"
    ></light-box>

    <!-- Certification Photo Gallery -->
    <light-box
      ref="certification-gallery"
      :media="certificationMedia"
      :show-caption="true"
      :show-light-box="false"
      class="z-top"
      @onClosed="onCloseGallery"
    ></light-box>

  </q-layout>
</template>

<script>
import textBox from "components/TextBox";
import companyBox from "components/AboutUsCompany";
import authBox from "components/AboutUsAuthoritiesBox";
// pdf page
// import Pdf from 'pages/PDF.vue';
// import photo gallery
import LightBox from 'vue-image-lightbox';
require('vue-image-lightbox/dist/vue-image-lightbox.min.css');

export default {
  name: 'MainLayout',
  components: { LightBox },

  data () {
    return {
      language: this.$root.$i18n.locale,
      tab: 'ourServices',
      showHeader: true,
      hideLabels: false,
    }
  },

  computed: {
    showFabs() {
      // console.log(this.$route.name);
      if(this.$route.name === 'Map') return false;
      return true;
    },

    // calculate number of thumbnail based on window size
    galleryThumbs() {
      return Math.floor(window.innerWidth / 60) - 2
    },

    // list of 2* room for photo gallery
    rooms2sMedia() {
      return [
        // Room #10
        {
          thumb: '/Images/Hotel/stars_2/2s_10_DBL_1_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_10_DBL_1.jpg',
          caption: this.roomText(this, '10', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_10_DBL_2_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_10_DBL_2.jpg',
          caption: this.roomText(this, '10', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_10_DBL_3_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_10_DBL_3.jpg',
          caption: this.roomText(this, '10', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_10_DBL_4_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_10_DBL_4.jpg',
          caption: this.roomText(this, '10', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_10_DBL_GS_1_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_10_DBL_GS_1.jpg',
          caption: this.roomText(this, '10', 'DBL', true),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_10_DBL_GS_2_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_10_DBL_GS_2.jpg',
          caption: this.roomText(this, '10', 'DBL', true),
        },

        // Room #12
        {
          thumb: '/Images/Hotel/stars_2/2s_12_DBL_1_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_12_DBL_1.jpg',
          caption: this.roomText(this, '12', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_12_DBL_2_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_12_DBL_2.jpg',
          caption: this.roomText(this, '12', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_12_DBL_3_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_12_DBL_3.jpg',
          caption: this.roomText(this, '12', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_12_DBL_GS_1_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_12_DBL_GS_1.jpg',
          caption: this.roomText(this, '12', 'DBL', true),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_12_DBL_GS_2_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_12_DBL_GS_2.jpg',
          caption: this.roomText(this, '12', 'DBL', true),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_12_DBL_GS_3_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_12_DBL_GS_3.jpg',
          caption: this.roomText(this, '12', 'DBL', true),
        },

        // Room #15
        {
          thumb: '/Images/Hotel/stars_2/2s_15_APT_1_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_15_APT_1.jpg',
          caption: this.roomText(this, '15', 'APT', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_15_APT_2_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_15_APT_2.jpg',
          caption: this.roomText(this, '15', 'APT', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_15_APT_3_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_15_APT_3.jpg',
          caption: this.roomText(this, '15', 'APT', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_15_APT_4_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_15_APT_4.jpg',
          caption: this.roomText(this, '15', 'APT', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_15_APT_5_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_15_APT_5.jpg',
          caption: this.roomText(this, '15', 'APT', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_15_APT_6_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_15_APT_6.jpg',
          caption: this.roomText(this, '15', 'APT', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_15_APT_GS_1_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_15_APT_GS_1.jpg',
          caption: this.roomText(this, '15', 'APT', true),
        },

        // Room #20
        {
          thumb: '/Images/Hotel/stars_2/2s_20_DBL_1_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_20_DBL_1.jpg',
          caption: this.roomText(this, '20', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_20_DBL_2_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_20_DBL_2.jpg',
          caption: this.roomText(this, '20', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_20_DBL_3_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_20_DBL_3.jpg',
          caption: this.roomText(this, '20', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_20_DBL_GS_1_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_20_DBL_GS_1.jpg',
          caption: this.roomText(this, '20', 'DBL', true),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_20_DBL_GS_2_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_20_DBL_GS_2.jpg',
          caption: this.roomText(this, '20', 'DBL', true),
        },

        // Room #22
        {
          thumb: '/Images/Hotel/stars_2/2s_22_DBL_1_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_22_DBL_1.jpg',
          caption: this.roomText(this, '22', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_22_DBL_2_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_22_DBL_2.jpg',
          caption: this.roomText(this, '22', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_22_DBL_3_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_22_DBL_3.jpg',
          caption: this.roomText(this, '22', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_22_DBL_GS_1_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_22_DBL_GS_1.jpg',
          caption: this.roomText(this, '22', 'DBL', true),
        },

        // Room #23
        {
          thumb: '/Images/Hotel/stars_2/2s_23_DBB_1_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_23_DBB_1.jpg',
          caption: this.roomText(this, '23', 'DBB', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_23_DBB_2_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_23_DBB_2.jpg',
          caption: this.roomText(this, '23', 'DBB', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_23_DBB_3_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_23_DBB_3.jpg',
          caption: this.roomText(this, '23', 'DBB', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_23_DBB_4_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_23_DBB_4.jpg',
          caption: this.roomText(this, '23', 'DBB', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_23_DBB_GS_1_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_23_DBB_GS_1.jpg',
          caption: this.roomText(this, '23', 'DBB', true),
        },

        // Room #30
        {
          thumb: '/Images/Hotel/stars_2/2s_30_DBB_1_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_30_DBB_1.jpg',
          caption: this.roomText(this, '30', 'DBB', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_30_DBB_2_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_30_DBB_2.jpg',
          caption: this.roomText(this, '30', 'DBB', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_30_DBB_3_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_30_DBB_3.jpg',
          caption: this.roomText(this, '30', 'DBB', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_30_DBB_4_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_30_DBB_4.jpg',
          caption: this.roomText(this, '30', 'DBB', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_30_DBB_GS_1_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_30_DBB_GS_1.jpg',
          caption: this.roomText(this, '30', 'DBB', true),
        },

        // Room #33
        {
          thumb: '/Images/Hotel/stars_2/2s_33_DBB_1_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_33_DBB_1.jpg',
          caption: this.roomText(this, '33', 'DBB', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_33_DBB_2_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_33_DBB_2.jpg',
          caption: this.roomText(this, '33', 'DBB', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_33_DBB_3_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_33_DBB_3.jpg',
          caption: this.roomText(this, '33', 'DBB', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_33_DBB_4_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_33_DBB_4.jpg',
          caption: this.roomText(this, '33', 'DBB', false),
        },
        {
          thumb: '/Images/Hotel/stars_2/2s_33_DBB_GS_1_thumb.jpg',
          src: '/Images/Hotel/stars_2/2s_33_DBB_GS_1.jpg',
          caption: this.roomText(this, '33', 'DBB', true),
        },
      ];
    },

    // list of 2*+ room for photo gallery
    rooms2spMedia() {
      return [
        // Room #40
        {
          thumb: '/Images/Hotel/stars_2+/2s_40_DBL_1_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_40_DBL_1.jpg',
          caption: this.roomText(this, '40', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_2+/2s_40_DBL_2_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_40_DBL_2.jpg',
          caption: this.roomText(this, '40', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_2+/2s_40_DBL_3_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_40_DBL_3.jpg',
          caption: this.roomText(this, '40', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_2+/2s_40_DBL_4_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_40_DBL_4.jpg',
          caption: this.roomText(this, '40', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_2+/2s_40_DBL_GS_1_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_40_DBL_GS_1.jpg',
          caption: this.roomText(this, '40', 'DBL', true),
        },
        {
          thumb: '/Images/Hotel/stars_2+/2s_40_DBL_GS_2_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_40_DBL_GS_2.jpg',
          caption: this.roomText(this, '40', 'DBL', true),
        },

        // Room #41
        {
          thumb: '/Images/Hotel/stars_2+/2s_41_TRI_1_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_41_TRI_1.jpg',
          caption: this.roomText(this, '41', 'TRI', false),
        },
        {
          thumb: '/Images/Hotel/stars_2+/2s_41_TRI_2_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_41_TRI_2.jpg',
          caption: this.roomText(this, '41', 'TRI', false),
        },
        {
          thumb: '/Images/Hotel/stars_2+/2s_41_TRI_3_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_41_TRI_3.jpg',
          caption: this.roomText(this, '41', 'TRI', false),
        },
        {
          thumb: '/Images/Hotel/stars_2+/2s_41_TRI_4_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_41_TRI_4.jpg',
          caption: this.roomText(this, '41', 'TRI', false),
        },
        {
          thumb: '/Images/Hotel/stars_2+/2s_41_TRI_5_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_41_TRI_5.jpg',
          caption: this.roomText(this, '41', 'TRI', false),
        },
        {
          thumb: '/Images/Hotel/stars_2+/2s_41_TRI_6_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_41_TRI_6.jpg',
          caption: this.roomText(this, '41', 'TRI', false),
        },
        {
          thumb: '/Images/Hotel/stars_2+/2s_41_TRI_GS_1_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_41_TRI_GS_1.jpg',
          caption: this.roomText(this, '41', 'TRI', true),
        },

        // Room #42
        {
          thumb: '/Images/Hotel/stars_2+/2s_42_SGL_1_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_42_SGL_1.jpg',
          caption: this.roomText(this, '42', 'SGL', false),
        },
        {
          thumb: '/Images/Hotel/stars_2+/2s_42_SGL_2_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_42_SGL_2.jpg',
          caption: this.roomText(this, '42', 'SGL', false),
        },
        {
          thumb: '/Images/Hotel/stars_2+/2s_42_SGL_3_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_42_SGL_3.jpg',
          caption: this.roomText(this, '42', 'SGL', false),
        },
        {
          thumb: '/Images/Hotel/stars_2+/2s_42_SGL_GS_1_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_42_SGL_GS_1.jpg',
          caption: this.roomText(this, '42', 'SGL', true),
        },

        // Room #43
        {
          thumb: '/Images/Hotel/stars_2+/2s_43_TRI_1_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_43_TRI_1.jpg',
          caption: this.roomText(this, '43', 'TRI', false),
        },
        {
          thumb: '/Images/Hotel/stars_2+/2s_43_TRI_2_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_43_TRI_2.jpg',
          caption: this.roomText(this, '43', 'TRI', false),
        },
        {
          thumb: '/Images/Hotel/stars_2+/2s_43_TRI_3_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_43_TRI_3.jpg',
          caption: this.roomText(this, '43', 'TRI', false),
        },
        {
          thumb: '/Images/Hotel/stars_2+/2s_43_TRI_4_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_43_TRI_4.jpg',
          caption: this.roomText(this, '43', 'TRI', false),
        },
        {
          thumb: '/Images/Hotel/stars_2+/2s_43_TRI_5_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_43_TRI_5.jpg',
          caption: this.roomText(this, '43', 'TRI', false),
        },
        {
          thumb: '/Images/Hotel/stars_2+/2s_43_TRI_GS_1_thumb.jpg',
          src: '/Images/Hotel/stars_2+/2s_43_TRI_GS_1.jpg',
          caption: this.roomText(this, '43', 'TRI', true),
        },

      ];
    },

    // list of 3* room for photo gallery
    rooms3sMedia() {
      return [
        // Room #101
        {
          thumb: '/Images/Hotel/stars_3/3s_101_DBB_1_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_101_DBB_1.jpg',
          caption: this.roomText(this, '101', 'DBB', false),
        },
        {
          thumb: '/Images/Hotel/stars_3/3s_101_DBB_2_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_101_DBB_2.jpg',
          caption: this.roomText(this, '101', 'DBB', false),
        },
        {
          thumb: '/Images/Hotel/stars_3/3s_101_DBB_3_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_101_DBB_3.jpg',
          caption: this.roomText(this, '101', 'DBB', false),
        },
        {
          thumb: '/Images/Hotel/stars_3/3s_101_DBB_4_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_101_DBB_4.jpg',
          caption: this.roomText(this, '101', 'DBB', false),
        },
        {
          thumb: '/Images/Hotel/stars_3/3s_101_DBB_GS_1_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_101_DBB_GS_1.jpg',
          caption: this.roomText(this, '101', 'DBB', true),
        },

        // Room #102
        {
          thumb: '/Images/Hotel/stars_3/3s_102_SGL_1_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_102_SGL_1.jpg',
          caption: this.roomText(this, '102', 'SGL', false),
        },
        {
          thumb: '/Images/Hotel/stars_3/3s_102_SGL_2_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_102_SGL_2.jpg',
          caption: this.roomText(this, '102', 'SGL', false),
        },
        {
          thumb: '/Images/Hotel/stars_3/3s_102_SGL_3_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_102_SGL_3.jpg',
          caption: this.roomText(this, '102', 'SGL', false),
        },
        {
          thumb: '/Images/Hotel/stars_3/3s_102_SGL_GS_1_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_102_SGL_GS_1.jpg',
          caption: this.roomText(this, '102', 'SGL', true),
        },
        {
          thumb: '/Images/Hotel/stars_3/3s_102_SGL_GS_2_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_102_SGL_GS_2.jpg',
          caption: this.roomText(this, '102', 'SGL', true),
        },

        // Room #103
        {
          thumb: '/Images/Hotel/stars_3/3s_103_DBL_1_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_103_DBL_1.jpg',
          caption: this.roomText(this, '103', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_3/3s_103_DBL_2_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_103_DBL_2.jpg',
          caption: this.roomText(this, '103', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_3/3s_103_DBL_3_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_103_DBL_3.jpg',
          caption: this.roomText(this, '103', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_3/3s_103_DBL_GS_1_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_103_DBL_GS_1.jpg',
          caption: this.roomText(this, '103', 'DBL', true),
        },
        {
          thumb: '/Images/Hotel/stars_3/3s_103_DBL_GS_2_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_103_DBL_GS_2.jpg',
          caption: this.roomText(this, '103', 'DBL', true),
        },
        {
          thumb: '/Images/Hotel/stars_3/3s_103_DBL_GS_3_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_103_DBL_GS_3.jpg',
          caption: this.roomText(this, '103', 'DBL', true),
        },

        // Room #104
        {
          thumb: '/Images/Hotel/stars_3/3s_104_DBL_1_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_104_DBL_1.jpg',
          caption: this.roomText(this, '104', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_3/3s_104_DBL_2_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_104_DBL_2.jpg',
          caption: this.roomText(this, '104', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_3/3s_104_DBL_3_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_104_DBL_3.jpg',
          caption: this.roomText(this, '104', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_3/3s_104_DBL_4_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_104_DBL_4.jpg',
          caption: this.roomText(this, '104', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_3/3s_104_DBL_5_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_104_DBL_5.jpg',
          caption: this.roomText(this, '104', 'DBL', false),
        },
        {
          thumb: '/Images/Hotel/stars_3/3s_104_DBL_GS_1_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_104_DBL_GS_1.jpg',
          caption: this.roomText(this, '104', 'DBL', true),
        },
        {
          thumb: '/Images/Hotel/stars_3/3s_104_DBL_GS_2_thumb.jpg',
          src: '/Images/Hotel/stars_3/3s_104_DBL_GS_2.jpg',
          caption: this.roomText(this, '104', 'DBL', true),
        },

      ]
    },

    // list of certificates photo gallery
    certificationMedia() {
      return [
        {
          thumb: 'Certification/mdrt_vila_1.jpg',
          src: 'Certification/mdrt_vila_1@2x.jpeg',
          caption: this.$t('company.certification.gallery.villa2s'),
        },
        {
          thumb: 'Certification/mdrt_vila_2.jpg',
          src: 'Certification/mdrt_vila_2@2x.jpeg',
          caption: this.$t('company.certification.gallery.villa3s'),
        },
        {
          thumb: 'Certification/mdrt_restaurant.jpg',
          src: 'Certification/mdrt_restaurant@2x.jpeg',
          caption: this.$t('company.certification.gallery.restaurant'),
        },
      ];
    },
  },

  methods: {
    // toggle site language
    toggleLanguage() {
      // console.log(this.language);
      this.$root.$i18n.locale = this.language === 'ro-ro' ? 'en-us' : 'ro-ro';
      this.language = this.$root.$i18n.locale;
    },

    // create photo caption text
    roomText: (handle, roomNo, roomType, bath) => {
      const roomName = roomType !== 'APT' ? handle.$t('photoGallery.room') : handle.$t('photoGallery.apt');
      const bathText = bath ? `, ${handle.$t('photoGallery.bath')}` : '';
      // return photo caption text
      return `${roomName} #${roomNo} (${roomType})${bathText}`;
    },

    // open photo gallery
    openGallery(id, index) {
      this.$refs[id].showImage(index);
      // hide header
      this.showHeader = false;
    },
    // on photo gallery close, show header
    onCloseGallery() {
      // console.log('onCloseGallery');
      this.showHeader = true;
    },
  },

}
</script>

<style lang="sass" scoped>
.navBtnGroup
  margin-top: 0px

</style>

