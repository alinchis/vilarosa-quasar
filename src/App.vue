<template>
  <div id="q-app">
    <div id="">
      <div class="q-pa-md">
        <div class="col"></div>
        <div class="q-pa-md col-6 items-center q-gutter-md">
          <q-card
            class="my-card text-white"
            style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
          >
            <q-card-section>
              <div class="text-h3">Vila Rosa s-a inchis!</div>
            </q-card-section>

            <q-separator inset />

            <q-card-section class="text-h5 q-pt-none">
              <p>Incepand cu 30 Septembrie 2022, Vila Rosa se inchide permanent.</p>
              <p>Dorim sa ne orientam catre alte activitati.</p>
              <p>Multumim tuturor pentru increderea acordata!</p>
            </q-card-section>
          </q-card>

          <q-card
            class="my-card text-white"
            style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
          >
            <q-card-section>
              <div class="text-h3">Vila Rosa is closed!</div>
            </q-card-section>

            <q-separator inset />

            <q-card-section class="text-h5 q-pt-none">
              <p>Starting September 30th 2022, Vila Rosa is closing.</p>
              <p>We will focus on other activities.</p>
              <p>We would like to thank everybody for the confidence in our services!</p>
            </q-card-section>
          </q-card>
        </div>
        <div class="col"></div>
      </div>
    </div>
<!--    <router-view />-->
  </div>
</template>

<script>
export default {
  name: 'App',

  created() {
    // set default language
    // localStorage.setItem('language', 'ro-ro');
  },

}
</script>

<style lang="sass" scoped>

#overlay
  display: block
  position: fixed /* Sit on top of the page content */
  width: 100% /* Full width (cover the whole page) */
  height: 100% /* Full height (cover the whole page) */
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: rgba(0,0,0,0.5) /* Black background with opacity */
  z-index: 2 /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer /* Add a pointer on hover */

</style>
