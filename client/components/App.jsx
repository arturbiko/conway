import React from 'react';
import useSettings from './settings';
import useAnimations from './animation';
import Control from "./Control";
import Board from "./Canvas/Layer/Board";
import Grid from "./Canvas/Layer/Grid";

const App = () => {
    const [settings, setSettings] = useSettings({d: 30, s: 200});
    const [state, start, stop] = useAnimations();

    return (
        <div className="container-fluid container-md">
            <div className="row">
                <div className="col-12 text-center">
                    <h5 className="mt-3 mb-1 font-rixel app-heading">Conway's</h5>
                    <h1 className="font-rixel app-heading">Game Of Life</h1>
                </div>
            </div>
            <div className="row py-2">
                <div className="col-12 d-flex flex-row justify-content-center">
                    <div className="position-relative" style={{
                        height: 600,
                        width: 600
                    }}>
                        <Grid
                            dimensions={settings.d}
                            animationState={state}
                        />
                        <Board
                            dimensions={settings.d}
                            frameRate={settings.s}
                            animationState={state}
                        />
                    </div>
                </div>
            </div>
            <div className="row py-2">
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
