import {TOKEN_ALIVE} from "../map";

export default function (map, canvas, d) {
    const dimensions = Math.floor(canvas.width / d);
    const ctx = canvas.getContext('2d');

    ctx.beginPath();

    map.forEach((value, key) => {
        const coordinates = key.split(':');

        const pad = dimensions * 0.1;

        ctx.fillStyle = TOKEN_ALIVE === value
            ? "black"
            : "white";
        ctx.fillRect(
            (coordinates[0] * dimensions) + pad + 0.5,
            (coordinates[1] * dimensions) + pad + 0.5,
            dimensions * 0.8,
            dimensions * 0.8
        );
    });

    ctx.closePath();
}
