AFRAME.registerComponent('click-listener', {
    init: function () {
        var el = this.el;

        // Listen for the markerFound event (from AR.js)
        el.addEventListener('markerFound', function () {
            console.log('Marker found on element', el);
            
            toggleColor();
        });

        // Listen for the gps-entity-place update event
        el.addEventListener('gps-entity-place-update-position', function (evt) {
            alert('GPS entity updated position: ' + evt.detail);
        });

        // Fix button event listener
        var button = document.querySelector('.say-hi-button');
        if (button) {
            button.addEventListener('click', function () {
                toggleColor();
            });
        }

        // Function to toggle color
        function toggleColor() {
            var currentColor = el.getAttribute('material').color;
            el.setAttribute('material', 'color', currentColor === '#4CC3D9' ? '#EF2D5E' : '#4CC3D9');
        }
    }
});