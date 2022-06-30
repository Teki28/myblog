/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ca506288459ff3976ce7a5eb34da74a6"
  },
  {
    "url": "about.html",
    "revision": "5b459679b4cc34f0fafb982875bb18b3"
  },
  {
    "url": "about1.html",
    "revision": "d0e0e525693ad812acb845ebd35e2199"
  },
  {
    "url": "assets/css/0.styles.3b207d66.css",
    "revision": "91be49df822c7e706c336a2280bfb805"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.233957db.js",
    "revision": "87031228d19c33e8aaf01917e083f042"
  },
  {
    "url": "assets/js/11.45563a45.js",
    "revision": "433272af291647320279a5a9e645c222"
  },
  {
    "url": "assets/js/12.3e9afb29.js",
    "revision": "e93fcb26122d12c1c94daa339b37b511"
  },
  {
    "url": "assets/js/2.b0623635.js",
    "revision": "8c35890dac4db6a1760693f9a57545dc"
  },
  {
    "url": "assets/js/3.9e182904.js",
    "revision": "891a02f1da0c833114936d545581d6ca"
  },
  {
    "url": "assets/js/4.d2d1331d.js",
    "revision": "23e2350b62d81b47bed12e7c12d1ba0e"
  },
  {
    "url": "assets/js/5.4c7a5765.js",
    "revision": "9f1c8da8f5fa82bce96218fdf3525d57"
  },
  {
    "url": "assets/js/6.8ce31e72.js",
    "revision": "0467c4df016cd505c3f6c107f0ee7120"
  },
  {
    "url": "assets/js/7.a50e0c34.js",
    "revision": "438317a5cf26c837cb38229346c532a1"
  },
  {
    "url": "assets/js/8.a6dfdb12.js",
    "revision": "49a8091dd6b9fbc24f9e6f281ce5b4a9"
  },
  {
    "url": "assets/js/9.0d952715.js",
    "revision": "63a03494be9f86511923431424f1f2bc"
  },
  {
    "url": "assets/js/app.e53d2dde.js",
    "revision": "9e7de270632f66080beaf53ea88d45ff"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "4211d83d33b3b41740cf48b79f1efc08"
  },
  {
    "url": "quanxue.html",
    "revision": "315206dc5563680341950f867719a078"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
