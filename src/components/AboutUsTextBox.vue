<template>
  <q-card class="company-card" bordered>
    <q-card-section horizontal>
<!--      <q-item>-->

<!--      </q-item>-->

<!--      <q-separator vertical />-->

      <q-card-section>
        {{ textContent }}
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "AboutUsTextBox",
  props: [ 'textContent' ],
}
</script>

<style lang="sass" scoped>
.company-card
  width: 100%
  max-width: 460px
  color: #525252
  margin: 0.5rem
</style>
