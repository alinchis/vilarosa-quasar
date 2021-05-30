<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',

  created() {
    // set default language
    // localStorage.setItem('language', 'ro-ro');
  }
}
</script>
