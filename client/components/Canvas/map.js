import {TOKEN_ALIVE} from "../map";

export default function (tokenStyle) {
    return function (map, canvas, d) {
        const dimensions = Math.floor(canvas.width / d);
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const pad = (dimensions * 0.1) / 2;

        ctx.beginPath();

        // TODO: Make loop smarter, dont redraw the whole map
        for (let y = 0; y < d; ++y) {
            for (let x = 0; x < d; ++x) {
                const value = map.get(`${x}:${y}`);

                ctx.fillStyle = TOKEN_ALIVE === value
                    ? tokenStyle.tokenAlive
                    : tokenStyle.tokenDead;

                ctx.fillRect(
                    (x * dimensions) + pad + 0.5,
                    (y * dimensions) + pad + 0.5,
                    dimensions - pad - 0.5,
                    dimensions - pad - 0.5
                );
            }
        }

        ctx.closePath();
    }
}
