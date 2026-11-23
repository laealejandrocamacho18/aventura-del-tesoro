'use strict';
(()=>{
  const install=document.getElementById('install-app'),status=document.getElementById('offline-status'),update=document.getElementById('update-app');
  const standalone=()=>window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true;
  let deferredInstall=null,registration=null,reloading=false,updateRequested=false;
  function syncInstall(){install.hidden=standalone()}
  syncInstall();
  window.matchMedia('(display-mode: standalone)').addEventListener('change',syncInstall);
  window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();deferredInstall=event;syncInstall()});
  window.addEventListener('appinstalled',()=>{deferredInstall=null;install.hidden=true;document.getElementById('install-help').close()});
  install.addEventListener('click',async()=>{
    if(deferredInstall){
      const prompt=deferredInstall;deferredInstall=null;
      try{await prompt.prompt();const result=await prompt.userChoice;if(result.outcome==='accepted')install.hidden=true}catch{document.getElementById('install-help').showModal()}
      return;
    }
    document.getElementById('install-help').showModal();
  });
  function connectionLabel(ready){status.textContent=ready?(navigator.onLine?'Lista para usar sin internet en este dispositivo.':'Sin internet: puedes seguir practicando.'):(navigator.onLine?'Preparando el uso sin internet…':'Conéctate una vez para preparar el uso sin internet.')}
  let offlineReady=false;
  function renderConnection(){connectionLabel(offlineReady)}
  window.addEventListener('online',renderConnection);window.addEventListener('offline',renderConnection);
  function offerUpdate(){update.hidden=!(registration?.waiting&&navigator.serviceWorker.controller);if(!update.hidden)update.textContent='Actualizar app'}
  update.addEventListener('click',()=>{
    if(!registration?.waiting)return;
    if(!confirm('¿Actualizar la app ahora? La actividad en curso comenzará de nuevo; tus monedas y las misiones terminadas se conservan.'))return;
    updateRequested=true;update.disabled=true;registration.waiting.postMessage({type:'ACTIVATE_UPDATE'});
  });
  if(!('serviceWorker' in navigator)||!window.isSecureContext){status.textContent='Necesitas abrir la página segura para preparar el uso sin internet.';return}
  renderConnection();
  navigator.serviceWorker.addEventListener('controllerchange',()=>{if(updateRequested&&!reloading){reloading=true;window.location.reload()}else offerUpdate()});
  async function register(){
    try{
      registration=await navigator.serviceWorker.register('sw.js',{scope:'./',updateViaCache:'none'});
      offerUpdate();
      registration.addEventListener('updatefound',()=>{const worker=registration.installing;worker?.addEventListener('statechange',()=>{if(worker.state==='installed')offerUpdate();if(worker.state==='redundant'&&!offlineReady)status.textContent='No se pudo completar la descarga para usar sin internet. Vuelve a abrir la página con conexión.'})});
      await navigator.serviceWorker.ready;
      offlineReady=true;renderConnection();offerUpdate();
    }catch{status.textContent='No se pudo preparar el uso sin internet. Puedes seguir usando la página con conexión.'}
  }
  if(document.readyState==='complete')register();else window.addEventListener('load',register,{once:true});
})();
