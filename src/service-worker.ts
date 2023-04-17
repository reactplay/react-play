import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching'
import { clientsClaim } from 'workbox-core'
import { NavigationRoute, registerRoute } from 'workbox-routing'
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';


declare let self: ServiceWorkerGlobalScope

// clean old assets
cleanupOutdatedCaches()

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST)


const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');

let allowlist: undefined | RegExp[]
if (import.meta.env.DEV)
  allowlist = [/^\/$/]


registerRoute(
  // Match all navigation requests, except those for URLs whose
  // path starts with '/_/'
  ({request, url}) => request.mode === 'navigate' &&
                      !url.pathname.startsWith('/_'),
  new StaleWhileRevalidate()
);

// to allow work offline
registerRoute(new NavigationRoute(
  createHandlerBoundToURL('index.html'),
  {
	  whitelist: allowlist,
  blacklist: fileExtensionRegexp },
))


registerRoute(
  ({ url }) => {
    const formatImages = ['.jpeg', '.jpg', '.png', '.svg', '.gif'];
    const ifImage = formatImages.some((i) => url.pathname.endsWith(i));

    return url.origin === self.location.origin && ifImage;
  },
  new StaleWhileRevalidate({
	  cacheName: 'images-cache',
    plugins: [new ExpirationPlugin({ maxEntries: 50 })]
  })
);

registerRoute(
  ({ url }) => {
    return url.origin === self.location.origin;
  },
  new CacheFirst({
    cacheName: 'api-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200]
      })
    ]
  })
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

clientsClaim()
