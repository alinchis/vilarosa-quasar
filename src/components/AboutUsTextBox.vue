<template>
  <q-card class="company-card bg-transparent" flat>
    <q-card-section class="">
      <q-icon :name="iconName" size="xl" class="text-blue q-pb-md q-pl-lg"></q-icon>

<!--      <q-separator vertical />-->

      <div style="width: 100%">
        {{ textContent }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "AboutUsTextBox",
  props: [ 'textContent', 'iconName' ],
}
</script>

<style lang="sass" scoped>
.company-card
  //background-color: $blue-grey-2
  //width: 100%
  min-width: 250px
  max-width: 440px
  color: #525252
  margin: 0.5rem
</style>
