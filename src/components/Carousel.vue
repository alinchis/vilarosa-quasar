<template>
  <div class="carousel-box fit col column bg-blue">

    <!-- body ------------------------------------------------------------------------------------------------------ -->
    <div class="carousel-body col column">
      <!-- carousel -->
      <q-carousel
        swipeable
        animated
        v-model="virtualListIndex"
        infinite
        arrows
        :fullscreen.sync="fullscreen"
        class="carousel col"
      >
        <!-- slide -->
        <q-carousel-slide
          v-for="(photo, index) in Room.photos"
          :key="index"
          :name="index"
          class="img-box bg-grey-9 row items-center q-pa-none"
        >
          <!-- slide image -->
          <img
            :src="photo.src"
            :alt="Room.name"
            class="img-item"
            draggable="false"
          >
        </q-carousel-slide>

        <!-- control slot -->
        <template v-slot:control>
          <q-carousel-control
            position="bottom-right"
            :offset="[18, 18]"
          >
            <!-- toggle full-screen button -->
            <q-btn
              push round dense color="blue-9" text-color="white"
              size="lg"
              :icon="fullscreen ? 'las la-compress' : 'las la-expand'"
              @click="toggleFullscreen(virtualListIndex)"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>

    <!-- navigation ------------------------------------------------------------------------------------------------ -->
    <div
      v-if="!fullscreen && !mobileLandscape"
      class="carousel-nav bg-grey-10 row justify-center"
    >
      <!-- navigation thumbnails -->
      <q-virtual-scroll
        ref="thumbnailsScrollArea"
        virtual-scroll-horizontal
        :items="photoThumbnails"
        :virtual-scroll-item-size="180"
        :virtual-scroll-sticky-size-start="48"
        :virtual-scroll-sticky-size-end="48"
      >
        <template v-slot="{ item, index }">
          <q-responsive
            :ratio="16/9"
            style="height: 142px; max-height: 142px; width: 95px;"
            :key="index"
            class="q-ma-xs cursor-pointer"

          >
            <q-card
              :ref="`imgStrip_${index}`"
              class="img-strip-card column"
              v-bind:class="[index === virtualListIndex ? 'img-strip-card-selected' : '']"
              v-ripple
              @click="imgCardClick($event.target, index)"
              @mouseenter="$event.target.classList.toggle('dimmed')"
              @mouseleave="$event.target.classList.toggle('dimmed')"
            >
              <q-img
                :name="index"
                :src="item"
                spinner-color="white"
                class="col"
                style="border: #F2C037"
              ></q-img>
            </q-card>

          </q-responsive>
        </template>

      </q-virtual-scroll>

      <!-- button navigation left -->
      <div class="desktop-only absolute-bottom-left z-fab" style="bottom: 62px; left: 10px">
        <q-btn
          fab
          icon="keyboard_arrow_left"
          color="blue-9"
          @click="scrollLeft"
        />
      </div>
      <!-- button navigation right -->
      <div class="desktop-only absolute-bottom-right z-fab" style="bottom: 62px; right: 10px">
        <q-btn
          fab
          icon="keyboard_arrow_right"
          color="blue-9"
          @click="scrollRight"
        />
      </div>
    </div>

  </div>
</template>


<script>
import { AppFullscreen } from 'quasar'

