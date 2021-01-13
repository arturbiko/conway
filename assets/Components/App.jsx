import React, {useRef, useEffect} from 'react';
import Canvas from "./Canvas/Canvas";
import useSettings from './settings';
import useMap from './map';
import Control from "./Control";

const App = () => {
    const [settings, setSettings] = useSettings({d: 10, s: 100});
    const [map, actions] = useMap();

    useEffect(() => {
        actions.scale(settings.d);
    }, []);

    useEffect(() => {
        actions.scale(settings.d);
    }, [settings]);

    return (
        <div className="container-fluid">
            <div className="row py-2">
                <div className="col-12 mb-2 col-md-6 mb-md-0 d-flex justify-content-center">
                    <Canvas
                        map={map}
                        settings={settings}
                        setToken={(x, y) => {
                            actions.set(x, y)
                        }}
                    />
                </div>
                <div className="col-12 col-md-6">
                    <Control
                        values={settings}
                        setSettings={setSettings}

                        start={() => {
                            actions.checkNeighbours()
                        }}
                    />
                </div>
            </div>
        </div>
    )
};

export default App;
