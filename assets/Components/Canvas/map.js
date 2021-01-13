import {TOKEN_ALIVE, TOKEN_DEAD} from "../map";

export default function (map, canvas, d) {
    const dimensions = Math.floor(canvas.width / d);
    const ctx = canvas.getContext('2d');

    map.forEach((value, key) => {
        if ("" === value) {
            return;
        }

        const coordinates = key.split(':');

        ctx.fillStyle = TOKEN_ALIVE === value
            ? "black"
            : "white";

        const pad = dimensions * 0.1;

        ctx.fillRect(
            (coordinates[0] * dimensions) + pad + 0.5,
            (coordinates[1] * dimensions) + pad + 0.5,
            dimensions * 0.8,
            dimensions * 0.8
        );
    });
}
