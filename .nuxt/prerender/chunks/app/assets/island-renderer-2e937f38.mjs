import { defineComponent, createVNode } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/vue/index.mjs';
import { c as createError } from '../server.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/framesync/dist/es/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/popmotion/dist/es/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/style-value-types/dist/es/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/@vue/shared/index.js';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/vue/server-renderer/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/pathe/dist/index.mjs';

const components_islands = {};
const islandComponents = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: components_islands
});
const islandRenderer = /* @__PURE__ */ defineComponent({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${JSON.stringify(component)}`
      });
    }
    return () => createVNode(component || "span", { ...props.context.props, "nuxt-ssr-component-uid": "" });
  }
});

export { islandRenderer as default };
//# sourceMappingURL=island-renderer-2e937f38.mjs.map
