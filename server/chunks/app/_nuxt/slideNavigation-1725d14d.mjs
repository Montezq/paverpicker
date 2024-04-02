import { a as useSlideStore } from '../server.mjs';
import 'vue';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import 'vue/server-renderer';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

function slideNavigation(to, from) {
  const slideStore = useSlideStore();
  if (from && from.path !== to.path) {
    slideStore.setIsBackNavigation(true);
  } else {
    slideStore.setIsBackNavigation(false);
  }
}

export { slideNavigation as default };
//# sourceMappingURL=slideNavigation-1725d14d.mjs.map
