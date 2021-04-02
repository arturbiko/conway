import {TOKEN_ALIVE} from "../map";

export default function (tokenStyle) {
    return function (map, canvas, d) {
        const dimensions = Math.floor(canvas.width / d);
        const ctx = canvas.getContext('2d');

        const pad = (dimensions * 0.1) / 2;

        ctx.beginPath();

        if (0 === map.size) {
            ctx.fillStyle = tokenStyle.tokenDead;

            for (let y = 0; y < d; ++y) {
                for (let x = 0; x < d; ++x) {

                    ctx.fillRect(
                        (x * dimensions) + pad + 0.5,
                        (y * dimensions) + pad + 0.5,
                        dimensions - pad - 0.5,
                        dimensions - pad - 0.5
                    );
                }
            }
        } else {
            map.forEach((value, key) => {
                const coordinates = key.split(':');

                ctx.fillStyle = TOKEN_ALIVE === value
                    ? tokenStyle.tokenAlive
                    : tokenStyle.tokenDead;

                ctx.fillRect(
                    (coordinates[0] * dimensions) + pad + 0.5,
                    (coordinates[1] * dimensions) + pad + 0.5,
                    dimensions - pad - 0.5,
                    dimensions - pad - 0.5
                );
            });
        }

        ctx.closePath();
    }
}
