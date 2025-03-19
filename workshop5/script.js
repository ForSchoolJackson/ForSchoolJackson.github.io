// Register a custom component to handle events
AFRAME.registerComponent('custom-listener', {
    init: function () {
        var el = this.el;

        // Listen for the markerFound event (from AR.js)
        el.addEventListener('markerFound', function () {
            concole.log('Marker found on element', el);
            // For demonstration: Toggle the element's color
            var currentColor = el.getAttribute('color');
            el.setAttribute('color', currentColor === '#4CC3D9' ? '#EF2D5E' : '#4CC3D9');
        });

        // Listen for the gps-entity-place update event
        // (This event is fired when the entity's position is updated based on GPS data)
        el.addEventListener('gps-entity-place-update-position', function (evt) {
            alert('GPS entity updated position: ' + evt.detail);
            // You could update the UI or trigger additional actions based on the new position
        });

        // document.querySelector('.say-hi-button').addEventListener('click', function () {
        //     alert('Hi there!');
        // });
    }
});

