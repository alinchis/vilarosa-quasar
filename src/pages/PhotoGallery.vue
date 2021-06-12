<template>
  <div class="">
    <div
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
      class="transparent"
    >
      <!--  DESKTOP - WRAPPER ITEM   -->
      <q-layout v-if="$q.platform.is.desktop" class="bg-grey-9 text-white hide-scrollbar" view="lHr LpR lfr">

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
              @click="closeGallery"
              :label="$t('rooms.titles.roomsPhotos')"
            />
            <q-btn
              color="amber-14"
              rounded
              no-caps
              :ripple="false"
              class="text-h6 no-pointer-events"
              :label="$t(`rooms.titles['${roomType}']`)"
            />
            <q-btn
              round
              type="button"
              size="18px"
              color="deep-orange"
              @click="closeGallery"
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
              @click="closeGallery"
              icon="arrow_back"
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
                v-for="(room, index) in photoAlbums[roomType]"
                :key="index"
                class="q-pa-xs q-ma-none row items-start q-gutter-md justify-center"
                style="min-width: 300px; max-width: 500px"
              >
                <div :ratio="4/3" class="col q-ma-none" style="max-width: 500px">
                  <q-card
                    v-ripple
                    class="column cursor-pointer"
                    :ratio="4/3"
                    @click="openViewer(room)"

                  >
                    <q-img
                      :src="room.photos[0].src"
                      class="col dimmed"
                      @mouseenter="$event.target.classList.toggle('dimmed')"
                      @mouseleave="$event.target.classList.toggle('dimmed')"
                    >
                    </q-img>
                    <div
                      class="text-h5 absolute-bottom text-center q-pa-sm"
                      style="background-color: rgba(0,0,0, 0.5)"
                    >
                      {{ room.name }}
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
        <div reveal class="bg-transparent row justify-center z-fab" style="position: fixed; top: 0px;">
          <div v-if="$q.screen.width >= 640" class="bg-transparent no-border">
            <q-btn
              round
              type="button"
              size="18px"
              color="deep-orange"
              @click="closeGallery"
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
              @click="closeGallery"
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
              @click="closeGallery"
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
        <q-page-container class="q-gutter-md q-ma-sm bg-transparent"
                          style="min-width: 300px">
          <div
            v-for="(room, index) in photoAlbums[roomType]"
            :key="index"
            class="q-pa-xs q-ma-none row items-start q-gutter-md justify-center"
          >
            <q-responsive :ratio="16/9" class="col q-ma-none" style="max-height: 150px; max-width: 400px">
              <q-card
                v-ripple
                class="column cursor-pointer"
                :ratio="16/9"
                @click="openViewer(room)"

              >
                <q-img
                  :src="room.photos[0].src"
                  class="col"
                >
                </q-img>
                <div
                  class="text-h6 absolute-bottom text-center q-pa-sm"
                  style="background-color: rgba(0,0,0, 0.5)"
                >
                  {{ room.name }}
                </div>
              </q-card>
            </q-responsive>
          </div>
        </q-page-container>
      </q-layout>
      <!--  MOBILE - WRAPPER ITEM   -->

    </div>
  </div>
</template>

<script>

