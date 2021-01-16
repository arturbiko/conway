import React from 'react';
import {ANIMATION_PLAYING, ANIMATION_STOPPED} from "./animation";

const Control = ({values, setSettings, start, stop, state}) => (
    <>
        <div className="form-group d-flex flex-row justify-content-center" title={values.s}>
            <div style={{width: 600}}>
                <label htmlFor="interval" className="font-depixel text_small">Interval</label>
                <input
                    type="range"
                    id="interval"
                    className="form-control-range"
                    value={values.s}
                    step={25}
                    min={25}
                    max={300}
                    onChange={(e) => setSettings("s", parseInt(e.target.value))}
                    style={{width: 450}}
                />
            </div>
        </div>
        <div className="form-group d-flex flex-row justify-content-center" title={values.d}>
            <div style={{width: 600}}>
                <label htmlFor="dimensions" className="font-depixel text_small">Dimensions</label>
                <input
                    type="range"
                    id="dimensions"
                    className="form-control-range"
                    value={values.d}
                    step={10}
                    min={10}
                    max={60}
                    disabled={ANIMATION_PLAYING === state}
                    onChange={(e) => setSettings("d", parseInt(e.target.value))}
                    style={{width: 120}}
                />
            </div>
        </div>
        <div className="form-group d-flex flex-row justify-content-center">
            <div style={{width: 600}}>
                <button className={`font-depixel btn btn-sm ${(ANIMATION_STOPPED === state) ? 'btn-success' : 'btn-danger'}`} onClick={() => {
                    switch (state) {
                        case ANIMATION_PLAYING:
                            stop();
                            break;
                        case ANIMATION_STOPPED:
                            start();
                            break;
                        default:
                            break;
                    }
                }}>
                    {ANIMATION_STOPPED === state ? 'Start' : 'Stop'}
                </button>
            </div>
        </div>
    </>
);

export default Control;
