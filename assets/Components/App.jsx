import React, {useRef, useEffect} from 'react';
import Canvas from "./Canvas/Canvas";
import useSettings from './settings';
import useMap from './map';

const App = () => {
    const canvasRef = useRef(null);
    const [settings, setSettings] = useSettings({d: 50, s: 100});
    const [map, actions] = useMap(settings.d);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        canvasRef.current.init();
        actions.init(settings.d);
    }, []);

    useEffect(() => {
        canvasRef.current.update(map);
    }, [map])

    return (
        <div className="container-fluid">
            <div className="row py-2">
                <div className="col-12 mb-2 col-md-6 mb-md-0 d-flex justify-content-center">
                    <Canvas
                        ref={canvasRef}
                        settings={settings}
                        setToken={(x, y) => {
                            actions.set(x, y)
                        }}
                    />
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label htmlFor="speed">Interval (in ms)</label>
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
