<template>
  <q-card class="auth-card bg-transparent col-xs-12 col-sm-4 q-ma-xs-sm" flat>

    <!-- header -->
    <q-card-section>

      <!-- title / acronym -->
      <div class="item-title">{{ auth.acronym }}</div>

      <!-- subtitle -->
      <div :id="'auth-box-' + idIndex" class="item-subtitle">
        {{ auth.title }}
      </div>

    </q-card-section>

    <!-- body -->
    <q-card-section class="q-pt-none">

      <!-- telephone -->
      <div class="item-label">
        <q-icon name="las la-phone" class="auth-icon"></q-icon>
        {{ auth.telephone }}
      </div>

      <!-- mail -->
      <div v-if="auth.mail" class="item-label">
        <q-icon name="las la-at" class="auth-icon"></q-icon>
        {{ auth.mail }}
      </div>

      <!-- website -->
      <div v-if="auth.website" class="item-label">
        <q-icon name="las la-globe-europe" class="auth-icon"></q-icon>
        {{ auth.website }}
      </div>

    </q-card-section>
  </q-card>
</template>

<script>
import { dom } from 'quasar';
const { height } = dom;

export default {
  name: "AboutUsAuthoritiesBox",
  props: [ 'idIndex', 'auth' ],

  // methods: {
  //   onResize (size) {
  //     if (this.idIndex != 3) this.style.minHeight = size.height;
  //   },
  // },
  //
  // mounted () {
  //   if (this.idIndex != 3) {
  //     const thirdItem = document.getElementById('auth-box-3');
  //     this.style.minHeight = height(thirdItem);
  //   }
  // },

}
</script>

<style lang="sass" scoped>
.auth-card
  //width: 100%
  //max-width: 400px
  //margin: 0.5rem

.item-title
  font-size: 1.1rem
  color: dimgray

.item-subtitle
  font-size: 0.9rem
  color: gray
  min-height: 65px

.item-label
  font-size: 0.9rem
  color: gray

.auth-icon
  color: steelblue

@media (max-width: $breakpoint-sm-max)
  .item-subtitle
    min-height: 0
</style>
