<template>
  <div id="mapContainer" :style="cssVars()">
    <MglMap :accessToken="accessToken" :mapStyle.sync="mapStyle">
      <MglNavigationControl position="top-right" />
      <MglGeolocateControl position="top-right" />
      <MglMarker :coordinates="center" color="red" />
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
      center: [ 23.56614, 46.75656 ],
      zoom: 15,
    };
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },

  methods: {

    cssVars() {
      //https://www.telerik.com/blogs/passing-variables-to-css-on-a-vue-component
      return {
        "--height": window.innerHeight + "px",
        "--width": window.innerWidth + "px",
      };
    },
  },
};
</script>

<style lang="sass" scoped>
#mapContainer
  height: var(--height)
  width: var(--width)
</style>
