<template>
  <q-card class="auth-card">
    <q-card-section>
      <div class="item-title">{{ auth.acronym }}</div>
      <div class="item-label">{{ auth.title }}</div>
      </q-card-section>
    <q-separator inset />
    <q-card-section>
      <div class="item-label">
        <q-icon name="las la-phone" class="auth-icon"></q-icon>
        {{ auth.telephone }}
      </div>

      <div v-if="auth.mail" class="item-label">
        <q-icon name="las la-at" class="auth-icon"></q-icon>
        {{ auth.mail }}
      </div>

      <div v-if="auth.website" class="item-label">
        <q-icon name="las la-globe-europe" class="auth-icon"></q-icon>
        {{ auth.website }}
      </div>

    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "AboutUsAuthoritiesBox",
  props: [ 'auth' ],
}
</script>

<style lang="sass" scoped>
.auth-card
  width: 100%
  max-width: 400px
  margin: 0.5rem

.item-title
  font-size: 1.1rem

.item-label
  font-size: 0.85rem
  color: gray

.auth-icon
  color: red
</style>
