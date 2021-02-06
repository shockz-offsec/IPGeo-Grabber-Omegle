# IPGeo Grabber Omegle

#Descripción
Este script permite obtener la geolocalización del extraño en un video chat en la plataforma Omegle en tiempo real a través de la captación de la IP pública, gracias la comunicación Peer-to-Peer con WebRTC que sigue la web.


# **AVISO LEGAL Y RENUNCIA DE RESPONSABILIDADES**.
IPGeo Grabber Omegle es un script con el único fin de educación e investigación para desarrolladores o usuarios finales, y que pueda ayudar a crear contramedidas para las amenzas actuales.
**NO** asumo ninguna responsabilidad por la forma en que elija utilizar cualquiera de los ejecutables/código fuente de cualquier archivo provistos.

# Diseño y Propósito.

## Propósito

Este script pretende de forma divulgativa mostrar la facilidad mendiante la cual se puede obtener la IP pública de cualquier persona que utilize esta plataforma por la que como contramedida principal usen una **VPN** mientras usan esta plataforma.

## Diseño, Implementación y Uso

Este script utiliza la tecnología **WebRTC** la cual nos permite comunicarnos con otro usuario en tu navegador web.

![WebRTC](https://elandroidelibre.elespanol.com/wp-content/uploads/2015/06/webrtc-2.png)
<p align="center">WebRTC</p>

Por lo que emplearemos la API ```RTCPeerConnection``` la cual nos permite abrir, mantener y cerrar una conexión con otra persona en Omegle, cuando obtenemos un *Ice Candidate* (**ICE** = Interactive Connectivity Establishment, la cual permite a dos ordenadores hablar con el otro directamente (**Peer-to-Peer**)) lo que buscamos es parsear la información asociada a este  volcandola en un array.

<p align="center"><img src = "https://i.ibb.co/2nXHdv2/descarga.png"></p>
<p align="center">ICE Candidates</p>

En donde nos enfocaremos será en los candidatos UDP del tipo ```srflx``` (Server Reflexive Candidate) que son los generados por el servidor **STUN** el cual devuelve la dirección ip, puerto, estado de la conectividad con la otra persona..., para este caso simplemente obtendremos la dirección pública de la otra persona.

![STUN/TURN](https://blog.ivrpowers.com/postimages/technologies/ivrpowers-turn-stun-screen.005.jpeg)
<p align="center">WebRTC, STUN/TURN Server</p>

Posteriormente obtendremos la geolocalización mediante la web *IpGeolocation.io* a través de peticiones utilizando su API, para ello necesitaremos una *API-Key* la cual podemos obtener simplemente registrandonos en su página.

Parseamos la respuesta del servidor a *JSON* y formateamos la información que deseamos, mostrandola finalmente por consola.

<p align="center"><img src = "https://i.ibb.co/k23rRdt/descarga-1.png"></p>
<p align="center">Resultados</p>

## Utilización

* En PC: En *Chrome/Opera/Mozilla*, en "Ajustes" => "Más Herramientas" => "Herramientas de Desarrollador", con las herramientas de desarrollador abiertas, accedemos a ```omegle.com```, y en la pestaña de "Console" en la area de herramientas del desarrollador, pegamos todo el código y damos "Enter", Ahora cualquier persona con la que te conectes, se te mostrará información de la misma (a tiempo real).

* En Android: *Chrome*, Mediante depuración usb y la opcion "Remote Devices" de Chrome podemos injectar este código javascript remotamente en el navegador de nuestro dispositivo.

Sigue este tutorial: https://developers.google.com/web/tools/chrome-devtools/remote-debugging?hl=es

# Comentarios

Este script sólo fue testados en navegadores *Opera, Chrome y Brave* (Deshabilitado Ad-block) tanto en PC como Android.
Este script no funciona para el modo *text chat* de Omegle, sólo para el Video Chat.
