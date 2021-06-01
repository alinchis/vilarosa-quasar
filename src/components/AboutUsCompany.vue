<template>
  <div class="row full-width justify-center no-wrap">

    <q-card class="company-card bg-transparent" flat>
      <q-card-section>
<!--        <div class="item-title">{{ company.name }}</div>-->
        <div class="item-label">
          <q-icon name="las la-stamp" class="auth-icon"></q-icon>
          {{ company.id }}, {{ company.orcId }}
        </div>
        <div class="item-label">
          <q-icon name="las la-map-marker" class="auth-icon"></q-icon>
          {{ company.address }}
        </div>
        <div class="item-label">
          <q-icon name="las la-phone" class="auth-icon"></q-icon>
          <q-icon name="lab la-whatsapp" class="auth-icon"></q-icon>
          <q-icon name="las la-sms" class="auth-icon"></q-icon>
          {{ company.mobile }}
        </div>
        <div class="item-label">
          <q-icon name="las la-phone" class="auth-icon"></q-icon>
          {{ company.telephone }}
        </div>
      </q-card-section>
    </q-card>

    <q-card class="company-card bg-transparent" flat>
      <q-card-section>
      <div class="item-label">
        <q-icon name="las la-at" class="auth-icon"></q-icon>
        {{ company.email.reception }}
      </div>

      <div class="item-label">
        <q-icon name="las la-at" class="auth-icon"></q-icon>
        {{ company.email.office }}
      </div>

      <div class="item-label">
        <q-icon name="las la-at" class="auth-icon"></q-icon>
        {{ company.email.GDPR }}
      </div>

      <div class="item-label">
        <q-icon name="las la-globe-europe" class="auth-icon"></q-icon>
        {{ company.website }}
      </div>
      </q-card-section>
    </q-card>

    <q-card class="company-card bg-transparent" flat>
      <q-card-section>
        <div class="item-label">
          <q-icon name="las la-certificate" class="auth-icon"></q-icon>
          {{ company.certification.MDRT }}
        </div>
        <div class="item-label">
          <q-icon name="las la-certificate" class="auth-icon"></q-icon>
          {{ company.certification.managerCEDES }}
        </div>
        <div class="item-label">
          <q-icon name="las la-certificate" class="auth-icon"></q-icon>
          {{ company.certification.managerANTREC }}
        </div>
        <div class="item-label">
          <q-icon name="las la-certificate" class="auth-icon"></q-icon>
          {{ company.certification.qualityCEDES }}
        </div>
      </q-card-section>
    </q-card>

  </div>
</template>

<script>
export default {
  name: "AboutUsCompany",
  props: [ 'company' ],
}
</script>

<style lang="sass" scoped>
.company-card
  width: 100%
  max-width: 460px
  margin: 0.5rem

.item-title
  font-size: 1.1rem

.item-label
  font-size: 0.85rem
  color: gray

.auth-icon
  color: $red-9
</style>
