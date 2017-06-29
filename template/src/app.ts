{{#bootstrapvue}}
import BootstrapVue from 'bootstrap-vue';
{{/bootstrapvue}}
import Vue from 'vue';
import VueRouter from 'vue-router';

import * as components from 'components';
import { App, } from 'components';

import router from 'router';

/* Initialize app */
Vue.use(VueRouter);
{{#bootstrapvue}}
Vue.use(BootstrapVue);
{{/bootstrapvue}}

const app = new App({
    components: components as any,
    el: '#app',
    router,
});