export default {
  name: "Carousel",
  props: [ 'Room' ],

  data() {
    return {
      fullscreen: false,
      mobileLandscape: false,
      virtualListIndex: 0,
    }
  },

  computed: {
    photoThumbnails() {
      return this.Room.photos.map( item => item.thumb );
    },

    // mobileLandscape() {
    //   const landscape = this.$q.screen.width > this.$q.screen.height;
    //   return this.$q.platform.is.mobile && landscape ? true : false;
    // },
  },

  methods: {
    imgCardClick(element, cardIndex) {
      // console.log('previous element: ', this.$refs[`imgStrip_${this.virtualListIndex}`].classList);
      // this.$refs[`imgStrip_${this.virtualListIndex}`].classList.remove('img-strip-card-selected');
      // element.classList.add('img-strip-card-selected');
      this.virtualListIndex = cardIndex;
      this.$refs.thumbnailsScrollArea.scrollTo(cardIndex);
    },

    virtualScrollUpdatePosition({index}) {
      this.virtualListIndex = index
      // console.log('index: ', index);
    },

    scrollLeft() {
      this.virtualListIndex = this.virtualListIndex > 0 ? this.virtualListIndex - 1 : this.virtualListIndex;
      this.$refs.thumbnailsScrollArea.scrollTo(this.virtualListIndex);
      // console.log('virtualListIndex = ', this.virtualListIndex);
    },

    scrollRight() {
      this.virtualListIndex = this.virtualListIndex < this.photoThumbnails.length - 1 ? this.virtualListIndex + 1 : this.virtualListIndex;
      this.$refs.thumbnailsScrollArea.scrollTo(this.virtualListIndex);
      // console.log('virtualListIndex = ', this.virtualListIndex);
    },

    // imgStripHandleSwipe({evt, ...info}) {
    //   this.info = info
    //
    //   // native Javascript event
    //   // console.log(evt)
    // },

    toggleFullscreen(index) {
      this.fullscreen = !this.fullscreen;
      // change image height /remove navigation height
      // const currentRef = this.$refs[`imgStrip_${index}`];
      // console.log(currentRef);
      // currentRef.style = this.fullscreen ? "max-height: 100vh" : "max-height: calc( 100vh - 172px )";
      // emit event to parent, to hide navigation bar
      this.$emit('fullscreen', this.fullscreen);

      // toggle fullscreen @browser /hide address bar
      if (this.fullscreen) {
        // Requesting fullscreen mode:
        AppFullscreen.request()
          .then(() => {
            // success!
          })
          .catch(err => {
            // oh, no!!!
          })
      } else {
        // Exiting fullscreen mode:
        AppFullscreen.exit()
          .then(() => {
            // success!
          })
          .catch(err => {
            // oh, no!!!
          })
      }
    },

    // handleOrientationChange() {
    //   const orientation = window.screen.orientation.type
    //   if (orientation === "portrait-primary") {
    //     // portrait mode
    //     console.log('portrait');
    //     this.mobileLandscape = false;
    //     console.log(this.mobileLandscape)
    //   } else if (orientation === "landscape-primary") {
    //     // landscape mode
    //     console.log('landscape');
    //     this.mobileLandscape = this.$q.platform.is.mobile ? true : false
    //     console.log(this.mobileLandscape)
    //   }
    // },
  },

  created() {
    // console.log(`@Carousel > props: ${this.Room}`)
    // this.$q.platform.is.mobile ? this.fullScreen = true : this.fullScreen = false;
  },

  mounted() {
    // add event listener for screen orientation change
    // window.addEventListener("orientationchange", this.handleOrientationChange );
  },

}
</script>


<style lang="sass" scoped>

::-webkit-scrollbar
  width: 10px
  overflow: auto

::-webkit-scrollbar-thumb
  width: 10px
  background-color: rgba(155, 155, 155, .5)

::-webkit-scrollbar-thumb:hover
  background: rgba(255, 255, 255, .5)

.carousel-box
  //height: 100vh

.carousel-body
  background-color: darkolivegreen

.carousel-nav
  height: 172px
  width: 100vw

//.img-box
//  object-fit: contain
.img-item
  width: 100%
  //height: auto
  max-width: 100vw
  max-height: calc( 100vh - 172px )
  //margin: auto
  object-fit: contain

//@if this.$q.platform.is.desktop
//  .img-item
//    max-height: calc( 100vh - 172px )

.img-strip-card
  width: auto
  max-width: 250px
  border: #1D1D1D

.img-strip-card-selected
  border: 3px solid darkorange

//@media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape)
//  .img-item
//    max-height: 100vh

</style>
