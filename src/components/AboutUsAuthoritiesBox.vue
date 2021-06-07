<template>
  <q-card class="auth-card bg-transparent" flat>
    <q-card-section>
      <div class="item-title">{{ auth.acronym }}</div>
      <div :id="'auth-box-' + idIndex" class="item-label" :style="style">
        {{ auth.title }}
<!--        <q-resize-observer @resize="onResize" />-->
      </div>
      </q-card-section>
<!--    <q-separator inset />-->
    <q-card-section class="q-pt-none">
      <div class="item-label">
        <q-icon name="las la-phone" class="auth-icon"></q-icon>
        {{ auth.telephone }}
      </div>

      <div v-if="auth.mail" class="item-label">
        <q-icon name="las la-at" class="auth-icon"></q-icon>
        {{ auth.mail }}
      </div>

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

  data () {
    return {
      style: { minHeight: '62px' },
    }
  },

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
  width: 100%
  max-width: 400px
  margin: 0.5rem

.item-title
  font-size: 1.1rem
  color: dimgray

.item-label
  font-size: 0.85rem
  color: gray

.auth-icon
  color: steelblue
</style>
