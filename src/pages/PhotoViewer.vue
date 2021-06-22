<template>
  <q-page class="page-box fit column bg-grey-9 text-white hide-scrollbar">
    <!-- HEADER ---------------------------------------------------------------------------------------------------- -->
    <div v-if="!fullscreen" class="row bg-transparent fixed-top justify-center z-top">
      <!-- invisible div for centering items ----------------------------------------------------------------------- -->
      <div
        class="bg-transparent no-border q-ma-md gt-sm"
      >
        <div style="width: 54px; height: 54px"></div>
      </div>

      <!-- navigation buttons -------------------------------------------------------------------------------------- -->
      <q-btn-group
        rounded class="q-ma-md header-btn-group"
      >
        <q-btn
          color="grey-8"
          rounded
          no-caps
          :ripple="false"
          class="text-h6"
          @click="closeViewer"
          :label="roomType"
        />
        <q-btn
          text-color="black"
          color="amber-14"
          rounded
          no-caps
          :ripple="false"
          class="text-h6 no-pointer-events"
          :label="Room.name"
        />
        <q-btn
          round
          type="button"
          size="18px"
          color="deep-orange"
          @click="closeViewer"
          icon="arrow_back"
          class="q-ma-none"
          v-if="$q.screen.width < 1024"
        />
      </q-btn-group>

      <!-- close /back button -------------------------------------------------------------------------------------- -->
      <div class="bg-transparent no-border gt-sm">
        <q-btn
          round
          type="button"
          size="18px"
          color="deep-orange"
          @click="closeViewer"
          icon="arrow_back"
          class="q-ma-md"
        />
      </div>
    </div>

    <!-- BODY ------------------------------------------------------------------------------------------------------ -->
    <Carousel :Room="Room" @fullscreen="toggleFullscreen"></Carousel>
  </q-page>
</template>

<script>
import Carousel from 'components/Carousel';

export default {
  name: "PhotoViewer",

  data() {
    return {
      apDialog: true,
      maximizedToggle: true,
      slide: 1,
      carousel: false,
      fullscreen: false,
    };
  },

  components: { Carousel },

  computed: {
    Room() {
      return this.$q.sessionStorage.getItem('Room');
    },
    roomType() {
      return this.$t(`rooms.titles.${this.$q.sessionStorage.getItem('roomType')}`);
    }
  },

  methods: {
    closeViewer() {
      // hide dialog
      this.apDialog = false;
      // change route to gallery
      this.$router.push({ name: 'Gallery' });
    },

    toggleFullscreen(value) {
      this.fullscreen = value;
    },
  },

  created() {
    console.log(`@Viewer > props: ${this.Room}`)
  },

}
</script>

<style lang="sass" scoped>
</style>
