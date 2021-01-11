import React, {useRef, useEffect} from 'react';
import Canvas from "./Canvas";
import useSettings from './settings';

const App = () => {
    const canvasRef = useRef(null);
    const [settings, setSettings] = useSettings({d: 3, s: 100});

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
    }, []);

    return (
        <div className="container-fluid">
            <div className="row py-2 bg-light">
                <div className="col-12 d-flex justify-content-center">
                    <Canvas ref={canvasRef} />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <label htmlFor="speed">Speed (in ms)</label>
                        <input type="text" className="form-control" name="speed" value={settings.s} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dimensions">Dimensions</label>
                        <input type="text" className="form-control" name="dimensions" value={settings.d} />
                    </div>
                    <button className="btn btn-success">
                        Start Simulation
                    </button>
                </div>
            </div>
        </div>
    )
};

export default App;
