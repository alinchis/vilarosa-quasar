<template>
  <div id="mapContainer">
    <MglMap :accessToken="accessToken" :mapStyle.sync="mapStyle">
      <MglNavigationControl position="top-right" />
      <MglGeolocateControl position="top-right" />
      <MglMarker :coordinates="center" color="darkred">
        <img
          v-if="this.$q.platform.is.desktop"
          slot="marker"
          src="/Logo/vr_map-marker.png"
          style="padding-bottom: 170px"
        />
        <img
          v-else
          slot="marker"
          src="/Logo/vr_map-marker.png"
          style="padding-bottom: 130px; width: 50%;"
        />
      </MglMarker>
    </MglMap>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglNavigationControl, MglGeolocateControl, MglMarker } from 'vue-mapbox';

export default {
  name: 'Map',
  components: { MglMap, MglNavigationControl, MglGeolocateControl, MglMarker },
  data() {
    return {
      accessToken: "pk.eyJ1IjoiYWxpbmNoaXMiLCJhIjoiY2toNHQ3eGdzMGVmaTJyczVyanN0dWY0YiJ9.cmyaXMKo-Q055Iu2y5V7fQ",
      mapStyle: "mapbox://styles/alinchis/ckpb1kops2wno17tpzn8u7jra",
      container:'mapContainer',
      center: [ 23.56613, 46.75659 ],
      zoom: 15,
    };
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },

};
</script>

<style lang="sass" scoped>
#mapContainer
  height: 100vh
  width: 100vw

</style>
