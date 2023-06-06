import { precacheAndRoute } from 'workbox-precaching'
declare let self: ServiceWorkerGlobalScope
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting()
})
// self.__WB_MANIFEST is default injection point
//@ts-ignore
precacheAndRoute(self.__WB_MANIFEST)
