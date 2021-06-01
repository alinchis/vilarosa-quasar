<template>
  <q-card class="info-card bg-transparent" flat>
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
          :class="headerColor + ' q-pb-md q-pl-lg flex text-dark'"
          style="width: 40px; padding: 0 0 16px 16px;"
        >
          <img :srcset="iconPath" style="width: 40px; padding: 0 0 16px 16px;"/>
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
  //background-color: $blue-grey-2
  //width: 100%
  min-width: 250px
  max-width: 290px
  color: #525252
  margin: 0.5rem

.table-text
  font-size: 16px
  max-width: 300px
  overflow-wrap: normal

</style>
