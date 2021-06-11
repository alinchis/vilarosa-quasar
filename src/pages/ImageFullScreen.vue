<template>
  <!-- directive -->
  <div v-viewer class="images clearfix">
    <template v-for="(image, index) in images">
        <img :src="image.src" class="image cover" :key="index"/>
    </template>
  </div>
</template>

<script>
// import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import Vue from 'vue'
Vue.use(VueViewer)


export default {
  name: "Gallery",
  // components: {
  //   VueViewer,
  // },
  data() {
    return {
      images: [
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
      ],

      options: {
        "inline": true,
        "button": true,
        "navbar": true,
        "title": true,
        "toolbar": true,
        "tooltip": true,
        "movable": true,
        "zoomable": true,
        "rotatable": false,
        "scalable": true,
        "transition": true,
        "fullscreen": false,
        "keyboard": true,
        // "url": "data-source"
      },
    };
  },

  methods: {
    // create photo caption text
    roomText: (handle, roomNo, roomType, bath) => {
      const roomName = roomType !== 'APT' ? handle.$t('photoGallery.room') : handle.$t('photoGallery.apt');
      const bathText = bath ? `, ${handle.$t('photoGallery.bath')}` : '';
      // return photo caption text
      return `${roomName} #${roomNo} (${roomType})${bathText}`;
    },

    show() {
      this.$viewerApi({
        // images: this.images,
      })
    },
  },
}
</script>

<style lang="sass" scoped>
.image
  height: 200px
  cursor: pointer
  margin: 5px
  display: inline-block
  border-radius: 5px

img.cover
  object-fit: cover

img:hover
  box-shadow: 0 0 2px 2px rgba(100, 10, 10, 0.5)
</style>
