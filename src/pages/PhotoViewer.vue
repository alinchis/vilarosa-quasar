<template>
  <div>
    <div>
      <!--  DESKTOP - WRAPPER ITEM   -->
      <q-layout v-if="$q.platform.is.desktop" class="bg-grey-9 text-white" view="lHr LpR lfr">
        <!-- HEADER -->
        <q-header reveal class="bg-transparent row justify-center">
          <div class="bg-transparent no-border q-ma-md gt-sm">
            <div style="width: 54px; height: 54px"></div>
          </div>

          <q-btn-group rounded class="q-ma-md header-btn-group">
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
        </q-header>

        <!-- PAGE -->
        <q-page-container
            class="bg-transparent fit"
            style="min-width: 360px;"
        >
          <Carousel :Room="Room"></Carousel>
        </q-page-container>
      </q-layout>
      <!--  DESKTOP - WRAPPER ITEM   -->


      <!--  MOBILE - WRAPPER ITEM   -->
      <q-layout v-if="$q.platform.is.mobile" class="bg-grey-9 text-white" view="lHr LpR lfr">
        <!-- HEADER -->
        <div reveal class="bg-transparent row justify-center z-fab" style="position: fixed; top: 0px;">
          <div v-if="$q.screen.width >= 640" class="bg-transparent no-border">
            <q-btn
                round
                type="button"
                size="18px"
                color="deep-orange"
                @click="closeViewer"
                icon="arrow_back"
                class="q-ma-sm"
            />
          </div>

          <q-btn-group rounded class="q-ma-sm header-btn-group">
            <q-btn
                round
                type="button"
                size="15px"
                color="deep-orange"
                @click="closeViewer"
                icon="arrow_back"
                class="q-ma-none"
                v-if="$q.screen.width < 640"
            />
            <q-btn
                color="amber-14"
                rounded
                no-caps
                :ripple="false"
                class="text-h7"
                @click="closeViewer"
                label=":date"
            />
            <q-btn
                color="grey-8"
                rounded
                no-caps
                :ripple="false"
                class="text-h7 no-pointer-events"
                :label="Room.name"
            />
          </q-btn-group>
        </div>

        <!-- PAGE -->
        <q-page-container
            class="bg-transparent fit"
            style="min-width: 300px;"
        >
          <Carousel :Room="Room"></Carousel>
        </q-page-container>
      </q-layout>
      <!--  MOBILE - WRAPPER ITEM   -->

    </div>
  </div>
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
  },

  created() {
    console.log(`@Viewer > props: ${this.Room}`)
  },

}
</script>

<style lang="sass" scoped>
.my-card
  width: 150px
  height: 150px
</style>
