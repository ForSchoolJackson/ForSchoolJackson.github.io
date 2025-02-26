// For testing puroposes, you may need to change these places to something closer to you
const places = [
    { name: "Rochester Abandoned Subway", latitude: 43.154722, longitude: -77.609722 },
    { name: "Washington Square Park", latitude: 43.1534, longitude: -77.6053 },
    { name: "Rochester Contemporary Art Center", latitude: 43.156619, longitude: -77.600730 }
];

const loadPlaces = () => {
    const scene = document.querySelector("a-scene");

    places.forEach(place => {
        const entity = document.createElement("a-entity");

        entity.setAttribute("gps-entity-place", `latitude: ${place.latitude}; longitude: ${place.longitude}`);
        entity.setAttribute("geometry", "primitive: sphere; radius: 1");
        entity.setAttribute("material", "color: blue");

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