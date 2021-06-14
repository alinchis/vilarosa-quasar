<template>
  <q-card class="bg-transparent info-card col-xs-12 col-md-4" flat>
    <q-card-section class="">
      <q-icon
        v-for="(headerIcon, headerIndex) in headerIcons"
        :key="'h' + headerIndex"
        :name="headerIcon"
        size="md"
        :class="headerColor + ' q-pb-md q-pl-lg'"
      ></q-icon>

      <q-separator />

      <div class="row q-pt-md">
        <q-icon
          v-for="(iconPath, iconIndex) in iconsPaths"
          :key="'i' + iconIndex"
          size="xl"
          :class="headerColor + ' q-pb-md q-pl-lg flex text-dark services-icon'"
        >
          <img :srcset="iconPath" class="services-img"/>
        </q-icon>
      </div>

      <div
        v-for="(textItem, tIndex) in textList"
        :key="'t' + tIndex"
        style="width: 100%"
        class="q-pb-sm"
      >
        {{ textItem }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "InfoTable",
  data() {
    return {
      iconsPaths: [],
    }
  },

  props: [ 'headerIcons', 'headerColor', 'iconsList', 'iconsColor', 'textList' ],

  created () {
    this.iconsPaths = this.iconsList.map( iconItem => `${require(`../assets/Icons/${iconItem}.svg`)}`);
  }
}
</script>

<style lang="sass" scoped>
.info-card
  font-size: 0.9rem
  color: #525252
  margin: 0rem

.services-icon
  width: 2.5rem
  padding: 0 0 1rem 1rem

.services-img
  width: 2.5rem
  padding: 0 0 1rem 1rem

</style>
