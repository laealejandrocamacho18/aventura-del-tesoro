'use strict';
const CACHE_PREFIX='tesoro-offline-';
const CACHE_NAME=CACHE_PREFIX+'app17';
const ASSETS=['./','index.html','tablas.html','app.js?v=app17','app-tablas-v11.js','pwa.js?v=app17','manifest.webmanifest','icon-192.png','icon-512.png','icon.svg'];
const base=new URL('./',self.location.href);
const paths=new Set(ASSETS.map(path=>new URL(path,base).pathname));
self.addEventListener('install',event=>{
  // Installation succeeds only when every essential file is available offline.
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS.map(path=>new Request(new URL(path,base),{cache:'reload'})))));
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const names=await caches.keys();
    await Promise.all(names.filter(name=>name.startsWith(CACHE_PREFIX)&&name!==CACHE_NAME).map(name=>caches.delete(name)));
    await self.clients.claim();
  })());
});
self.addEventListener('message',event=>{if(event.data?.type==='ACTIVATE_UPDATE')self.skipWaiting()});
self.addEventListener('fetch',event=>{
  const request=event.request,url=new URL(request.url);
  if(request.method!=='GET'||url.origin!==base.origin||!paths.has(url.pathname))return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE_NAME);
    try{
      const response=await fetch(request);
      if(response.ok){event.waitUntil(cache.put(request,response.clone()).catch(()=>{}));return response}
      const cached=await cache.match(request,{ignoreSearch:true});
      return cached||response;
    }catch{
      const cached=await cache.match(request,{ignoreSearch:true});
      if(cached)return cached;
      if(request.mode==='navigate'){const home=await cache.match(new URL('index.html',base),{ignoreSearch:true});if(home)return home}
      return Response.error();
    }
  })());
});
