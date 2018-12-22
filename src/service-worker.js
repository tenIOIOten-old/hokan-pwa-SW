importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"
);

workbox.clientsClaim();

workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute([]);

workbox.routing.registerNavigationRoute("/index.html", {
  blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/]
});
