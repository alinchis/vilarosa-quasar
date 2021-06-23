<template>
  <div
    v-ripple:purple
    class="row btn-box justify-center shadow-6 cursor-pointer"
    :class="[ isCurrent ? 'is-current' : 'not-current']"
    @click="routeTo(routeName)"
  >
    <div
      class="icon-box text-center row"
    >
      <q-icon :name="iconName" class="icon-item" size="40px"/>
    </div>

    <div
      v-if="$q.screen.width > 768"
      class="text-box row items-center non-selectable"
    >
      <p class="text-item text-center no-margin">{{ labelText }}</p>
    </div>

    <q-tooltip v-if="$q.screen.width <= 768">
      {{ labelText }}
    </q-tooltip>

  </div>
</template>

<script>
export default {
  name: "NavButton",
  props: [ 'labelText', 'iconName', 'routeName' ],

  data() {
    return {
      isCurrent: false,
    }
  },

  methods: {
    routeTo(routeName) {
      const currentRoute = sessionStorage.getItem('routeName');
      // console.log(currentRoute);
      // this.setCurrent();
      if ( currentRoute !== routeName) {
        // deselect last active button
        const currentBtn = document.getElementById(`${currentRoute}Btn`);
        currentBtn.classList.remove('is-current');
        currentBtn.classList.add('not-current');
        // set new active button
        const newBtn = document.getElementById(`${routeName}Btn`);
        newBtn.classList.add('is-current');
        newBtn.classList.remove('not-current');
        // change route
        this.$router.push({name: routeName});
      }
    },
  },

  created() {
    this.isCurrent =  sessionStorage.getItem('routeName') === this.routeName;
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

.is-current
  background-color: darkred
  border-color: white
  p
    color: white
  .icon-item
    color: white

.not-current
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
  .not-current:hover
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
