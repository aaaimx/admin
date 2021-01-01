importScripts("/aaaimx-admin/precache-manifest.89a854f17046d3ff3e3ac0255f0e3483.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.setConfig({
  debug: false
})

workbox.precaching.precacheAndRoute([])

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
)

workbox.routing.registerRoute(
  new RegExp('https://aaaimx-admin.herokuapp.com'),
  workbox.strategies.networkFirst({
    cacheName: 'api'
  })
)

workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'googleapis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ]
  })
)

