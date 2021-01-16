import React, {useEffect} from 'react';
import Canvas from "./Canvas/Canvas";
import useSettings from './settings';
import useAnimations from './animation';
import Control from "./Control";

const App = () => {
    const [settings, setSettings] = useSettings({d: 10, s: 100});
    const [state, start, stop] = useAnimations();

    return (
        <div className="container-fluid">
            <div className="row py-2">
                <div className="col-12 mb-2 col-md-6 mb-md-0 d-flex justify-content-center">
                    <Canvas settings={settings} state={state} />
                </div>
                <div className="col-12 col-md-6">
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
