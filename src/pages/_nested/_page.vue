<script>
import PageExtend from '@/modules/nuxt-virtual-content/tmpl/PageExtend';
export default {
  extends: PageExtend,
  nuxtI18n: {
    paths: {
      en: '/:nested/:page',
      de: '/:nested/:page'
    }
  }
};
</script>
