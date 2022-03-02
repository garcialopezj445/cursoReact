const cache_elements = [
    "./",
    "https://unpkg.com/react@17/umd/react.production.min.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "./style.css",
    "./components/Contador.js",
    "./register.js",
    "./index.js"
]

const cache_name = "v1_cache_contador_react" //generalmente se le llama por la versión del serviceWorker

// este es el primer ciclo de vida del serviceWorker, lo que va a hacer esto es instalarse para cachaer las rutas para que mi serviceWorker me provea toda esta información y ya no tenga que estar haciendo peticiones a internet cada rato
self.addEventListener("install", (e) => {
    console.log(e)
    e.waitUntil( //con esto decimos que espere hasta que el evento suceda
        caches.open(cache_name).then(cache => {
            cache.addAll(cache_elements).then( () => { //esto me permite agregar el cache a todas las rutas
                //si todo sale bien
                self.skipWaiting(); // esto hace que si hay una nueva versión de caché lo va a skipear automáticamente, estoe vita cerrar y reabrir la página
            }).catch(console.log)
        })
    )
})

self.addEventListener("activate", (e) => {

    //esta constante va a ser un array de todo el v1_cache_contador_react
    const cacheWhiteList = [cache_name];

    e.waitUntil(
        //el método keys directamente da todas las claves en caso de tener más de un caché instalado (más de una lista de caché)
        Cache.keys().then(cacheNames => {
            console.log(cacheNames);
            //el promise.all puede resolver varias promesas dentro de un array, en este caso lo haremos para comparar los caches
            return Promise.all(cacheNames.map(cacheName => { //mapeamos cada cacheName para compararlos
                return cacheWhiteList.indexOf(cacheName) === -1 && caches.delete(cacheName)// si este nombre es el mismo (misma versión) que está en mi whiteList retorna cero
            }))
        })
    )
})