<template>
  <q-card class="company-card bg-transparent" flat>
    <q-card-section class="">
      <q-icon
        v-for="(iconItem, iconIndex) in iconList"
        :key="'i' + iconIndex"
        :name="iconItem"
        size="xl"
        :class="textColor + ' q-pb-md q-pl-lg'"
      ></q-icon>

<!--      <q-separator vertical />-->

      <div
        style="width: 100%"
        v-for="(textItem, textIndex) in textContent"
        :key="'t' + textIndex"
      >
        {{ textItem }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "AboutUsTextBox",
  props: [ 'textContent', 'iconList', 'textColor' ],
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
