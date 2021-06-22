<template>
  <q-page class="page-box fit row bg-grey-9 text-white hide-scrollbar items-center">
    <!-- HEADER ------------------------------------------------------------------------------------------------ -->
    <div class="row bg-transparent fixed-top justify-center z-top">
      <!-- invisible div for centering items ------------------------------------------------------------------- -->
      <div
        class="bg-transparent no-border q-ma-md gt-sm"
      >
        <div style="width: 54px; height: 54px"></div>
      </div>

      <!-- navigation buttons ---------------------------------------------------------------------------------- -->
      <q-btn-group rounded class="q-ma-md header-btn-group">
        <q-btn
          color="amber"
          text-color="black"
          rounded
          no-caps
          :ripple="false"
          class="text-h6 no-pointer-events"
          :label="$t('rooms.titles.roomsPhotos')"
        />
        <q-btn
          round
          type="button"
          size="18px"
          color="deep-orange"
          @click="closeAlbum"
          icon="clear"
          class="q-ma-none"
          v-if="$q.screen.width < 1024"
        />
      </q-btn-group>

      <!-- close /back button ---------------------------------------------------------------------------------- -->
      <div class="bg-transparent no-border gt-sm">
        <q-btn
          round
          type="button"
          size="18px"
          color="deep-orange"
          @click="closeAlbum"
          icon="clear"
          class="q-ma-md"
        />
      </div>
    </div>

    <!-- BODY -------------------------------------------------------------------------------------------------- -->
    <div class="body-box fit row items-center justify-center">
      <div class="albums-box column">
        <q-card
          v-for="(album, index) in albums"
          :key="index"
          class="album-box column cursor-pointer"
          v-ripple
          @click="openAlbum(album.roomTypes)"
        >
          <q-img
            :src="album.src"
            class="fit desktop-only col dimmed"
            @mouseenter="hoverCssToggle"
            @mouseleave="hoverCssToggle"
            style="border-radius: 3px"
          >
          </q-img>
          <q-img
            :src="album.src"
            class="fit mobile-only col"
            style="border-radius: 3px"
          >
          </q-img>
          <div
            class="img-box-text absolute-bottom text-center q-pa-sm"
          >
            {{ album.title }}
          </div>
        </q-card>
      </div>

    </div>

  </q-page>
</template>

<script>

export default {
  name: "AlbumSections",

  data() {
    return {
      maximizedToggle: true,
      paDialog: true,
    };
  },

  computed: {
    albums() {
      return [
        {
          src: '/Images/Hotel/thumb_h2@2x.jpg',
          title: this.$t('rooms.titles.rooms2s'),
          roomTypes: 'rooms2s',
        },
        {
          src: '/Images/Hotel/thumb_h2p@2x.jpg',
          title: this.$t('rooms.titles.rooms2sp'),
          roomTypes: 'rooms2sp',
        },
        {
          src: '/Images/Hotel/thumb_h3@2x.jpg',
          title: this.$t('rooms.titles.rooms3s'),
          roomTypes: 'rooms3s',
        },
      ]
    }
  },

  methods: {
    openAlbum: function (roomType) {
      // console.log('@PhotoAlbums.vue :: @openAlbum >> selected album: ', roomType);
      this.$q.sessionStorage.set('roomType', roomType);
      this.$router.push({ name: 'Gallery' });
    },
    closeAlbum: function () {
      // console.log('@PhotoAlbums.vue :: close album');
      this.$q.sessionStorage.remove('roomType');
      // return to page where albums were opened
      if(sessionStorage.routeName) {
        this.$router.push({ name: sessionStorage.routeName });
        // if user loaded directly a secondary page, no routeName is saved in sessionStorage, route to 'Rooms' page
      } else {
        this.$router.push({ name: 'Rooms' });
      }

    },

    hoverCssToggle(event) {
      event.target.classList.toggle('dimmed');
    },
  },

}
</script>

<style lang="sass" scoped>
.page-box
  padding: 5rem 0 5rem 0
.album-box
  width: 600px
  height: 250px
  margin-bottom: 1rem

.img-box-text
  font-size: 1.4rem
  background-color: rgba(0,0,0, 0.4)

@media (width <= 1024px) and (width > 768px)
  //.album-box
  //  width: 500px
  //  height: 220px
  //.img-box-text
  //  font-size: 1.2rem

@media (width <= 768px) and (width > 420px)
  .page-box
    padding: 6rem 0 2rem 0
  .album-box
    width: 400px
    height: 200px
  .img-box-text
    font-size: 1.2rem

@media (width <= 420px)
  .page-box
    padding: 6.5rem 0 1rem 0
  .albums-box
    width: 320px
  .album-box
    width: 320px
    height: 160px

  .img-box-text
    font-size: 1.2rem

</style>