export default {
  name: "PhotoGallery",

  data() {
    return {
      maximizedToggle: true,
      paDialog: true,
    };
  },

  computed: {
    roomType() {
      return this.$q.sessionStorage.getItem('roomType');
    },

    // rooms photo albums
    photoAlbums() {
      return {
        rooms2s: [
          // Room #10
          {
            name: this.roomText(this, '10', 'DBL'),
            photos: [
              {
                thumb: '/Images/Hotel/stars_2/2s_10_DBL_1_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_10_DBL_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_10_DBL_2_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_10_DBL_2.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_10_DBL_3_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_10_DBL_3.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_10_DBL_4_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_10_DBL_4.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_10_DBL_GS_1_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_10_DBL_GS_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_10_DBL_GS_2_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_10_DBL_GS_2.jpg',
              },
            ],
          },

          // Room #12
          {
            name: this.roomText(this, '12', 'DBL'),
            photos: [
              {
                thumb: '/Images/Hotel/stars_2/2s_12_DBL_1_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_12_DBL_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_12_DBL_2_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_12_DBL_2.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_12_DBL_3_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_12_DBL_3.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_12_DBL_GS_1_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_12_DBL_GS_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_12_DBL_GS_2_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_12_DBL_GS_2.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_12_DBL_GS_3_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_12_DBL_GS_3.jpg',
              },
            ],
          },

          // Room #15
          {
            name: this.roomText(this, '15', 'APT'),
            photos: [
              {
                thumb: '/Images/Hotel/stars_2/2s_15_APT_1_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_15_APT_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_15_APT_2_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_15_APT_2.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_15_APT_3_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_15_APT_3.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_15_APT_4_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_15_APT_4.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_15_APT_5_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_15_APT_5.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_15_APT_6_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_15_APT_6.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_15_APT_GS_1_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_15_APT_GS_1.jpg',
              },
            ],
          },

          // Room #20
          {
            name: this.roomText(this, '20', 'DBL'),
            photos: [
              {
                thumb: '/Images/Hotel/stars_2/2s_20_DBL_1_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_20_DBL_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_20_DBL_2_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_20_DBL_2.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_20_DBL_3_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_20_DBL_3.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_20_DBL_GS_1_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_20_DBL_GS_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_20_DBL_GS_2_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_20_DBL_GS_2.jpg',
              },
            ],
          },

          // Room #22
          {
            name: this.roomText(this, '22', 'DBL'),
            photos: [
              {
                thumb: '/Images/Hotel/stars_2/2s_22_DBL_1_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_22_DBL_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_22_DBL_2_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_22_DBL_2.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_22_DBL_3_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_22_DBL_3.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_22_DBL_GS_1_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_22_DBL_GS_1.jpg',
              },
            ],
          },

          // Room #23
          {
            name: this.roomText(this, '23', 'DBB'),
            photos: [
              {
                thumb: '/Images/Hotel/stars_2/2s_23_DBB_1_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_23_DBB_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_23_DBB_2_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_23_DBB_2.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_23_DBB_3_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_23_DBB_3.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_23_DBB_4_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_23_DBB_4.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_23_DBB_GS_1_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_23_DBB_GS_1.jpg',
              },
            ],
          },

          // Room #30
          {
            name: this.roomText(this, '30', 'DBB'),
            photos: [
              {
                thumb: '/Images/Hotel/stars_2/2s_30_DBB_1_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_30_DBB_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_30_DBB_2_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_30_DBB_2.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_30_DBB_3_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_30_DBB_3.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_30_DBB_4_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_30_DBB_4.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_30_DBB_GS_1_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_30_DBB_GS_1.jpg',
              },
            ],
          },

          // Room #33
          {
            name: this.roomText(this, '33', 'DBB'),
            photos: [
              {
                thumb: '/Images/Hotel/stars_2/2s_33_DBB_1_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_33_DBB_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_33_DBB_2_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_33_DBB_2.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_33_DBB_3_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_33_DBB_3.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_33_DBB_4_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_33_DBB_4.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2/2s_33_DBB_GS_1_thumb.jpg',
                src: '/Images/Hotel/stars_2/2s_33_DBB_GS_1.jpg',
              },
            ],
          },
        ],

        rooms2sp: [
          // Room #40
          {
            name: this.roomText(this, '40', 'DBL'),
            photos: [
              {
                thumb: '/Images/Hotel/stars_2+/2s_40_DBL_1_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_40_DBL_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2+/2s_40_DBL_2_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_40_DBL_2.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2+/2s_40_DBL_3_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_40_DBL_3.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2+/2s_40_DBL_4_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_40_DBL_4.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2+/2s_40_DBL_GS_1_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_40_DBL_GS_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2+/2s_40_DBL_GS_2_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_40_DBL_GS_2.jpg',
              },
            ],
          },

          // Room #41
          {
            name: this.roomText(this, '41', 'TRI'),
            photos: [
              {
                thumb: '/Images/Hotel/stars_2+/2s_41_TRI_1_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_41_TRI_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2+/2s_41_TRI_2_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_41_TRI_2.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2+/2s_41_TRI_3_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_41_TRI_3.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2+/2s_41_TRI_4_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_41_TRI_4.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2+/2s_41_TRI_5_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_41_TRI_5.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2+/2s_41_TRI_6_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_41_TRI_6.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2+/2s_41_TRI_GS_1_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_41_TRI_GS_1.jpg',
              },
            ],
          },

          // Room #42
          {
            name: this.roomText(this, '42', 'SGL'),
            photos: [
              {
                thumb: '/Images/Hotel/stars_2+/2s_42_SGL_1_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_42_SGL_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2+/2s_42_SGL_2_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_42_SGL_2.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2+/2s_42_SGL_3_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_42_SGL_3.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2+/2s_42_SGL_GS_1_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_42_SGL_GS_1.jpg',
              },
            ],
          },

          // Room #43
          {
            name: this.roomText(this, '43', 'TRI'),
            photos: [
              {
                thumb: '/Images/Hotel/stars_2+/2s_43_TRI_1_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_43_TRI_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2+/2s_43_TRI_2_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_43_TRI_2.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2+/2s_43_TRI_3_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_43_TRI_3.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2+/2s_43_TRI_4_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_43_TRI_4.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2+/2s_43_TRI_5_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_43_TRI_5.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_2+/2s_43_TRI_GS_1_thumb.jpg',
                src: '/Images/Hotel/stars_2+/2s_43_TRI_GS_1.jpg',
              },
            ],
          },
        ],

        rooms3s: [
          // Room #101
          {
            name: this.roomText(this, '101', 'DBB'),
            photos: [
              {
                thumb: '/Images/Hotel/stars_3/3s_101_DBB_1_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_101_DBB_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_3/3s_101_DBB_2_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_101_DBB_2.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_3/3s_101_DBB_3_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_101_DBB_3.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_3/3s_101_DBB_4_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_101_DBB_4.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_3/3s_101_DBB_GS_1_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_101_DBB_GS_1.jpg',
              },
            ],
          },

          // Room #102
          {
            name: this.roomText(this, '102', 'SGL'),
            photos: [
              {
                thumb: '/Images/Hotel/stars_3/3s_102_SGL_1_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_102_SGL_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_3/3s_102_SGL_2_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_102_SGL_2.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_3/3s_102_SGL_3_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_102_SGL_3.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_3/3s_102_SGL_GS_1_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_102_SGL_GS_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_3/3s_102_SGL_GS_2_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_102_SGL_GS_2.jpg',
              },
            ],
          },

          // Room #103
          {
            name: this.roomText(this, '103', 'DBL'),
            photos: [
              {
                thumb: '/Images/Hotel/stars_3/3s_103_DBL_1_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_103_DBL_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_3/3s_103_DBL_2_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_103_DBL_2.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_3/3s_103_DBL_3_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_103_DBL_3.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_3/3s_103_DBL_GS_1_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_103_DBL_GS_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_3/3s_103_DBL_GS_2_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_103_DBL_GS_2.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_3/3s_103_DBL_GS_3_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_103_DBL_GS_3.jpg',
              },
            ],
          },

          // Room #104
          {
            name: this.roomText(this, '104', 'DBL'),
            photos: [
              {
                thumb: '/Images/Hotel/stars_3/3s_104_DBL_1_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_104_DBL_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_3/3s_104_DBL_2_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_104_DBL_2.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_3/3s_104_DBL_3_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_104_DBL_3.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_3/3s_104_DBL_4_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_104_DBL_4.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_3/3s_104_DBL_5_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_104_DBL_5.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_3/3s_104_DBL_GS_1_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_104_DBL_GS_1.jpg',
              },
              {
                thumb: '/Images/Hotel/stars_3/3s_104_DBL_GS_2_thumb.jpg',
                src: '/Images/Hotel/stars_3/3s_104_DBL_GS_2.jpg',
              },
            ],
          },
        ],

      }

    },
  },

  methods: {
    // create photo caption text
    roomText: (handle, roomNo, roomType) => {
      const roomName = roomType !== 'APT' ? handle.$t('photoGallery.room') : handle.$t('photoGallery.apt');
      // return photo caption text
      return `${roomName} #${roomNo} (${roomType})`;
    },

    openViewer: function (Room) {
      console.log('@PhotoAlbums.vue :: @openAlbum >> selected section: ', Room);
      this.$q.sessionStorage.set('Room', Room);
      this.$router.push({ name: 'RoomPhotos' })
    },
    closeGallery: function () {
      // console.log('@PhotoAlbums.vue :: close album');
      this.$q.sessionStorage.remove('Room');
      // return to photo albums
      this.$router.push({ name: 'Albums' });
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
