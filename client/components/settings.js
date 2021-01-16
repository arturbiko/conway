import {useState} from 'react';

export default function (d) {
    const [settings, setSettings] = useState(d);

    const setProperty = (property, amount) => {
        switch (property) {
            case "d":
                setSettings(Object.assign({}, settings, {d: amount}));
                break;
            case "s":
                setSettings(Object.assign({}, settings, {s: amount}));
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
