import {useState} from 'react';

const ANIMATION_PLAYING = 'playing';
const ANIMATION_STOPPED = 'stopped';

export default function () {
    const [state, setState] = useState(ANIMATION_STOPPED);

    const start = () => {
        setState(ANIMATION_PLAYING);
    }

    const stop = () => {
        setState(ANIMATION_STOPPED);
    }

    return [
        state,
        start,
        stop
    ];
}

export {
    ANIMATION_STOPPED,
    ANIMATION_PLAYING
}
