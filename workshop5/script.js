AFRAME.registerComponent('custom-listener', {
    init: function () {
        var el = this.el;

        // Listen for the markerFound event (from AR.js)
        el.addEventListener('markerFound', function () {
            console.log('Marker found on element', el);

            // Get current color from the material attribute
            var currentColor = el.getAttribute('material').color;
            
            // Toggle the color
            el.setAttribute('material', 'color', currentColor === '#4CC3D9' ? '#EF2D5E' : '#4CC3D9');
        });

        // Listen for the gps-entity-place update event
        el.addEventListener('gps-entity-place-update-position', function (evt) {
            alert('GPS entity updated position: ' + evt.detail);
        });

        // Fix button event listener
        document.querySelector('.say-hi-button').addEventListener('click', function () {
            alert('Hi there!');
        });
    }
});