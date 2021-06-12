<template>
  <div
    v-if="gdprFlag"
    class="q-pa-md q-gutter-sm fixed-bottom"
    style="padding-bottom: 35px;"
  >
    <q-banner rounded class="bg-purple-8 text-white">
      <p class="gdpr-title">{{ $t('gdpr.title') }}</p>
      <p
        v-for="(msg, index) in $t('gdpr.message')"
        :key="index"
        class="gdpr-msg"
      >{{ msg }}</p>
      <template v-slot:action>
        <q-btn
          flat
          color="white"
          :label="$t('gdpr.btnText')"
          @click="setGdprFlag(false)"
        />
      </template>
    </q-banner>
  </div>
</template>

<script>
export default {
  name: "GdprMessage",

  data() {
    return {
      gdprFlag: this.$q.sessionStorage.getItem('gdprFlag'),
    }
  },

  methods: {
    setGdprFlag(value) {
      this.gdprFlag = value;
      this.$q.sessionStorage.set('gdprFlag', value);
    },
  },

  created() {
    this.gdprFlag = this.$q.sessionStorage.getItem('gdprFlag');
  },
}
</script>

<style lang="sass" scoped>
.navBtnGroup
  margin-top: 0px

.gdpr-title
  font-size: 1.2rem
  font-weight: bold
  margin: 0.5rem 0 2rem 0

.gdpr-msg
  font-size: 1rem
</style>
