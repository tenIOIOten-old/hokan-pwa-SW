importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"
);

workbox.clientsClaim();

workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute([
  {
    "url": "asset-manifest.json",
    "revision": "5ba76bcc9e72131bebab642735d91501"
  },
  {
    "url": "favicon.ico",
    "revision": "c92b85a5b907c70211f4ec25e29a8c4a"
  },
  {
    "url": "index.html",
    "revision": "f349f756cab22eccbae868a605e47b1c"
  },
  {
    "url": "manifest.json",
    "revision": "2f717775d17bf3a581acf2903353545f"
  },
  {
    "url": "precache-manifest.86e55210579fc3d8b91e35607a717bc8.js",
    "revision": "86e55210579fc3d8b91e35607a717bc8"
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
    "url": "static/js/main.1ed3687d.chunk.js",
    "revision": "3df123367a660ea8265336692d3bc7be"
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
