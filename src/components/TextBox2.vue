<template>
  <q-card class="company-card bg-transparent col-xs-12 col-sm-6" flat>
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
        class="body-text"
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
  //min-width: 250px
  //max-width: 490px
  color: #525252
  //margin: 0.5rem

.body-text
  font-size: 0.9rem

//@media (max-width: $breakpoint-sm-max)
//  .company-card
//    max-width: 405px

</style>
