(function() {
    const network_type = document.getElementById('network-type');
    const downlink_max = document.getElementById('downlink-max');

    let connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    // bluetooth | cellular | ethernet | none | wifi | wimax | other | unknown
    let type = connection.type; 
    let downlink = connection.downlinkMax;

    network_type.innerHTML = type;
    downlink_max.innerHTML = downlink;

    connection.onchange = () => {
        //console.log("Connection type is change from " + type + " to " + connection.type);
        
        network_type.innerHTML = connection.type;
        downlink_max.innerHTML = connection.downlinkMax;
    };
})();

 // SOURCE: https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API