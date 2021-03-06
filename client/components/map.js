import React, {useState} from 'react';
import SimplexNoise from 'simplex-noise';
import {getRandomNumber} from "./util";

const TOKEN_ALIVE = '#';
const TOKEN_DEAD = '.';

export default function () {
    const [map, setMap] = useState(new Map());

    const shuffle = (d) => {
        const temp = new Map();
        const simplex = new SimplexNoise(getRandomNumber(1, 1024));

        for (let y = 0; y < d; ++y) {
            for (let x = 0; x < d; ++x) {
                const val = Math.abs(simplex.noise2D(x * 2,y * 2)) * 10;

                temp.set(`${x}:${y}`, val >= 0.4  ? TOKEN_DEAD : TOKEN_ALIVE);
            }
        }

        setMap(temp);
    }

    const clear = () => {
        const temp = new Map();
        setMap(temp);
    }

    const scale = (d) => {
        const temp = new Map();

        for (let y = 0; y < d; ++y) {
            for (let x = 0; x < d; ++x) {
                temp.set(`${x}:${y}`, TOKEN_DEAD);
            }
        }

        setMap(temp);
    }

    const set = (x, y) => {
        setMap(new Map(map.set(
            `${x}:${y}`,
            map.get(
                `${x}:${y}`) === TOKEN_ALIVE
                    ? TOKEN_DEAD
                    : TOKEN_ALIVE
        )));
    }

    const update = () => {
        const changes = new Map(map);

        map.forEach(((value, key) => {
            const coordinates = key.split(':');
            let x = parseInt(coordinates[0]);
            let y = parseInt(coordinates[1]);

            let neighboursAlive = 0;

            for (let ty = y - 1; ty <= y + 1; ++ty) {
                if (ty < 0) {
                    continue;
                }

                const rx = x - 1;

                for (let tx = rx; tx <= x + 1; ++tx) {
                    if (tx < 0) {
                        continue;
                    }

                    if (ty === y && tx === x) {
                        continue;
                    }

                    const token = map.get(`${tx}:${ty}`);

                    if (TOKEN_ALIVE === token) {
                        ++neighboursAlive;

                        if (3 < neighboursAlive && TOKEN_ALIVE === value) {
                            changes.set(key, TOKEN_DEAD);
                            return;
                        }
                    }
                }
            }

            if (3 === neighboursAlive && TOKEN_DEAD === value) {
                changes.set(key, TOKEN_ALIVE);
                return;
            }

            if (2 > neighboursAlive && TOKEN_ALIVE === value) {
                changes.set(key, TOKEN_DEAD);
            }
        }));

        setMap(new Map(changes));
    }

    return [
        map, {
        set,
        scale,
        update,
        shuffle,
        clear
    }]
}

export {
    TOKEN_ALIVE,
    TOKEN_DEAD,
}
