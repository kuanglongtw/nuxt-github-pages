import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/CYL/Desktop/光隆/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}