<template>
  <page class="">
    <div>
      <!--  DESKTOP - WRAPPER ITEM   -->
      <q-layout v-if="$q.platform.is.desktop" class="bg-grey-9 text-white hide-scrollbar" view="lHr LpR lfr">

        <!-- HEADER -->
        <q-header reveal class="bg-transparent row justify-center">
          <div class="bg-transparent no-border q-ma-md gt-sm">
            <div style="width: 54px; height: 54px"></div>
          </div>

          <q-btn-group rounded class="q-ma-md header-btn-group">

            <q-btn
              color="amber"
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
        </q-header>

        <!-- PAGE -->
        <q-page-container class="q-gutter-md q-ma-xl bg-transparent"
                          style="min-width: 360px">
          <q-page class="fit q-ma-none row items-center justify-center">
            <div class="column">
              <div
                v-for="(album, index) in albums"
                :key="index"
                class="q-pa-xs q-ma-none row items-start q-gutter-md justify-center"
                style="min-width: 300px; max-width: 500px"
              >
                <div :ratio="4/3" class="col q-ma-none" style="max-width: 500px">
                  <q-card
                    v-ripple
                    class="column cursor-pointer"
                    :ratio="4/3"
                    @click="openAlbum(album.roomTypes)"

                  >
                    <q-img
                      :src="album.src"
                      class="col dimmed"
                      @mouseenter="$event.target.classList.toggle('dimmed')"
                      @mouseleave="$event.target.classList.toggle('dimmed')"
                    >
                    </q-img>
                    <div
                      class="text-h5 absolute-bottom text-center q-pa-sm"
                      style="background-color: rgba(0,0,0, 0.5)"
                    >
                      {{ album.title }}
                    </div>

                  </q-card>
                </div>
              </div>
            </div>

          </q-page>

        </q-page-container>
      </q-layout>
      <!--  DESKTOP - WRAPPER ITEM   -->


      <!--  MOBILE - WRAPPER ITEM   -->
      <q-layout v-if="$q.platform.is.mobile" class="bg-grey-9 text-white hide-scrollbar" view="lHr LpR lfr">

        <!-- HEADER -->
        <q-header reveal class="bg-transparent row justify-center">
          <div v-if="$q.screen.width >= 640" class="bg-transparent no-border">
            <q-btn
              round
              type="button"
              size="18px"
              color="deep-orange"
              @click="closeAlbum"
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
              @click="closeAlbum"
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
              @click="closeAlbum"
              label=":selectedItem"
            />
            <q-btn
              color="grey-8"
              rounded
              no-caps
              :ripple="false"
              class="text-h7 no-pointer-events"
              label=":date"
            />
          </q-btn-group>

          <div v-if="$q.screen.width >= 640" class="bg-transparent no-border q-ma-sm">
            <div style="width: 54px; height: 54px"></div>
          </div>

        </q-header>

        <!-- PAGE -->
        <q-page-container class="q-gutter-md q-ma-sm bg-transparent"
                          style="min-width: 300px">
          <div
              v-for="(album, index) in albums"
              :key="index"
              class="q-pa-xs q-ma-none row items-start q-gutter-md justify-center"
          >
            <q-responsive :ratio="16/9" class="col q-ma-none" style="max-height: 150px; max-width: 400px">
              <q-card
                  v-ripple
                  class="column cursor-pointer"
                  :ratio="16/9"
                  @click="openAlbum(album.roomTypes)"

              >
                <q-img
                    :src="album.src"
                    class="col"
                >
                </q-img>
                <div
                    class="text-h6 absolute-bottom text-center q-pa-sm"
                    style="background-color: rgba(0,0,0, 0.5)"
                >
                  {{ album.title }}
                </div>
              </q-card>
            </q-responsive>
          </div>
        </q-page-container>
      </q-layout>
      <!--  MOBILE - WRAPPER ITEM   -->

    </div>
  </page>
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
      console.log('@PhotoAlbums.vue :: @openAlbum >> selected album: ', roomType);
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
  },

}
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)

.text-example
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  width: 100%
  text-align: center
  margin: 10% 0
  min-height: 200px
  background-color: rgba(33, 33, 33, .3)
  align-items: center
</style>
