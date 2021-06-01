<template>
  <q-markup-table flat square class="bg-transparent q-mt-lg fit">

    <!-- table header -->
    <thead>
      <!-- header row -->
      <tr>
        <th class="text-left">{{ $t('rooms.tableHeader.type') }}</th>
        <th class="text-right">{{ $t('rooms.tableHeader.code') }}</th>
        <th class="text-right">{{ $t('rooms.tableHeader.layout') }}</th>
        <th class="text-right">
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

      <!-- single room row -->
      <tr>
        <td class="text-left table-text">{{ $t('rooms.types.sglRoom') }}</td>
        <td class="text-right table-text">SGL</td>
        <td class="text-right table-text">
          <q-icon class="text-dark" style="width: 18px">
            <img src="~assets/Icons/single_bed.svg" style="width: 18px"/>
          </q-icon>
        </td>
        <td class="text-right table-text">{{ $t('rooms.recPrices.rooms2s.sglRoom') }}</td>
        <td class="text-right table-text">{{ $t('rooms.recPrices.rooms2sp.sglRoom') }}</td>
        <td class="text-right table-text">{{ $t('rooms.recPrices.rooms3s.sglRoom') }}</td>
      </tr>

      <!-- twin room row -->
      <tr>
        <td class="text-left table-text">{{ $t('rooms.types.dblRoom') }}</td>
        <td class="text-right table-text">DBL</td>
        <td class="text-right table-text">
          <q-icon class="text-dark q-pr-sm" style="width: 18px">
            <img src="~assets/Icons/single_bed.svg" style="width: 18px"/>
          </q-icon>
          <q-icon class="text-dark" style="width: 18px">
            <img src="~assets/Icons/single_bed.svg" style="width: 18px"/>
          </q-icon>
        </td>
        <td class="text-right table-text">{{ $t('rooms.recPrices.rooms2s.dblRoom') }}</td>
        <td class="text-right table-text">{{ $t('rooms.recPrices.rooms2sp.dblRoom') }}</td>
        <td class="text-right table-text">{{ $t('rooms.recPrices.rooms3s.dblRoom') }}</td>
      </tr>

      <!-- double room row -->
      <tr>
        <td class="text-left table-text">{{ $t('rooms.types.dbbRoom') }}</td>
        <td class="text-right table-text">DBB</td>
        <td class="text-right table-text">
          <q-icon class="text-dark" style="width: 36px">
            <q-img src="~assets/Icons/double_bed.svg" style="width: 36px"/>
          </q-icon>
        </td>
        <td class="text-right table-text">{{ $t('rooms.recPrices.rooms2s.dbbRoom') }}</td>
        <td class="text-right table-text">{{ $t('rooms.recPrices.rooms2sp.dbbRoom') }}</td>
        <td class="text-right table-text">{{ $t('rooms.recPrices.rooms3s.dbbRoom') }}</td>
      </tr>

      <!-- triple room row -->
      <tr>
        <td class="text-left table-text">{{ $t('rooms.types.triRoom') }}</td>
        <td class="text-right table-text">TRI</td>
        <td class="text-right table-text">
          <q-icon class="text-dark q-pr-sm" style="width: 18px">
            <img src="~assets/Icons/single_bed.svg" style="width: 18px"/>
          </q-icon>
          <q-icon class="text-dark q-pr-sm" style="width: 18px">
            <img src="~assets/Icons/single_bed.svg" style="width: 18px"/>
          </q-icon>
          <q-icon class="text-dark" style="width: 18px">
            <img src="~assets/Icons/single_bed.svg" style="width: 18px"/>
          </q-icon>
        </td>
        <td class="text-right table-text">{{ $t('rooms.recPrices.rooms2s.triRoom') }}</td>
        <td class="text-right table-text">{{ $t('rooms.recPrices.rooms2sp.triRoom') }}</td>
        <td class="text-right table-text">{{ $t('rooms.recPrices.rooms3s.triRoom') }}</td>
      </tr>

      <!-- apartment row -->
      <tr>
        <td class="text-left table-text">{{ $t('rooms.types.apt') }}</td>
        <td class="text-right table-text">APT</td>
        <td class="text-right table-text">
          <q-icon class="text-dark q-pr-xs" style="width: 18px">
            <img src="~assets/Icons/single_bed.svg" style="width: 18px"/>
          </q-icon>+
          <q-icon class="text-dark" style="width: 36px">
            <img src="~assets/Icons/double_bed.svg" style="width: 36px"/>
          </q-icon>
        </td>
        <td class="text-right table-text">{{ $t('rooms.recPrices.rooms2s.apt') }}</td>
        <td class="text-right table-text">{{ $t('rooms.recPrices.rooms2sp.apt') }}</td>
        <td class="text-right table-text">{{ $t('rooms.recPrices.rooms3s.apt') }}</td>
      </tr>

    </tbody>
  </q-markup-table>
</template>

<script>
export default {
  name: "PricesTable"
}
</script>

<style lang="sass" scoped>
th
  font-size: 16px

.table-text
  font-size: 16px

</style>
