<template>
  <q-markup-table flat square class="bg-transparent q-mt-lg fit">

    <!-- table header -->
    <thead>
    <!-- header row -->
    <tr>
      <th class="text-left">
        <q-icon name="las la-star"></q-icon>
        <q-icon name="las la-star"></q-icon>
      </th>
      <th class="text-right">
        <q-icon name="las la-star"></q-icon>
        <q-icon name="las la-star"></q-icon>
        <q-icon name="las la-star-half"></q-icon>
      </th>
      <th class="text-right">
        <q-icon name="las la-star"></q-icon>
        <q-icon name="las la-star"></q-icon>
        <q-icon name="las la-star"></q-icon>
      </th>
    </tr>
    </thead>

    <!-- table body -->
    <tbody>

    <!-- icons row -->
    <tr class="row">
      <td class="row text-left">
        <q-icon class="flex text-dark" style="width: 46px; padding: 0 0 16px 24px;">
          <img src="~assets/Icons/shower.svg" style="width: 46px; padding: 0 0 16px 24px;"/>
        </q-icon>
        <q-icon class="flex text-dark" style="width: 46px; padding: 0 0 16px 24px;">
          <img src="~assets/Icons/hairdryer.svg" style="width: 46px; padding: 0 0 16px 24px;"/>
        </q-icon>
        <q-icon class="flex text-dark" style="width: 46px; padding: 0 0 16px 24px;">
          <img src="~assets/Icons/lcd_tv.svg" style="width: 46px; padding: 0 0 16px 24px;"/>
        </q-icon>
        <q-icon class="flex text-dark" style="width: 46px; padding: 0 0 16px 24px;">
          <img src="~assets/Icons/minibar.svg" style="width: 46px; padding: 0 0 16px 24px;"/>
        </q-icon>
        <q-icon class="flex text-dark" style="width: 46px; padding: 0 0 16px 24px;">
          <img src="~assets/Icons/wifi.svg" style="width: 46px; padding: 0 0 16px 24px;"/>
        </q-icon>
      </td>

      <td class="row text-left">
        <q-icon class="flex text-dark" style="width: 46px; padding: 0 0 16px 24px;">
          <img src="~assets/Icons/ac.svg" style="width: 46px; padding: 0 0 16px 24px;"/>
        </q-icon>
        <q-icon class="flex text-dark" style="width: 46px; padding: 0 0 16px 24px;">
          <img src="~assets/Icons/safe_box.svg" style="width: 46px; padding: 0 0 16px 24px;"/>
        </q-icon>
      </td>

      <td class="row text-left">
        <q-icon class="flex text-dark" style="width: 46px; padding: 0 0 16px 24px;">
          <img src="~assets/Icons/ac.svg" style="width: 46px; padding: 0 0 16px 24px;"/>
        </q-icon>
      </td>
    </tr>

    <!-- text row -->
    <tr>
      <td class="text-left table-text">{{ $t('rooms.info.rooms2s') }}</td>
      <td class="text-left table-text">{{ $t('rooms.info.rooms2sp') }}</td>
      <td class="text-left table-text">{{ $t('rooms.info.rooms3s') }}</td>
    </tr>

    </tbody>
  </q-markup-table>
</template>

<script>
export default {
  name: "InfoTable"
}
</script>

<style lang="sass" scoped>
th
  font-size: 16px

.table-text
  font-size: 16px
  max-width: 300px
  overflow-wrap: normal

</style>
