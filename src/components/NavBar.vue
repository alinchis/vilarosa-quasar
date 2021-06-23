<template>
  <nav outline class="row">
    <!--        <q-btn icon="las la-history" stack no-caps outline size="md" color="red-10" :label="$t('navMenu.aboutUs')" to="/aboutUs"/>-->
    <!--        <q-btn icon="las la-hotel" stack no-caps outline color="red-10" :label="$t('navMenu.ourServices')" to="/ourServices"/>-->
    <!--        <q-btn icon="las la-concierge-bell" stack no-caps outline color="red-10" :label="$t('navMenu.prices')" to="/rooms"/>-->
    <!--        <q-btn icon="las la-map-marked" stack no-caps outline color="red-10" :label="$t('navMenu.map')" to="/map"/>-->
    <nav-button id="AboutUsBtn" iconName="las la-history" :labelText="$t('navMenu.aboutUs')" routeName="AboutUs"/>
    <nav-button id="OurServicesBtn" iconName="las la-hotel" :labelText="$t('navMenu.ourServices')" routeName="OurServices"/>
    <nav-button id="RoomsBtn" iconName="las la-concierge-bell" :labelText="$t('navMenu.prices')" routeName="Rooms"/>
    <nav-button id="MapBtn" iconName="las la-map-marked" :labelText="$t('navMenu.map')" routeName="Map"/>
  </nav>
</template>

<script>
import NavButton from "components/NavButton";

export default {
  name: "NavBar",
  components: { NavButton },
}
</script>

<style scoped>

</style>
