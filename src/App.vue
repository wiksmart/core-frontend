<template>
  <div>
    <PageLoader />
    <RouterView />
  </div>
</template>

<script>
  import PageLoader from './page/loading.vue';
  import { useI18n } from 'vue-i18n';

  export default {
    components: {
      PageLoader
    },
    setup() {
      const { t } = useI18n({useScope: 'global'});

      return {
        t
      }
    },
  }

</script>

<style lang="scss">
  @import './assets/style.scss';
</style>
