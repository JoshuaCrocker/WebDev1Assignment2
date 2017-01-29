(function() {
    const status = document.getElementById('status');

    window.addEventListener('userproximity', function(event) {
        if (event.near) {
            status.innerHTML = 'NEAR';
        } else {
            status.innerHTML = 'FAR';
        }
    });
})();

 // SOURCE: https://developer.mozilla.org/en-US/docs/Web/API/Proximity_Events