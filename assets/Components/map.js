import React, {useState} from 'react';

const TOKEN_ALIVE = '#';
const TOKEN_DEAD = '.';

export default function () {
    const [map, setMap] = useState(new Map());

    const init = (d) => {
        const temp = new Map();

        for (let y = 0; y < d; ++y) {
            for (let x = 0; x < d; ++x) {
                temp.set(`${x}:${y}`, "");
            }
        }

        setMap(temp);
    }

    const set = (x, y) => {
        setMap(new Map(map.set(
            `${x}:${y}`,
            map.get(`${x}:${y}`) === TOKEN_ALIVE ? TOKEN_DEAD : TOKEN_ALIVE
        )))
    }

    return [
        map, {
            init,
            set
        }
    ]
}

export {
    TOKEN_ALIVE,
    TOKEN_DEAD,
}
