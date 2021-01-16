import React from 'react';
import Canvas from "./Canvas/Canvas";
import useSettings from './settings';
import useAnimations from './animation';
import Control from "./Control";

const App = () => {
    const [settings, setSettings] = useSettings({d: 10, s: 200});
    const [state, start, stop] = useAnimations();

    return (
        <div className="container-fluid container-md">
            <div className="row py-2">
                <div className="col-12 mb-2 d-flex justify-content-center">
                    <Canvas dimensions={settings.d} framerate={settings.s} state={state} />
                </div>
                <div className="col-12">
                    <Control
                        values={settings}
                        setSettings={setSettings}
                        state={state}

                        start={() => start()}

                        stop={() => stop()}
                    />
                </div>
            </div>
        </div>
    )
};

export default App;
