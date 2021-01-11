import {useState} from 'react';

export default function (d) {
    const [settings, setSettings] = useState(d);

    const setProperty = (amount, property) => {
        switch (property) {
            case "d":
                setSettings(Object.assign({}, {d: amount}));
                break;
            case "s":
                setSettings(Object.assign({}, {s: amount}));
                break;
            default:
                throw new Error();
        }
    }

    return [
        settings,
        setProperty
    ]
}
