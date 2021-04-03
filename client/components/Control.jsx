import React from 'react';
import {ANIMATION_PLAYING} from "./animation";
import Animate from "./Control/Animate";
import Clear from "./Control/Clear";
import Shuffle from "./Control/Shuffle";

const Control = ({values, setSettings, start, stop, state}) => (
    <>
        <div className="form-group row d-flex flex-row justify-content-center" title={values.s}>
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
        <div className="form-group row d-flex flex-row justify-content-center" title={values.d}>
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
        <div className="form-group row d-flex flex-row justify-content-center">
            <div style={{width: 600}}>
                <Animate
                    animationState={state}
                    startAnimation={start}
                    stopAnimation={stop}
                />
            </div>
        </div>
        <div className="form-group row d-flex flex-row justify-content-center">
            <div style={{width: 600}}>
                <label htmlFor="interval" className="font-depixel text_small">Additional Settings</label>
                <div>
                    <Shuffle animationState={state} dimensions={values.d} />
                    &nbsp;
                    <Clear animationState={state} />
                </div>
            </div>
        </div>
    </>
);

export default Control;
