// For testing puroposes, you may need to change these places to something closer to you
const places = [
    { name: "Rochester Abandoned Subway", latitude: 43.0848504, longitude: -77.6715298 },
    { name: "Washington Square Park", latitude: 43.0848504, longitude: -77.6715100 },
    { name: "Rochester Contemporary Art Center", latitude: 43.0848504, longitude: -77.6715300 }
];

const loadPlaces = () => {
    const scene = document.querySelector("a-scene");

    places.forEach(place => {

        //entity
        const entity = document.createElement("a-entity");

        entity.setAttribute("gps-entity-place", `latitude: ${place.latitude}; longitude: ${place.longitude}`);
        entity.setAttribute("geometry", "primitive: sphere; radius: 1");
        entity.setAttribute("color", "blue");

        // //create sphere
        // const sphere = document.createElement("a-sphere");
        // sphere.setAttribute("color", "blue")
        // sphere.setAttribute("radius", "1");
        // sphere.setAttribute("position", "0 1 0");
        // entity.appendChild(sphere);

        //text
        const text = document.createElement("a-text");
        text.setAttribute("value", place.name);
        text.setAttribute("align", "center");
        text.setAttribute("position", "0 2 0");
        entity.appendChild(text);

        entity.addEventListener("click", () => alert(`You clicked on: ${place.name}`));

        scene.appendChild(entity);
    });
};

window.onload = loadPlaces;