import Vue from 'Vue';
import vueCustomElement from 'vue-custom-element';

import Component from '@/components/atoms/Headline';

Vue.use(vueCustomElement);

Vue.customElement('custom-element', Component, {
  shadow: false
});
