<template>
  <nav outline class="row">
    <router-link
      v-for="navItem in navList"
      :key="navItem.id"
      :to="{ name: navItem.routeName}"
      v-ripple:purple
      class="row btn-box justify-center shadow-6 cursor-pointer"
    >
      <div
        class="icon-box text-center row"
      >
        <q-icon :name="navItem.iconName" class="icon-item" size="40px"/>
      </div>

      <div
        v-if="$q.screen.width > 768"
        class="text-box row items-center non-selectable"
      >
        <p class="text-item text-center no-margin">{{ navItem.itemText }}</p>
      </div>

      <q-tooltip v-if="$q.screen.width <= 768">
        {{ navItem.itemText }}
      </q-tooltip>
    </router-link>

  </nav>
</template>

<script>
// import NavButton from "components/NavButton";

export default {
  name: "NavBar",

  computed: {
    navList() {
      return [
        {
          id: 'AboutUsBtn',
          routeName: 'AboutUs',
          iconName: 'las la-history',
          itemText: this.$t('navMenu.aboutUs'),
        },
        {
          id: 'OurServicesBtn',
          routeName: 'OurServices',
          iconName: 'las la-hotel',
          itemText: this.$t('navMenu.ourServices'),
        },
        {
          id: 'RoomsBtn',
          routeName: 'Rooms',
          iconName: 'las la-concierge-bell',
          itemText: this.$t('navMenu.rooms'),
        },
        {
          id: 'MapBtn',
          routeName: 'Map',
          iconName: 'las la-map-marked',
          itemText: this.$t('navMenu.map'),
        },
      ]
    },
  },

}
</script>

<style lang="sass" scoped>
.btn-box
  width: 9rem
  height: 4rem
  margin: 0.5rem 0.5rem 0.5rem 0.5rem
  padding: 0.5rem
  border-radius: 2rem
  border-style: solid
  border-color: darkred
  position: relative
  background-color: white

a
  text-decoration: none

.router-link-active
  text-decoration: none
  background-color: darkred
  border-color: white
  p
    color: white
  .icon-item
    color: white

.not-active
  background-color: white

.icon-box
  width: 2rem
  height: 2rem
  margin-right: 0.5rem
.icon-item
  size: 48px
  color: darkred
  margin: 0

.text-box
  heigh: 2rem
.text-item
  font-size: .9rem
  color: darkred
  width: 4rem

@media (hover)
  .not-active:hover
    background-color: $amber-3

@media (width <= 1024px) and (width > 768px)


@media (width <= 768px) and (width > 420px)
  .btn-box
    width: 3.5rem
    height: 3.5rem
    margin: .5rem 0.25rem 0.25rem 0.25rem

  .icon-box
    width: 1.5rem
    height: 1.5rem
    margin-right: 0.5rem
  .icon-item
    size: 34px
    color: darkred
    margin: 0

@media (width <= 420px)
  .btn-box
    width: 3.5rem
    height: 3.5rem
    margin: 0.5rem 0.25rem 0.25rem 0.25rem

  .icon-box
    width: 1.5rem
    height: 1.5rem
    margin-right: 0.5rem
  .icon-item
    size: 34px
    color: darkred
    margin: 0

</style>
