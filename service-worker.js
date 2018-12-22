importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"
);

workbox.clientsClaim();

workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute([
  {
    "url": "asset-manifest.json",
    "revision": "e5bbc5adab78f7b7b26c07011e17b0c5"
  },
  {
    "url": "favicon.ico",
    "revision": "c92b85a5b907c70211f4ec25e29a8c4a"
  },
  {
    "url": "index.html",
    "revision": "7dd75cd01ae826282e6080950df33516"
  },
  {
    "url": "manifest.json",
    "revision": "2f717775d17bf3a581acf2903353545f"
  },
  {
    "url": "precache-manifest.40f60d6d5a55deabc9599d30ebc70824.js",
    "revision": "40f60d6d5a55deabc9599d30ebc70824"
  },
  {
    "url": "static/css/main.13fe6245.chunk.css",
    "revision": "8e8163a076e84eb8e0ffa83751e80c9c"
  },
  {
    "url": "static/js/1.fa92c112.chunk.js",
    "revision": "7fb8e2acdfd35cce5baccf70d20c32c2"
  },
  {
    "url": "static/js/main.b3ae6289.chunk.js",
    "revision": "4f96b9f763bb734e8c38adcfa517fdbd"
  },
  {
    "url": "static/js/runtime~main.5a2f2128.js",
    "revision": "fa18ca016bb5e363ade5bf69295c16a4"
  },
  {
    "url": "static/media/logo.5d5d9eef.svg",
    "revision": "5d5d9eefa31e5e13a6610d9fa7a283bb"
  }
]);

workbox.routing.registerNavigationRoute("/index.html", {
  blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/]
});
