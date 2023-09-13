globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/node-fetch-native/dist/polyfill.mjs';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/ofetch/dist/node.mjs';
import destr from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/scule/dist/index.mjs';
import { klona } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/klona/dist/index.mjs';
import { hash } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/pathe/dist/index.mjs';

function isObject(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject(value) && isObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (typeof object[key] !== "undefined" && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/nuxt-github-pages/",
    "buildAssetsDir": "assets",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/assets/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "motion": {
      "directives": {
        "pop-bottom": {
          "initial": {
            "scale": 0,
            "opacity": 0,
            "y": 100
          },
          "visible": {
            "scale": 1,
            "opacity": 1,
            "y": 0
          }
        }
      }
    }
  },
  "motion": {}
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"C:/Users/CYL/Desktop/光隆/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\CYL\\Desktop\\光隆","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\CYL\\Desktop\\光隆\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\CYL\\Desktop\\光隆\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\CYL\\Desktop\\光隆\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"d8ce-NmZup5hBzkp2YXSA8d+4JW63AyM\"",
    "mtime": "2023-08-03T07:18:39.832Z",
    "size": 55502,
    "path": "../../.output/public/favicon.ico"
  },
  "/faviconNuxt.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-08-01T11:29:31.406Z",
    "size": 4286,
    "path": "../../.output/public/faviconNuxt.ico"
  },
  "/assets/about.650b2864.js": {
    "type": "application/javascript",
    "etag": "\"83a-pavNuGU89WYQ5b8iRO2B9oukVY0\"",
    "mtime": "2023-09-13T09:00:00.470Z",
    "size": 2106,
    "path": "../../.output/public/assets/about.650b2864.js"
  },
  "/assets/banner.acdf97e4.jpg": {
    "type": "image/jpeg",
    "etag": "\"811e-OtYlQ3WUS3NMswQFniOJXm8lwGg\"",
    "mtime": "2023-09-13T09:00:00.463Z",
    "size": 33054,
    "path": "../../.output/public/assets/banner.acdf97e4.jpg"
  },
  "/assets/bubble.a5084d95.svg": {
    "type": "image/svg+xml",
    "etag": "\"634eb-YRdd5DBaQJi1eqgJNpmYPi9l7bk\"",
    "mtime": "2023-09-13T09:00:00.463Z",
    "size": 406763,
    "path": "../../.output/public/assets/bubble.a5084d95.svg"
  },
  "/assets/bubble2.18b98f3a.svg": {
    "type": "image/svg+xml",
    "etag": "\"70796-x5sjSifbFRKdMwFsgi8Tdq9hyzw\"",
    "mtime": "2023-09-13T09:00:00.464Z",
    "size": 460694,
    "path": "../../.output/public/assets/bubble2.18b98f3a.svg"
  },
  "/assets/bubble4.72ad84de.svg": {
    "type": "image/svg+xml",
    "etag": "\"3c737-fV7PDMuE7H/DXQIcCDJNPnjGSzQ\"",
    "mtime": "2023-09-13T09:00:00.463Z",
    "size": 247607,
    "path": "../../.output/public/assets/bubble4.72ad84de.svg"
  },
  "/assets/Bubbles.5ca739db.js": {
    "type": "application/javascript",
    "etag": "\"2e6-P9BgmGGPlhyouZupOZ4eGrotJxc\"",
    "mtime": "2023-09-13T09:00:00.464Z",
    "size": 742,
    "path": "../../.output/public/assets/Bubbles.5ca739db.js"
  },
  "/assets/ding.833abc32.jpg": {
    "type": "image/jpeg",
    "etag": "\"4c06-KBxlK+LhHkSXMGxuFicNh2/isdQ\"",
    "mtime": "2023-09-13T09:00:00.463Z",
    "size": 19462,
    "path": "../../.output/public/assets/ding.833abc32.jpg"
  },
  "/assets/doctor.23613969.png": {
    "type": "image/png",
    "etag": "\"331e-XFsJIoQMjZkuexAZOWxAAqWDgJA\"",
    "mtime": "2023-09-13T09:00:00.463Z",
    "size": 13086,
    "path": "../../.output/public/assets/doctor.23613969.png"
  },
  "/assets/entry.896c339f.js": {
    "type": "application/javascript",
    "etag": "\"2bcad-cWmzWq/fKvh/aa/YwpA1I0aC9SA\"",
    "mtime": "2023-09-13T09:00:00.471Z",
    "size": 179373,
    "path": "../../.output/public/assets/entry.896c339f.js"
  },
  "/assets/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-09-13T09:00:00.463Z",
    "size": 3630,
    "path": "../../.output/public/assets/error-404.23f2309d.css"
  },
  "/assets/error-404.51dd22fe.js": {
    "type": "application/javascript",
    "etag": "\"8d2-jAYtR88DAnlQ8Pl4E3z4+SDm5Kc\"",
    "mtime": "2023-09-13T09:00:00.470Z",
    "size": 2258,
    "path": "../../.output/public/assets/error-404.51dd22fe.js"
  },
  "/assets/error-500.4612ff54.js": {
    "type": "application/javascript",
    "etag": "\"756-zgkJbbG6aH807W6+RvV3LL/SkCc\"",
    "mtime": "2023-09-13T09:00:00.470Z",
    "size": 1878,
    "path": "../../.output/public/assets/error-500.4612ff54.js"
  },
  "/assets/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-09-13T09:00:00.464Z",
    "size": 1950,
    "path": "../../.output/public/assets/error-500.aa16ed4d.css"
  },
  "/assets/heart.f08dfe3e.png": {
    "type": "image/png",
    "etag": "\"2cc0-6N7S5GhDyfA+gayBmQtaOoDRtnA\"",
    "mtime": "2023-09-13T09:00:00.463Z",
    "size": 11456,
    "path": "../../.output/public/assets/heart.f08dfe3e.png"
  },
  "/assets/index.1399e444.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"29-nFnuD3mTqvGpkChyQV7D+CqdLb8\"",
    "mtime": "2023-09-13T09:00:00.464Z",
    "size": 41,
    "path": "../../.output/public/assets/index.1399e444.css"
  },
  "/assets/index.5738e0b2.js": {
    "type": "application/javascript",
    "etag": "\"405c-EuPABA2HYrMCPfH5a6/o/GdoKOo\"",
    "mtime": "2023-09-13T09:00:00.470Z",
    "size": 16476,
    "path": "../../.output/public/assets/index.5738e0b2.js"
  },
  "/assets/index.9fdd27cc.js": {
    "type": "application/javascript",
    "etag": "\"7216-gnLn7QUpSS5frchO9VLSR6YkC8M\"",
    "mtime": "2023-09-13T09:00:00.470Z",
    "size": 29206,
    "path": "../../.output/public/assets/index.9fdd27cc.js"
  },
  "/assets/kuo.fcd51a2b.jpg": {
    "type": "image/jpeg",
    "etag": "\"3ed2-RDEIDM/E6yTRGkpGX0zIoLbz6ko\"",
    "mtime": "2023-09-13T09:00:00.463Z",
    "size": 16082,
    "path": "../../.output/public/assets/kuo.fcd51a2b.jpg"
  },
  "/assets/lin.ccea6cc9.jpg": {
    "type": "image/jpeg",
    "etag": "\"335f-v3r96Gql61SLKh+bB72jOxsurps\"",
    "mtime": "2023-09-13T09:00:00.463Z",
    "size": 13151,
    "path": "../../.output/public/assets/lin.ccea6cc9.jpg"
  },
  "/assets/logo.0ea3eb47.svg": {
    "type": "image/svg+xml",
    "etag": "\"18ae-609DHi+g70e1VQbvxvPIGOT10Dg\"",
    "mtime": "2023-09-13T09:00:00.463Z",
    "size": 6318,
    "path": "../../.output/public/assets/logo.0ea3eb47.svg"
  },
  "/assets/main.956681fe.svg": {
    "type": "image/svg+xml",
    "etag": "\"2925-Ivg2gvPeudLVMItStD1LNqx96qA\"",
    "mtime": "2023-09-13T09:00:00.458Z",
    "size": 10533,
    "path": "../../.output/public/assets/main.956681fe.svg"
  },
  "/assets/med.04e110e3.png": {
    "type": "image/png",
    "etag": "\"24f1-ohnpqH+t24ymTbfy+2oH9E/HZq4\"",
    "mtime": "2023-09-13T09:00:00.463Z",
    "size": 9457,
    "path": "../../.output/public/assets/med.04e110e3.png"
  },
  "/assets/MyFooter.4cebb0b3.js": {
    "type": "application/javascript",
    "etag": "\"156-NuzXfmDz/MQ/WsmrcAAjsOoLkrY\"",
    "mtime": "2023-09-13T09:00:00.466Z",
    "size": 342,
    "path": "../../.output/public/assets/MyFooter.4cebb0b3.js"
  },
  "/assets/Navbar.d43df316.js": {
    "type": "application/javascript",
    "etag": "\"fb1-b/EFfgsRQ4DmFObZhp/qzddxWik\"",
    "mtime": "2023-09-13T09:00:00.470Z",
    "size": 4017,
    "path": "../../.output/public/assets/Navbar.d43df316.js"
  },
  "/assets/nuxt-link.9a5ab4ae.js": {
    "type": "application/javascript",
    "etag": "\"10f7-v+iWYbTtmcwH3F/cggUFxJ+T7vI\"",
    "mtime": "2023-09-13T09:00:00.470Z",
    "size": 4343,
    "path": "../../.output/public/assets/nuxt-link.9a5ab4ae.js"
  },
  "/assets/projects.98e1981c.js": {
    "type": "application/javascript",
    "etag": "\"62f-9hV4bsuQTFoUiSamO18UX9b7Zaw\"",
    "mtime": "2023-09-13T09:00:00.470Z",
    "size": 1583,
    "path": "../../.output/public/assets/projects.98e1981c.js"
  },
  "/assets/projectsEdit.c60778ba.js": {
    "type": "application/javascript",
    "etag": "\"688-fyoItgwu1gH3FL+SKj+Oia9ioWM\"",
    "mtime": "2023-09-13T09:00:00.470Z",
    "size": 1672,
    "path": "../../.output/public/assets/projectsEdit.c60778ba.js"
  },
  "/assets/services.5ea52342.js": {
    "type": "application/javascript",
    "etag": "\"1e0-qfWlSkftolEpDr/z/9ziCYWP9Vo\"",
    "mtime": "2023-09-13T09:00:00.470Z",
    "size": 480,
    "path": "../../.output/public/assets/services.5ea52342.js"
  },
  "/assets/Services.b9a76a48.js": {
    "type": "application/javascript",
    "etag": "\"d24-32JLvwTkpZ3iUg1SMTGCx0CqCuQ\"",
    "mtime": "2023-09-13T09:00:00.464Z",
    "size": 3364,
    "path": "../../.output/public/assets/Services.b9a76a48.js"
  },
  "/assets/services.d30fb3ec.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"24-zE8DCTgjvYb3F6AupuQ4W5fiUIU\"",
    "mtime": "2023-09-13T09:00:00.464Z",
    "size": 36,
    "path": "../../.output/public/assets/services.d30fb3ec.css"
  },
  "/assets/skeleton.852c9421.png": {
    "type": "image/png",
    "etag": "\"3422-f9fbW40satY4guXW3sJPV7PEFX8\"",
    "mtime": "2023-09-13T09:00:00.463Z",
    "size": 13346,
    "path": "../../.output/public/assets/skeleton.852c9421.png"
  },
  "/assets/yeh.6944d2fd.jpg": {
    "type": "image/jpeg",
    "etag": "\"55cf-NQOIFwbceX6VbN+xId0uGaCXf2o\"",
    "mtime": "2023-09-13T09:00:00.463Z",
    "size": 21967,
    "path": "../../.output/public/assets/yeh.6944d2fd.jpg"
  },
  "/assets/_id_.8b2331d0.js": {
    "type": "application/javascript",
    "etag": "\"a04-PmMaVOn2FuiB7ZlLQys9l98yg/Q\"",
    "mtime": "2023-09-13T09:00:00.470Z",
    "size": 2564,
    "path": "../../.output/public/assets/_id_.8b2331d0.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/assets":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_QA8dNm = () => import('../renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/**', handler: _lazy_QA8dNm, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
trapUnhandledNodeErrors();

export { useRuntimeConfig as a, getRouteRules as g, localFetch as l, useNitroApp as u };
//# sourceMappingURL=nitro-prerenderer.mjs.map
