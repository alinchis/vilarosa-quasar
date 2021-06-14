<template>
  <q-markup-table flat square class="fit bg-transparent q-mt-md-lg q-mt-xs-md q-pa-sm">

    <!-- DESKTOP --------------------------------------------------------------------------------------------------- -->
    <!-- table header -->
    <thead v-if="$q.screen.width > 640">
      <!-- header row -->
      <tr>
        <th class="text-left header-text">{{ $t('rooms.tableHeader.type') }}</th>
        <th class="text-right header-text">{{ $t('rooms.tableHeader.code') }}</th>
        <th class="text-right header-text">{{ $t('rooms.tableHeader.layout') }}</th>
        <th class="text-right header-text">
          <q-icon name="las la-star"></q-icon>
          <q-icon name="las la-star"></q-icon>
        </th>
        <th class="text-right header-text">
          <q-icon name="las la-star"></q-icon>
          <q-icon name="las la-star"></q-icon>
          <q-icon name="las la-star-half-alt"></q-icon>
        </th>
        <th class="text-right header-text">
          <q-icon name="las la-star"></q-icon>
          <q-icon name="las la-star"></q-icon>
          <q-icon name="las la-star"></q-icon>
        </th>
      </tr>
    </thead>

    <!-- table body -->
    <tbody v-if="$q.screen.width > 640">

      <!-- single room row -->
      <tr>
        <td class="text-left table-text">{{ $t('rooms.types.sglRoom') }}</td>
        <td class="text-right table-text">SGL</td>
        <td class="text-right table-text">
          <q-icon class="text-dark icon-single-bed">
            <img src="~assets/Icons/single_bed.svg" class="icon-single-bed"/>
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
          <q-icon class="text-dark q-pr-sm">
            <img src="~assets/Icons/single_bed.svg" class="icon-single-bed"/>
          </q-icon>
          <q-icon class="text-dark icon-single-bed">
            <img src="~assets/Icons/single_bed.svg" class="icon-single-bed"/>
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
          <q-icon class="text-dark icon-double-bed">
            <q-img src="~assets/Icons/double_bed.svg" class="icon-double-bed"/>
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
          <q-icon class="text-dark q-pr-sm">
            <img src="~assets/Icons/single_bed.svg" class="icon-single-bed"/>
          </q-icon>
          <q-icon class="text-dark q-pr-sm">
            <img src="~assets/Icons/single_bed.svg" class="icon-single-bed"/>
          </q-icon>
          <q-icon class="text-dark icon-single-bed">
            <img src="~assets/Icons/single_bed.svg" class="icon-single-bed"/>
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
          <q-icon class="text-dark q-pr-xs">
            <img src="~assets/Icons/single_bed.svg" class="icon-single-bed"/>
          </q-icon>+
          <q-icon class="text-dark icon-double-bed">
            <img src="~assets/Icons/double_bed.svg" style="width: 36px"/>
          </q-icon>
        </td>
        <td class="text-right table-text">{{ $t('rooms.recPrices.rooms2s.apt') }}</td>
        <td class="text-right table-text">{{ $t('rooms.recPrices.rooms2sp.apt') }}</td>
        <td class="text-right table-text">{{ $t('rooms.recPrices.rooms3s.apt') }}</td>
      </tr>

    </tbody>
    <!-- DESKTOP --------------------------------------------------------------------------------------------------- -->


    <!-- MOBILE ---------------------------------------------------------------------------------------------------- -->
    <!-- 2* table header ---------------------------------------------------------------------------------------- 2* -->
    <thead v-if="$q.screen.width <= 640">
    <!-- header row -->
    <tr>
      <th class="text-left">
        <q-icon name="las la-star"></q-icon>
        <q-icon name="las la-star"></q-icon>
      </th>
      <th class="text-center"></th>
      <th class="text-right"></th>
      <th class="text-right"></th>
    </tr>
    </thead>

    <!-- 2* table body -->
    <tbody v-if="$q.screen.width <= 640">

    <!-- twin room row -->
    <tr>
      <td class="text-left table-text">{{ $t('rooms.types.dblRoom') }}</td>
      <td class="text-center table-text">DBL</td>
      <td class="text-right table-text">
        <q-icon class="text-dark q-pr-sm">
          <img src="~assets/Icons/single_bed.svg" class="icon-single-bed"/>
        </q-icon>
        <q-icon class="text-dark icon-single-bed">
          <img src="~assets/Icons/single_bed.svg" class="icon-single-bed"/>
        </q-icon>
      </td>
      <td class="text-right table-text">{{ $t('rooms.recPrices.rooms2s.dblRoom') }}</td>
    </tr>

    <!-- double room row -->
    <tr>
      <td class="text-left table-text">{{ $t('rooms.types.dbbRoom') }}</td>
      <td class="text-center table-text">DBB</td>
      <td class="text-right table-text">
        <q-icon class="text-dark icon-double-bed">
          <q-img src="~assets/Icons/double_bed.svg" class="icon-double-bed"/>
        </q-icon>
      </td>
      <td class="text-right table-text">{{ $t('rooms.recPrices.rooms2s.dbbRoom') }}</td>
    </tr>

    <!-- triple room row -->
    <tr>
      <td class="text-left table-text">{{ $t('rooms.types.triRoom') }}</td>
      <td class="text-center table-text">TRI</td>
      <td class="text-right table-text">
        <q-icon class="text-dark q-pr-sm">
          <img src="~assets/Icons/single_bed.svg" class="icon-single-bed"/>
        </q-icon>
        <q-icon class="text-dark q-pr-sm">
          <img src="~assets/Icons/single_bed.svg" class="icon-single-bed"/>
        </q-icon>
        <q-icon class="text-dark icon-single-bed">
          <img src="~assets/Icons/single_bed.svg" class="icon-single-bed"/>
        </q-icon>
      </td>
      <td class="text-right table-text">{{ $t('rooms.recPrices.rooms2s.triRoom') }}</td>
    </tr>

    <!-- apartment row -->
    <tr>
      <td class="text-left table-text">{{ $t('rooms.types.apt') }}</td>
      <td class="text-center table-text">APT</td>
      <td class="text-right table-text">
        <q-icon class="text-dark q-pr-xs">
          <img src="~assets/Icons/single_bed.svg" class="icon-single-bed"/>
        </q-icon>+
        <q-icon class="text-dark icon-double-bed">
          <img src="~assets/Icons/double_bed.svg" class="icon-double-bed"/>
        </q-icon>
      </td>
      <td class="text-right table-text">{{ $t('rooms.recPrices.rooms2s.apt') }}</td>
    </tr>

    </tbody>

    <!-- 2s+ table header -------------------------------------------------------------------------------------- 2*+ -->
    <thead v-if="$q.screen.width <= 640">
    <!-- header row -->
    <tr>
      <th class="text-left">
        <q-icon name="las la-star"></q-icon>
        <q-icon name="las la-star"></q-icon>
        <q-icon name="las la-star-half-alt"></q-icon>
      </th>
      <th class="text-center"></th>
      <th class="text-right"></th>
      <th class="text-right"></th>
    </tr>
    </thead>

    <!-- 2*+ table body -->
    <tbody v-if="$q.screen.width <= 640">

    <!-- single room row -->
    <tr>
      <td class="text-left table-text">{{ $t('rooms.types.sglRoom') }}</td>
      <td class="text-center table-text">SGL</td>
      <td class="text-right table-text">
        <q-icon class="text-dark icon-single-bed">
          <img src="~assets/Icons/single_bed.svg" class="icon-single-bed"/>
        </q-icon>
      </td>
      <td class="text-right table-text">{{ $t('rooms.recPrices.rooms2sp.sglRoom') }}</td>
    </tr>

    <!-- twin room row -->
    <tr>
      <td class="text-left table-text">{{ $t('rooms.types.dblRoom') }}</td>
      <td class="text-center table-text">DBL</td>
      <td class="text-right table-text">
        <q-icon class="text-dark q-pr-sm">
          <img src="~assets/Icons/single_bed.svg" class="icon-single-bed"/>
        </q-icon>
        <q-icon class="text-dark icon-single-bed">
          <img src="~assets/Icons/single_bed.svg" class="icon-single-bed"/>
        </q-icon>
      </td>
      <td class="text-right table-text">{{ $t('rooms.recPrices.rooms2sp.dblRoom') }}</td>
    </tr>

    <!-- triple room row -->
    <tr>
      <td class="text-left table-text">{{ $t('rooms.types.triRoom') }}</td>
      <td class="text-center table-text">TRI</td>
      <td class="text-right table-text">
        <q-icon class="text-dark q-pr-sm">
          <img src="~assets/Icons/single_bed.svg" class="icon-single-bed"/>
        </q-icon>
        <q-icon class="text-dark q-pr-sm">
          <img src="~assets/Icons/single_bed.svg" class="icon-single-bed"/>
        </q-icon>
        <q-icon class="text-dark icon-single-bed">
          <img src="~assets/Icons/single_bed.svg" class="icon-single-bed"/>
        </q-icon>
      </td>
      <td class="text-right table-text">{{ $t('rooms.recPrices.rooms2sp.triRoom') }}</td>
    </tr>

    </tbody>

    <!-- 3* table header ---------------------------------------------------------------------------------------- 3* -->
    <thead v-if="$q.screen.width <= 640">
    <!-- header row -->
    <tr>
      <th class="text-left">
        <q-icon name="las la-star"></q-icon>
        <q-icon name="las la-star"></q-icon>
        <q-icon name="las la-star"></q-icon>
      </th>
      <th class="text-right"></th>
      <th class="text-right"></th>

      <th class="text-right"></th>
    </tr>
    </thead>

    <!-- 3* table body -->
    <tbody v-if="$q.screen.width <= 640">

    <!-- single room row -->
    <tr>
      <td class="text-left table-text">{{ $t('rooms.types.sglRoom') }}</td>
      <td class="text-center table-text">SGL</td>
      <td class="text-right table-text">
        <q-icon class="text-dark icon-single-bed">
          <img src="~assets/Icons/single_bed.svg" class="icon-single-bed"/>
        </q-icon>
      </td>
      <td class="text-right table-text">{{ $t('rooms.recPrices.rooms3s.sglRoom') }}</td>
    </tr>

    <!-- twin room row -->
    <tr>
      <td class="text-left table-text">{{ $t('rooms.types.dblRoom') }}</td>
      <td class="text-center table-text">DBL</td>
      <td class="text-right table-text">
        <q-icon class="text-dark q-pr-sm">
          <img src="~assets/Icons/single_bed.svg" class="icon-single-bed"/>
        </q-icon>
        <q-icon class="text-dark icon-single-bed">
          <img src="~assets/Icons/single_bed.svg" class="icon-single-bed"/>
        </q-icon>
      </td>
      <td class="text-right table-text">{{ $t('rooms.recPrices.rooms3s.dblRoom') }}</td>
    </tr>

    <!-- double room row -->
    <tr>
      <td class="text-left table-text">{{ $t('rooms.types.dbbRoom') }}</td>
      <td class="text-center table-text">DBB</td>
      <td class="text-right table-text">
        <q-icon class="text-dark icon-double-bed">
          <q-img src="~assets/Icons/double_bed.svg" class="icon-double-bed"/>
        </q-icon>
      </td>
      <td class="text-right table-text">{{ $t('rooms.recPrices.rooms3s.dbbRoom') }}</td>
    </tr>

    </tbody>
    <!-- MOBILE ---------------------------------------------------------------------------------------------------- -->


  </q-markup-table>
</template>

<script>
export default {
  name: "PricesTable"
}
</script>

<style lang="sass" scoped>
th
  font-size: 1rem

.table-text
  font-size: 1rem

.icon-single-bed
  width: 18px

.icon-double-bed
  width: 36px

@media (width <= 640px)
  .table-text
    font-size: 1rem
    padding: 0.3rem 0.5rem 0.3rem 0.5rem

  .icon-single-bed
    width: 14px

  .icon-double-bed
    width: 28px

</style>
